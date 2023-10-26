(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cookie", [], factory);
	else if(typeof exports === 'object')
		exports["cookie"] = factory();
	else
		root["cookie"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Logo */
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6461);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_logo_css__WEBPACK_IMPORTED_MODULE_1__);


const sanitizeFullName = name => {
  if (!name) return name;
  name = name.trim();
  const name_array = name.split(' ').map(e => e.trim()).filter(e => !isEmpty(e));
  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[name_array.length - 1]}`;
  } else if (name_array.length <= 2) {
    return name;
  }
};
const getNameInitials = name => {
  name = name.trim().split(' ').map(e => e.trim()).filter(e => !isEmpty(e)).map(e => e.charAt(0));
  return `${name[0]}${name[name.length - 1]}`;
};
class Logo {
  constructor(selector, name, bgColor, textColor, circleOnly = true) {
    this.name = name.toUpperCase();
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.circleOnly = circleOnly;
    this.selector = selector;
  }
  __init__() {
    const selectors = document.querySelectorAll(this.selector);
    for (let i = 0; i < selectors.length; i++) {
      const selector = selectors[i];
      selector.innerHTML = `
      <div style="color: ${this.textColor}" class="d-flex items-center position-relative space-x-4">
              <div style="color: ${this.textColor}; border: 2px solid ${this.textColor}" class="d-flex items-center circle__x">
                <span>${getNameInitials(this.name)}</span>
                <div style="background: ${this.bgColor}" class="strip__x"></div>
              </div>
             ${!this.circleOnly ? `<span class="big__name">${sanitizeFullName(this.name)}</span>` : ''}
      </div>
    `;
    }
  }
}

/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
/* unused harmony exports getUrlParameter, cookies, url, isRouteSelectedPage, isOnBoardingPage, isRouteQuestionPage, isResultPage, getVideoBaseUrl, getBaseUrl, finBaseUrl, finBusinessVideoAppLink, BasePage, finFinancialSuccessVideoAppLink, isQuestionPage, isMobile, formatAnswers, isEmail, isAppointmentPage, toDollar, isDevEnvironment, handleBrokerCheckLinkAndDisclosure, initiateAdvisorLogo, toCurrencyWithoutDollar, handleBrandLogo, isFinalPage */
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9009);

Array.prototype.first = function () {
  return this && this[0];
};
Array.prototype.last = function () {
  return this && this[this.length - 1];
};
Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
};
String.prototype.isEmail = function () {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);
};
class BasePage {
  constructor(object) {
    Object.assign(this, {
      ...object
    });
  }
  track(event, data) {
    trackMixPanelEvent(event, data);
  }
  on(event, selector, callback) {
    $(`${selector}`).on(event, callback);
  }
}
const isOnBoardingPage = () => {
  return window.location.pathname.startsWith('/en');
};
const isRouteSelectedPage = () => {
  const path = window.location.pathname;
  return path.startsWith('/route') && !path.includes('make-more-money') && !path.includes('manage-money-better') && !path.includes('both');
};
const isResultPage = () => {
  const path = window.location.pathname;
  return path.startsWith('/result');
};
const isQuestionPage = () => {
  const path = window.location.pathname;
  return path.startsWith('/questions');
};
const isRouteQuestionPage = checkisVideo => {
  const path = window.location.pathname;
  const baseCondition = path.startsWith('/route') && (path.includes('make-more-money') || path.includes('manage-money-better') || path.includes('both'));
  if (checkisVideo) {
    return baseCondition && path.includes('/video') && checkisVideo;
  } else {
    return baseCondition && !path.includes('/video');
  }
};
const isFinalPage = () => {
  const path = window.location.pathname;
  return path.startsWith('/schedule');
};
const getUrlParameter = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};
const url = {
  query: {
    get: getUrlParameter
  }
};
const cookies = {
  get: name => {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const r = document.cookie.match(reg);
    if (r != null) return r[2];
    return null;
  },
  set: (name, value, expires, path = '/', domain, secure) => {
    let cookie = `${name}=${value}`;
    if (expires) {
      cookie += `; expires=${expires}`;
    }
    if (path) {
      cookie += `; path=${path}`;
    }
    if (domain) {
      cookie += `; domain=${domain}`;
    }
    if (secure) {
      cookie += `; secure=${secure}`;
    }
    document.cookie = cookie;
  },
  unset: (name, path, domain, secure) => {
    undefined.set(name, '', new Date(0), path, domain, secure);
  },
  setMultiple: array => {
    array.forEach(({
      key,
      value,
      expires,
      path,
      domain,
      secure
    }) => {
      cookies.set(key, value, expires, path, domain, secure);
    });
  }
};

//ismobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
//formarans
const formatAnswers = list => list.map((question, index) => ({
  [`ques_${index + 1}`]: `${question.question} * ${question.answer.join(' * ')}`
})).reduce((acc, curr) => ({
  ...acc,
  ...curr
}));
const isEmpty = value => {
  if (value === 'false') return true;
  if (value === 'null') return true;
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  return typeof value === 'object' && Object.keys(value).length === 0;
};
const getVideoBaseUrl = () => {
  if (window.location.host === 'devvideo.discoverfin.io' || window.location.host === 'dev.discoverfin.io') {
    return 'https://devvideo.discoverfin.io/';
  } else if (window.location.host === 'staging.discoverfin.io' || window.location.host === 'dev.discoverfin.io') {
    return 'https://stagingvideo.discoverfin.io/';
  } else if (window.location.host === 'discoverfin.io' || window.location.host === 'dev.discoverfin.io') {
    return 'https://video.discoverfin.io/';
  } else if (window.location.host === 'qa.discoverfin.io' || window.location.host === 'dev.discoverfin.io') {
    return 'https://qavideo.discoverfin.io/';
  }
};
const getBaseUrl = () => {
  if (window.location.host === 'dev.discoverfin.io' || window.location.host === 'devvideo.discoverfin.io') {
    return 'https://dev.discoverfin.io/';
  } else if (window.location.host === 'staging.discoverfin.io' || window.location.host === 'devvideo.discoverfin.io') {
    return 'https://staging.discoverfin.io/';
  } else if (window.location.host === 'discoverfin.io' || window.location.host === 'devvideo.discoverfin.io') {
    return 'https://discoverfin.io/';
  } else if (window.location.host === 'qa.discoverfin.io' || window.location.host === 'devvideo.discoverfin.io') {
    return 'https://qa.discoverfin.io/';
  }
};
function finBaseUrl(user, company, type, start) {
  return company ? `${eval(type)(user, company)}${start}?company=${company}&user=${user}` : `${eval(type)(user, company)}${start}?id=${user}`;
}
const videoLink = (user, company, type, videoName) => {
  const url = finBaseUrl(user, company, type, 'video_type');
  return url.replace(`video_type`, videoName);
};
const finBusinessVideoAppLink = (user, company) => {
  return videoLink(user, company, 'getVideoBaseUrl', 'businessOverview');
};
const finFinancialSuccessVideoAppLink = (user, company) => {
  return videoLink(user, company, 'getVideoBaseUrl', 'financialHouse');
};
const isAppointmentPage = () => {
  return window.location.pathname.startsWith('/appointment');
};
const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const toDollar = value => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};
const toCurrencyWithoutDollar = value => {
  return toDollar(value).replace('$', '');
};
const isDevEnvironment = () => {
  return window.location.host === 'dev.discoverfin.io' || window.location.host === 'devvideo.discoverfin.io';
};
const handleBrokerCheckLinkAndDisclosure = user => {
  console.log('im being called', new Date().toLocaleDateString());
  const broker_check_link = user.brokerCheckLink;
  const disclosure_text = user.companyDisclosure;
  console.log(broker_check_link, disclosure_text);
  console.log(isEmpty(broker_check_link));
  console.log(isEmpty(disclosure_text));
  const broker_check_elem = $('#broker-check');
  const broker_check_text = $('#broker-check-text');
  const disclosure_elem = $('#disclosure');
  if (!isEmpty(broker_check_link) || !isEmpty(disclosure_text)) {
    $('#disc-wrapper').removeClass('hide');
    if (!isEmpty(broker_check_link)) {
      broker_check_text.text(`${user.name}'s FINRA Broker Check`);
      broker_check_elem.attr('href', broker_check_link);
      broker_check_elem.attr('target', '_blank');
      if (!isMobile()) {
        broker_check_elem.css('display', 'block');
      }
    } else {
      broker_check_elem.css('display', 'none');
    }
    if (!isEmpty(disclosure_text)) {
      disclosure_elem.text(disclosure_text);
      disclosure_elem.css('display', 'block');
    } else {
      disclosure_elem.css('display', 'none');
    }
  } else {
    $('#disc-wrapper').addClass('hide');
  }
};
const initiateAdvisorLogo = function (name, bg = '#4417c7') {
  const logo = new Logo('#logo-container', name, bg, '#fff', false);
  logo.__init__();
};
const handleBrandLogo = (color = '#4417c7') => {
  let brand = cookies.get('BRAND');
  brand = brand && JSON.parse(brand);
  console.log('brand', brand);
  if (!brand) {
    console.log('brand not found');
    initiateAdvisorLogo(cookies.get('REP_NAME'), color);
  } else {
    $('.main_logo').attr('src', brand.logo);
    $('.main_logo').css('width', `auto`);
    $('.main_logo').css('height', '60px');
    $('#logo-container').html(`<img style='width: auto;height: 60px' src='${brand.logo}' />`);
    $('.logo-container').html(`<img style='width: auto;height: 60px' src='${brand.logo}' />`);
  }
};


/***/ }),

/***/ 3125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cookie__text {
  background: #1b1c1e;
  border-radius: 13px;
  font-family: "Trenda", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 2147483645;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 10px 20px;
  width: 98%;
  padding: 10px 20px;
  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 36px -13px rgb(0 0 0 / 15%);
  -moz-box-shadow: 10px 10px 36px -13px rgba(0, 0, 0, 0.15);
  box-shadow: 10px 10px 36px -13px rgb(0 0 0 / 15%);
}
.cookie__text a {
  color: #fff;
  font-weight: 600;
}
.cookie__text p {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}
.cookie__button {
  background: #ffffff;
  padding: 8px 12px;
  outline: none;
  border-radius: 19.2308px;
  cursor: pointer;
  border: none;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
}
.position__absolute {
  position: absolute;
}
.bottom__0 {
  bottom: 0;
}
.right__0 {
  right: 0;
}
.left__0 {
  left: 0;
}
.bottom__10 {
  bottom: 10px;
}
.right__10 {
  right: 10px;
}
.bottom__15 {
  bottom: 15px;
}
.right__15 {
  right: 15px;
}
.ml__30 {
  margin-left: 0.75rem;
}
.mr__30 {
  margin-right: 0.75rem;
}
.mr__50 {
  margin-right: 50px;
}
.cursor__pointer {
  cursor: pointer;
}

@media screen and (max-width: 780px) {
  .cookie__text {
    width: 100%;
    border-radius: 0;
    margin: 0;
    display: flex;
    padding-top: 18px;
    padding-bottom: 18px;
    flex-direction: column;
  }
  .cookie__button {
    margin-right: 0 !important;
    width: 100%;
    margin-top: 14px !important;
  }
  .sm_top__15 {
    top: 9px !important;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Uchen;
  src: url(https://discoverfin.sfo3.digitaloceanspaces.com/1gc6el9ifp9gfuchenregularttf.ttf)
    format(truetype);
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: Trenda;
  src: url(https://uploads-ssl.webflow.com/629e3357919ae1682f65b07c/62a64de45e8f63a8c8bad2ab_trenda_regular.otf)
    format(opentype);
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
.d-flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.position-relative {
  position: relative;
}

.circle__x {
  border-radius: 50%;
  display: flex;
  font-family: "Uchen";
  width: 45px;
  justify-content: center;
  align-items: center;
  height: 45px;
  position: relative;
  z-index: 1;
}

.strip__x {
  height: 140%;
  width: 10px;
  z-index: 2;
  transform: rotate(300deg);
  position: absolute;
}

.circle__x span {
  margin-bottom: 0;
  font-size: 21px;
  z-index: 3;
}

.big__name {
  font-size: 24px;
  font-family: "Trenda", sans-serif;
}

.space-x-4 > * + * {
  margin-left: 1.25rem;
}

a[id="logo-container"] {
  text-decoration: none !important;
}

@media screen and (max-width: 850px) {
  .big__name {
    font-size: 14px;
  }
  .sm-flex-col {
    flex-direction: column;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 8081:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 4128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5346)/* ["default"] */ .Z)
var update = add("136d33f3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 6461:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5509);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5346)/* ["default"] */ .Z)
var update = add("7a4e5381", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieWidget: () => (/* binding */ CookieWidget)
/* harmony export */ });
/* harmony import */ var _styles_cookie_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4128);
/* harmony import */ var _styles_cookie_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_cookie_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8903);


const cookieSvg = () => {
  return `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.19245 9.5C6.45767 9.5 6.71202 9.39464 6.89956 9.20711C7.08709 9.01957 7.19245 8.76522 7.19245 8.5C7.19245 8.23478 7.08709 7.98043 6.89956 7.79289C6.71202 7.60536 6.45767 7.5 6.19245 7.5C5.92723 7.5 5.67288 7.60536 5.48534 7.79289C5.29781 7.98043 5.19245 8.23478 5.19245 8.5C5.19245 8.76522 5.29781 9.01957 5.48534 9.20711C5.67288 9.39464 5.92723 9.5 6.19245 9.5ZM10.1924 11.5C10.4577 11.5 10.712 11.3946 10.8996 11.2071C11.0871 11.0196 11.1924 10.7652 11.1924 10.5C11.1924 10.2348 11.0871 9.98043 10.8996 9.79289C10.712 9.60536 10.4577 9.5 10.1924 9.5C9.92723 9.5 9.67288 9.60536 9.48534 9.79289C9.29781 9.98043 9.19245 10.2348 9.19245 10.5C9.19245 10.7652 9.29781 11.0196 9.48534 11.2071C9.67288 11.3946 9.92723 11.5 10.1924 11.5ZM13.1924 14.5C13.1924 14.7652 13.0871 15.0196 12.8996 15.2071C12.712 15.3946 12.4577 15.5 12.1924 15.5C11.9272 15.5 11.6729 15.3946 11.4853 15.2071C11.2978 15.0196 11.1924 14.7652 11.1924 14.5C11.1924 14.2348 11.2978 13.9804 11.4853 13.7929C11.6729 13.6054 11.9272 13.5 12.1924 13.5C12.4577 13.5 12.712 13.6054 12.8996 13.7929C13.0871 13.9804 13.1924 14.2348 13.1924 14.5ZM7.19245 14.5C7.45767 14.5 7.71202 14.3946 7.89956 14.2071C8.08709 14.0196 8.19245 13.7652 8.19245 13.5C8.19245 13.2348 8.08709 12.9804 7.89956 12.7929C7.71202 12.6054 7.45767 12.5 7.19245 12.5C6.92723 12.5 6.67288 12.6054 6.48534 12.7929C6.29781 12.9804 6.19245 13.2348 6.19245 13.5C6.19245 13.7652 6.29781 14.0196 6.48534 14.2071C6.67288 14.3946 6.92723 14.5 7.19245 14.5ZM10.1924 2.5C8.54852 2.50014 6.94454 3.00672 5.59874 3.95082C4.25294 4.89493 3.23067 6.23071 2.671 7.77644C2.11133 9.32217 2.04145 11.0028 2.47085 12.5897C2.90026 14.1765 3.8081 15.5926 5.07087 16.6451C6.33364 17.6977 7.89003 18.3357 9.52827 18.4723C11.1665 18.6089 12.8071 18.2376 14.2267 17.4087C15.6464 16.5798 16.7763 15.3337 17.4626 13.8399C18.1489 12.3461 18.3584 10.6771 18.0624 9.06C18.0455 8.9677 18.0029 8.88204 17.9395 8.81281C17.8761 8.74359 17.7945 8.6936 17.7041 8.66856C17.6136 8.64352 17.518 8.64445 17.428 8.67123C17.3381 8.69801 17.2575 8.74957 17.1954 8.82C16.9272 9.12562 16.5721 9.34218 16.1775 9.44082C15.783 9.53945 15.3678 9.51547 14.9872 9.37207C14.6067 9.22867 14.2789 8.97267 14.0475 8.63819C13.8162 8.30372 13.6923 7.90668 13.6924 7.5C13.6923 7.37225 13.6487 7.24836 13.5687 7.14874C13.4887 7.04913 13.3772 6.97973 13.2524 6.952C12.9008 6.87284 12.5772 6.70014 12.3156 6.45215C12.0541 6.20417 11.8644 5.89013 11.7667 5.54322C11.6689 5.19632 11.6668 4.82945 11.7604 4.4814C11.854 4.13336 12.0399 3.81708 12.2984 3.566C12.3627 3.50363 12.409 3.42515 12.4325 3.33876C12.4561 3.25237 12.456 3.16125 12.4323 3.0749C12.4086 2.98856 12.3621 2.91017 12.2978 2.84791C12.2334 2.78566 12.1535 2.74183 12.0664 2.721C11.4527 2.57385 10.8236 2.49967 10.1924 2.5ZM3.19245 10.5C3.19239 9.50718 3.40353 8.5257 3.81185 7.62073C4.22016 6.71576 4.81631 5.90799 5.56072 5.25107C6.30513 4.59414 7.18077 4.10308 8.1295 3.81049C9.07823 3.5179 10.0783 3.43047 11.0634 3.554C10.8527 3.93678 10.7281 4.36098 10.6984 4.79694C10.6687 5.23289 10.7346 5.67007 10.8914 6.07791C11.0483 6.48575 11.2924 6.85439 11.6066 7.15807C11.9208 7.46174 12.2975 7.69311 12.7104 7.836C12.766 8.33007 12.9434 8.8026 13.2268 9.2111C13.5102 9.6196 13.8907 9.95126 14.334 10.1763C14.7774 10.4013 15.2697 10.5125 15.7667 10.5001C16.2638 10.4877 16.7499 10.3519 17.1814 10.105C17.2339 11.0392 17.0985 11.9744 16.7833 12.8554C16.4681 13.7363 15.9795 14.5452 15.3464 15.2341C14.7132 15.923 13.9484 16.4779 13.0971 16.8662C12.2458 17.2544 11.3253 17.4681 10.39 17.4945C9.45474 17.5209 8.52366 17.3595 7.65181 17.0199C6.77996 16.6803 5.98504 16.1694 5.31404 15.5173C4.64303 14.8653 4.10956 14.0853 3.74516 13.2235C3.38075 12.3617 3.19281 11.4357 3.19245 10.5Z" fill="black"/>
    </svg>`;
};
const cookieElementt = (bodyText, mainCtaText, cookiePolicyLink) => {
  const cookieElement = document.createElement('div');
  cookieElement.classList.add('cookie__text');
  cookieElement.classList.add('right__0');
  cookieElement.innerHTML = `
        <p class="mr__3 w__6/12">
            ${bodyText} 
            <a target="_blank" href="${cookiePolicyLink}">Read more about cookies.</a>
        </p>
        <button class="cookie__button mr__50">
           ${cookieSvg()} <span class="ml__30">${mainCtaText}</span>
        </button>
        <svg class="position__absolute bottom__15 right__15 cursor__pointer cookie__reject sm_top__15"  width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13.397L13.9313 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.9313 13.397L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
  return cookieElement;
};
class CookieWidget {
  constructor(bodyText, mainCtaText, cookiePolicyLink) {
    this.cookieElement = cookieElementt(bodyText, mainCtaText, cookiePolicyLink);
  }
  init() {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(localStorage.getItem('acceptCookie'))) {
      document.body.appendChild(this.cookieElement);
      const that = this;
      this.cookieElement.querySelector('.cookie__button').addEventListener('click', function () {
        that.storeCookie();
        that.remove();
      });
      this.cookieElement.querySelector('.cookie__reject').addEventListener('click', function () {
        that.disableCookie();
        that.remove();
      });
    }
  }
  disableCookie() {
    localStorage.setItem('acceptCookie', true);
  }
  storeCookie() {
    localStorage.setItem('acceptCookie', 'true');
    document.cookie = 'cookie=true';
  }
  remove() {
    this.cookieElement.remove();
  }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});