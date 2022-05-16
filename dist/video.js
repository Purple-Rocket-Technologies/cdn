/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1609);

/***/ }),

/***/ 5448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var cookies = __webpack_require__(4372);
var buildURL = __webpack_require__(5327);
var buildFullPath = __webpack_require__(4097);
var parseHeaders = __webpack_require__(4109);
var isURLSameOrigin = __webpack_require__(7985);
var createError = __webpack_require__(5061);
var transitionalDefaults = __webpack_require__(7874);
var Cancel = __webpack_require__(5263);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var bind = __webpack_require__(1849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(7185);
var defaults = __webpack_require__(5546);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5263);
axios.CancelToken = __webpack_require__(4972);
axios.isCancel = __webpack_require__(6502);
axios.VERSION = (__webpack_require__(7288).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(8713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(6268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 5263:
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(5263);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6502:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var buildURL = __webpack_require__(5327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(3572);
var mergeConfig = __webpack_require__(7185);
var validator = __webpack_require__(4875);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 4097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(1793);
var combineURLs = __webpack_require__(7303);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(481);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 3572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var transformData = __webpack_require__(8527);
var isCancel = __webpack_require__(6502);
var defaults = __webpack_require__(5546);
var Cancel = __webpack_require__(5263);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 481:
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 7185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 6026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(5061);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 8527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var defaults = __webpack_require__(5546);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 5546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var normalizeHeaderName = __webpack_require__(6016);
var enhanceError = __webpack_require__(481);
var transitionalDefaults = __webpack_require__(7874);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5448);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 7874:
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 7288:
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ 1849:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 7303:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 4372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 1793:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 6268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ 7985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 6016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8713:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 4875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(7288).version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 4867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(1849);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 5908:
/***/ ((module) => {

const FIN = {
  US: {
    ENGLISH: "445268145",
    SPANISH: "452754620"
  },
  CA: {
    ENGLISH: "551499288",
    SPANISH: "452754620"
  }
};

const getVideoUrl = (language, isCanadian) => {
  let country = getCountry(isCanadian);

  if (language === "en") {
    return FIN[country].ENGLISH;
  } else {
    return FIN[country].SPANISH;
  }
};

const getCountry = (isCanadian, longName = false) => {
  if (longName) {
    return isCanadian ? "Canada" : "United States";
  }

  return isCanadian ? "CA" : "US";
};

module.exports = {
  getVideoUrl,
  getCountry
};

/***/ }),

/***/ 3912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isEmpty
} = __webpack_require__(8903);

const axios = __webpack_require__(9669);

class Service {
  constructor(endpoint) {
    if (endpoint.startsWith("/")) {
      endpoint = endpoint.replace("/", "");
    }

    this.axios = axios;
    this.baseUrl = `https://devbackendapp.discoverfin.io/api/v1/users/${endpoint}`;
    this.query = ``;
    this.body = {};
  }

  equals(key, val) {
    this.query = `${this.query}&${key}=${val}`;
  }

  limit(val) {
    this.query = `${this.query}&limit=${val}`;
  }

  async find() {
    const url = !isEmpty(this.query) ? `${this.baseUrl}?${this.query}` : this.baseUrl;
    return await new Promise((resolve, reject) => {
      this.axios.get(url).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  }

  parseResponse(response) {
    return response.data;
  }

  async first() {
    return await this.axios.get(`${this.baseUrl}?${this.query}&limit=1`);
  }

  set(object) {
    this.body = object;
  }

  async create() {
    return await this.axios.post(this.baseUrl, this.body);
  }

  async update(id) {
    return await this.axios.put(`${this.baseUrl}/${id}`, this.body);
  }

}

module.exports = Service;

/***/ }),

/***/ 2014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProspect": () => (/* binding */ getProspect),
/* harmony export */   "getUser": () => (/* binding */ getUser)
/* harmony export */ });
const Service = __webpack_require__(3912);

const {
  isEmpty
} = __webpack_require__(8903);

const getUser = async (USER_URL, COMPANY_URL) => {
  const endpoint = !isEmpty(COMPANY_URL) ? `/getCompany/name/${COMPANY_URL}/${USER_URL}` : "/getUserByUrl/" + USER_URL;
  const user = new Service(endpoint);
  return await new Promise((resolve, reject) => {
    user.find().then(response => {
      resolve(user.parseResponse(response));
    }, error => {
      reject(error);
    });
  });
};

const getProspect = async (ADVISOR_ID, COMPANY_ID, EMAIL) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const prospect = new Service(endpoint);
  prospect.equals("email", EMAIL);
  prospect.equals("userId", ADVISOR_ID);
  return await new Promise((resolve, reject) => {
    prospect.find().then(response => {
      response.count === 0 || response.error ? reject(response) : resolve(prospect.parseResponse(response).first());
    }, error => {
      reject(error);
    });
  });
};



/***/ }),

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVideoProspectService": () => (/* binding */ createVideoProspectService),
/* harmony export */   "fetchVideoService": () => (/* binding */ fetchVideoService),
/* harmony export */   "getPathOptions": () => (/* binding */ getPathOptions),
/* harmony export */   "getPathsContentAPI": () => (/* binding */ getPathsContentAPI),
/* harmony export */   "getVideoProspect": () => (/* binding */ getVideoProspect),
/* harmony export */   "updateVideoProspect": () => (/* binding */ updateVideoProspect)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3912);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Service__WEBPACK_IMPORTED_MODULE_0__);


const getVideoProspect = async (COMPANY_ID, EMAIL) => {
  const service = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())(`company/${COMPANY_ID}/videoProspects?email=${EMAIL}`);
  return new Promise((resolve, reject) => {
    service.find().then(res => {
      if (res.count > 0) {
        resolve(service.parseResponse(res));
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
};

const createVideoProspectService = async (COMPANY_ID, BODY) => {
  const createNewVideoProspect = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())(`company/${COMPANY_ID}/videoProspects`);
  createNewVideoProspect.set(BODY);
  return new Promise((resolve, reject) => {
    createNewVideoProspect.create().then(res => {
      if (res.data && res.data.data && res.data.success) {
        resolve(createNewVideoProspect.parseResponse(res.data));
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
};

async function fetchVideoService(params) {
  const validateVideo = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())("videoProspects/leadCapturingVideos");
  params.forEach(element => {
    validateVideo.equals(element.key, element.value);
  });
  return new Promise((resolve, reject) => {
    validateVideo.find().then(res => {
      if (res.count > 0) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
}

async function getPathsContentAPI(videoType) {
  const patchContentAPI = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())("videoProspects/paths");
  patchContentAPI.equals("type", videoType);
  return new Promise((resolve, reject) => {
    patchContentAPI.find().then(res => {
      if (res.count > 0) {
        resolve(patchContentAPI.parseResponse(res));
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
}

const updateVideoProspect = async (COMPANY_ID, PROSPECT_ID, BODY) => {
  const updateVideoProspect = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())(`company/${COMPANY_ID}/videoProspects`);
  updateVideoProspect.set(BODY);
  return new Promise((resolve, reject) => {
    updateVideoProspect.update(PROSPECT_ID).then(res => {
      console.log(res.data.success, "myres");

      if (res.data.success) {
        resolve(updateVideoProspect.parseResponse(res.data));
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
};

const getPathOptions = async path_name => {
  const service = new (_Service__WEBPACK_IMPORTED_MODULE_0___default())(`videoProspects/paths?name=${path_name}`);
  return new Promise((resolve, reject) => {
    service.find().then(res => {
      console.log(res, "this is my res");
      console.log(res.count, "this is my res couunnt");

      if (res.count > 0) {
        resolve(service.parseResponse(res));
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
};



/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePage": () => (/* binding */ BasePage),
/* harmony export */   "cookies": () => (/* binding */ cookies),
/* harmony export */   "finBaseUrl": () => (/* binding */ finBaseUrl),
/* harmony export */   "finBusinessVideoAppLink": () => (/* binding */ finBusinessVideoAppLink),
/* harmony export */   "finFinancialSuccessVideoAppLink": () => (/* binding */ finFinancialSuccessVideoAppLink),
/* harmony export */   "formatAnswers": () => (/* binding */ formatAnswers),
/* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl),
/* harmony export */   "getUrlParameter": () => (/* binding */ getUrlParameter),
/* harmony export */   "getVideoBaseUrl": () => (/* binding */ getVideoBaseUrl),
/* harmony export */   "isAppointmentPage": () => (/* binding */ isAppointmentPage),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isOnBoardingPage": () => (/* binding */ isOnBoardingPage),
/* harmony export */   "isQuestionPage": () => (/* binding */ isQuestionPage),
/* harmony export */   "isResultPage": () => (/* binding */ isResultPage),
/* harmony export */   "isRouteQuestionPage": () => (/* binding */ isRouteQuestionPage),
/* harmony export */   "isRouteSelectedPage": () => (/* binding */ isRouteSelectedPage),
/* harmony export */   "toDollar": () => (/* binding */ toDollar),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
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



/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onBoarding": () => (/* binding */ onBoarding)
/* harmony export */ });
const {
  cookies,
  isEmpty,
  isMobile
} = __webpack_require__(8903);

const {
  getVideoUrl,
  getCountry
} = __webpack_require__(5908);

const onBoarding = {
  advisor: {
    setCookies: function (advisor, IS_OLD_LINK) {
      cookies.setMultiple([{
        key: "isAffiliateUrl",
        value: advisor.isAffiliateUrl
      }, {
        key: "COMPANY_ID",
        value: advisor.companyId
      }, {
        key: "COMPANY_URL",
        value: advisor.companyUrl
      }, {
        key: "USER_ID",
        value: advisor.userId
      }, {
        key: "IS_OLD_LINK",
        value: IS_OLD_LINK
      }, {
        key: "URL_COMPANY",
        value: advisor.companyUrl
      }, {
        key: "URL_USER",
        value: advisor.companies && advisor.companies[0].url
      }, {
        key: "USER_URL",
        value: advisor.companies && advisor.companies[0].url
      }, {
        key: "affiliateId",
        value: advisor.affiliateId
      }, {
        key: "APTMT_LINK",
        value: advisor.appointmentBookingLink
      }, {
        key: "REP_NAME",
        value: advisor.firstName + " " + advisor.lastName
      }, {
        key: "PIC",
        value: advisor.profilePic
      }, {
        key: "PHONE",
        value: advisor.phone
      }, {
        key: "EMAIL",
        value: advisor.email
      }, {
        key: "VIDEO",
        value: advisor.videoProfileLink
      }]);
    }
  },
  prospect: {
    setCookies: function (prospect) {
      cookies.set("PROSPECT_ID", prospect._id);
      cookies.set("Name", prospect.first_name);
      cookies.set("FIN Number", prospect.fin_number);
    },
    handleRedirect: function (prospect) {
      const ROUTE_CHOICE = prospect.route_choice;

      if (isEmpty(ROUTE_CHOICE)) {
        window.location.href = `/route/${ROUTE_CHOICE.split(" ").join("-").toLowerCase()}`;
      } else {
        window.location.href = "/route";
      }
    }
  },
  videos: {
    player: function () {
      return new Vimeo.Player(document.getElementById("video"));
    },

    handleLang({
      selector,
      language
    }, IS_CANADIAN_LINK) {
      const that = this;
      $(selector).click(function () {
        if (language === "es") {
          $("#temp_en").addClass("hide");
          $("#temp_es").removeClass("hide");
        }

        that.renderVideo(getVideoUrl(language, IS_CANADIAN_LINK));
        Weglot.switchTo(language);
        cookies.set("country", getCountry(IS_CANADIAN_LINK, true));
      });
    },

    setTotalDuration: function () {
      return new Promise(resolve => {
        this.player().getDuration().then(function (duration) {
          resolve(duration);
        });
      });
    },
    renderVideo: function (videoId) {
      const that = this;
      let totalDurationTime = 0;
      let playerinitialized = false;
      this.player().loadVideo(videoId).then(async function (id) {
        totalDurationTime = await that.setTotalDuration();
        playerinitialized = true;
        that.player().pause();
      });
      setInterval(function () {
        if (playerinitialized) {
          that.player().getCurrentTime().then(function (seconds) {
            const lockIconEl = $(".show-after-unlock");
            const arrowEl = $(".hide-after-unlock");
            const linkBlock = $(".link-block");
            let watchpercentage = seconds / totalDurationTime * 100;

            if (watchpercentage >= 90) {
              linkBlock.attr("href", "/questions");

              if (!isMobile()) {
                $(".link-block .cta_btn").addClass("active");
                $(".cta_btn").addClass("active");
              } else {
                $("#unlock-btn .cta_btn").addClass("active");
              }

              lockIconEl.css("display", "block");
              arrowEl.css("display", "none");
            } else {
              linkBlock.on("click", function () {
                that.player().play();
              });
              linkBlock.attr("href", "#");
              lockIconEl.css("display", "none");
              arrowEl.css("display", "block");
              $(".link-block .cta_btn").removeClass("active");
            }
          });
        }
      }, 200);
    },
    handleLanguages: function (IS_CANADIAN_LINK) {
      // handle click on language buttons
      const languages = [{
        selector: "#lang_us",
        language: "en"
      }, {
        selector: "#lang_es",
        language: "es"
      }];
      languages.forEach(lang => {
        onBoarding.videos.handleLang(lang, IS_CANADIAN_LINK);
      });
    },
    handlePlayer: function (IS_CANADIAN_LINK) {
      onBoarding.videos.handleLanguages(IS_CANADIAN_LINK);
    }
  }
};


/***/ }),

/***/ 4265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_video_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2379);

const videoUtils = {
  initialState: {
    VIDEO_TYPE: "",
    COUNTRY: "",
    LANG: "",
    VIDEO_ID: "",
    USER_URL: "",
    VIDEO_PROSPECT_ID: "",
    VIDEO_TOTAL_TIME: "",
    IS_PLAYER_LOADED: false,
    PLAYER_CURRENT_TIME: 0,
    VIDEO_WATCH_PERCENTAGE: 0,
    PATH_OPTIONS: null,
    MCQ_OPTIONS: null,
    PLAYER: null,
    APPOINTMENT_LINK: null,
    COMPANY_ID: null,
    IS_OLD_LINK: false,
    ADVISOR: {},
    MCQ_OPTIONS_ARR: []
  },
  methods: {
    showError(error) {
      $("#error_msg").text(error);
      $(function () {
        $(".error-triggerer").click(function () {
          this.click();
        }).click();
      });
    },

    showSuccess(msg) {
      $(".success-msg-text").text(msg);
      $(function () {
        $(".success-triggerer").click(function () {
          this.click();
        }).click();
      });
    },

    letsStart() {
      $(function () {
        $(".nav-bullet-dot:nth-child(2)").click(function () {
          this.click();
        }).click();
      });
      $(".onboarding").addClass("pan-out");
      $(".watch-video").addClass("pan-in");
      $("*").scrollTop(0);
    },

    formatSecondsToTime(time) {
      const hrs = ~~(time / 3600);
      const mins = ~~(time % 3600 / 60);
      const secs = ~~time % 60;
      let ret = "";

      if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }

      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    },

    autoFill() {
      const firstName = url.query.get("fname");
      const email_fill = url.query.get("email");

      if (firstName && email_fill) {
        $("#fname").val(firstName);
        $("#email").val(email_fill);
        $("#peoplewatching").val(1);
        $("#country-us").click();
        $("#country-us").toggleClass("active");
        videoUtils.methods.fetchVideo(videoType, "US", "EN");
      }
    },

    fetchVideo(type, country, lang) {
      console.log("fetching video");
      (0,_service_video_index__WEBPACK_IMPORTED_MODULE_0__.fetchVideoService)([{
        key: "type",
        value: type
      }, {
        key: "countryCode",
        value: country
      }, {
        key: "language",
        value: lang
      }]).then(function (response) {
        console.log("video fetched", response);
        $(".video-container").css("height", $(".video-container").width() / (16 / 9));
        videoUtils.methods.renderVideo(response.url);
      }).catch(function (error) {
        videoUtils.methods.showError("Oops! Something went wrong.");
        console.log(error, "error", type, country, lang);
      });
    },

    renderVideo(videoID) {
      videoUtils.initialState.PLAYER = new Vimeo.Player(document.getElementById("video"));
      videoUtils.initialState.PLAYER.loadVideo(videoID).then(function (id) {
        videoUtils.methods.setTotalDuration();
        videoUtils.initialState.PLAYER.pause();
      }).catch(function (error) {});
    },

    setTotalDuration() {
      const player = new Vimeo.Player(document.getElementById("video"));
      player.getDuration().then(function (duration) {
        videoUtils.methods.setFinalFunction();
        $(".totaltime").text(videoUtils.methods.formatSecondsToTime(duration));
      });
    },

    setFinalFunction() {
      console.log("setting final function");
      const player = new Vimeo.Player(document.getElementById("video"));
      console.log("player", player);
      player.on("ended", function () {
        $(function () {
          $(".nav-bullet-dot:nth-child(3)").click(function () {
            this.click();
          }).click();
        });
        $(".site-content-wrapper.video").addClass("move");
        $(".site-content-wrapper.paths").addClass("move");
      });
    },

    isEmail(e) {
      return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e);
    },

    toggleFocus(e) {
      console.log(e.type);

      if (e.type === "focus") {
        $(".email_help_text").addClass("active");
      } else {
        $(".email_help_text").removeClass("active");
      }
    }

  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoUtils);

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const {
  BasePage,
  finBaseUrl,
  cookies
} = __webpack_require__(8903);

const {
  getUser
} = __webpack_require__(2014);

const {
  onBoarding
} = __webpack_require__(4401);

const {
  fetchVideoService,
  getVideoProspect,
  getPathsContentAPI,
  createVideoProspectService,
  updateVideoProspect,
  getPathOptions
} = __webpack_require__(2379);

const videoUtils = (__webpack_require__(4265)/* ["default"] */ .Z);

const {
  isEmail
} = videoUtils.methods;

const {
  url
} = __webpack_require__(8903);

let videoType = window.location.pathname.replace("/", "");
let watchpercentage = 0;
let page = null;
let path_name;

class videoPage extends BasePage {
  constructor(_object) {
    super(_object);
  }

}

async function fetchAdvisor(page) {
  const {
    USER_URL,
    COMPANY_URL,
    IS_OLD_LINK
  } = page;
  const advisor = await getUser(USER_URL, COMPANY_URL);
  page.COMPANY_ID = advisor.companyId;
  onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
  page.ADVISOR = advisor;
  return page;
}

async function redirectContinuer(page) {
  if (url.query.get("prospectEmail")) {
    getVideoProspect(page.COMPANY_ID, url.query.get("prospectEmail")).then(res => {});
  }
} //Setting paths content variable


async function setPathsContentVariable(videoType) {
  await getPathsContentAPI(videoType).then(async function (response) {
    [...$(".path-option")].forEach(elem => {
      let temp = [];

      for (let i = 0; i < elem.childNodes.length; i++) {
        const item = elem.childNodes[i];

        if (!item.className.includes("path-text")) {
          temp.push(item);
        }
      }

      elem.innerHTML = "";
      temp.forEach(item => {
        elem.append(item);
      });
    });
    let description_item_text;
    let description_array;

    for (let i = 0; i < response.length; i++) {
      let it = response[i]; //setting title of path

      if ((await Weglot.getCurrentLang()) === "es") {
        path_name = await translateToLanguage([it.name], "en", "es");
      } else {
        path_name = it.name;
      }

      $(".path-option:nth-child(" + (i + 1) + ") .heading").text(path_name); //setting description of path

      description_array = it.description;

      for (let j = 0; j < description_array.length; j++) {
        let elem = description_array[j];

        if ((await Weglot.getCurrentLang()) === "es") {
          description_item_text = await translateToLanguage([elem], "en", "es");
        } else {
          description_item_text = elem;
        }

        const html_elem = $(`.path-option:nth-child(${i + 1})`);

        if (!html_elem[0].innerHTML.includes(description_item_text)) {
          html_elem.append(`<div class='path-text'>${description_item_text}</div>`);
        }
      }
    }

    $(".main-app-container").addClass("show");
  }).catch(function (error) {
    videoUtils.methods.showError("Oops, There was an unexpected error.");
    console.error(error, "err1");
  });
}

async function validateVideoType(typeName) {
  await fetchVideoService([{
    key: "type",
    value: typeName
  }]).then(function (response) {
    console.table({
      response
    });
    document.title = response.data[0].name; // Setting page title

    $("#video-title").text(response.data[0].name); // Setting video title

    videoUtils.methods.renderVideo(response.data[0].url); // Rendering video

    setPathsContentVariable(videoType);
  }).catch(function (error) {
    console.log(error, "err");
    $(".fourofour").addClass("show");
  });
} // Check Video Prospect


async function checkVideoProspect(email_val) {
  let companyId = cookies.get("COMPANY_ID");
  await getVideoProspect(companyId, email_val).then(function (response) {
    console.log(response);
    page.VIDEO_PROSPECT_ID = response[0]._id;

    if (!url.query.get("prospectEmail")) {
      videoUtils.methods.showSuccess("Welcome " + response[0].firstName + "! Enjoy your video");
    }

    page.COUNTRY = response[0].country || "US";
    page.LANG = response[0].language || "EN";
    videoUtils.methods.fetchVideo(videoType, page.COUNTRY, page.LANG);
    videoUtils.methods.letsStart();
  }).catch(function (error) {
    console.log(error, "err");

    if (error.count === 0) {
      createVideoProspect();
    } else {
      videoUtils.methods.showError(error.response.data.message);
    }
  });
} // Create Video Prospect


async function createVideoProspect() {
  await videoUtils.methods.fetchVideo(videoType, page.COUNTRY || "US", page.LANG || "EN");
  console.table(page);
  const data = {
    videoName: document.title,
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    email: $("#email").val(),
    phone: Inputmask.unmask($("#phone").val(), {
      mask: "(999) 999-9999"
    }),
    country: page.COUNTRY || "US",
    language: page.LANG || "EN",
    watchingWith: $("#peoplewatching").val(),
    watchedTime: 0,
    totalVideoTime: videoUtils.methods.formatSecondsToTime(page.VIDEO_TOTAL_TIME),
    watchPercentage: 0,
    appointmentCompleted: false,
    userId: cookies.get("USER_ID"),
    companyId: cookies.get("COMPANY_ID")
  };

  if (cookies.get("isAffiliateUrl") === "true") {
    data.affiliateId = cookies.get("affiliateId");
  }

  await createVideoProspectService(data.companyId, data).then(function (response) {
    page.VIDEO_PROSPECT_ID = response._id;
    videoUtils.methods.showSuccess("Your details have been verified, Enjoy your video!");
    videoUtils.methods.letsStart();
  }).catch(function (error) {
    videoUtils.methods.showError(error.response && error.response.data && error.response.data.message);
  });
} // Update watch percentage


async function updateWatchtime(time, percentage) {
  let companyId = cookies.get("COMPANY_ID");
  let UpdateData = {
    watchedTime: videoUtils.methods.formatSecondsToTime(time),
    watchPercentage: parseInt(percentage)
  };
  await updateVideoProspect(companyId, page.VIDEO_PROSPECT_ID, UpdateData).then(function (response) {// trackMixPanelEvent(`Watched ${videoType} ${parseInt(percentage)}%`, {
    //   videoType,
    //   percentage: parseInt(percentage),
    //   watchedTime: format(time),
    // });
    //console.log(response.data);
    //console.log(response.xhr);
  }).catch(function (error) {//console.log(response.data);
    //console.log(response.xhr);
  });
} // Current timing


setInterval(function () {
  page.PLAYER = new Vimeo.Player(document.getElementById("video"));
  page.PLAYER.getDuration().then(function (duration) {
    page.VIDEO_TOTAL_TIME = duration;
  });

  if (page.IS_PLAYER_LOADED) {
    page.PLAYER.getCurrentTime().then(function (seconds) {
      $(".elapsedtime").text(videoUtils.methods.formatSecondsToTime(seconds)); // const schedule_footer = $(".schedule-footer");

      watchpercentage = seconds / page.VIDEO_TOTAL_TIME * 100;
      $(".progress-bar-inner").css("width", watchpercentage + "%"); //if (watchpercentage >= 93) {
      //if (schedule_footer.css("display") === "none") {
      // schedule_footer.css("display", "flex");
      // $("#window_frame").attr(
      // "src",
      //`https://discoverfin.io/appointment?company=${getUrlParameter(
      // "company"
      //)}&user=${getUrlParameter("user")}&video=true`
      //);
      //}
      //}

      page.PLAYER_CURRENT_TIME = seconds;
    });
  }
}, 200); // Rendering path questions based on the path selected

async function render_options() {
  for (i = 0; i <= page.PATH_OPTIONS.length; i++) {
    $(".checkbox-field:nth-child(" + i + ")").show();
    let text = page.PATH_OPTIONS[i];

    if ((await Weglot.getCurrentLang()) === "es") {
      if (text) {
        text = await translateToLanguage([text], "en", "es");
      }
    }

    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").text(text);
    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").attr("en", page.PATH_OPTIONS[i]);
  }

  $(function () {
    $(".nav-bullet-dot:nth-child(4)").click(function () {
      this.click();
    }).click();
  });
  $(".watch-video").addClass("pan-out");
  $(".path-container").addClass("pan-in");
}

async function video_Int() {
  const USER_URL = url.query.get("id") || url.query.get("user");
  const TYPE = "getBaseUrl";
  const appLink = finBaseUrl(USER_URL, url.query.get("company"), TYPE, "appointment");
  page = new videoPage({ ...videoUtils.initialState,
    USER_URL,
    IS_OLD_LINK: url.query.get("company"),
    APPOINTMENT_LINK: `${appLink}&video=true`
  });

  try {
    page = await fetchAdvisor(page); // page.track("Prospect Visited Appointment page", {
    //   rep: page.ADVISOR.firstName,
    // });
  } catch (e) {
    console.log(e);
    $(".fourofour").addClass("show");
  }
  /********************************/

  /*******PAGE LOAD TRIGGER*******/

  /******************************/


  $("#phone").inputmask("(999) 999-9999"); //Masking the phone number field

  $(".checkbox-field").hide();
  await validateVideoType(videoType); //validating video type from the url

  /*********************************/

  /******** EVENT TRIGGERS ********/

  /*******************************/

  $("#country-us").click(function () {
    Weglot.switchTo("en");
    validateVideoType(videoType);
  });
  $("#country-es").click(function () {
    Weglot.switchTo("es");
    validateVideoType(videoType);
  });
  $("#country-ca").click(function () {
    Weglot.switchTo("en");
    validateVideoType(videoType);
  });
  $("#country-ca-es").click(function () {
    Weglot.switchTo("es");
    validateVideoType(videoType);
  }); // email help text

  $("#email").on("focus blur", toggleFocus);

  function toggleFocus(e) {
    console.log(e.type);

    if (e.type === "focus") {
      $(".email_help_text").addClass("active");
    } else {
      $(".email_help_text").removeClass("active");
    }
  } //Setting cookie name


  $("#fname").keyup(function () {
    setCookies("Name", $(this).val()); // trackMixPanelEvent(`Video Prospect Journey Started`, {
    //   prospectName: $(this).val(),
    // });
  }); //Country Button functions

  $(".country-btn").click(function () {
    $(".country-btn").removeClass("active");
    $(this).addClass("active");
    page.COUNTRY = $(this).attr("data-country");
    page.LANG = $(this).attr("data-lang");
    videoUtils.methods.fetchVideo(videoType, page.COUNTRY, page.LANG);
  });
  $(".non-clicker").click(function () {
    videoUtils.methods.showError("Please select a language first.");
  });
  $(".onboad").click(function () {
    if (page.COUNTRY !== "") {
      if ($("#peoplewatching").val() != "" && $("#phone").val() != "" && $("#fname").val() != "") {
        if (isEmail($("#email").val())) {
          checkVideoProspect($("#email").val());
        } else {
          videoUtils.methods.showError("Please enter a correct email.");
        }
      } else {
        videoUtils.methods.showError("Please fill in all details.");
      }
    } else {
      videoUtils.methods.showError("Please select your country.");
    }
  }); // Updating watch time percentage thorough api

  const set10 = setInterval(function () {
    if (watchpercentage > 10) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set10);
    }
  }, 1000);
  const set20 = setInterval(function () {
    if (watchpercentage > 20) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set20);
    }
  }, 1000);
  const set30 = setInterval(function () {
    if (watchpercentage > 30) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set30);
    }
  }, 1000);
  const set40 = setInterval(function () {
    if (watchpercentage > 40) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set40);
    }
  }, 1000);
  const set50 = setInterval(function () {
    if (watchpercentage > 50) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set50);
    }
  }, 1000);
  const set60 = setInterval(function () {
    if (watchpercentage > 60) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set60);
    }
  }, 1000);
  const set70 = setInterval(function () {
    if (watchpercentage > 70) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set70);
    }
  }, 1000);
  const set80 = setInterval(function () {
    if (watchpercentage > 80) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set80);
    }
  }, 1000);
  const set90 = setInterval(function () {
    if (watchpercentage > 90) {
      updateWatchtime(parseInt(page.PLAYER_CURRENT_TIME), parseInt(watchpercentage));
      clearInterval(set90);
    }
  }, 1000);
  const set96 = setInterval(function () {
    if (watchpercentage > 96) {
      updateWatchtime(page.VIDEO_TOTAL_TIME, 100);
      clearInterval(set96);
    }
  }, 1000); // Changing the video text based on progress

  const set32 = setInterval(function () {
    if (watchpercentage < 32) {
      $(".interval_text_item:nth-child(1)").addClass("active");
      $(".interval_text_item:nth-child(2)").removeClass("active");
      $(".interval_text_item:nth-child(3)").removeClass("active");
      clearInterval(set32);
    }
  }, 1000);
  const set35 = setInterval(function () {
    if (watchpercentage > 67) {
      $(".interval_text_item:nth-child(2)").addClass("active");
      $(".interval_text_item:nth-child(1)").removeClass("active");
      $(".interval_text_item:nth-child(3)").removeClass("active");
      clearInterval(set35);
    }
  }, 1000);
  const set75 = setInterval(function () {
    if (watchpercentage > 96) {
      $(".interval_text_item:nth-child(3)").addClass("active");
      $(".interval_text_item:nth-child(2)").removeClass("active");
      $(".interval_text_item:nth-child(1)").removeClass("active");
      clearInterval(set75);
    }
  }, 1000);
  $(".path-option").click(function () {
    var path_name_value = $(this).children(".heading").text(); //const schedule_footer = $(".schedule-footer");
    //schedule_footer.remove();

    triggerRenderOptions(path_name_value);
  });

  async function triggerRenderOptions(path_name) {
    let COMPANY_ID = cookies.get("COMPANY_ID");
    $(".path-heading").text(path_name);
    path_name = path_name.includes("1") ? "Path 1" : path_name.includes("2") ? "Path 2" : path_name.includes("3") ? "Path 3" : ""; // track path clicked event to mixpanel
    // trackMixPanelEvent(`${videoType}: ${path_name} Clicked`, {
    //   companyId: readCookie("COMPANY_ID"),
    //   page.VIDEO_PROSPECT_ID,
    //   pathChoosen: path_name,
    // });

    let BODY = {
      pathChoosen: path_name
    };
    await updateVideoProspect(COMPANY_ID, page.VIDEO_PROSPECT_ID, BODY).then(async function (response) {
      // Getting path options afte a successfull post
      await getPathOptions(path_name).then(function (response) {
        page.PATH_OPTIONS = response[0].options;
        render_options();
      }).catch(function (error) {
        console.log(error.status);
        videoUtils.methods.showError("Oops, There was an unexpected error.");
      });
    }).catch(function (error) {
      console.log(error, "err2");
      videoUtils.methods.showError("Oops, There was an unexpected error.");
    });
  } // $(".checkbox-field").click(function () {
  //   debugger;
  //   const get_value = $(this).children(".checkbox-label").attr("en");
  //   const check_element = $(this).children(".checkbox");
  //   if (check_element.hasClass("active")) {
  //     if (typeof get_value === "string") {
  //       page.MCQ_OPTIONS.splice(page.MCQ_OPTIONS.indexOf(get_value), 1);
  //       check_element.removeClass("active");
  //     }
  //   } else {
  //     if (typeof get_value === "string") {
  //       page.MCQ_OPTIONS.push(get_value);
  //       check_element.addClass("active");
  //     }
  //   }
  // });


  $(".checkbox-field").click(function () {
    const get_value = $(this).children(".checkbox-label").attr("en");
    const check_element = $(this).children(".checkbox");

    if (check_element.hasClass("active")) {
      if (typeof get_value === "string") {
        videoUtils.initialState.MCQ_OPTIONS_ARR.splice(videoUtils.initialState.MCQ_OPTIONS_ARR.indexOf(get_value), 1);
        check_element.removeClass("active");
      }
    } else {
      if (typeof get_value === "string") {
        videoUtils.initialState.MCQ_OPTIONS_ARR.push(get_value);
        check_element.addClass("active");
      }
    }
  });
  $(".submit.paths").click(async () => {
    let COMPANY_ID = cookies.get("COMPANY_ID");

    if (videoUtils.initialState.MCQ_OPTIONS_ARR.length !== 0) {
      let BODY = {
        interests: videoUtils.initialState.MCQ_OPTIONS_ARR
      };
      await updateVideoProspect(COMPANY_ID, page.VIDEO_PROSPECT_ID, BODY).then(function (response) {
        console.log(response.data); // trackMixPanelEvent(
        //   `Video Prospect Journey Completed`,
        //   response.data.data
        // );

        $(".user_name").text($("#fname").val());
        $(".rep_name, .rep_name_cta").text(cookies.get("REP_NAME"));
        $(".rep-phoito").css("background-image", "url('" + cookies.get("PIC") + "')");
        videoUtils.methods.showSuccess("Your answers have been sent successfully!");
        $(".appointment-iframe .w-iframe iframe").attr("src", page.APPOINTMENT_LINK);
        $(".last-popup").addClass("active");
      }).catch(function (error) {
        console.log(error, "err3");
        videoUtils.methods.showError("Oops, There was an unexpected error.");
      });
    } else {
      videoUtils.methods.showError("Please select at least one option");
    }
  });
  $(".iframe-back").click(function () {
    $(".appointment-iframe .w-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  });
  $(".closer-last").click(function () {
    $(".last-popup").removeClass("active");
    $(".appointment-iframe .w-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  });
}

try {
  video_Int().then(r => {
    console.log("video_Int");
  }).catch(e => {
    console.error(e);
  });
} catch (e) {
  console.error(e);
}
})();

/******/ })()
;