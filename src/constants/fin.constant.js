const FIN = {
  US: {
    ENGLISH: "720266168",
    SPANISH: "721138150",
  },
  CA: {
    ENGLISH: "551499288",
    SPANISH: "452754620",
  },
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
  getCountry,
};
