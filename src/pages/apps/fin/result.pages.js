import { cookies, handleBrandLogo, toDollar } from '../../../utils'

export default function resultInit() {
  require('../../../utils/scratch')

  handleBrandLogo()

  $('#fin_number').html(toDollar(cookies.get('FIN Number')))

  $('.user_name').each(function () {
    $(this).html(cookies.get('Name'))
  })
}
