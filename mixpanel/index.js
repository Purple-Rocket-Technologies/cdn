const trackMixPanelEvent = (eventName, data = {}) => {
  mixpanel.track(eventName, data);
};
