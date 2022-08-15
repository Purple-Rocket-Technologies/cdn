const {
  finBusinessVideoAppLink,
  finFinancialSuccessVideoAppLink,
  finBaseUrl,
  handleBrokerCheckLinkAndDisclosure,
} = require("./index");
const appointmentUtils = {
  initialState: {
    APPOINTMENT_LINK: "",
    REP_NAME: "",
    REP_EMAIL: "",
    REP_PHONE: "",
    REP_ID: "",
    REP_IMAGE: "",
    COMPANY_ID: "",
    IS_DASHBOARD_LINK: false,
    IS_VIDEO_APP: false,
    USER_URL: "",
    COMPANY_URL: "",
    IS_OLD_LINK: false,
    IS_CANADIAN_LINK: false,
    ADVISOR: {},
    PROFILE_VIDEO_URL: "",
    APPOINTMENT_BUTTON_CLICKED: false,
  },
  openLink(link) {
    let element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("target", "_parent");
    element.click();
    element.remove();
  },
  setMetaData: function (page) {
    document.title = page.REP_NAME;
    $("head").append(
      `<meta name="description" content="${page.REP_NAME}"><meta name="og:title" content="${page.REP_NAME}"><meta name="og:image" content="${page.REP_IMAGE}">`
    );
    $("link[rel='icon']").attr("href", page.REP_IMAGE);
    $("meta[name='description']").attr("content", page.REP_NAME);
    $("meta[name='keywords']").attr("content", page.REP_NAME);
    $("meta[property='og:title']").attr("content", page.REP_NAME);
    $("meta[property='og:description']").attr("content", page.REP_NAME);
    $("meta[property='og:image']").attr("content", page.REP_IMAGE);
    $("meta[property='og:url']").attr("content", window.location.href);
    $("meta[property='twitter:title']").attr("content", page.REP_NAME);
    $("meta[property='twitter:description']").attr("content", page.REP_NAME);
    $("meta[property='twitter:image']").attr("content", page.REP_IMAGE);
    $("meta[property='twitter:url']").attr("content", window.location.href);
    $("meta[name='twitter:title']").attr("content", page.REP_NAME);
    $("meta[name='twitter:description']").attr("content", page.REP_NAME);
    $("meta[name='twitter:image']").attr("content", page.REP_IMAGE);
    $("meta[name='twitter:url']").attr("content", window.location.href);
  },
  handleAppointmentButtonClick: function (page) {
    if (page.APPOINTMENT_BUTTON_CLICKED) {
      return;
    }
    page.track("Clicked Schedule Appointment button", {
      rep_name: page.REP_NAME,
      company_id: page.COMPANY_ID,
      user_id: page.REP_ID,
      page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App",
      rep_email: page.REP_EMAIL,
    });
  },
  setupTrackAppointmentButtonClick: function (page) {
    page.APPOINTMENT_BUTTON_CLICKED = false;
    const BUTTONS = ["#aptmt_link1", "#aptmt_link2", "#aptmt_link3"];
    BUTTONS.forEach((button) => {
      page.on(`click`, button, () => {
        page.APPOINTMENT_BUTTON_CLICKED = true;
        page.handleAppointmentButtonClick(page);
      });
    });
    return page;
  },
  populatePageData: function (page, data) {
    page.APPOINTMENT_LINK = data.appointmentBookingLink;
    page.REP_NAME = `${data.firstName} ${data.lastName}`;
    page.REP_EMAIL = data.email;
    page.REP_PHONE = data.phone;
    page.REP_ID = data.userId;
    page.REP_IMAGE = data.profilePic;
    page.ADVISOR = data.advisor;
    page.COMPANY_ID = data.companyId;
    page.IS_CANADIAN_LINK = data.address && data.address.country === "Canada";
    page.PROFILE_VIDEO_URL = data.videoProfileLink;
    return page;
  },
  mapDataToPage: function (page) {
    const repName = $("#rep-name");
    repName.text(page.REP_NAME);
    $("#loading-logo").hide();
    repName.toggleClass("hide");
    this.setMetaData(page);
    const watchVideoWrapper = $("#video-watch-wrapper");
    const profileVideoArea = $("#profile-video-area");
    $("#rep-image-container").css("background-image", `url(${page.REP_IMAGE})`);
    if (page.PROFILE_VIDEO_URL === "" || !page.PROFILE_VIDEO_URL) {
      profileVideoArea.css("display", "none");
      watchVideoWrapper.css("opacity", "0");
      watchVideoWrapper.css("cursor", "default");
    } else {
      const profileVideo = $("#profile-video");
      const profileVideoIframe = $("#profile-video iframe");

      function checkIsIframeCode(url) {
        return url.includes("iframe");
      }

      function convertToIframeCode(url) {
        return `<iframe src="${url}" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }

      profileVideo.html(
        checkIsIframeCode(page.PROFILE_VIDEO_URL)
          ? page.PROFILE_VIDEO_URL
          : convertToIframeCode(page.PROFILE_VIDEO_URL)
      );
      profileVideoIframe.attr("width", "100%");
      profileVideoIframe.attr("class", "appointment-page-video");
      // profileVideoArea.css("display", "flex");
      watchVideoWrapper.css("opacity", "100%");
      profileVideoArea.removeClass("hide");
      watchVideoWrapper.css("display", "flex");
      watchVideoWrapper.css("opacity", "100%");
      watchVideoWrapper.css("cursor", "pointer");
    }

    if (page.IS_CANADIAN_LINK) {
      const logos = $("#logos");
      logos.css("grid-template-columns", "repeat(5, 1fr)");
      logos.css("-ms-grid-columns", "repeat(5, 1fr)");
      $(".american").css("display", "none");
      $(".canadian").css("display", "block");
    } else {
      $(".canadian").css("display", "none");
    }

    $("#appointment-schedule-url .calender-embedd").attr(
      "src",
      page.APPOINTMENT_LINK
    );

    $("#phone-btn").click(() => {
      this.openLink(`tel:${page.REP_PHONE}`);
    });
    $("#mail-btn").click(() => {
      this.openLink(`mailto:${page.REP_EMAIL}`);
    });

    const onlyVideoAppElement = $("#only-video-app");

    handleBrokerCheckLinkAndDisclosure(page.ADVISOR);

    if (page.IS_DASHBOARD_LINK) {
      console.log("is dashboard link");
      const videos = [
        {
          id: "financial-video",
          link: finFinancialSuccessVideoAppLink(
            page.USER_URL,
            page.COMPANY_URL
          ),
        },
        {
          id: "business-video",
          link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL),
        },
      ];
      videos.forEach((video) => {
        page.on(`click`, `#${video.id}`, () => {
          window.open(video.link, "_blank");
        });
      });
      onlyVideoAppElement.css("display", "flex");
      $("#only-fin-app").css("display", "grid");
      $("#do-you-know-fin").click(() => {
        window.open(
          finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"),
          "_blank"
        );
      });
    }
    if (!page.IS_VIDEO_APP && !page.IS_DASHBOARD_LINK) {
      onlyVideoAppElement.css("display", "none");
      const videos = [
        {
          id: "financial-video",
          link: finFinancialSuccessVideoAppLink(
            page.USER_URL,
            page.COMPANY_URL
          ),
        },
        {
          id: "business-video",
          link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL),
        },
      ];
      videos.forEach((video) => {
        page.on(`click`, `#${video.id}`, () => {
          window.open(video.link, "_blank");
        });
      });
    } else if (!page.IS_DASHBOARD_LINK) {
      $("#only-fin-app").css("display", "none");
      $("#do-you-know-fin").click(() => {
        window.open(
          finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"),
          "_blank"
        );
      });
    }
  },
  handleFinButton: function (page) {
    console.log("handleFinButton");
    $("#do-you-know-fin").click(() => {
      window.open(
        finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"),
        "_blank"
      );
    });
  },
  handleVideoLinksButtons: function (page) {
    const videos = [
      {
        id: "financial-video",
        link: finFinancialSuccessVideoAppLink(page.USER_URL, page.COMPANY_URL),
      },
      {
        id: "business-video",
        link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL),
      },
    ];
    videos.forEach((video) => {
      page.on(`click`, `#${video.id}`, () => {
        window.open(video.link, "_blank");
      });
    });
  },
  handleScrollEvent() {
    let scroll_position = 0;
    let scroll_direction;

    window.addEventListener("scroll", function () {
      scroll_direction =
        document.body.getBoundingClientRect().top > scroll_position
          ? "up"
          : "down";
      scroll_position = document.body.getBoundingClientRect().top;
      if (scroll_direction === "up") {
        $(".button-pattern").css("display", "block");
      } else {
        $(".button-pattern").css("display", "none");
      }
    });
  },
};

export { appointmentUtils };
