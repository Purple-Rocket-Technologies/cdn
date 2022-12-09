(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("advisor_logo", [], factory);
	else if(typeof exports === 'object')
		exports["advisor_logo"] = factory();
	else
		root["advisor_logo"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty)
/* harmony export */ });
/* unused harmony exports getUrlParameter, cookies, url, isRouteSelectedPage, isOnBoardingPage, isRouteQuestionPage, isResultPage, getVideoBaseUrl, getBaseUrl, finBaseUrl, finBusinessVideoAppLink, BasePage, finFinancialSuccessVideoAppLink, isQuestionPage, isMobile, formatAnswers, isEmail, isAppointmentPage, toDollar, isDevEnvironment, handleBrokerCheckLinkAndDisclosure */
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
    Object.assign(this, { ...object
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
  return window.location.pathname.startsWith("/en");
};

const isRouteSelectedPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/route") && !path.includes("make-more-money") && !path.includes("manage-money-better") && !path.includes("both");
};

const isResultPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/result");
};

const isQuestionPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/questions");
};

const isRouteQuestionPage = checkisVideo => {
  const path = window.location.pathname;
  const baseCondition = path.startsWith("/route") && (path.includes("make-more-money") || path.includes("manage-money-better") || path.includes("both"));

  if (checkisVideo) {
    return baseCondition && path.includes("/video") && checkisVideo;
  } else {
    return baseCondition && !path.includes("/video");
  }
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
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  },
  set: (name, value, expires, path = "/", domain, secure) => {
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
    undefined.set(name, "", new Date(0), path, domain, secure);
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
}; //ismobile

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}; //formarans


const formatAnswers = list => list.map((question, index) => ({
  [`ques_${index + 1}`]: `${question.question} * ${question.answer.join(" * ")}`
})).reduce((acc, curr) => ({ ...acc,
  ...curr
}));

const isEmpty = value => {
  if (value === "false") return true;
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  return typeof value === "object" && Object.keys(value).length === 0;
};

const getVideoBaseUrl = () => {
  if (window.location.host === "devvideo.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://devvideo.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://stagingvideo.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://video.discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://qavideo.discoverfin.io/";
  }
};

const getBaseUrl = () => {
  if (window.location.host === "dev.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://dev.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://staging.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://qa.discoverfin.io/";
  }
};

function finBaseUrl(user, company, type, start) {
  return company ? `${eval(type)(user, company)}${start}?company=${company}&user=${user}` : `${eval(type)(user, company)}${start}?id=${user}`;
}

const videoLink = (user, company, type, videoName) => {
  const url = finBaseUrl(user, company, type, "video_type");
  return url.replace(`video_type`, videoName);
};

const finBusinessVideoAppLink = (user, company) => {
  return videoLink(user, company, "getVideoBaseUrl", "businessOverview");
};

const finFinancialSuccessVideoAppLink = (user, company) => {
  return videoLink(user, company, "getVideoBaseUrl", "financialHouse");
};

const isAppointmentPage = () => {
  return window.location.pathname.startsWith("/appointment");
};

const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const toDollar = value => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
};

const isDevEnvironment = () => {
  return window.location.host === "dev.discoverfin.io" || window.location.host === "devvideo.discoverfin.io";
};

const handleBrokerCheckLinkAndDisclosure = user => {
  console.log("im being called", new Date().toLocaleDateString());
  const broker_check_link = user.brokerCheckLink;
  const disclosure_text = user.companyDisclosure;
  console.log(broker_check_link, disclosure_text);
  console.log(isEmpty(broker_check_link));
  console.log(isEmpty(disclosure_text));
  const broker_check_elem = $("#broker-check");
  const disclosure_elem = $("#disclosure");

  if (!isEmpty(broker_check_link) || !isEmpty(disclosure_text)) {
    $("#disc-wrapper").removeClass("hide");

    if (!isEmpty(broker_check_link)) {
      broker_check_elem.text(`${user.name}'s FINRA Broker Check`);
      broker_check_elem.attr("href", broker_check_link);
      broker_check_elem.attr("target", "_blank");
      broker_check_elem.css("display", "block");
    } else {
      broker_check_elem.css("display", "none");
    }

    if (!isEmpty(disclosure_text)) {
      disclosure_elem.text(disclosure_text);
      disclosure_elem.css("display", "block");
    } else {
      disclosure_elem.css("display", "none");
    }
  } else {
    $("#disc-wrapper").addClass("hide");
  }
};



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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: Uchen;\r\n  src: url(https://discoverfin.sfo3.digitaloceanspaces.com/1gc6el9ifp9gfuchenregularttf.ttf)\r\n    format(truetype);\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: auto;\r\n}\r\n@font-face {\r\n  font-family: Trenda;\r\n  src: url(https://uploads-ssl.webflow.com/629e3357919ae1682f65b07c/62a64de45e8f63a8c8bad2ab_trenda_regular.otf)\r\n    format(opentype);\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.position-relative {\r\n  position: relative;\r\n}\r\n\r\n.circle__x {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  font-family: \"Uchen\";\r\n  width: 45px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 45px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.strip__x {\r\n  height: 140%;\r\n  width: 10px;\r\n  z-index: 2;\r\n  transform: rotate(300deg);\r\n  position: absolute;\r\n}\r\n\r\n.circle__x span {\r\n  margin-bottom: 0;\r\n  font-size: 21px;\r\n  z-index: 3;\r\n}\r\n\r\n.big__name {\r\n  font-size: 24px;\r\n  font-family: \"Trenda\", sans-serif;\r\n}\r\n\r\n.space-x-4 > * + * {\r\n  margin-left: 1.25rem;\r\n}\r\n\r\na[id=\"logo-container\"] {\r\n  text-decoration: none !important;\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n  .big__name {\r\n    /*display: none;*/\r\n    margin-top: 8px;\r\n    font-size: 16px;\r\n    margin-left: 0;\r\n  }\r\n  .sm-flex-col {\r\n    flex-direction: column;\r\n  }\r\n}\r\n", ""]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
  "Z": () => (/* binding */ addStylesClient)
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
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6461);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_logo_css__WEBPACK_IMPORTED_MODULE_1__);



const sanitizeFullName = name => {
  if (!name) return name;
  name = name.trim();
  const name_array = name.split(" ").map(e => e.trim()).filter(e => !(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(e));

  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[1].charAt(0)}. ${name_array[name_array.length - 1]}`;
  } else if (name_array.length <= 2) {
    return name;
  }
};

const getNameInitials = name => {
  name = name.trim().split(" ").map(e => e.trim()).filter(e => !(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(e)).map(e => e.charAt(0));
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
    const selector = document.querySelector(this.selector);
    selector.innerHTML = `
      <div style="color: ${this.textColor}" class="d-flex sm-flex-col items-center position-relative space-x-4">
              <div style="color: ${this.textColor}; border: 2px solid ${this.textColor}" class="d-flex items-center circle__x">
                <span>${getNameInitials(this.name)}</span>
                <div style="background: ${this.bgColor}" class="strip__x"></div>
              </div>
             ${!this.circleOnly ? `<span class="big__name">${sanitizeFullName(this.name)}</span>` : ""}
      </div>
    `;
  }

}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});