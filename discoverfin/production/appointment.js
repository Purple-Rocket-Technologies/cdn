if (window.location.pathname.startsWith("/appointment")) {
  let appointment_link;
  let rep_name;
  let rep_phone;
  let rep_email;
  let rep_pic;
  let video_id;
  let company_id;
  let user_id;
  let isDashboard = false;
  let isVideoApp = false;
  let is_canadian = false;
  if (getUrlParameter("video")) {
    isVideoApp = JSON.parse(getUrlParameter("video"));
    isDashboard = false;
  } else {
    isVideoApp = false;
    isDashboard = true;
  }

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  trackMixPanelEvent("Prospect visited Appointment Page", {
    rep_name,
    page_type: isVideoApp ? "Video App" : "FIN App",
  });

  let appointment_button_clicked = false;

  // track appointment button clicks to mixpanel
  const handleAppointmentButtonClick = () => {
    if (appointment_button_clicked) {
      return;
    }
    appointment_button_clicked = true;
    trackMixPanelEvent("Clicked Schedule Appointment button", {
      rep_name,
      company_id,
      user_id,
      user,
      company,
      page_type: isVideoApp ? "Video App" : "FIN App",
      rep_email,
    });
  };

  $("#aptmt_link1").click(handleAppointmentButtonClick);
  $("#aptmt_link2").click(handleAppointmentButtonClick);
  $("#aptmt_link3").click(handleAppointmentButtonClick);
  function setPageMetaContent(repName, repPic) {
    document.title = repName;
    $("head").append(
      `<meta name="description" content="${repName}"><meta name="og:title" content="${repName}"><meta name="og:image" content="${repPic}">`
    );
    $("link[rel='icon']").attr("href", repPic);
    $("meta[name='description']").attr("content", repName);
    $("meta[name='keywords']").attr("content", repName);
    $("meta[property='og:title']").attr("content", repName);
    $("meta[property='og:description']").attr("content", repName);
    $("meta[property='og:image']").attr("content", repPic);
    $("meta[property='og:url']").attr("content", window.location.href);
    $("meta[property='twitter:title']").attr("content", repName);
    $("meta[property='twitter:description']").attr("content", repName);
    $("meta[property='twitter:image']").attr("content", repPic);
    $("meta[property='twitter:url']").attr("content", window.location.href);
    $("meta[name='twitter:title']").attr("content", repName);
    $("meta[name='twitter:description']").attr("content", repName);
    $("meta[name='twitter:image']").attr("content", repPic);
    $("meta[name='twitter:url']").attr("content", window.location.href);
  }

  function map_all_data() {
    const repName = $("#rep-name");
    repName.text(rep_name);
    $("#loading-logo").hide();
    repName.toggleClass("hide");
    setPageMetaContent(rep_name, rep_pic);
    $("#rep-image-container").css("background-image", `url(${rep_pic})`);
    if (video_id === "" || !video_id) {
      $("#profile-video-area").css("display", "none");
      $("#video-watch-wrapper").css("opacity", "0");
      $("#video-watch-wrapper").css("cursor", "default");
    } else {
      $("#profile-video").html(video_id);
      $("#profile-video iframe").attr("width", "100%");
      $("#profile-video iframe").attr("class", "appointment-page-video");
      $("#profile-video-area").css("display", "flex");
      $("#video-watch-wrapper").css("opacity", "100%");
      $("#watch-profile-video").css("display", "flex");
      $("#watch-profile-video").css("opacity", "100%");
      $("#video-watch-wrapper").css("cursor", "pointer");
    }

    if (is_canadian) {
      let gridColumns = "repeat(2, 1fr)";
      if (!isMobile()) {
        gridColumns = "repeat(5, 1fr)";
      }
      $("#logos").css("grid-template-columns", gridColumns);
      $("#logos").css("-ms-grid-columns", gridColumns);
      $(".american").css("display", "none");
      $(".canadian").css("display", "block");
    } else {
      $(".canadian").css("display", "none");
    }

    $("#appointment-schedule-url .calender-embedd").attr(
      "src",
      appointment_link
    );
    //$("#rep-email").text(rep_email);
    //$("#rep-phone").text(rep_phone);
    //$("#phone-btn").attr("href", `tel:${rep_phone}`);
    //$("#mail-btn").attr("href", `mailto:${rep_email}`);

    $("#phone-btn").click(() => {
      openLink(`tel:${rep_phone}`);
    });
    $("#mail-btn").click(() => {
      openLink(`mailto:${rep_email}`);
    });
  }

  function openLink(link) {
    let element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("target", "_parent");
    element.click();
    element.remove();
  }

  async function getCompany() {
    try {
      const response = await axios.get(
        `https://${api_url}${
          getUrlParameter("company")
            ? `/api/v1/users/getCompany/name/${getUrlParameter("company")}/${
                getUrlParameter("id") || getUrlParameter("user")
              }`
            : `/api/v1/users/getUserByUrl/${
                getUrlParameter("id") || getUrlParameter("user")
              }`
        }`
      );
      if (JSON.parse(response.data.error)) {
        window.location.href = "/404";
      } else {
        appointment_link = response.data.data.appointmentBookingLink;
        rep_name = `${response.data.data.firstName} ${response.data.data.lastName}`;
        rep_pic = response.data.data.profilePic;
        rep_phone = response.data.data.phone;
        user_id = response.data.data.userId;
        is_canadian =
          response.data.data.address &&
          response.data.data.address.country === "Canada";
        company_id = response.data.data.companyId;
        rep_email = response.data.data.email;
        setCookies("user_id", response.data.data.userId);
        setCookies("company_id", response.data.data.companyId);
        video_id = $.trim(response.data.data.videoProfileLink);
        map_all_data();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  $("#getintouch").submit((e) => {
    e.preventDefault();
    const bodyObject = {
      prospectFirstName: $("#first_name").val(),
      prospectLastName: $("#last_name").val(),
      prospectName: $("#first_name").val() + " " + $("#last_name").val(),
      prospectEmail: $("#email").val(),
      prospectPhone: $("#phone_no").val(),
      prospectMessage: $("#message").val(),
      userId: readCookie("user_id"),
      companyId: readCookie("company_id"),
    };
    console.table(bodyObject);
    axios({
      method: "post",
      url: "https://" + api_url + "/api/v1/users/email/send/getInTouch",
      data: bodyObject,
    })
      .then(() => {
        trackMixPanelEvent("Prospect filled getInTouch form", {
          rep_name,
          user_id,
          rep_email,
          company_id,
          page_type: isVideoApp ? "Video App" : "FIN App",
          prospectName: $("#first_name").val() + " " + $("#last_name").val(),
          prospectEmail: $("#email").val(),
        });
        $(".getintouch").addClass("hide");
        $(".successmessage").addClass("displayshow");
      })
      .catch((error) => {
        console.log(error);
        alert("Oops, There was an unexpected error.");
      });
  });

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

  const getBaseUrl = () => {
    if (window.location.host === "dev.discoverfin.io") {
      return "https://devvideo.discoverfin.io/video_type?";
    } else if (window.location.host === "staging.discoverfin.io") {
      return "https://stagingvideo.discoverfin.io/video_type?";
    } else if (window.location.host === "discoverfin.io") {
      return "https://video.discoverfin.io/video_type?";
    } else if (window.location.host === "qa.discoverfin.io") {
      return "https://qavideo.discoverfin.io/video_type?";
    }
  };

  const finBaseUrl = () => {
    return `https://${window.location.host}/en?`;
  };

  const isOldUrl = () => getUrlParameter("company");

  const getUserUrl = () => getUrlParameter("id") || getUrlParameter("user");

  const videoUrlBase = () =>
    isOldUrl()
      ? `${getBaseUrl()}company=${isOldUrl()}&user=${getUserUrl()}`
      : `${getBaseUrl()}id=${getUserUrl()}`;

  const finBusinessVideoAppLink = () => {
    return videoUrlBase().replace("video_type", "businessOverview");
  };

  const finAppLink = () => {
    return !isOldUrl()
      ? `${finBaseUrl()}id=${getUrlParameter("id") || getUrlParameter("user")}`
      : `${finBaseUrl()}company=${isOldUrl()}&user=${
          getUrlParameter("id") || getUrlParameter("user")
        }`;
  };

  const finFinancialSuccessVideoAppLink = () => {
    return videoUrlBase().replace("video_type", "financialHouse");
  };

  if (isDashboard) {
    $("#only-video-app").css("display", "flex");
    $("#financial-video").click(() => {
      window.open(finFinancialSuccessVideoAppLink(), "_blank");
    });

    $("#business-video").click(() => {
      window.open(finBusinessVideoAppLink(), "_blank");
    });

    $("#only-fin-app").css("display", "grid");
    $("#do-you-know-fin").click(() => {
      window.open(finAppLink(), "_blank");
    });
  }

  if (!isVideoApp && !isDashboard) {
    $("#only-video-app").css("display", "none");
    $("#financial-video").click(() => {
      window.open(finFinancialSuccessVideoAppLink(), "_blank");
    });

    $("#business-video").click(() => {
      window.open(finBusinessVideoAppLink(), "_blank");
    });
  } else if (!isDashboard) {
    $("#only-fin-app").css("display", "none");
    $("#do-you-know-fin").click(() => {
      window.open(finAppLink(), "_blank");
    });
  }

  getCompany();
}
