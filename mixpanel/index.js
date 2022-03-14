const trackMixPanelEvent = (eventName, data = {}) => {
  if (window.location.host === "discoverfin.io") {
    mixpanel.track(eventName, data);
  }
};
