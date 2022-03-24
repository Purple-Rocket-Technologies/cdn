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

module.exports = {
  getUrlParameter,
  cookies,
  url,
  isEmpty,
  isRouteSelectedPage,
  isOnBoardingPage,
  isRouteQuestionPage,
};
