const trackMixPanelEvent = (eventName, data = {}) => {
  if (window.location.host === "discoverfin.io") {
    mixpanel.track(eventName, data);
  }
};
const checkIsEmpty = (item) => {
  return (
    item === undefined ||
    item === null ||
    item === "" ||
    item === "false" ||
    item === "null" ||
    item === "undefined" ||
    item === "[]" ||
    item === "{}" ||
    (typeof item === "object" && Object.keys(item).length === 0) ||
    (typeof item === "string" && item.trim().length === 0)
  );
};
