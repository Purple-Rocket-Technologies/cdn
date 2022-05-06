/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(609);

/***/ }),

/***/ 448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var settle = __webpack_require__(26);
var cookies = __webpack_require__(372);
var buildURL = __webpack_require__(327);
var buildFullPath = __webpack_require__(97);
var parseHeaders = __webpack_require__(109);
var isURLSameOrigin = __webpack_require__(985);
var createError = __webpack_require__(61);
var transitionalDefaults = __webpack_require__(874);
var Cancel = __webpack_require__(263);

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

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var bind = __webpack_require__(849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(185);
var defaults = __webpack_require__(546);

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
axios.Cancel = __webpack_require__(263);
axios.CancelToken = __webpack_require__(972);
axios.isCancel = __webpack_require__(502);
axios.VERSION = (__webpack_require__(288).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 263:
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

/***/ 972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(263);

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

/***/ 502:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var buildURL = __webpack_require__(327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(572);
var mergeConfig = __webpack_require__(185);
var validator = __webpack_require__(875);

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


var utils = __webpack_require__(837);

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

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(793);
var combineURLs = __webpack_require__(303);

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

/***/ 61:
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

/***/ 572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var transformData = __webpack_require__(527);
var isCancel = __webpack_require__(502);
var defaults = __webpack_require__(546);
var Cancel = __webpack_require__(263);

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

/***/ 185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 26:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(61);

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

/***/ 527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var defaults = __webpack_require__(546);

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

/***/ 546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);
var normalizeHeaderName = __webpack_require__(16);
var enhanceError = __webpack_require__(481);
var transitionalDefaults = __webpack_require__(874);

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
    adapter = __webpack_require__(448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(448);
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

/***/ 874:
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 288:
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ 849:
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

/***/ 327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 303:
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

/***/ 372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 793:
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

/***/ 268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 16:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(837);

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

/***/ 713:
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

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(288).version);

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

/***/ 837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(849);

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

/***/ 908:
/***/ ((module) => {

const FIN = {
  US: {
    ENGLISH: "https://player.vimeo.com/video/445268145",
    SPANISH: "https://player.vimeo.com/video/452754620"
  },
  CA: {
    ENGLISH: "https://player.vimeo.com/video/551499288",
    SPANISH: "https://player.vimeo.com/video/452754620"
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

/***/ 756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let USER_URL = "",
    IS_CANADIAN_LINK = false,
    COMPANY_URL = null,
    COMPANY_ID = null,
    IS_OLD_LINK = false;

const {
  cookies,
  url
} = __webpack_require__(903);

const {
  getUser,
  getProspect
} = __webpack_require__(14);

const {
  onBoarding
} = __webpack_require__(401);

async function redirectContinuer() {
  try {
    const prospect = await getProspect();
    $(".main_start_div").addClass("show");

    if (prospect) {
      onBoarding.prospect.setCookies(prospect);
      onBoarding.prospect.handleRedirect();
    } else {
      window.location.href = "/404";
    }
  } catch (e) {
    console.log(e);
  }
}

function initFINVideo() {
  onBoarding.videos.handlePlayer(IS_CANADIAN_LINK);
}

async function fetchAdvisor() {
  try {
    const advisor = await getUser(USER_URL, COMPANY_URL);
    COMPANY_ID = advisor.company_id;
    IS_CANADIAN_LINK = advisor.address && advisor.country === "Canada";
    onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
    initFINVideo();
  } catch (e) {
    console.log(e);
  }
}

async function init() {
  // read query string from url
  USER_URL = url.query.get("id") || url.query.get("user");
  COMPANY_URL = url.query.get("company");
  IS_OLD_LINK = COMPANY_URL || false; // set is old url or not in cookies to support old fin links

  cookies.set("isOldUrl", IS_OLD_LINK); // set start over url

  cookies.set("START_OVER_URL", window.location.href);
  cookies.set("INITIAL_LINK", window.location.href);
  $("#start_over").attr("href", window.location.href);
  await fetchAdvisor(); // check for continue url

  if (USER_URL && url.query.get("prospectEmail")) {
    await redirectContinuer();
  }
}

module.exports = {
  init
};

/***/ }),

/***/ 67:
/***/ ((module) => {

function Questionsinit() {
  var relativ_url = window.location.origin + window.location.pathname;
  var curren_url = window.location;

  if (curren_url != relativ_url) {
    window.location = relativ_url;
  }

  console.log("heloooo");
  $("body").on("scroll mousewheel touchmove", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  function initializeVar() {
    avg_retirement_age = 0;
    default_death_age = 0;
  }

  function isEmail(e) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e);
  }

  initializeVar();
  $(".button_blocker.email").click(function () {
    alert("Please enter a correct email");
  });
  $(".button_blocker.check").click(function () {
    alert("Please accept the terms and conditions");
  });
  $(".text-field.email").keyup(function () {
    if (isEmail($(this).val())) {
      $(".button_blocker.email").addClass("hide");
    } else {
      $(".button_blocker.email").removeClass("hide");
    }
  });
  $("#guessed_fin").val("skipped");
  $("#user_name").keyup(function () {
    var var_name = $(this).val();

    if (var_name.length > 1) {
      $("#ques_1_active").addClass("active");
      $("#ques_1_btn").addClass("go_ahead");
      $(".body").addClass("ques");
    } else {
      $("#ques_1_active").removeClass("active");
      $("#ques_1_btn").removeClass("go_ahead");
      $(".body").removeClass("ques");
    }

    var_name = var_name.charAt(0).toUpperCase() + var_name.slice(1);
    $(".var_name").html("" + var_name);
  });
  $("#user_name").on("keypress", function (e) {
    if (e.which == 13) {
      e.preventDefault();

      if ($("#ques_1_btn").hasClass("go_ahead")) {
        $("#ques_1_btn")[0].click();
      }
    }
  });
  $("#ques_1_btn").on("click", function () {
    trackMixPanelEvent("FIN Prospect Started Journey", {
      first_name: $("#user_name").val()
    });
  });
  $("#user_age").keyup(function () {
    var var_age = $(this).val();

    if (var_age.length > 1) {
      if (var_age > 17 && var_age < 71) {
        $("#ques_2_active").addClass("active");
        $("#ques_2_btn").addClass("go_ahead");
        $(".age_alert").removeClass("alert");
      } else {
        $(".age_alert").addClass("alert");
        $("#ques_1_btn").removeClass("go_ahead");
      }
    } else {
      $("#ques_2_active").removeClass("active");
      $("#ques_1_btn").removeClass("go_ahead");
    }
  }); //question two desktop 1

  $("#user_age").on("keypress", function (e) {
    if (e.which == 13) {
      e.preventDefault();

      if ($("#ques_2_btn").hasClass("go_ahead")) {
        $("#ques_2_btn")[0].click();
      }
    }
  }); //avg retirement age

  $(".options_popup.step_3 .options_container .option").click(function () {
    valueee = $(this).attr("data-age");
    valueee2 = $(this).attr("data-default"); //alert(valueee);

    avg_retirement_age = parseInt(valueee);
    default_death_age = parseInt(valueee2);
  }); //Question 4 Validation

  $("#user_income").keyup(function () {
    var var_income = $(this).val().replace(/,/g, "").replace(/[^\d]/g, "");

    if (var_income > 999) {
      $("#ques_four_active").addClass("active");
      $("#ques_4_btn").addClass("go_ahead");
    } else {
      $("#ques_four_active").removeClass("active");
      $("#ques_4_btn").removeClass("go_ahead");
    }

    if (var_income > 0) {
      $(".dollar").addClass("show");
    } else {
      $(".dollar").removeClass("show");
    }
  }); // Live Comma

  $("#user_income").keyup(function () {
    if ($(this).val() != "") {
      if (parseInt($(this).val()) > 0) {
        var income = parseInt($(this).val().replace(/[^\d]/g, "").replace(/,/g, ""), 10).toLocaleString();
        $(this).val(income);
      } else {
        $(this).val("");
      }
    } else {
      $(this).val("");
    }
  }); //question four desktop 1

  $("#user_income").on("keypress", function (e) {
    if (e.which == 13) {
      e.preventDefault();

      if ($("#ques_4_btn").hasClass("go_ahead")) {
        $("#ques_4_btn")[0].click();
      }
    }
  }); //inflation calculation ques_4_btn

  var year_left_in_retirement;
  var fin_factor;
  $("#ques_4_btn").click(function () {
    var incomebi = $("#user_income").val().replace(/,/g, "");
    var userage = parseInt($("#user_age").val());
    avg_retirement_age = avg_retirement_age;
    year_left_in_retirement = avg_retirement_age - userage;
    var inflation_factor = Math.pow(1.025, year_left_in_retirement);
    inflation_factor = Math.round((inflation_factor + 0.00001) * 100) / 100;
    var income_after_inflation = parseInt(incomebi) * inflation_factor;
    $("#ibi").html("$" + addCommas(parseInt(incomebi)));
    $(".income_after_inflation").html(addCommas(parseInt(income_after_inflation)));
    $("#iai").html("$" + addCommas(parseInt(income_after_inflation)));
    $("#income_after_inflation").val(parseInt(income_after_inflation));
    $("#at_age").html(avg_retirement_age);
  });
  $(".options_popup.step_3 .option").click(function () {
    $(".options_popup.step_3 .option").removeClass("active");
    $(this).addClass("active");
    var ans = $(this).children().html();
    $("#step_3_selector").addClass("lightup");
    $("#light_arrow_3").addClass("show");
    $("#step_3_selector").html(ans);
    $("#retirement_age").val(ans);
    $("#ques_3_active").addClass("active");
    $("#ques_3_btn").addClass("go_ahead");
  });
  $(".options_popup.step_5 .option").click(function () {
    $(".options_popup.step_5 .option").removeClass("active");
    $(this).addClass("active");
    var ans1 = $(this).children().html();
    $("#step_5_selector").addClass("lightup");
    $("#light_arrow_5").addClass("show");
    $("#step_5_selector").html(ans1);
    $("#ques_5_active").addClass("active");
    $("#ques_5_btn").addClass("go_ahead");
    $("#pension_choice").val(ans1);
    var fin_array = [4.7, 5.5, 6.2, 6.9, 7.7, 8.5, 9.18, 9.86, 10.54, 11.22, 11.9, 12.48, 13.06, 13.64, 14.22, 14.8, 15.3, 15.8, 16.3, 16.8, 17.3, 17.74, 18.18, 18.62, 19.06, 19.5, 19.85, 20.2, 20.55, 20.9, 21.25, 21.6, 21.95, 22.3, 22.65, 23, 23.35, 23.7, 24.05, 24.4, 24.75];
    var ylir = default_death_age;
    fin_factor = fin_array[ylir - 5];
    var fin_num = $(".income_after_inflation").html().replace(/,/g, "") * fin_factor;
    selected_ans = parseInt($(this).attr("data-ans"));
    user_age = parseInt($("#user_age").val());

    if (user_age < 30 && selected_ans == 1 || user_age < 30 && selected_ans == 3) {
      fin_num = fin_num;
    } else if (user_age > 30 && user_age < 40 && selected_ans == 1 || user_age > 30 && user_age < 40 && selected_ans == 3) {
      fin_num = fin_num - fin_num / 100 * 20;
    } else if (user_age > 40 && selected_ans == 1 || user_age > 40 && selected_ans == 3) {
      fin_num = fin_num - fin_num / 100 * 30;
    } else if (user_age > 30 && selected_ans == 2) {
      fin_num = fin_num - fin_num / 100 * 50;
    } else {
      fin_num = fin_num;
    }

    $("#fin_number").val(fin_num);
  });
  $(".guess_option").click(function () {
    $(".guess_option").removeClass("active");
    $(this).addClass("active");
    $("#guess_btn").addClass("active");
    $("#skipper").addClass("hidden");
    $("#guess_1_btn").addClass("go_ahead");
    var ans3 = $(this).children().html();
    $("#guessed_fin").val(ans3);
  });
  $("#guess_back").click(function () {
    $(".guess_option").removeClass("active");
    $("#guess_btn").removeClass("active");
    $("#skipper").removeClass("hidden");
    $("#guess_1_btn").removeClass("go_ahead");
    $("#guessed_fin").val("skipped");
  });
  var country_val = readCookie("country");

  async function createNewProspect() {
    if (Weglot.getCurrentLang() == "es") {
      [retirement_age, pension_choice, guessed_fin] = await translateToLanguage([$("#retirement_age").val(), $("#pension_choice").val(), $("#guessed_fin").val()]);
    } else {
      [retirement_age, pension_choice, guessed_fin] = [$("#retirement_age").val(), $("#pension_choice").val(), $("#guessed_fin").val()];
    }

    const data = {
      companyId: readCookie("COMPANY_ID"),
      userId: readCookie("USER_ID"),
      first_name: $("#user_name").val(),
      age: $("#user_age").val(),
      annual_income_after_inflation: parseInt($("#income_after_inflation").val()),
      annual_income_before_inflation: parseInt($("#user_income").val().replace(/,/g, "")),
      retirement_age,
      pension_choice,
      guessed_fin,
      email: $("#email").val(),
      fin_number: parseInt($("#fin_number").val()),
      country: country_val
    };

    if (readCookie("isAffiliateUrl") == "true") {
      data.affiliateId = readCookie("affiliateId");
    }

    axios({
      method: "post",
      url: "https://" + api_url + "/api/v1/users/company/" + readCookie("COMPANY_ID") + "/prospects",
      data
    }).then(function (response) {
      setCookies("PROSPECT_ID", response.data.data._id);
      setCookies("FIN Number", "" + response.data.data.fin_number);
      setCookies("Name", response.data.data.first_name);
      setCookies("Country", response.data.data.country);
      window.location.href = "/result";
      trackMixPanelEvent("FIN Prospect created.", response.data.data);
    }).catch(function (error) {
      alert(error.response.data.message);
      throw new SentryError(`Error while creating a prospect email: ${$("#email").val()}`, error);
    });
  }

  async function updateProspect(prospectID) {
    if (Weglot.getCurrentLang() == "es") {
      [retirement_age, pension_choice, guessed_fin] = await translateToLanguage([$("#retirement_age").val(), $("#pension_choice").val(), $("#guessed_fin").val()]);
    } else {
      [retirement_age, pension_choice, guessed_fin] = [$("#retirement_age").val(), $("#pension_choice").val(), $("#guessed_fin").val()];
    }

    axios({
      method: "put",
      url: "https://" + api_url + "/api/v1/users/company/" + readCookie("COMPANY_ID") + "/prospects/" + prospectID,
      data: {
        age: $("#user_age").val(),
        retirement_age,
        annual_income_after_inflation: parseInt($("#income_after_inflation").val()),
        annual_income_before_inflation: parseInt($("#user_income").val().replace(/,/g, "")),
        pension_choice,
        guessed_fin,
        fin_number: parseInt($("#fin_number").val())
      }
    }).then(function (response) {
      setCookies("PROSPECT_ID", response.data.data._id);
      setCookies("FIN Number", "" + response.data.data.fin_number);
      setCookies("Name", response.data.data.first_name);
      setCookies("Country", response.data.data.country);
      window.location.href = "/result";
    }).catch(function (error) {
      alert(error.response.data.message);
      throw new SentryError(`Error while updating prospect: ${prospectID}`, error);
    });
  }

  $("#submit_btn").click(function () {
    const terms = $("#terms").is(":checked");
    const email_address = isEmail($("#email").val());

    if (email_address) {
      if (!terms) {
        alert("Please accept the terms and conditions");
      } else {
        axios({
          method: "get",
          url: "https://" + api_url + "/api/v1/users/company/" + readCookie("COMPANY_ID") + "/prospects?email=" + $("#email").val()
        }).then(function (response) {
          if (response.data.count === 0) {
            createNewProspect();
          } else {
            updateProspect(response.data.data[0]._id);
          }
        }).catch(function (error) {
          // alert("Oops, There was an unexpected error.");
          throw new SentryError(`Error While submitting results: ${$("#email").val()}`, error);
        });
      }
    } else {
      alert("Please enter your email address");
    }
  });
}

module.exports = Questionsinit;

/***/ }),

/***/ 800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  cookies
} = __webpack_require__(903);

const {
  routeUtils
} = __webpack_require__(395);

console.log(routeUtils, "utils");

class RoutePage {
  constructor(COMPANY_ID, PROSPECT_ID, USER_NAME, FIN_NUMBER, ROUTE_SELECTION = "") {
    this.route_selection = ROUTE_SELECTION;
    this.user_name = USER_NAME;
    this.fin_number = FIN_NUMBER;
    this.company_id = COMPANY_ID;
    this.PROSPECT_ID = PROSPECT_ID;
  }

  set route_selection(route_selection) {
    this._route_selection = route_selection;
  }

  setPath() {
    routeUtils.setPath(this);
  }

  handlePathSelection() {
    routeUtils.handlePathSelection(this);
  }

}

function init() {
  const page = new RoutePage(cookies.get("COMPANY_ID"), cookies.get("PROSPECT_ID"), cookies.get("Name"), cookies.get("FIN Number"));
  console.table(page);
  page.setPath();
  page.handlePathSelection();
}

module.exports = {
  init
};

/***/ }),

/***/ 912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isEmpty
} = __webpack_require__(903);

const axios = __webpack_require__(669);

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

/***/ 14:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Service = __webpack_require__(912);

const {
  isEmpty
} = __webpack_require__(903);

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

const getProspect = async (COMPANY_ID, EMAIL) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const prospect = new Service(endpoint);
  prospect.equals("email", EMAIL);
  return await new Promise((resolve, reject) => {
    prospect.find().then(response => {
      response.data.count <= 0 || response.data.error ? reject({
        error: response.data.error,
        message: response.data.message
      }) : resolve(prospect.parseResponse(response).first());
    }, error => {
      reject(error);
    });
  });
};

module.exports = {
  getUser,
  getProspect
};

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Service = __webpack_require__(912);

const updateRoute = async (COMPANY_ID, PROSPECT_ID, route_choice) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const route = new Service(endpoint);
  route.set({
    route_choice
  });
  return await new Promise((resolve, reject) => {
    route.update(PROSPECT_ID).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = {
  updateRoute
};

/***/ }),

/***/ 903:
/***/ (function(module) {

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

const isRouteQuestionPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/route") && (path.includes("make-more-money") || path.includes("manage-money-better") || path.includes("both"));
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
    let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }

    if (domain) {
      cookieText += "; domain=" + domain;
    }

    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
  },
  unset: (name, path, domain, secure) => {
    this.set(name, "", new Date(0), path, domain, secure);
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

const isEmpty = value => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  return typeof value === "object" && Object.keys(value).length === 0;
};

const getVideoBaseUrl = () => {
  if (window.location.host === "dev.discoverfin.io") {
    return "https://devvideo.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io") {
    return "https://stagingvideo.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io") {
    return "https://video.discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io") {
    return "https://qavideo.discoverfin.io/";
  }
};

const getBaseUrl = () => {
  if (window.location.host === "dev.discoverfin.io") {
    return "https://dev.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io") {
    return "https://staging.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io") {
    return "https://discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io") {
    return "https://qa.discoverfin.io/";
  }
};

const finBaseUrl = (user, company, type, start) => {
  return company ? `${this[type](user, company)}${start}?company=${company}&user=${user}` : `${this[type](user, company)}${start}?id=${user}`;
};

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

module.exports = {
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
  isQuestionPage
};

/***/ }),

/***/ 401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  cookies,
  isEmpty
} = __webpack_require__(903);

const {
  getVideoUrl,
  getCountry
} = __webpack_require__(908);

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
    handleLang: function ({
      selector,
      language
    }, IS_CANADIAN_LINK) {
      $(selector).click(function () {
        if (language === "es") {
          $("#temp_en").addClass("hide");
          $("#temp_es").removeClass("hide");
        }

        $(".fin_video").attr("src", getVideoUrl(language, IS_CANADIAN_LINK));
        Weglot.switchTo(language);
        cookies.set("country", getCountry(IS_CANADIAN_LINK, true));
      });
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
      const iframe = document.getElementById("video");
      const player = new Vimeo.Player(iframe);
      player.on("play", () => {
        $(".arrow_lottie").css("opacity", "0");
        $(".title").addClass("hide");
      });
      player.on("ended", () => {
        $(".cta_btn").addClass("active");
      });
      onBoarding.videos.handleLanguages(IS_CANADIAN_LINK);
    }
  }
};
module.exports = {
  onBoarding
};

/***/ }),

/***/ 395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  updateRoute
} = __webpack_require__(50);

const routeUtils = {
  setPath: function ({
    user_name,
    fin_number
  }) {
    $("#user_name").html("" + user_name);
    $("#fin_num").html("$" + fin_number);
  },
  handlePathSelection: function ({
    company_id,
    PROSPECT_ID,
    route_selection
  }) {
    const paths = [{
      selector: "#route_1",
      path: "Manage Money Better",
      route: "manage-money-better"
    }, {
      selector: "#route_2",
      path: "Make More Money",
      route: "make-more-money"
    }, {
      selector: "#route_3",
      path: "Both",
      route: "both"
    }];
    paths.forEach(path => {
      $(path.selector).click(function () {
        updateRoute(company_id, PROSPECT_ID, route_selection).then(r => {
          window.location.href = "/route/" + path.route;
        }).catch(e => {
          console.log(e);
        });
      });
    });
  }
};
module.exports = {
  routeUtils
};

/***/ }),

/***/ 359:
/***/ (() => {

(function () {
  'use strict';

  let isDrawing, lastPoint;
  const container = document.getElementById('js-container'),
        canvas = document.getElementById('js-canvas'),
        canvasWidth = canvas.width,
        canvasHeight = canvas.height,
        ctx = canvas.getContext('2d'),
        image = new Image(),
        brush = new Image(); // base64 Workaround because Same-Origin-Policy

  image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAABHCAYAAABS+xFmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFCHSURBVHgBpb1Lz23LdR025zrfOffFkIQoiDQl8WVQjOVQMgPEidSIE8SdpGMJ+QFJ2k7DQtKO4T+QBAESpKv8gKQnpGEjUccBrAC09biGqJgSKYsvkxQvwfs851szq6rmGHPM2vtcE8m69zt777VqVc2ajzEfVWtvNzl+6zf/6O8cbn/H7Lw+HeY2X3gcx/rgcbrhWhxhPj5f7a9/3T3m6Qgf1z3v9euu8Jgf0WZcv046hzgsbxj/xLinzucR8zza5GW3lx5Jsp1rSrOrfDtfb9rfO39uF4/t3J0bDxnzZTTZS67jWFy4d/64zp/zdXYyOBg5ON77sQ0gBN9tm0dY9n17xEu59uHH+VMz2l5K8st41URxbOI5hdcv6aJ4uY7Yzve224jgW5ydl/PV7OW8rwmNMfYpH/nmtO12uX5GUcouH7u2nGfv6JQJhnR43pxbHZ6492LiuQsxVnuPYcIXEdJ5jGOiQc00RksL7ywdk1jtmmzO0XJcGwI9v/HB+eK3/+f//St/Zpzxdfy93/jq5x6ePPtfr2a/SmW9+nJHI8fLJNW9WplLRwla6/a4sMQvfsRAs5A7Zls/PIBLDnY5ri5utI+WwGeRp9f7fn5eimTfNcTiikwJ/C5my5FguPpiQ5IzVXECc97rq80aw/d+bkEnrGEyX0dHJb4U7nzldFqPvq6tUcepc+qEu9LeeOTJk1Aq1yyUf41ojwgVG9oU3zmn8Dn+0rTkasg42bdMiP1Gt7OQN+7ioeZN4JNZ0wtT9tnSNZlrLMWVufii6cP4MzuL5Wgdfc45KvU/7bH0MlSekXyJ4v0NL1aLyYdY16Ehs68AcgwojOR6gMap/HnnFKYFdFXGiXNJMLJNogW46gpyEYlVwXFpHeumNZm84JdaTuMvgE2VW3MX9jjQDoLojFhE/4P/4Xe+/A/G5wluT/zZP7o6+lWCkavZJfdMtCJHtmoexJeIbswwsLwfbU0hakFBjTFZNbUlwSrvcQIWFWxFcKOHMmSMs86vew938U0+gobLJ7YxcqCgTfghWuYTBBc/cuaR73O8efJQwxM2ruhSxvM1GXQ6x5rtwpXzXST5+Qja0fz/+jznj4n4rVWpcYI63BPF1yh66w/3ky+UJYiNBJVIUHd4k0aKQ+jrU4SMNRyMu/G/Q3iq/RxG/dG+V3tL8MR8wGOOMQkM6kDSu+hfgMw5K/30uW7tfs5rNVjy1/NqQeFqjcTipNU2fierVGZU0XABv1Kf5F8ybRpp9R2MApbaJllGu5L+HLJeZ0MRZoqp5LSOaPOC+afx17UYWdmkM/Tuceow00F8YTLPDV3xv/9f/se//xvj0/Ff/eYf/mcXEZ+bTIU764w1DYdcIrAipox4RlBD9ocHjMyLAcYRVgAZ7OEwduxLaZ1ckHjuWIKG4YNLgY8Gr1sCd0iqDCkQ1KRwPBQcDgyQpw5PS1jGZcdu1GpEBLFUZKfiurlGOrO7xXTpZzQa400gOkBAMsVhIF4gbgCCtM+MNrONJ4/cyduLh34EPo/32Uc5HkuQAk2HEVSXbMGZjEKSJ6bAYTXv4hWicAE4GlVx3GEGDsNdYIXJdvA3RmBWYmw8r7kM2sOdwOYEn9nPUXPW+VWHQR6OPqkX2QEit8OXEqx710Rdzi1phVOeMhdrryJgz1QX5u5AtZR32c6cCEABEz9SBw6HinjFbcXqAjojLRuOy0Wrk5JMgWlbvGTiAK0ioXXlZLAzr2VQZCJHm+Wp/3a8PvisYU023ngwADHgI+ImPWR7tBsA73ydYaMfB6wKbXn/YV5ZQ3JTYd28uTkot2f0Sz+lGk9Fq3OVoixxVVoABVoTRHthoCfT3Fpm4MqfUEPNvh0pXmxSNsllEOGQdNb9inSkD0wu3OENFtYzNTbhgZBfGVUyRlLBNX2n9HIAp1L1iDboAOgKjuk4o1Kn7O5GZYVhSpQQyjbW/aK7lQhWVOAizDTeEKmYINktbwGeQeioNs0qK9VJNjl7Lo/SZFjOoc+q0XBBR8BfIf0s2SrjAvCCoYAFbpnSLTLX3dCF1eJAUlkim8YGIZURZKkpU3zQKnpYsrkRG3V/jcDwJccKGmQgU+VMnTyOWxth99Hef+7v/idvfvbhOvdx34FIrHPOKz9nLL1CvwXBLXS9d6RsmxcnUIVliO7WjNe7+llJCiFjZbJiTAQJMa6mcKwSJHBVFmOxzYKqt0oBBMY0oKqn1aQWbVRCZAw1E4/y6pF6s26M4rV1cCwDNbShaYywAeCbhRsjYkjFMCsOaWzDrZFi4Z0t/U74DvUVyTcYBSJYiJCjSF0NYAsHMik4KMKygyieFvOjAUlsUSpkzdoabw1xIN28YnMeWpfTKCnJDIk1C8eaGWdmbb2mic8zGltJgTEsC8g3sl5X+sXgZLOkoSMnal4bD6a4znXTchpAfLTHTeEnmWPqSBNiIoFlIZdcL+2lxC2VJhjEKNAp5ML2hM2rbBUmCBo3M3657xkJyIvPPdD1rXaTtzfjYgAIMWEswlyjrHEcB3NRhvbaXQFx+D2ooxJY/ROBUH5BTtY1WKhdM2jgtQaBIqHoybhOQ0+jMJLoYPHTxYlbN6ADns6zP2Gy2f3ibrRon0Zu2vbG2xeJtgyK6a8JoC160lhdTBbIaMm7RW6yVeSDGzOqWw64Kr/Qac8pS6HFEVUDK13nLVFd42GBm4kgJO4JRAXCA99qcnf6vYl4E2ABopHRB52YJ7dDwTTI8WOLfotvTuCTiwFjITg77IbBsXnUOfAQdye76Vxjd1pBXfBywXKODVdP0M0jBWhFWRTPvUX/0b2mNTe4iaS8DxsGFYVjYTzqAse2/Qj70COePPpDoyAXHEAJFi5Lu0hdGkSnd6WDIIxRc3B2opyTBUfqv6eLd13lSeAZwx+MH7yBWtm7KFBfYTSWoyoSMgxLQyQqpRf0e8XOjbctwmZqvXt0v/GmBna4YNOKguwoVpc/gj1F3nBLjQAYFHM69oUoDZmMyrmAGQqL6KTAKgQ8ne2t2SjqloeFhaZGqQcuc4jGnxuXBblI0uNW80ru3nV0nR4jbniDtdXBods7joqsGCEDsE2iIshjNWBeQ51n5FSOR8AGuB/lyo2rhowkmtJ2UGcUqAawzCW3K7Dr6HwCAE2ZwsE7o6mQKDjfqJUTWgJ8scRJeALj4mSCIx2EKbECWHkKIbpbh6nldGQ1uoHduPz4JB6KRFGNyNrhDoVeEwWMZqggyMn/DTOFH3EQZTk163uuEAblbTGrhumZpndLe6IgtcbS6CxNqSimBSBWuDfeHazJTF4e5XSMEUNSDVOyijsUkNasZFIY7daAILIAG5ExWI9qMfqiP/mmClI1LalruIKvcMmVTfnhQKoaaqTaLsqqKPtoIBLVbgKyey3R2/1aESCdNnsjHpMPsdGjEygsnnoRNKVY6B1CfXDk8n6RIJey5laQFIisdnEMiSTnHBotm9lItMb6XwLdGDa35ujs2YdzSwT8VwEarZY6Fx4dAsgc2pgbENMKSABFPrZoKXAn6yVarso3jVG2xgDQGSFYRu62g0wZUhpRzqAUd73e2ct3cKiV0JoUxc7moZdtApyEMXNnaaViWcFzJWrdfvRbxV1gDEMYB2NbyoDqUDlPY+Ebtx4ZUiVQmYZhVKgEvsMqrp889xLKUeFjGZq79aAjI5RlnJXzmRi1zN4PGBR5VFsjPJXWo63wGaYMD5mTFIYuLW6kIbJMPSCPbvNxRofFmxUr5TaISaOn0/Eg7+DJ5py89GFNUKK6ytWC12Vw0p8z4GomQuOkkUDYPltTdNzH7j3D2ENwx43MA1/dJBwS+lz47QywSHgoKOUSqB+e+1DcRX4e7b05wynwfvHNHe/1nhoyRZ2GBeBqegaj41zX9SM9EMEqA4PsloMEEMBXcSTQZxQSCZ/KQcMBFTJA5+FXcZ+baXov77OPG8BivaeVrOxBmHPzZobOLuEkmG0u8NwhNFa2gHApcRTpd4oMsUKaCmSDl1BTklHrjVVYb1oHWp4BHizlEn1a1qZhugYBoqgYdTV2o2uc8nohTFiFT7gjxDjmllsCowsWWq0LrX+PFT3IyCbGc1sCQ30pLYFhGTtUvHfMu6WvVnlItmeAvSaFCwCXM1hj8ponPGxFkY0ZjASV71atMpaTGo9qKSwRHC8eWsbnXtEIw1lyAYsFZiJ4S7tdRmThFV0e0Pe0vx45hDWfUM5PoqzyN4oAYR4V/mWWWV1HljEYqdnycqfOxKoGa5RblS8QDVGMWZivQiRp4qsjHXUWqYhI9clFqDQ/wz0pj5wG3y/VSkDjAgIFLXFMj1jJW77zssO0PShTrwTyyNOx13AsY/HqNPELmrIEJd06RsqB6eHJI2tgAMJZR4ED9lSumgAz6wTLdUOqvxbyMQZoARp4RSRGT0qP3bZOBNoIuTMiyc8VWLuMV5HDagPzVE5nTIcxC9Ec+6wiIySnZSbNqOHx48wF82bSUxMUYGD0Ux2WBAQ05hizVHSkPaP4vBglhphkYcrJ79EM+7yKDJpE3kOPTdmADiEzpkFneqy8PlydVzDKc5ra0kvs0SPfEDl5QHEbjUXf4iP2kGEQWXxhnmSFwAvQvT5SfNANxzgabUyuetO1xo/l5PoiCMskhnTErel+shZzYlRJZLRqmxzzLQZaxCH62qOrYA3VpVOFygKdpCKq3lrHcfe5PWeyyA8MeZzZ2tI+nYt7OcwcvRHucCpu1gyicy1EtbyYJCxySM3KhlNTrCJfmrqbBH/i5LT/ZsAWAJvQKBzZDiUeOVeJAjJFOpwSqbHKoFUzrMVZfisMmTd5kxc4X5EB5JQ0OOhESwBLSyUO7MifAJKGS84XLTiipif0RZEhNb5l93ODoy53mqTl8/Q4JRt7mcLbSkWt0mdlzRoLoIGFB2kiqRNKCLh2MJJm0JYiEPCxxMg0dPQXRC2nrKPNKXKV2au95yZdl2EzHfY7Tk1WV6lfRjvEdbeySbhvh442qUHdXhKHuDau6HypPIFDvJbFBihtVZQKFCw5eD2ViOizYKrogG71TJmLTGP1YYSOsXJAYo3SIXMK7ZnvXGm0js2RaSHvabwvd1iOYBm2FRYRDUSP6YnyOCoKUnplFlCmYkSwfxdwKaBlIGGo7VBWLkZfAQltKtOeQ0BJlG/3T6W4aYdeCEfQTU3Dayl4GYWL/Gv1L2C4+WhMNObAGMEk8x5hrXqbyXy9RRXK25VCLXAglKbIM/ZxR0Sa9Qo+G+WpNzuo0tNkMCtKoXzAGDRqeA/Kv4IY6srU0hDnwpVnOD5G1AVSkXx08s8oM/ITsoEaRQ5MmZm4nwA74ha4IECHT3NGQE6wE0VSdpjQckDCGNJRoukIBppXw6wL8LpEdrWYojfjxRFtKbAhEKrM0ULKDhOCMouMDcay39XPgywxtVkd6GpdwmDQOYTWAkEdZDyrNkgLDY7O3G5uTJUqZqtu5vDK20RsDJgZ6bp0kFwKnLfgfWjhO9uKwkSemKw5pB5BmeS/WgjGLmuvRNUzIgZwSN0ou3DhgUGPmTJQAWXLBFY5uRPeZNncTO0U9YGoWa5RCFJr/thnQlCBbEFMPhiGEsdSKtIo5EetPFY7iKICdvApb1oD4B6xW9Sh5jwOmURGMEjy1PEEple0eSkxjUf0zkQKPQIp1S/eq7AqYqjSZUIu0lEvZQYpWANAvST32G2lSZU1KJ1hfT59PO45NcqJRngqUfQww42b7dbCKjYaZ0VsisO5XWWZr4kQtT6FkfJfaL9RgZAWzG9NcLqTBJ/ISQICTQ09KoQZzDuj+n4yt1TfZqXNg+1I7s6oo/HKa2SHl62cGj6/cgor4Zggyy448ThFg2UNJ2nNkGjpd9yFaOPGS5PVQqM/mZ4ujMQUQMi4QPFGA3jVeGYJWEhdAHNlHi3uLb7lm7UcXlJe6RUcxprzMtlDokSNPjVyg87cjp+AzVBtfVD5ulG3iuQtEsGR6ajWAjEFBl4hwTX5aenRvNXrtLIOOsnvcKlHWWo7+I0oyzFEElKRQItk0puivtmiK+r5BtCIeJLP62F4a2rgGLvosja3DJysFn0om3paQ2iG/NHJYT03c52bmxqjQCKCKIHDEKIdz04CTW7siTVR369QF13TWvMeE7HD2AbwLVcsvJSs7vEhHtzvboEX5DOzBiW1IlNUrzOHyz3ZKOCKrBFfs3DUxjEHyRi8ipgmUQCjPAi0eLbG99oh7rGvxc3nYmMpucrSdSoYnp9W23QP6eWxY5wOzHFywQp2r3ciky2Np+1gHS47XctZsja0NIEss01Awq8btht10dJzB+INtKhwZtnz4voCwyBdZQfU/WxUJSnlZWyqlNFQ6UmPc01W49zYpIrPlZIaDcgZfVZ0uchfZ4+cUNKYm5trTFe6pKRxJNOX3Ly69kLNO66SDHW6HGxkrfs8vGqijKCpxqhdZ9jm87te6JgFbDJaKwA0jVnNNUqlGhsf/s1cMXMQ9BwwKAYfGq3RYKErRU2UWoSyLnWnAc4UkJtZCzZBAF2Ij6/WusZ58mJEWiFIx/6g7fleUsGw3rFX7SDnPaUujo425tpZDpDeAqmbU8dJi89vPFhWEa71HqE7NArgoxeZ+bpJLQRjuWUdoiITCgaiEKKrqGM0J1xkrcYAXREKtOPvSG/utIwaZ5+DW6uxURZOmnuUQ76mpruoD+nfVAXnV/HbovpG1FN7fIxBRcZyjm/b4DzuOBBbAS76LRpTV1TTkr5Jz1GRUg28NN85GQcp+ZHFcSDB7MutotA1Kpvizp1RtTM+u/d86XIDQ11vv8d36IAwwNusJZoDXZ7YGKp/BvAIylJXSMOrKC+zk+wr+zlI6Dx5Rm21AnWMIda9TlaZFV4W+IRcXYPeyd5EM6Ru5w30cj3D9f5IUIcDGseBSI5d+82AMyhRCxFDzy35YbBJC4+mkLWxMoot2QeLtJotZJjtqmzortPmaqgEGlG8A8pWGpd6gNQpTAv0VtrUdc9Jv20EUJ4wASprS429VjXBuwKYCrc9v/cLyuht7n4PKJo3oN+CMpfwHXYgSjPa5m5O8NIrQKmRMQUrnqOe5LIZVUBVhpiji1FXeUH9gIkOAJ4OATny4qgIS1bmanOpQ9Kcsyxe5DzKuME26lz2Q0Ntcnf5s/7qZc9G61NvLzy2xicU8m/7dYZgLrrmrU5rGykmoEu7EJkkZ8wrTfcNv5ueB8LhGkkKyFR7Xd1iY7Lcqgd8NvfY93LVeEUFFTGyjP0Y8RCsnlZI5nwgOjZIQydokyCbHtlRB7B+T4gm6RU3ryTApLgM4YRZbYqFdfZHGZS8/KK/pLBSBpNRkFpGcJOaulbQFRrXBnRa8smMv9fnlmfC5hbxrYazVkvoWEXp1t3pI118l0ywxLd6L4AKQYek48hrmqK68KUYUQgOzVpJgsorlBKcj8WSzXR7WhO2i5xL3mrlVKtM6cvBtZu9I6qmi+gDqaspw6zppG8A3HRQ35vyORngWTU9xDkIeXlLeXqP2ivI9skVlxAHZIFh2J+E+5dMHRiCyoFXfOC6KOc5r4wnpEyR6UowCbUwqsKylVA2Z30Fjbn1Ya4nqOxXY9HvWhwCZ00jtRy/LTbkwl0anWlQUZn9irSE650ImqfRoy7CtDOZiOS+O275djrKTIHIVnWKemIfBU/wOx2HIeVTD096TAqUG4J6zdW4CL/1wajIb5TYWz+InPIVtBg1aX0jyVG7KR3e86ZPNW8v5W9Eo1cxgjnmYUaX7JibGJuJapfHq7EKMAlsG4ktynKAY7Y/9LrfsptRIpialxABVZ9SqzwQJZSMzfo3w2aU5RgbHm6MldsawiW6Ev5SvvZhf3lEstiKN65OERGae0lv8gXjZ0PR1wCQ3OW16zexevXoCYbj+vpWv9JZrgmIvFDgugvK61EdT60c4xzlqERKTBlo/4ly3RbQuzU+g3/Lt4bM0xHCyQkCG8Y6sV05tP8Hu+mffUygYuTCgCxcltenXaDibRI5TNTBbnCHLeRQR2JF6EzZ1qKz2RK6YgEWhkwlsBK+w2WY7ZaTnnJZZ9b9DAGRS8htyKFrjnePCGMqlwwqsDWzqp6yX2pLqbUVtYskFUQf2ftbeH6eY0gl9K+ojYDC1CEjPnYbaLBej6jtCaFz/nCagl0JjMjspDmDkKWq6xSW2eiOYY8E3mw8+L4eG0rq00rXnjISLcMpcMt8vIv3ZQsnKseKmCmpjGpE7laiLP2QZxY3R2oIOmBROX5upJCnppZNzqZt3wGDfcq15F+r2JbIAX6DiFOin+pUFHHJhOY6mXku+14PWINqppKoEREEBaAYJ2HlgNPg2JIurohsTiySGe2raaAd9fFyWLJ/CT2aMW1Mr10IC8diKYHS2tp75LrnR+ak3r8xTieScQZiSkljaJxNyaeWm1R3Jmby4lqNSYOjqXr7hZ9o6LPS08NrK0EsAGxKy1sFjIsCGnhLGw48spUgH2L/IKQovMOitA68nyDqmkpTtyAimEUpJ2R3ZiSHM103dF9YpQkKuGrocT+VKne18mHZ+CpbdcKbI0rUXbmn8D0H3sfVUcMb76q2J+moYfmRBoeFILGq7nHaqubyel2VARLrV6q0BNLY6Tdga8rzJC1TkCmbEI2N2qKjP0gCGa7+FbezBATELHnifSrOjvUst3AvxxqzcwfTuxNdjV8SChd5CnDlKTg/wdhKS5dTdS4sqn2YK2AJlrntI+BeCT1XH4kFrX3qp5diKLLKzENv6Z1FDdiUW1eZ9j6o+eBDeVp6UYTcphhnjGRJM0xOirpOk2lTxZh6rnIlAV285y765rTJFFd+i055pWiKceVhTUE571VyU/GTMbIdYNF/+J25ubB2cWWVATawsBvptoMZkksamW/XniHpwPGfm/WSgMku/PxcXxnhGplDgl7LcS5ppMPzpoct8AKNuJbn8IhY8cY3XgkDPB/tYZ5Rjgg/oVdmRBCNTbUMoRVjB0b0RtrdaoGBtFum+AUWK965lZHLvyTeJNPa73HNVrLjW0BytmN7vzN6oFC/yJ3bHYbOjs2lswsl+Y5xu9DoN6SueVgByyZAYg50G5TYNpnI8Ct0TG1AQ3EZ2xJsTFK1FCKji6Qaip3AFJkohRREl+EJsaUcACqZSGe62xb1haCbIom22d+DzjZvg+LmsOSDLnOHmrDwMHKJF8QAM9U15rVcRGlKDoFZ0aEAmXwAiNGyvXVMuqPNr+5rpFRXSbGVQzFr7W/4CPkt3LNonSZtVrEC4vZQcFoRjfd5lm4pm5fXRJmy5FyR1NShXrFu9Scv+jyK9naIY7NsBtG4eg8Tfq8OGSxB9xPe5oRTr9uPyMgRfesCIqwpNIJSrII82k1gMSk9VCDDKDC4SqNwhqDEfENnzCdN7zH2n+7ZGt65eVlHNCam2t7c1n0kaYM2hur5LLwe1UHbjV7zhneq/o4CBvYlmlP4Fib2mMFxClDAJkw+S+0iDaA5d4Ce3cyRSkuvrtOoDuqv3e/dOS9N0JQXeFACFpSrFZwMFWBdADq0c+5Cl3tb9BVqaw1JXOYFMMz3oUhCJEiw8GjpO8xg4WKiQk6O6NX4tr2HQ2gOBO8PRvR9WuC7ebQgSOXh4SH5K8f2zndvRobyWrR0Dfft9wiQWlbFi08c0yXaKoaOv0hEYgSptCCNNAHUUPNBuiXd3gCGmlO1z/UF8KxUOKRdo9Xa5F0jjIqMXIc0jiGDMbJt/XESupxJZK25eGvk6U1yYKJut4AUBNIvIY7MCHzrptxT3LAQx+J0c+VNq1YQqkzc4NinsHPTGBl5sb/AzGGb5s2Dc27W3CnqOF4R0jq4d0xATzypYxdylFIzmlIMrqnla4KSiaFYyYeFYu7AjtqvUEKcFESL2sqQdSL3hIu2RXP3h4hu3DtvmBZLP7bEWP+Z2R4RNyAyyivcpKBu2zduiOpZ1UmZDSQJCBhvolKTdnwPRfD6HFvJo/paM3bev+lhKZVTq02cRfWRuoLyiHUfbQW6jhNeK51HOrMlb8w3hCz05bKalxfDOv6VxNzE7m42mQpTplAROJjMSKK0hCLf93M9JOg1BXTOs3MUK2aZGpMdU0PWszHz99XKEgKTcAq0eNEQObVS0DbrKptRY1gpfnqhWX9C12xfW6jhQuxQwUoVRDpJg7dgfURBygrMFAx9y6+VjoenHj/3iw/+6uvLbzy+CPvR9x/trR88OjCEAJO88ahHkzRiMpYqyPZaRWL7pFNXZlIqVo+S2FZRTf6sc0PEpyN79lqltM7X8f6Tv/jUPvaJJ/7NP/4g3nvnhDpDabzxnUVGAo995ONP4tOff+pvv/Vof/H15zcMrIjEqF9kiJ7HwcUYv/HBTcdNtl1sgMLIRa54V9EeXVWnBW6EnM5fOnJQTWNJE4JDZ1svWUbnPRxcRNszNwrgXv0IcTXDOVBGQpxbb+ark8aynHEYAT6XKtsq4lJo8G0L66KBpuXTRN53JiRoEY2ToeNHVr0hvRn8Yro+71IJRSEBIixJO6Rm2BwWJkXRAoy61R0gYBtgcU8UReQqYwF9z3HAVI2ajMGeC6DUCk5T1ZoCx1NwkvZUGh37TkR3GaN99t98xR8enLSO47NfMnv3ndP++e+9a++8FfKNlwkQBKIia37aaCYaLzHE7vXrSNxpq6swpvTUc+xUVKadRUVF+pKKXHdfgDWB67vffO7vvVMdc4xI1i2Zknc4njyYf+q6/0cXqA/QcjWbTXYqVCN9JvsALFcjtVwpACS3pf3pnuviVqO/nnNcY0SyPvkRXLm1OyFhWiGdunrOIHiHkcYli3U6t3vAAnJeBCzDhs3ZJt+D5vMmfRM4yG93qG/Jxb0h6ZE6NTofnJDNrtEtzoACybE+MvgivQGX6vU8F0EPyekp3gSVhRUkx01iiG1FqzPdNkNeFO2hdEbPYIvlj6L4rQK1A+7M4Zk8ULEogeUQh0RL1mEjrGU6lUYIKN0DLreeItK7eaWLVrG7NWQXb/PGxw77q//Wq/P0N7/2vr3949Men1s8e939k7/wdF5/fJ4mnXwBwWVocSN0MZJo9MucCljWzAlo6vKu2Xzxb7zir7522Nf+6Xv2/jvnXcCrvvCEQTNyFiTWL46nfML61yuLTEjrFj3dyC1JL4209qRCk+nmMConKyD3zeEvfAYfxfDmfaVVdCAvSR01wk38UbCoKrRH24cFp86WjdfJZ9p/WGxl++UIOiAr2q+hYeaBpyAWJubNuKm+cSAjMHOAm44XMkanhV4PoljvgcnOSD153eTQhilarlTvITtnbaQJCWeDOXjofg5sdGPNyNN3w+sAlNKvMqJnLG27d7Q95VuylL0vTdsDgoCQKkhw6v4NBAV5SJuOrVGridxYrVc/ajC8tJ2DYQ3u/vwXns1T37qih29+7QMD2weZ3/vz5xO03nv3XCfEMDQyUGwoWnrbalGejIoMz7ennHnu4z/zYK+8LjqQvl9pqChBjX8poWdqsh8aqWAjp4J+0CltLBd+11z4KzYoXsc+Bpuqn9wiz84vjVq7Y8iA7Qak4Awaf/uRQR7GNtsNFHSGi7M9C4ABWFl5yiySZYINuODEsa+L6ZykZgIY0DQLqXmkDyaoROljghlm5lEGhpOpX+6MvFoJKs9HAyV00IGScyr5YfWwLM67vgh8opK/mqWIGhIiEAoBpQAbk2nBOLp6t2ifcN9ydczhHcvle0HC+sQBcg79vaPEbsh9DPVAjx1k8JYiSDh3q1wgmpepaZRrFfBY91+1rPn57R8/1m2SBr791tnPWQPloqoNmDPjWPeMoiwfSM30wZH8gYNyx1K3MpnWp/JMgADGcMeQgXjQEnzDRGiU/iGH6M/Yyd3I0XQudaYmHp03niEswNa8pSlxh2SXqQaBztHnLc8j14nUIZjwko0ShEMtApCZbfkVMqm+bqyfES9Qw0qgNdBdYAV9zctqc/KyybgIXVaToBJm0aUFJd5trmh2K1qLQCWAfZFXkWpWPGMhfnGBO91vjuVBxRNp4WQNE/CyOJ8/umAmEVx5CMrGleSKBmxfLUNZqylR4YOJsG82cCeJ1s+zRrbuHK+nbQX1XQBh3Cm+Ad1aqDDWWzy2ccbbn1yF5U986sE+86Vn/pc/eGHP3xGt3oDKMmIZ8/v055/ZRz72xF69IqDnz8N/+J0XV2T2Yt72xkfdP/Gpp/aD69yL52Ejmnvjo4d9/Y/et3d+vB7S+OhVFP/kZ64I6tVjpqQ/+O6Lmfr93C88W5+/89x+7hce7LXXj3jydHHq0194Fs8/OKdIR/Q3IkHQNtpgnAHEP3lr9XEtJPQwNaq+NRYdxvy/9acfXHWuaJph6dW2WH8eI1UdtH/ko0/mpe/PuT+H42A/o4uP/+wT+5lPPkxeDV4Mmr7354/V6jouumfN6tt/es35F5/6kMfj1fZr/+y9aZtjbp/8xWtug9+v+eTPRfPkAYHeujMJK4BZcamA+E0KLp9TqU1AFwsJAe2LarMiI4/N1js9efM8l/2LSKJ1IuUgRGwNPJOwyGgbHD/WIzwUVrCo517BisTQnILV0/Ss9lf4gxoWUlKBh6T/6ahpnWaCIPXF85VWJUejVCzuYLI1o7MJAEvhFa0h2EHueghV7Z7ey63rvXGhwEqx+dP0VkiEaWil0mRqmxuZvUbN073O77NrjTCOuKi+y9+2cRK4LkOJT33m2awZ/bt/+yP2kx+d/tYPX1zGNVYOXxSnMlUZ7X7l11+/0jX9vmGzn70M7eHp+/6tr39wAccFgr/0bI786c89ZTS3yAv/zJdeWdfz+Nhl2J/+wgK5T1wG/t1/+XwaN1b80G6s3uH9AKPvJmh98lr1/MJff0XG8eu+AQZP7ff+4dt2rRZSdz77pWfXtXpaDAD25rXYMPrEMXThdJYAKJMB0v/2f/C6jGX2ib/yYB+/6LxqbmXY1zFqhWORY3QyQHHcO/j0sU889z8ZgMR5PZuSeu31xQfMb6DLlRb7r/za6zM9HqA3+h40j35HH5ejMNo86nkmUQb/vSP+LTUdKnoaFr5FZJZpop73su9ApGM0aQAagyCmoMH8MU6qcNR2g6jaFscXfZ0BVURltAm4eOYQxgwqCVgZnWzo67q6ZJXHCPAtoiQ1VU5eH56P1cN7i7vsZuHUZJhEMzMKyFjDNArzfKhoXWuBkgAGAGtSyLpUGioaOEEM+3VQHCM2NIeOe0bL4zbUJrgJJW7dAykX7p1MnHb57Hf4VhHc0hTkzXMeI0r6/X/8zjTmn7kM6iMfP66/Z5fBD0M77Q/+8Xvx3ruP7PXLv74MaCz9f/3N9+f2gYfLzj55RUgZabHtZ764oqb/5/ffj3ffefT3L8P9uau4PwBrGOCIFv7VFXUcT8N//vOvzMhKZztWLR8ue/7yv7fG/IP/691h/AHZDHm88pr7L/2NtZAwVvW+9y+fx9W3X+encY/VTxeZDMD6iwtYx9hPLuD57C+9MiPN0cfv/aO36YgQ4ZpZi2BHdDZS5jf/8N0R6cz+/uqXX7kir6f21g8fvYD06QSW0faP/u937P0JWsc13jMbq5BXOn7VEV8goZxbTT79hWPWFa+oEyZ6AdYbc+7fupzLN//4fX98cS2SXHMejuPzF1BfQH+dk+f8jMBhL1sxROebIkGdWjRijKaWkwU0tU1PUfedxhSxLvWxPRT8TER+yrhw38vlJ5ChZg3AWf1oRqWYGjK8t7phAgmmHZne9VzF+pYHNpb61nzvD861mFw91JxbH7FNUMDNeX2N7MJwkNlPIIAJANKoR/SHkjfczKV4ACCAul6iQA1jZdpplfYZFUBDvvTkXm1B4w0Zfu99tlTQc723ykF8r1HYlZbF17763rzy0Z95Yp/6zNNpjMOQvvK3XvOv/u4700BXSjVTMxtA9+LFAo73Lw58/a33dlKvdnEBzTv2+IElps9UaL770ytVHBHVvPKO2Z989b0LgF7zATSQzej/xYuS3QDRWj1cUf1nvrQAa4DFlX5SGce2hre+/0hBZ+3Rx5gjTQXj/+SKjj72t9+YoPGRK7X8yY9PeqDpH5FDyLz+6ALTwbPR7/e++Twunvhnv7TAD6A1Po973kzAGvwe91xA7yMyG6nst7/+ohzjdVygZN+4QAt+9mO5ADGirkXzIuX9i69/cYHuiC6vdHKmt+AZi93L1p1pD1QFwYWbLE6UndVqoOm/LnplWb/R4jWwrN1jUeCgdLAZgxpfNsAa/URIL7pswVPukTBqU85IATvQGEOF0gX7W6uGCPDW9a680ScEWhpgzrHPeMgbqgPsjjJGTmSecCsk1smiWG+32q6u8NW8gbDN7iOEt6XoZfSot2WPtyVmGTtEYBxd5mDRoyN9XywWurao7DSU/mpNbWm8hQrp3hFNqjXGj3/4OP9ee+1J/LW/+aqPGtGIGL7+5gfxxkdXqvbdb76w4fGT8eUAtmNEY5nSsM3ob/bx58+tUvNVdh/nFmitNFJrNHdmMM+jv7nhE/OP7ZGVaQMr7Xnr+y+UO6zHjQjw9QQtMl/aBed0Aefb+PKU5XxGTWuAFGgZqeOI9K6+rwjuNSXacX387drz/e88thBlpM3jGKn4l3/ttRYDPDysNhgTfFyc0QjhDmBFsaDOpVES+MTwNVBaYtxlQiPVeZrrvVFOXvyAPmGvscUQ1gkAXBnaeguwLeRj5IOvjbEW6VhRpUC3z0PxSSneLKivQo+xH3PLg62gKVpK54rh2cF6j2okIQwBLZm3TJtLm8mgGVqBiHxKs9LAEO+Suf5g+qEVf6/kOjFdoiU36UsNEKCCaIuRl6QjDTyLJ5x+FKC5cLjOeQGdVwjIiA7r1LHD5Fq29nevlPAv/sUH9ktfedXe+PgEEkcd58XzswACusdhnHGlRkkg5cM+242zi9pWw3PVcvxN47e1g9/E46JROecStfnLoNzEUq0irSgCBhDhPE4/Pu+Ug0+rlnX2GV7nvvPNEwO0msXji7hL0gD+Ed2KBOfrT64U88dXFNZAGn4bzla2kPBVHI0W5Xeb1apxsWep9hlRfhjXIoQvVR6qyYeHAmAGSaObM8qyxz8nQ0bL6GnrLyOd5GmtBGAkmMzKvuZPnc2uYGHGkQwKofBuuX1izcvb7tweodqqaWFKDG9cxmhMMOt7KBQOEBobJnYbsYTYLHYhZTg0Xg8sBLqxqj3vObAdSry5jG5mLBzmd5OVF0S46Mr8fJvG4HfAxJO/7n0xLAlpyoX7GXhIhLaEQP7506crIjCyuoDkSRrfWMkabB51mLHA+7N/5emoxxhYaak3piC0aSxAe6RKI+UZEZUWvseB1FDvspdGWqu/AQqvXgXsUQ+b+8wSdKE6E0wdOt7JAgToaHAip8lCRuwjc8U2WSb9xAKqAdjjCYNB0/jsMjYt060j8nb86IoKR/1v8P9KnzsF3oFHgWt3BgSqqGuFH5vcsoP5AuduWnao+lgUXpAXxohpGRPGRoiWdLTK8Qp5gkW1HJNFdV15xCDLEYWiDdYPULh3gF8xIkcM1KZyfd1ytsWABA4PLe2N41wrFWvfewYstw9M05MXM5PEtTUDc6WxVTp3nrapqJHZUxfxMIpGQHKcmbYsAigSTy9TjdtdargJoRqim9+MQ8OIir7YHgoEKN50vIGVtUgt2jjdsGjDX/n337B/5z9646qNPFR68+BxrYbZz39+rfB9/9svLNM3H3WqUff64lfWLvVsP7dMaISDiUEXweOsY9kXr7RppGS4/wt//dWxCmjtSL4hWvl00jPaj+ckx/s/zw2xn71qW2PrwMOzNfpr/8Yxa0xWeCVeq/guK9OwoVrVyrjRbyXcgKo5mHz3jT9edbMrrZu1QYQf4/0Xr+h1B8K8ORgM2EjVz7nqOMB8rLi+8jq/dsRHzXHwr7xqB9el2ACMW+APzMR2oAs+wSFidFMOYQyXnoAHS4+JP9uApN8Nul2glkFBZ43X3ZHhFgM82Exv26I1U2LLYD1PZYrIyGsbeq0aWk3Mj/xtNArpytP7N5cauAWnVzsHgHL18KKksDkrP9Y1h2CTUrqdNQgrTGGtNpRn05PRVW65WzErCV5Vzix28pJ4Qqa9zYMNPhwiooJgZzRVApEkoYAMXh80Raa0tj3Lh7k9eVgEDvD5ktRevHI+Gyni9wbQXP2MVbk3/8k79st/8/W5Ajb+lJARsX3768+LeuVTerfxwPIrrx0+AGqs2GHlbxwj8rqNti4A+Nr79is/+/rcwvDzuSVgHGOP1Y9+8GICxKgpXYXpufUBNI206p/8w7e9pV0bWCzHF5yvAtK91UPKChGB260+2HrC4LXXxorgs+kURuR1LUg4dvaPRQLsazORdoqao4yFjC//2usz4hp/I1J98nSloCNlXLJZRgx3CEe8LNID5xhxAWo3lrBUhO0DCbQh64yIlJCoRGqmm+zoSR5iJRERVkSNhzQtlKNkRRRdO1jmrkXPkHphgvYJ+18BUcKcZuHEOYSaq/dajIAsVhsU+nN7R1RNG+M9+fVf/rv/+fX6uTXb0gjUZSxjs/H7DAkgy82QdMPTNpORS25e8LtyB088ya9lceP3x5twfrw7QiMZ3BDCSW/Za33gJgz8qg9/sBXQ2D00AYleU/tFG+CmpJDwWtDS7Ks8cNGaar3Onld2dq1C+QCLYeAjxHhx2cDzaxHuh997YX/65vv2nW+8qC0Stq794NsvZhfj/jGXH133f/9bz+07f/YizjNrX9f/P/7BGVcx3q1Nw+2H330+N3OOduO/Mf6/+IP352NDIyUdn7kT/5rS2EQ5VswmyNraODqK9j/63uOIpnPP1ousJS26Zp9/+L69+5PVz7g25jjOj76gvfPaM7n2jpSwZN7jw+hjLC786IeP/fnC6/2zV93f/vHFt3/1wgBmf/m9x7j6wxLzpPUvr+tjJfAq/rPwcUVQ/s5F5w8vvp5n9pjGOOgaCwVX33FFmJO3zz+ISy7P4+rHx3OiSx/oKEtd9nNeBoqxNwzH4K4Sg/pIGKhmYswdKskpHppZpQ9pNkQj1zEzXEAae5O2lhvnwN2d0PQ04NjBOcT+uzOSgAFv3SrSqoaR5e6Js+eL3/b/+j998/+4zv8t9zJrRQUX8hNvCDgckuCUAOE14/X9UWQzvw8rZxqKkavf9CJeXxHCefk248UJrcKtc96wjHTKPKo2ouBlm/AxUNz/7Bq5mfHh6b3eJUqMAW4L8tvhfYBGm3/onXanY+dzY3pIiCaFfbMWKXjVRCp/qYKym4UExP19KabE19mD4fG6OwTFzXw0qtCQl7Uuw63L0ahPb+PvvENUYtvQfSXba8NlXjR0FrdEV/2KZe18rTDMGPVMRjCSBH9Yk815ntb5l2mhsWZVm30Mi1hnRK9TrdB2ruye4Eu2GWFaSHuMbSn8CpccWyGYYYVqTbT7F3MCt7eFgTU0ykCag0bpK1jMqO60/1DXb71ZtolGqSSTGE2F4+66B++dhCXmZFbt1WPZTa4SeOxLyHlf7MosdEb0MZtOKCWmDPANG8qK2a/d9vJygLNbLoRX/JulOSqBhbGGZrfDaPhdEwQfPpwjnR+2QgAZdp+qjMvizKoxAoSajwx9DMXFM6jKuNKXq4KR6HJTEEee5rclllCez+OsxROV0YmJt4jt/iSz9HQbGSx23Tyq076ILpLK2omhfZsCVqQi5utir87ZCLSciQIWrpfORV7PCWS7kElN4Iq4rbNm36faAqiQDEF4T2UpeXH+KkK+R9DC8RpO0G7UAuGMHLjWNqZGcgpm9CCF+MCAQkI06gWcbqaVTD5ZheJNCL0it3RAgDvMJODGJv9qXzcv0CPTpaDJBXNjTi82ThmwL1CvyiGLCWH0XmF2c74RmUa6li/zDszGBV68BGcWApbF0Vsw2tLarEuyirwhlPBk6XYInwpDlzwbb8ouQzpqxd7lke2mztBALAjQjtdTHJReU876KRHVzuttHOnLW71rnEwaSZ86J8iqi7Q7COFHNH0vIDKJStufVRTV7gXMXmfhDCZPTtswbxN9UIvaMqLICBlY6ZUZUG7VwOgMVpvDiWfu4t39Q0L4aQgcs/JPRlO2grZVg3IqyMHiUdW53XaHsiKuEN3sbNDi/bZ6iIoaKExQaIR3AUWh02ogQVFKcIVlUR6CPVXoUcPPNipI53nVW0Foesuxl2V+QyaNGX0SVBW43AjOhqhAwEf+AJhuGuWYdcYKgTSolS5CW2otQtNIAcQWBsf2JwafwFVsT2jl/QlU5+K6pH26cuRYH0fkp0CPongDxvMkfyJu5Fb9mFdRPcMBzlIBvUUBkHcwjiFPwwSYoqWdUDjSgfH5uc4j4OetIcAJQHORBXkWKuIOEJFUh1xXtdCjhupHRaE9wtDtC/g9CF7GhisDjzKdCpV1tj3xuA/AeClRMDBdA+YqXRQNCSROPCbqpDFJXOW8XoqYUyPsRkVjjTHFMX5H0g5r8rn/sEU6pJzUhA5Wo+yOgNTg7CUHlf9mn1tUtmnwTJ3QgKPILR7jOIsnBKTkjIsDbd9Id0q0EAIQFjpoC/O06Z1ZuchC25oYVGTk0CaWRl+vO8haGec+aAdiGTh6hBJWCk2+4h8CAZ1DKFjKfS5vpgwVfFQOChy8JjWaoGJZ6KvOMAxBqsFIc6rFmPGe37xZc19AFsVPC+ZOyvc1x3MZcXMQll9zE7ZtwLbgUl706C2KDovKvaPJGvM/C5BUdxGVxx05705h8g2cw59Zy1hUBFEOeoqn0MaE+VU2kKMwzLw3iOIjdFZBb8/IM+DIEMvFuSQkREpqgyiJgvLbICQ7f/FibC41HRkGn1Fedo4owaupM+Q7JoudkYTU1JJay5B5glRyr4Tu6C8QVSVo32ziA6mW2rnco8mWgagZh1xuNZfmbuuRCtdd9AggNTpcdKPwbxW9IfBxZWMyrhnzbOs38cWN5yWtYaatafwAekRseVmuLzFGv49TAqBwTjWeWYENwChcrlkHoZy3i1gK3MapYwMvyIW7n2t2njru3JFUPJ4fsMoUVCorqthNA3Ap9ZJvPL9FrEuVTJ50KeOEzoujTNk4J5a6tvYeuNwPHiuqFB8jWjo/gXJ+PtP5uPAiR7/SikpTUSwbDc7QlLT+xEnnZ48CrlCy0lNkKryXhEIILx4FQANt4G3U/qOGcO4zjzqlQ2Tz9RXL3hcIHmBbegTTUkWt1ZPURHJSAWFClbAnyrVDMttqtg6GL6Pwgj0VkobMiKZytSt3q9XggBuHonZAIJruYIDHIUrd+bCpaHoS5+L/S8s5M9qEaZa0zSFuPiNVdInZ1Qvr9Q00FI0l7QTnOQW0V11xATKptzXnqYbf2BlNd/Nm5SI6az7H8QznJgbafrqKtqE0K+4cLyjn0FXydCauNbcSiFlZmfeV3gbA0gaEhSxTl50V/eo5rPhnHBvnAdpqC3wJ0lsTGrecWoMtfgfVZgdfgAssbc6A+8aoKkZca0DUwDwanTW7ds5L7EgBzQsj17/aL8C9epQ64eox65QdsMaRv660Tdizm6DCREoOQbuL3dY0JKfVi+aq1HrDyhGRRoV1T2f762KAI6Y8z5iepYXP2ata/GRO0OGtc2EShkOXHEu/7C9iI0UBiwBaCriWmaHIzenXHCKyn/BtdQp1REY2MCS0N9G0gEYEDX6+Bp98Jd979BNlxLH1F6uWGfW9SAJCsf2VTBL3rAEyLoZVJneSaNY7TOgo4IiivzyGWdpc3kq0EjEB7RXxseBorQ40I5mhGyejm404y69vmUhLfrlizGpT91ibTy4uhO5wCqEjFDSs8wJDeDE5dS23M6R8PHTMzvp0RFukZLJ1i4ff2F1hA1TQKUiwt1v6pp/Sud07asUOVHns+nPneIh8HL8M0UoypSjL43pNkM1cSOidrDkkJTgxts1DQdKNM0yUpwujkTLj3quXo1bAmjChp7V3aLVZueXkTS4BqwFwpGO5ARfF/amO5N1yBpHRATEnFyk2TWJ0YFDCEM8erW8rb8yafUIIuO4MwOiQwstDCK0YvkSj4U/S6aziFp18RTfOgC/gIIyiMOtxPuiDlbjWNuxmfo10JTDEs8Q2Kas5py6sdB8UZVkCdBdvQ8SCyzlamLfoZg59YjTrvA27jT50jssZ5ECUF+tzcCKKewUqCCrTcc1zJ30+HJnwBKBotkVhSDet+Ixab+q+lxbOi9t+Mxf7IK8kmwjhT6joljGaI+VMOjztfzc7tlUe51aI8RhPFo0oOtEDA3Y4FpRLAza5pS6rR+bYh+UIk0J8m6lBSyINzQmENGKHlq8r+Q32qbOu/Ku01WtxjPWw4MzER9bhp0evH0kfzbNqeAtdC5Heoj/nY7axiHNJEZdbwBgJduibnfqKUNqmSrMqn+DmTSBdOMmjwD8NjPKGUHJ1ccCgmJ6gIN+4GVYCa/I3cSTsN2r24Hb+hsN8kgGGrLL3NJgoOCE/K1JN4FtWmLzj5zLwNsclZaNI1xRxWdQQzjJtHhGg1N4iP6f7YtvtOCOw4cDJWCldAbyHkPKLEYudJ/uenN14vdhr6pdrYo+IHBtY38CvS/jkbCPgaCZ0s/8+Vx1/BQxner9MU92auQEUUwcFXLJ4NFmbZ69C/HFvhRHUoseIO94tn0cCIhOoYteK09klELZ1sxgQ+VwVZhL4WzpIqAh+KMDSVE+9Vw1EI5V0h0EZrTIy1Ms4mN+xMtqN1aVlXU66JbXx/ZwF5wZauJ1g9noai9EWsIXmPQigHAeePvfshLDAo0cw6DC21IDdVvoXyAVVJgCLimi96EkrW0a0vihjRaolz4WM3tIFxTWLyqBAXgFWLmyQ/6ErWJVJR/I+X7Wv1CmZD4ALKXfJUfpSvjhAbt20V0SMaX77bEyv1ahj05ekZ00f7EIfFvzuNuoEnaHpPjEAmEO9lq2l8DOHi1zJcuX7unw01pJzK8wIa+PovNe00KfygP3XCS6EQXn20TBmSw/Lbqy+pGF184AqvmwYKIBZJLm1awghV2RVu1dZ18tr9WBlIS+WUGNsOsO13Nm8+ssfoswpluA8mZNFa0YKYgOo2XlFAYEJdKSEe1s0WTtrXZureLmYIaszqdA3iwHTO57seUUJovRuQk8I86C5sqxviNoQ8YXsmsGNzE7dkXqTJw2oLGs4nmllVHGU0VuUnJfbZ4SCR0MS8hNwzhRKhBapK2zG2lb3hU1xiW/oynC3Fo95uESkq126+tAozQokdMmXQBESDYfofQ7hYvcp4GaNEIkU/JuiY6pu/QdSm0UnKzwadruVPgnQrQHo9JYKRCJWJPqR/yaR9OlEJlc8Q0SQXYDxFWHJa329DCdfQKgzGoZ9LhBSKac5QaC2ccErqspxPQWdt4EH7k/iYeexAo1l/okvM13KZaxSwXvlL1Sgg5y671qHrNAIxxkmJjty1bEiBnPmnBWVeDCH1zgTaaC67ahnJC3E2BRJGcSxghSNlWUwOfsyLDlf8JqEs2cqU9YhYD/JBSq2WVtVK2pEaUuza7hQj6CaWRDhuuIF+SH1tQL/KuQX1s9b5id2IHQtv+4CqLB3Apmp0I3RUIislgpoKFU3CRBpsF8OB6GCWk+WZ9pqX7XJBCQEOSVlCkxW5gF+Ue6L7xq5eJHe5SbAqMAGljWj5+XY6Nt0bp2vCDgKIGr8PHc2kKMMIQA/t+9MxCRWa0lD1+X0XPnBrHz1agdiHPa/g2Gl7Dvvt4g+hwt5oH2x4nE8ouwqrgqPswfP/uCUW6cm6GulFIachjuuEf6SgW2FDvSh0LjuVMABeHmPRDM8h4Dgn3AOyqo+NqLLrwSK9yK3pJVt6PxCVLGI5FsYWqAioUQbGNCNMUiWA+gs+rWtE7BA6Q+ZUtWk7vEMBq3pB1gnfUcnvVJxeb/Rvbx/oNZ3OgA3hErKyqK+3if6SmzxwYIpu+m2nfWf4zplFGUYQqNGsCb4NMLHUNFgblYpPedaG4ZVXzAWHiTmMSPzU7Lb7HciFrNCD9XPItEokFCjplwlinPyi32tngXsw9u1knVIeMtgLCeX/aRMdW5J8QLfciNLn84gsVt6yOllcS/AOvY7rT+qptuivbFPC4+dmlfgE/ltyImznrltLpaZNbqFLW11IdGxYgMrj0VvFAmMUrAVMBtvD/XS0QIUfPXMivyyBrHQLZuvjs4zeaQML29jZCQT5RaQuciIBfucmYyXTiOiwoRuJMo0vmqCKwEJ2OPlynbaw0BeqBSijNHS3a3JewF40i3OBqwAf1GlM6S+hoGWinhno6akzdnInOPmeqWOUd62DEonjRTG1ubBzA+zP+pOxozcxJyU7VEKkEKJaat7EtnAqSTOtnQQqiNqCya0e9e3LvRG0erEyb/TqigTQTZ7ZXV0di0aDpOyQS3mrB+zVTBf3Z3JlhB6JIxEgNAiolIV285B75QuskH7t7FRNMMR6F8UULRoKAEBc8xy0zx1pYfjVxdhiCAkc5SQX+c5TYTeLZrma1IwS2Ws9UxGH2akNJWQhlsckUW7c2kdYpbUhKlD4RrleS1qrgGkbiPRU451ys+O16jpZa0dEbfCamBVhkbDNEdIC4eTHuNMZWZNRV0PNS+8CrFW2ngb2Ybk+w4+UN7dSOoe4RFsd+FgKpTMC0xbcRTBQVZ1vbBW6Q3rAJUI2OjZdoXe8LkJIjcA10nnTQF0NShHtiAG99qYzs/RN1aaoef1ymxAtCgDlkrzhai9j3LrDjRI8zDqR7btNchIcTc+rT1aqUPgcem9IYNLq1LSzCixSGSFtedYbJ4enwQYfURxzzX1KXdnvBHbAzFX9H6qtiSGdFHHkX0XOCdiPDF/WNqueXFBUuTeJuTzZrqTOXsPAhOVUFlVz+KoFYaTz0v/jR5tjhUQEGtkITUEIyYUMSGKB82kAKLsZdaNF4gsg92NwFLJvGpSS5NTGRUOojQBGlKOUgURKICDBmdun+dqYcGRWmkgiG4zNQqGxUcpfMlFsEpkBWTwDrZpIHxGBuEyge+2T3UUoYDote+D/KAjaIVZs7qPbPB+bQvqc9pR0Uj7TcmFqGuc1aHej+gsbohIw0xnr3NfNNSCT2ygCmZk5QdAtXiR5yqVTS7PLCt1ifSv9wBID9W1DELSOs6ye3XFPKinQfGGyeJR6nSkNjqNqN0HHasIOIBiCF5NIrjSqDQDdR1b8b2MRXRKsNr3iK3HEP4Y6yfETu4vXU/GNIVBOZLAVKCW1w0RVYTkh75iIcNPRzhlaXtGFGKWrgQ7vL9XFORFgYb+8C5lvaGStLCouhiFI0u5lUlZqMsBIUiXg8EeGZH34F0Hm9aJ9lm+rO4yjdZcX6H1JxV7tT3LUXTvDm4KB+GEVtYZ1lcl0wi8DEOvmzP8tQIgAeZQHlRhvfAIAXKF0cof3ZPkxVyoQzlJM+oCHEWcAB7LHDdLO8Edk4rT0PTkdchCRSjkIpLAfjTVnR41pmO7mSsinuxwXDyjp9J8qN7KCRRPkaIumcjKxQrWuNUm7sjAGmC1onoIiGQzht3uVilogaUzsp6ymm1zW5qm9GGNjwsJZH9WG9cIFlmScX5EAwKeRCPtO+KXaVdqCdsvr3OsCeWWHHPbinwTUo6QUaMuEPSoQzTaAi4T2p3+KwFGwYsE5zRPp0FiU1ZbuTGlt3lgTgDKJkruKOo4Q1rvAOPdnVv+eEhlAFKXCDHyPa0xOjBRzgZydGMFwN6vm8RAgfim3JiAbCZnUMLoK4yYSynp2oy8yD0EaXNecDrE4Y1woyMQxSAYc6UO8UwwoM/JmAYK4TR8RDJw/wi0EAWApzQGtyrBFI0hgNScxSn8zGhs1Y7LAZFv4uzFKRYDTiQlxsxBVldBk29Mg3zkNWpbithCUZo/MBEIeeBgK+RD1GS8Nt+uRQQiEIrFnRaOS3g3a4Jy/MBFSP86r3L41TH0GmeAF0hNu64/TGMdQIOoaDNpuhSyaiKWK0pmJGLewsJJX2lJyojkuTeSk1F4Kbvl1qylHbl3noVwGi9ZEVKkyZHpoUoO45/DC0j2iDX7paGFVR3BEggqetkBKduAhTaKgqfWqBY/6KUcdkpFXFh5elVN1oTcK/jJ0JOpSdK19oV5pb610YvnvIHNOM6ezszzc1UtSwPZ7hRFZe2EjAu/xSsqnS8wxU8Wk7WsN63kL/2B3XUtDQhaam8JNCHWC50oy/MbB5Z8TLyjI0K0FFBc9rZ5ipCkdQ1RUasJOANsQrYhcB5JG99XPTT1Ze1rJp7Y2gpQuEKizoB1hD63Y5XeiW4i7dNozGJ3hQQ6mpNGTME6K4BUb1wpN6Mle8mxg59EejjnBWAP5YbWICipIPSsaKV6YOph+lrd+EZCzW55RaZ0Gu/OppHM9arZILYqN+nlyVazjBQq/8vh/CY/VqqrhkhlXf9FRSUJXUx1Ek4lT5KhghH2ii9950sjr3ubAkGrjahTNwOGsiIQjRAqXfG+r8gsl/ElXQ4LZUQaafInlioOmBzgOpd6TNtWjcTI1gwaOj2QU81PZSDpuIXMQegQ3lSNUpS3ApRU3IqxxAFVTXHjF/i05rnOlic1U7DX/hDVhd1EpenN9Z4kXxiY5xuE5pwJduQXkCrnJptTlyghm9jTyWXwixUramTwOvvt4EAgI39oo96AyHEZExXdZd2LQ7tplKX1LNoy2zV6VpQo9Q4vEGcG/AS/MJ2+2qMx3W4epHarQoJZT4+Cq3RQQeSyhi/y8lWRqqCYwpHPx9KaWCkzPVV5Li7ERQIhAc5MbChDcd5fZEJkiCAMBhk7eFSUyHvYQQhgkCF5qUddyVtZncKEmTkLAHndv8QLDC7v0voiXRm9RHdDRgNeKY4CALQWsjQBD9RX7vhdBSrfzt/uYG/mtuYsL8UrNVqm6QqWplMqnvkyEq+6adHhcUOfYLWFCC2jpd7W1JEsTV5RR1ChAlxSJ2YdSyqKT1yM2qpDfdjAHQSgJ2b7cExhTekYLc5Hc04K+cxUYBaimjA6faeETmzB+4RNnaHyyioQvIgXf9IClsGFln327saq4SkK5OWlYuTY/vhkFeIVm5Y81jjBrrzxxyWRD9wflVsm38Wt7hFPRltrdt5YQeMJyK5ga/f4ijgrqJxDwrecbkpCRnc9nt5D1vS03ry1WdFrrBeVgUZnPe/F3WcaKXEBWCWrgcl+Y71m8bjdF+QbrMD6yBnleCbzfmvAcReG7K4C+c35bWVxukanF0k2txSs12nSFl3A2FhczzFdF5xtyXkHEVLZopLe5y6X4jPAu0fDAp5e7+Pe+/mZDiS5znTXJPVF055RjTsSVwT/yh8WwaXe63X58ZOLK1ZYZguwlkBEpyxTsxAAMVEWk/WKHUgbYFmjzszE/Go8YURYZtrLZsAAYPGNHrqZxa2CqjObHx/66ZDbgRyVYbgy0awFu+oArASx6KCLAaFYdVj83ey5alRr2NSJaBGXJSciwRiTSgEicoyoqtASbhSwjnP4ZgEtoo0De2HIuTLG1cOJPpYh2X0DAMckmgIWZPonRtnqcGA0dEBNtWpVBEcKKTuvDY3l1UGbRiW22FTRKy2/QLeKGcVDcoJ9e1euyMURjbyW9TZDhLFkpLDKE6cAi5LpVYQX1aPOnFzpc3iOujv7iG5cgAFZvAlxCBvwNXuVemjV5HLvYBTNmQadWHVW5xEFXDWkKrj1Gl8shQ6qB/iW9c+d7k2nyVAqXyToSfRtVVJoKgfVCpFHd0iZkmJgJzrZDphbfr3I9h6eysD7Mb4j/s8y1MpQhcC9soSuG6ZcziVj8LdcBCKiqhOgQkbCggW8rAUqxSGjxlKCyeD1sgKOKEYS4ZYEs36z2uGxilP61O5P8bDBP5PpRClY5G/JRX5IRT0xD9KMy0kH+zfOk0qh09Y6UmaixQZtv6B7bfjxjmlBg897gj8UMiPINDBey0FCjKBkhDHLuG6UqPWXf/hVHe1T5jF/ICOUhjRiq5++Auct1ShMQplQcF+8DqV5Cmpqs+hutOKx8rN4lIB5Uu1M/8SrUydCToaZ7SCnPAMNJ3RSPElQdkYFzZQwzSxqbtboSiQDaFjBw5pblyWmIrHOihWRxTiCjECwj+6aAZmUMBitzN7gtRwTivXB98yL5gs5CQTeP8YWn4c/O047fjvRKZAmLlCILC6F7+DFHqwYoWcDHpKMXXtNIkQaFe45MCAoBVUAqSuJQZ1IAoO6V2Gw0WJBU2zoq0a4+og0DChFNsD7FV73yYYJ6FmlwKOf/M0CP6kMgmB8W/cgWuF7jB3QRWNTg4MM64AhP9gwH12K6g8ApyCxG+VuoMXC27YK4uSnGjKMLCpiSEEF62VitCJH/Ihr2uz6s94VmXFSeTba5Rz54Epf8QlTNMrBBFSXDtJZ3RlD9VzpOMlzU7WPrt853/rxlTqof4EQvYFb0I6U8Mw2glsflrYU6jj+ii6Jclb0tK6Xcq8vbkUbLx2eOtAuMtqKciyWK2ZEsWA/TaDWju3jOP7P//F3fvkbx3/3v/21373u+l8yEpqA5SbgVcEMKuhgXOW9XOGyWPG1eCQKUUNQgzCjPASRnuTmDL2sl+MNDvC39GLLj6spwX5xcEhxGXaFyWsE9V401hN9U68NYaEIjX8hfYBn4KMaYAJbfz0BcKu541fUAtCUDKmfVVyP+ggFGBK5dghp2V9IGF1t6t467kQBoe9PCW+Sv0x7YusrGn3lyg08mGtMVWtpACT3WfkN8u4e7egf/Dw3hxLtFgXQdDTVd6A/U74RrFdX/MrvPTpLtlnhtxHkcf0kg5wGXZyeBDrHET0PE6KM+kGd4eSW7aW8l/4mI6MHwcK/BiuOZC84npaFuQvAOfwKAtpzmh2YouY6vo4Y6LFFWm3RyOwvT3vyX7Rmv/Wb//y/OSz+/ur39ANPk7i1WowiNk7MQVfGDVBd8FrfIDE7OORXFquK7pSMew2w8C+vYcCajU4tBrELVW0v69/Um8x0jNuD9QNv7v1GttHJmc3Im0VsJ7760OnUfaoGZrZZVgt1pVYHOawK1L3GoG9fwtI53GGHJ9CSH7dHFwmZ0MHmX3ewE9wfpksYdw9l0zZso/eGdr/f/8aun+rQfrS+lZSVHsYN7dxzRfqiGt5HEWK2V9PI/52oKKHLfHOe0WRkgioZfSyXMc7lUwVs1/QvrAFjoP5QbQJhtpGEIDKvVcgsekfjIg2B3Ilt6vPf332MF7/1P/3OV/6p2aaMf+83vvrxp/7qrz7G4+fHl23ptSfX3+OxXtnh8eh+Xu2eDLy83ss947usfF9Xm57icX04nphnKZ4D6HTmd8mfPk5fEHqti1yFxq3NfuDy49bd7MtPt/+fh/6y7Sk06rVze99ouNoe2/lju0f76F919OF0nR/y/t6YZi/vH+2V5nHEfNph5g1uLxnn3vmflvb/L8e9+38aHpt13tybw8uu7dd9PgE6I/8bOf/reI3Do3Tpcbv25M652ee57lE9ZH9nnYu14O2dELWS6/1jH+XxzoCP9ybxOPp/cqnGo5/3iMw2QnW9m3Zt9f2PbW6WuPL8n/33CVY4/l/gzzwhyi8t8gAAAABJRU5ErkJggg==';

  image.onload = function () {
    ctx.drawImage(image, 0, 0); // Show the form when Image is loaded.

    document.querySelectorAll('.form')[0].style.visibility = 'visible';
  };

  brush.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAxCAYAAABNuS5SAAAKFklEQVR42u2aCXCcdRnG997NJtlkk83VJE3apEma9CQlNAR60UqrGSqW4PQSO9iiTkE8BxWtlGMqYCtYrLRQtfVGMoJaGRFliijaViwiWgQpyCEdraI1QLXG52V+n/5nzd3ENnX/M8/sJvvt933/533e81ufL7MyK7NOzuXPUDD0FQCZlVn/+xUUQhkXHny8M2TxGsq48MBjXdAhL9/7YN26dd5nI5aVRrvEc0GFEBNKhbDjwsHh3qP/FJK1EdYIedOFlFAOgREhPlICifZDYoBjTna3LYe4xcI4oSpNcf6RvHjuAJRoVszD0qFBGmgMChipZGFxbqzQkJWVZUSOF7JRX3S4LtLTeyMtkkqljMBkPzHRs2aYY5PcZH/qLY1EIo18byQ6hBytIr3WCAXcV4tQHYvFxg3w3N6+Bh3OQolEoqCoqCinlw16JzTFJSE6PYuZKqvztbC2ex7bzGxhKu+rerjJrEEq+r9ieElJSXFDQ0Mh9zYzOzu7FBUWcO4Q9xbD6HYvhXhGLccVD5ZAPyfMqaioyOrBUgEv8FZXV8caGxtz8vLykhCWTnZIKmsKhUJnEYeKcKk2YYERH41G7UYnck1/WvAPOxsdLJm2+bEY0Ay0RNeqkytXQkoBZM4U5oOaoYSUkBGRtvnesrBZK4e4F6ypqSkuLy+v4KI99ZQxkfc6vZ4jNAl1wkbhG8LrhfNBCdkxmhYacvj/GOce+3K9MHHbDHUmicOufREELRIWch/DljzMsglutr+VIJO5KjGrVfZAnpF8mnCd8G5hrnC60Cl8T/iw8C1hKd9P9eDCMcgo5HwBx8BB/g7xeRPkrBbeJ3xTeAxjvRGVV3NcshfPG1JX4tVDQae47GuVOknCi23xHr5nyrxe2C1sFlYJ7xe+Jlwm7BRulItP0ms957RzTMK1ws41jMS8eDxehopaOCYfxc3AIHcIX+K6nxW+ImyVF1i8PQ8DTuwtdC1atCja3NwcHkq5EuXmo85G+jq+yMm28V4q/zcIPxV+K9zPxnbgTi0ocybu6wX66fx/vfAB4T1gHt8xI1wlXMF5zEXnQKC56ruEjwhvEa4WrrXvK/Yt5Pt5I1UveeVKyKmT+lpG2gQ2npMmez8ZzFT3e+HXwj7hKXNf6rFZbDpJUjESLdFsFX4mfFv4Fd/7qPBm4UPCJ4RNwncwym4UfYVUtiAcDk/T+3NRmylwWzAY7BCBCwYYogZPnrJoRNm2IDc3tw4FVKXFm95UmGLzkTTFpog524WnhQPCQeGvwiPCCuFCYmk5GbEJt3tOeF54HPVeLLyXxHOv8BPhYaFLeFU4gsI7OWeZk3g+hpJNvVMGIIqhdRvy+biVISouq2TBqWxoIL1wgBhU5AR1SzJvFR4UnhX+Bl4RfsFGP0npUkTymIQ7fh8Cf4l6F0LgXkj6o3O+buGfwj+ElzGQETaNeJqPhxiahckYq8KJ9V6mP+4pTIATjsGCA8lCQVy9VbhB2CM8itu9IBxlkx6O4nbmmpcSi0KUExa3Psfn23DZC4lhlhRuIWs/R1Y9BrpR4WHcfiOq34bLl5DJm1B7BANPGO4+2OJfDcVwX+RZkL5d+DRqeRJ360IJx1CFp4w/8/lhVGXxay1xKp8asQ31rSbgz2az1aBBWCZsgKTfEFe7uM4xYus9KHWXcBv3eolwJe67hJLIN6yubMVpW1tbbllZWVxtzjRquvQe9981IG3RZHUQttH7hB8IP0cdLwp/YnNHcdsjEP1xsEruO56i2Fy3UWXMskAgYAH/EjOiCD6NDc/XZ4v12RqSy3WQ9rJD3jPClwkZz2Aoy8JnUEjPcwYWfgfHvcIW84h308mABQP4Xp02OY44M4tSZSfx7UXIewU3NpXuxw0vJzauYDP1XM8y8Ttx67fhylYrdlAMW1x7h/BF3NWI+4PwFwjbSha26/xQuBmib6HDqeI+m4m5wzrj9A/xO+O5qbm4yizcbDOKfAjVWeC/WzAFLSeI+4hN9WzQ65EvED7D8Tt4vwE33O64rIfD1JW3k6xeQoX3UN6chyG8In4tcbHuRAyKw2ktVIIM2U5XcA7t2FKy5vWQeBexbbrTpvmZiJwN6e3EwKspW/ajqBuAKfKQk8m7KIce5bgnMNQDkLWPUmkj511DSVV5HJOd417FzrDAK7RjZLMZiURigmLVFCYs5tI2PFhpcUj/n6z6sp72LwJKiU2rUdp62rA7IX4XytpJ3Weh4XfE1/0kk/uoFX8kbCHudZLld5E8vJIs2+mbT8iznaR60DHMBt0EE1DySVlSsOBvyrL6zkZG5qI2T/QSBYTHMYAlq2tw1+0MFO4kVj5GSbSbgvkA8fQQr1uIdfdD5mZ1GhZbP0XfuwlPmOp0SNkYbkQV2JdlEsq69VJS+rTER+NtZVC+TX+NRFq1XGeiHXbGUHMg6lk2/DiZ+mHU8wTueoTXLtS3F5e9l2PNZW9lyrOB5LGSmJokzMQ6OjqCA3wsMXLLhqrWoZgKe3lyZ5YtLiwsLLfMLhJL0ibW3rKa7oMQ+Ajq6gKHcMeHeP8qZcpRMvyt1J97SRabcNP1ZGsbKhSb6lF+5GR6shUnlqTSyPM7LZxV/PUqjOfTH6cvqx+XyN3aCfBPUWh3UZIcxC2/jgu/BJ7Eve/G1R/EXS9gaLCc0dgySqIm7jV4MhEYdAaN4R4eRHkBusJp3GNp56iSOscyYN0DaUch8Ai13X6yrg0PvotCO8nme0geKymBaulc1qO+NbxOOpHZtrcHR+nT6+wePvcnk8k8qv6iNBdyH4/OoGR5gXbv75D4NIX3NoruLSjtKmLlbTwCKER1NmV+QIqfS13aai0izUHsRKksAQE5g0w4fuehj9f+xb25Ym1tbcIhuw2COmkBn2cAcQAFbsclV1BTns49JZio3EQWPkgCySJpFIu8aor0UfeLigDTlUTa/8eimhRGuUiKOZPYtYNabh9EGik3Mkk+A9I8JTWoAiik/LEpzY8tY4uwWc4AJMjxQd8oXRHU8JqbW32orNyAiubZo0WR5wX9KyHrLpLD52nrxhFHa1CVV5w3081cRu/7BYichpEqfafA7/sCzhT7tVkhLZvhTeB8Gv1r6U+ty/gqtWHQCSNTcPOl9NmXM1S4hgRjBjjL1MdUJ8cx3uhe3d3dfh5Meb8qyKWsuJRidwtN/h20XEtxvTwya7tKncU8ACqmXVwLict5fy6TnFhra2uW7xT8dWk2BHptVBOx8GLKjo3g7bhrBQq1sdVsCvEkhLZIac1y/zmUSO0oO8fX/0P2Ub3cwaWpZSITnLnOpDlBWTIfMleJqFb10jXCBJUlMyORSIP14LhqNef6v/05bpZTdHulUyXKsufDNdRxZ4vIhSKwhQFG5vfLfcwZsx2X92Jhje8/P8OI+TK/oO+zeA84WTzkvI/6RuB3y6f68qf11xnyMiuzMms4178AwArmZmkkdGcAAAAASUVORK5CYII=';
  canvas.addEventListener('mousedown', handleMouseDown, false);
  canvas.addEventListener('touchstart', handleMouseDown, false);
  canvas.addEventListener('mousemove', handleMouseMove, false);
  canvas.addEventListener('touchmove', handleMouseMove, false);
  canvas.addEventListener('mouseup', handleMouseUp, false);
  canvas.addEventListener('touchend', handleMouseUp, false);

  function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }

  function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  } // Only test every `stride` pixel. `stride`x faster,
  // but might lead to inaccuracy


  function getFilledInPixels(stride) {
    if (!stride || stride < 1) {
      stride = 1;
    }

    let pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
        pdata = pixels.data,
        l = pdata.length,
        total = l / stride,
        count = 0; // Iterate over all pixels

    for (var i = count = 0; i < l; i += stride) {
      if (parseInt(pdata[i]) === 0) {
        count++;
      }
    }

    return Math.round(count / total * 100);
  }

  function getMouse(e, canvas) {
    let offsetX = 0,
        offsetY = 0,
        mx,
        my;

    if (canvas.offsetParent !== undefined) {
      do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
      } while (canvas = canvas.offsetParent);
    }

    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;
    return {
      x: mx,
      y: my
    };
  }

  function handlePercentage(filledInPixels) {
    filledInPixels = filledInPixels || 0;
    console.log(filledInPixels + '%');

    if (filledInPixels > 40) {
      canvas.parentNode.removeChild(canvas); //$('.cntext').addClass('cntxt_visible');

      $('.body').addClass('result');
      $('.scratch_legen').addClass('hide');
      const pageWidth = $(window).width();

      if (pageWidth > 1024) {
        setTimeout(function () {
          $('.fin-heading-title').addClass('hide');
          setTimeout(function () {
            $('.fin-body').addClass('active');
          }, 1000);
        }, 2000);
      } else {
        setTimeout(function () {
          $('.fin-heading-title').addClass('hide');
          $('.fin-body').addClass('active');
        }, 1000);
      }

      $('#confetti_btn')[0].click(); // $("#header_window_frame").attr("src", `${window.location.origin}/appointment?company=${readCookie("URL_COMPANY")}&user=${readCookie("URL_USER")}&video=false`);
      // $(".schedule-btn-header").css("display", "block");
    }
  }

  function handleMouseDown(e) {
    isDrawing = true;
    lastPoint = getMouse(e, canvas);
  }

  function handleMouseMove(e) {
    if (!isDrawing) {
      return;
    }

    e.preventDefault();
    let currentPoint = getMouse(e, canvas),
        dist = distanceBetween(lastPoint, currentPoint),
        angle = angleBetween(lastPoint, currentPoint),
        x,
        y;

    for (let i = 0; i < dist; i++) {
      x = lastPoint.x + Math.sin(angle) * i - 25;
      y = lastPoint.y + Math.cos(angle) * i - 25;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.drawImage(brush, x, y);
    }

    lastPoint = currentPoint;
    handlePercentage(getFilledInPixels(32));
  }

  function handleMouseUp(e) {
    isDrawing = false;
  }
})();

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/pages/apps/fin/index.js
var fin = __webpack_require__(756);
var fin_default = /*#__PURE__*/__webpack_require__.n(fin);
// EXTERNAL MODULE: ./src/pages/apps/fin/route.pages.js
var route_pages = __webpack_require__(800);
var route_pages_default = /*#__PURE__*/__webpack_require__.n(route_pages);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(903);
;// CONCATENATED MODULE: ./src/pages/apps/fin/result.pages.js

function resultInit() {
  __webpack_require__(359);

  const FIN_NUMBER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }).format(parseInt(utils.cookies.get("FIN Number")));
  $("#fin_number").html(FIN_NUMBER);
  $(".user_name").each(function () {
    $(this).html(utils.cookies.get("Name"));
  });
}
// EXTERNAL MODULE: ./src/pages/apps/fin/questions.js
var questions = __webpack_require__(67);
var questions_default = /*#__PURE__*/__webpack_require__.n(questions);
;// CONCATENATED MODULE: ./src/main.js






if ((0,utils.isOnBoardingPage)()) {
  fin_default().init().then(r => {
    console.log(r);
  });
} else if ((0,utils.isRouteSelectedPage)()) {
  console.log("true");
  route_pages_default().init();
} else if ((0,utils.isResultPage)()) {
  resultInit();
} else if ((0,utils.isQuestionPage)()) {
  questions_default()();
}
})();

/******/ })()
;