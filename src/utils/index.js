import { Logo } from '../logo'

Array.prototype.first = function () {
  return this && this[0]
}
Array.prototype.last = function () {
  return this && this[this.length - 1]
}
Array.prototype.remove = function (item) {
  const index = this.indexOf(item)
  if (index > -1) {
    this.splice(index, 1)
  }
}

String.prototype.isEmail = function () {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    this,
  )
}

class BasePage {
  constructor(object) {
    Object.assign(this, {
      ...object,
    })
  }

  track(event, data) {
    trackMixPanelEvent(event, data)
  }

  on(event, selector, callback) {
    $(`${selector}`).on(event, callback)
  }
}

const isOnBoardingPage = () => {
  return window.location.pathname.startsWith('/en')
}

const isRouteSelectedPage = () => {
  const path = window.location.pathname
  return (
    path.startsWith('/route') &&
    !path.includes('make-more-money') &&
    !path.includes('manage-money-better') &&
    !path.includes('both')
  )
}

const isResultPage = () => {
  const path = window.location.pathname
  return path.startsWith('/result')
}

const isQuestionPage = () => {
  const path = window.location.pathname
  return path.startsWith('/questions')
}

const isRouteQuestionPage = (checkisVideo) => {
  const path = window.location.pathname
  const baseCondition =
    path.startsWith('/route') &&
    (path.includes('make-more-money') ||
      path.includes('manage-money-better') ||
      path.includes('both'))
  if (checkisVideo) {
    return baseCondition && path.includes('/video') && checkisVideo
  } else {
    return baseCondition && !path.includes('/video')
  }
}

const getUrlParameter = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}

const url = {
  query: {
    get: getUrlParameter,
  },
}

const cookies = {
  get: (name) => {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const r = document.cookie.match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  },
  set: (name, value, expires, path = '/', domain, secure) => {
    let cookie = `${name}=${value}`
    if (expires) {
      cookie += `; expires=${expires}`
    }
    if (path) {
      cookie += `; path=${path}`
    }
    if (domain) {
      cookie += `; domain=${domain}`
    }
    if (secure) {
      cookie += `; secure=${secure}`
    }
    document.cookie = cookie
  },
  unset: (name, path, domain, secure) => {
    this.set(name, '', new Date(0), path, domain, secure)
  },
  setMultiple: (array) => {
    array.forEach(({ key, value, expires, path, domain, secure }) => {
      cookies.set(key, value, expires, path, domain, secure)
    })
  },
}

//ismobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}
//formarans
const formatAnswers = (list) =>
  list
    .map((question, index) => ({
      [`ques_${index + 1}`]: `${question.question} * ${question.answer.join(
        ' * ',
      )}`,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }))

const isEmpty = (value) => {
  if (value === 'false') return true
  if (value === 'null') return true
  if (value === null || value === undefined) return true
  if (typeof value === 'string' && value.trim() === '') return true
  return typeof value === 'object' && Object.keys(value).length === 0
}

const getVideoBaseUrl = () => {
  if (
    window.location.host === 'devvideo.discoverfin.io' ||
    window.location.host === 'dev.discoverfin.io'
  ) {
    return 'https://devvideo.discoverfin.io/'
  } else if (
    window.location.host === 'staging.discoverfin.io' ||
    window.location.host === 'dev.discoverfin.io'
  ) {
    return 'https://stagingvideo.discoverfin.io/'
  } else if (
    window.location.host === 'discoverfin.io' ||
    window.location.host === 'dev.discoverfin.io'
  ) {
    return 'https://video.discoverfin.io/'
  } else if (
    window.location.host === 'qa.discoverfin.io' ||
    window.location.host === 'dev.discoverfin.io'
  ) {
    return 'https://qavideo.discoverfin.io/'
  }
}
const getBaseUrl = () => {
  if (
    window.location.host === 'dev.discoverfin.io' ||
    window.location.host === 'devvideo.discoverfin.io'
  ) {
    return 'https://dev.discoverfin.io/'
  } else if (
    window.location.host === 'staging.discoverfin.io' ||
    window.location.host === 'devvideo.discoverfin.io'
  ) {
    return 'https://staging.discoverfin.io/'
  } else if (
    window.location.host === 'discoverfin.io' ||
    window.location.host === 'devvideo.discoverfin.io'
  ) {
    return 'https://discoverfin.io/'
  } else if (
    window.location.host === 'qa.discoverfin.io' ||
    window.location.host === 'devvideo.discoverfin.io'
  ) {
    return 'https://qa.discoverfin.io/'
  }
}

function finBaseUrl(user, company, type, start) {
  return company
    ? `${eval(type)(user, company)}${start}?company=${company}&user=${user}`
    : `${eval(type)(user, company)}${start}?id=${user}`
}

const videoLink = (user, company, type, videoName) => {
  const url = finBaseUrl(user, company, type, 'video_type')
  return url.replace(`video_type`, videoName)
}

const finBusinessVideoAppLink = (user, company) => {
  return videoLink(user, company, 'getVideoBaseUrl', 'businessOverview')
}

const finFinancialSuccessVideoAppLink = (user, company) => {
  return videoLink(user, company, 'getVideoBaseUrl', 'financialHouse')
}

const isAppointmentPage = () => {
  return window.location.pathname.startsWith('/appointment')
}

const isEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const toDollar = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

const toCurrencyWithoutDollar = (value) => {
  return toDollar(value).replace('$', '')
}

const isDevEnvironment = () => {
  return (
    window.location.host === 'dev.discoverfin.io' ||
    window.location.host === 'devvideo.discoverfin.io'
  )
}

const handleBrokerCheckLinkAndDisclosure = (user) => {
  console.log('im being called', new Date().toLocaleDateString())
  const broker_check_link = user.brokerCheckLink
  const disclosure_text = user.companyDisclosure
  console.log(broker_check_link, disclosure_text)
  console.log(isEmpty(broker_check_link))
  console.log(isEmpty(disclosure_text))
  const broker_check_elem = $('#broker-check')
  const broker_check_text = $('#broker-check-text')
  const disclosure_elem = $('#disclosure')
  if (!isEmpty(broker_check_link) || !isEmpty(disclosure_text)) {
    $('#disc-wrapper').removeClass('hide')
    if (!isEmpty(broker_check_link)) {
      broker_check_text.text(`${user.name}'s FINRA Broker Check`)
      broker_check_elem.attr('href', broker_check_link)
      broker_check_elem.attr('target', '_blank')
      if (!isMobile()) {
        broker_check_elem.css('display', 'block')
      }
    } else {
      broker_check_elem.css('display', 'none')
    }
    if (!isEmpty(disclosure_text)) {
      disclosure_elem.text(disclosure_text)
      disclosure_elem.css('display', 'block')
    } else {
      disclosure_elem.css('display', 'none')
    }
  } else {
    $('#disc-wrapper').addClass('hide')
  }
}

const initiateAdvisorLogo = function (name, bg = '#4417c7') {
  const logo = new Logo('#logo-container', name, bg, '#fff', false)
  logo.__init__()
}

const handleBrandLogo = (color = '#4417c7') => {
  let brand = cookies.get('BRAND')
  brand = brand && JSON.parse(brand)

  console.log('brand', brand)

  if (!brand) {
    console.log('brand not found')
    initiateAdvisorLogo(cookies.get('REP_NAME'), color)
  } else {
    $('.main_logo').attr('src', brand.logo)
    $('.main_logo').css('width', `${isMobile() ? '130px' : '200px'}`)
    $('#logo-container').html(
      `<img width='${isMobile() ? '130px' : '200px'}' src='${brand.logo}' />`,
    )
    $('.logo-container').html(
      `<img width='${isMobile() ? '130px' : '200px'}' src='${brand.logo}' />`,
    )
  }
}

export {
  getUrlParameter,
  cookies,
  url,
  isEmpty,
  isRouteSelectedPage,
  isOnBoardingPage,
  isRouteQuestionPage,
  isResultPage,
  getVideoBaseUrl,
  getBaseUrl,
  finBaseUrl,
  finBusinessVideoAppLink,
  BasePage,
  finFinancialSuccessVideoAppLink,
  isQuestionPage,
  isMobile,
  formatAnswers,
  isEmail,
  isAppointmentPage,
  toDollar,
  isDevEnvironment,
  handleBrokerCheckLinkAndDisclosure,
  initiateAdvisorLogo,
  toCurrencyWithoutDollar,
  handleBrandLogo,
}
