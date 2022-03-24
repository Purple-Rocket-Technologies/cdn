const { cookies, isEmpty } = require("./index");
const { getVideoUrl, getCountry } = require("../constants/fin.constant");

const onBoarding = {
  advisor: {
    setCookies: function (advisor, IS_OLD_LINK) {
      cookies.setMultiple([
        {
          key: "isAffiliateUrl",
          value: advisor.isAffiliateUrl,
        },
        {
          key: "COMPANY_ID",
          value: advisor.companyId,
        },
        {
          key: "COMPANY_URL",
          value: advisor.companyUrl,
        },
        {
          key: "USER_ID",
          value: advisor.userId,
        },
        {
          key: "IS_OLD_LINK",
          value: IS_OLD_LINK,
        },
        {
          key: "URL_COMPANY",
          value: advisor.companyUrl,
        },
        {
          key: "URL_USER",
          value: advisor.companies && advisor.companies[0].url,
        },
        {
          key: "USER_URL",
          value: advisor.companies && advisor.companies[0].url,
        },
        {
          key: "affiliateId",
          value: advisor.affiliateId,
        },
        {
          key: "APTMT_LINK",
          value: advisor.appointmentBookingLink,
        },
        {
          key: "REP_NAME",
          value: advisor.firstName + " " + advisor.lastName,
        },
        {
          key: "PIC",
          value: advisor.profilePic,
        },
        {
          key: "PHONE",
          value: advisor.phone,
        },
        {
          key: "EMAIL",
          value: advisor.email,
        },
        {
          key: "VIDEO",
          value: advisor.videoProfileLink,
        },
      ]);
    },
  },
  prospect: {
    setCookies: function (prospect) {
      cookies.set("prospect_id", prospect._id);
      cookies.set("Name", prospect.first_name);
      cookies.set("FIN Number", prospect.fin_number);
    },
    handleRedirect: function (prospect) {
      const ROUTE_CHOICE = prospect.route_choice;
      if (isEmpty(ROUTE_CHOICE)) {
        window.location.href = `/route/${ROUTE_CHOICE.split(" ")
          .join("-")
          .toLowerCase()}`;
      } else {
        window.location.href = "/route";
      }
    },
  },
  videos: {
    handleLang: function ({ selector, language }, IS_CANADIAN_LINK) {
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
      const languages = [
        {
          selector: "#lang_us",
          language: "en",
        },
        {
          selector: "#lang_es",
          language: "es",
        },
      ];

      languages.forEach((lang) => {
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
    },
  },
};

module.exports = {
  onBoarding,
};
