if (window.location.pathname.startsWith("/appointment-copy")) {
  let appointment_link;
  let rep_name;
  let rep_phone;
  let rep_email;
  let rep_pic;
  let video_id;
  let company_id;
  let user_id;

  function map_all_data() {
    $("#rep-name").text(rep_name);
    $("#rep-image-container").css("background-image", `url(${rep_pic})`);
    if (video_id === "" || !video_id) {
      $("#profile-video-area").css("display", "none");
    } else {
      $("#profile-video").html(video_id);
      $("#profile-video iframe").attr("width", "100%");
      $("#profile-video iframe").attr("class", "appointment-page-video");
      $("#watch-profile-video").css("display", "flex");
      $("#watch-profile-video").attr("href", "#profile-video-area");
    }

    $("#appointment-schedule-url .calender-embedd").attr(
      "src",
      appointment_link
    );
    $("#rep-email").text(rep_email);
    $("#rep-phone").text(rep_phone);
    $("#rep-phone").attr("href", `tel:${rep_phone}`);
    $("#rep-email").attr("href", `mailto:${rep_email}`);
    $("#phone-btn").click(() => {
      window.open(`tel:${rep_phone}`, "_blank");
    });
    $("#email-btn").click(() => {
      window.open(`mailto:${rep_email}`, "_blank");
    });
  }

  async function getCompany() {
    try {
      const response = await axios.get(
        "https://" +
          api_url +
          "/api/v1/users/getCompany/name/" +
          getUrlParameter("company") +
          "/" +
          getUrlParameter("user")
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

  $(window).scroll(() => {
    $(".button-pattern").css("display", "block");
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

  const finBusinessVideoAppLink = () => {
    return (
      getBaseUrl() +
      getUrlParameter("company") +
      "&user=" +
      getUrlParameter("user")
    ).replace("video_type", "businessOverview");
  };

  const finFinancialSuccessVideoAppLink = () => {
    return (
      getBaseUrl() +
      getUrlParameter("company") +
      "&user=" +
      getUrlParameter("user")
    ).replace("video_type", "financialHouse");
  };

  $("#financial-video").click(() => {
    window.open(finFinancialSuccessVideoAppLink(), "_blank");
  });

  $("#business-video").click(() => {
    window.open(finBusinessVideoAppLink(), "_blank");
  });

  const isVideoApp = () => {};

  const isFinApp = () => {};

  getCompany();
}
