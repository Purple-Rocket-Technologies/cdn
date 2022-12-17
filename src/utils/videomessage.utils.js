const isFinPath = () =>
  window.location.hostname.toLowerCase().includes("finpath") || window.location.hostname.toLowerCase().includes("localhost");

module.exports = {
  isFinPath,
};
