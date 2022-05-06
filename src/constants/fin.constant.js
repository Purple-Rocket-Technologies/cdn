const FIN = {
  US: {
    ENGLISH: "https://player.vimeo.com/video/445268145",
    SPANISH: "https://player.vimeo.com/video/452754620",
  },
  CA: {
    ENGLISH: "https://player.vimeo.com/video/551499288",
    SPANISH: "https://player.vimeo.com/video/452754620",
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
