if (window.location.pathname.startsWith("/appointment")) {
  let appointment_link;
  let rep_name;
  let rep_phone;
  let rep_email;
  let rep_pic;
  let video_id;
  let company_id;
  let user_id;
  let isVideoApp = JSON.parse(getUrlParameter("video"));
  const user_url = getUrlParameter("id");

  function map_all_data() {
    $("#rep-name").text(rep_name);
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
      $("#video-watch-wrapper").css("cursor", "pointer");
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
    element.click();
    element.remove();
  }

  async function getCompany() {
    try {
      const response = await axios.get(
        "https://" + api_url + "/api/v1/users/getUserByUrl/" + user_url
      );
      if (JSON.parse(response.data.error)) {
        window.location.href = "/404";
      } else {
        appointment_link = response.data.data.appointmentBookingLink;
        rep_name = `${response.data.data.firstName} ${response.data.data.lastName}`;
        rep_pic = response.data.data.profilePic;
        rep_phone = response.data.data.phone;
        user_id = response.data.data.userId;
        company_id = response.data.data.companyId;
        rep_email = response.data.data.email;
        video_id = $.trim(response.data.data.videoProfileLink);
        map_all_data();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  $("#getintouch").submit((e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://" + api_url + "/api/v1/users/email/send/getInTouch",
      data: {
        prospectFirstName: $("#first_name").val(),
        prospectLastName: $("#last_name").val(),
        prospectName: $("#first_name").val() + " " + $("#last_name").val(),
        prospectEmail: $("#email").val(),
        prospectPhone: $("#phone_no").val(),
        prospectMessage: $("#message").val(),
        userId: user_id,
        companyId: company_id,
      },
    })
      .then(() => {
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
      return "https://devvideo.discoverfin.io/video_type?company=";
    } else if (window.location.host === "staging.discoverfin.io") {
      return "https://stagingvideo.discoverfin.io/video_type?company=";
    } else if (window.location.host === "discoverfin.io") {
      return "https://video.discoverfin.io/video_type?company=";
    }
  };

  const finBaseUrl = () => {
    return `https://${window.location.host}/en?company=`;
  };

  const finBusinessVideoAppLink = () => {
    return (
      getBaseUrl() +
      getUrlParameter("company") +
      "&user=" +
      getUrlParameter("user")
    ).replace("video_type", "businessOverview");
  };

  const finAppLink = () => {
    return (
      finBaseUrl() +
      getUrlParameter("company") +
      "&user=" +
      getUrlParameter("user")
    );
  };

  const finFinancialSuccessVideoAppLink = () => {
    return (
      getBaseUrl() +
      getUrlParameter("company") +
      "&user=" +
      getUrlParameter("user")
    ).replace("video_type", "financialHouse");
  };

  if (!isVideoApp) {
    $("#only-video-app").css("display", "none");
    $("#financial-video").click(() => {
      window.open(finFinancialSuccessVideoAppLink(), "_blank");
    });

    $("#business-video").click(() => {
      window.open(finBusinessVideoAppLink(), "_blank");
    });
  } else {
    $("#only-fin-app").css("display", "none");
    $("#do-you-know-fin").click(() => {
      window.open(finAppLink(), "_blank");
    });
  }

  getCompany();
}
