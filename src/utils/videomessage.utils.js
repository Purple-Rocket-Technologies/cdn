const isFinPath = () =>
  window.location.hostname.toLowerCase().includes("finpath") || window.location.hostname.toLowerCase().includes("localhost");

  const isIPN = () => window.location.hostname.toLowerCase().includes("ipn");
module.exports = {
  isFinPath,
  isIPN,
};
