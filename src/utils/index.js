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

const isOnBoardingPage = () => {
  return window.location.pathname.startsWith("/en");
};

const isRouteSelectedPage = () => {
  const path = window.location.pathname;
  return (
    path.startsWith("/route") &&
    !path.includes("make-more-money") &&
    !path.includes("manage-money-better") &&
    !path.includes("both")
  );
};

const isResultPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/result");
};

const isRouteQuestionPage = () => {
  const path = window.location.pathname;
  return (
    path.startsWith("/route") &&
    (path.includes("make-more-money") ||
      path.includes("manage-money-better") ||
      path.includes("both"))
  );
};

const getUrlParameter = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};

const url = {
  query: {
    get: getUrlParameter,
  },
};

const cookies = {
  get: (name) => {
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
  setMultiple: (array) => {
    array.forEach(({ key, value, expires, path, domain, secure }) => {
      cookies.set(key, value, expires, path, domain, secure);
    });
  },
};

const isEmpty = (value) => {
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
  return company
    ? `${this[type](user, company)}${start}?company=${company}&user=${user}`
    : `${this[type](user, company)}${start}?id=${user}`;
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
  finFinancialSuccessVideoAppLink,
};
