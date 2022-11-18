const { cookies, isEmpty, isMobile } = require("./index");
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
          key: "FIRST_NAME",
          value: advisor.firstName,
        },
        {
          key: "REP_NAME",
          value: advisor.firstName.trim() + " " + advisor.lastName.trim(),
        },
        {
          key: "PIC",
          value: advisor.profilePic,
        },
        {
          key: "REP_IMAGE",
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
        {
          key: "brokerCheckLink",
          value: advisor.brokerCheckLink,
        },
        {
          key: "disclosureLink",
          value: advisor.companyDisclosure,
        },
      ]);
    },
  },
  prospect: {
    setCookies: function (prospect) {
      cookies.set("PROSPECT_ID", prospect._id);
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
    player: function () {
      return new Vimeo.Player(document.getElementById("video"));
    },
    handleLang({ selector, language }, IS_CANADIAN_LINK) {
      const that = this;
      $(selector).click(function () {
        if (language === "es") {
          $("#temp_en").addClass("hide");
          $("#temp_es").removeClass("hide");
        }
        that.renderVideo(getVideoUrl(language, IS_CANADIAN_LINK));
        Weglot.switchTo(language);
        cookies.set("country", getCountry(IS_CANADIAN_LINK, true));
      });
    },
    setTotalDuration: function () {
      return new Promise((resolve) => {
        this.player()
          .getDuration()
          .then(function (duration) {
            resolve(duration);
          });
      });
    },
    renderVideo: function (videoId) {
      const that = this;
      let totalDurationTime = 0;
      let playerinitialized = false;
      this.player()
        .loadVideo(videoId)
        .then(async function (id) {
          totalDurationTime = await that.setTotalDuration();
          playerinitialized = true;
          that.player().pause();
        });

      setInterval(function () {
        if (playerinitialized) {
          that
            .player()
            .getCurrentTime()
            .then(function (seconds) {
              const lockIconEl = $(".show-after-unlock");
              const arrowEl = $(".hide-after-unlock");
              const linkBlock = $(".link-block");
              let watchpercentage = (seconds / totalDurationTime) * 100;
              if (watchpercentage >= 90) {
                linkBlock.attr("href", "/questions");
                if (!isMobile()) {
                  $(".link-block .cta_btn").addClass("active");
                } else {
                  $("#unlock-btn .cta_btn").addClass("active");
                }
                lockIconEl.css("display", "block");
                arrowEl.css("display", "none");
              } else {
                linkBlock.on("click", function () {
                  that.player().play();
                });
                linkBlock.attr("href", "#");
                lockIconEl.css("display", "none");
                arrowEl.css("display", "block");
                $(".link-block .cta_btn").removeClass("active");
              }
            });
        }
      }, 200);
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
      onBoarding.videos.handleLanguages(IS_CANADIAN_LINK);
    },
  },
};

export { onBoarding };
