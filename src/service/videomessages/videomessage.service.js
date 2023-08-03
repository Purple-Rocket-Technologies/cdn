import { isEmpty } from '../../utils'
import { isFinPath, isIPN } from '../../utils/videomessage.utils'
import Service from '../Service'

const getVideoMessage = function (user_id, tool = null) {
  console.log('getVideoMessage', user_id, tool)
  const url = `getVideoMessagingForUserId`
  const service = new Service(url)

  const queryParams = [
    {
      key: 'isDeleted',
      value: false,
    },
    {
      key: 'draft',
      value: false,
    },
    {
      key: 'status',
      value: 'completed',
    },
    {
      key: 'sort',
      value: '-createdAt',
    },
    {
      key: 'limit',
      value: 1,
    },
    {
      key: 'user',
      value: user_id,
    },
  ]
  if (isFinPath()) {
    const tools = !isEmpty(tool)
      ? [tool]
      : ['fin_path', 'fin_path_start', 'fin_path_end']
    tools.forEach(function (key) {
      console.log('key', key)
      queryParams.push({
        key: 'tool',
        value: key,
      })
    })
  } else if (isIPN()) {
    queryParams.push({
      key: 'tool',
      value: 'ipn',
    })
  } else {
    queryParams.push({
      key: 'tool',
      value: 'fin_link',
    })
  }
  queryParams.forEach(function ({ key, value }) {
    service.equals(key, value)
  })
  console.log('queryParams', queryParams)
  return new Promise(function (resolve, reject) {
    service
      .find()
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { getVideoMessage as getVideoMessage }
