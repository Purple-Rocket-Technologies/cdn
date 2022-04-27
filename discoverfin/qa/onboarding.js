let totalDurationTime;
let playerinitialized = 0;
let is_canadian = false;
var iframe = document.getElementById("video");
var player = new Vimeo.Player(iframe);

setCookies("isOldUrl", getUrlParameter("company"));
setCookies("START_OVER_URL", window.location.href);
setCookies("URL_USER", getUrlParameter("id") || getUrlParameter("user"));

$("#start_over").attr("href", readCookie("START_OVER_URL"));

function getAdvisorUrl() {
  return getUrlParameter("id") || getUrlParameter("user");
}

function handleVideoPlayer() {
  player.on("play", function () {
    $(".arrow_lottie").css("opacity", "0");
    $(".title").addClass("hide");
    setTotalDuration();
  });

  player.on("ended", function () {
    $(".link-block .cta_btn").addClass("active");
  });

  // Setting total time duration of video
  function setTotalDuration() {
    player.getDuration().then(function (duration) {
      totalDurationTime = duration;
      playerinitialized = 1;
    });
  }

  setCookies("INITIAL_LINK", window.location.href);

  $("#lang_us").click(function () {
    renderVideo(is_canadian ? 551499288 : 445268145);
    Weglot.switchTo("en");
    setCookies("country", is_canadian ? "Canada" : "United States");
  });

  $("#lang_ca").click(function () {
    renderVideo(551499288);
    Weglot.switchTo("en");
    setCookies("country", "Canada");
  });

  function renderVideo(videoID) {
    player.loadVideo(videoID).then(function (id) {
      setTotalDuration();
      player.pause();
    });
  }

  setInterval(function () {
    if (playerinitialized === 1) {
      player.getCurrentTime().then(function (seconds) {
        let watchpercentage = (seconds / totalDurationTime) * 100;
        const disButton = $(".link-block");
        if (watchpercentage >= 90) {
          $(".link-block .cta_btn").addClass("active");
        } else {
          $(".link-block .cta_btn").removeClass("active");
        }
      });
    }
  }, 200);

  $("#lang_es").click(function () {
    $("#temp_en").addClass("hide");
    $("#temp_es").removeClass("hide");
    renderVideo(is_canadian ? 452754620 : 452754620);
    Weglot.switchTo("es");
    setCookies("country", is_canadian ? "Canada" : "United States");
  });

  $("#lang_ca_es").click(function () {
    $(".fin_video").attr("src", "https://player.vimeo.com/video/452754620");
    Weglot.switchTo("es");
    setCookies("country", "Canada");
  });
}

//fetching company, user and prospect ID
function fetchAdvisorAndProspect() {
  fetchAdvisor(getUrlParameter("company"), getAdvisorUrl())
    .then((advisorResponse) => {
      is_canadian =
        advisorResponse.address && advisorResponse.address.country === "Canada";
      setPageCookies(advisorResponse);
      handleVideoPlayer();
      // fetch prospect details if prospect email is present in the query string
      if (getAdvisorUrl() && getUrlParameter("prospectEmail")) {
        fetchProspect(
          advisorResponse.userId,
          readCookie("COMPANY_ID"),
          getUrlParameter("prospectEmail")
        )
          .then((prospectResponse) => {
            setCookies("prospect_id", prospectResponse._id);
            setCookies("Name", prospectResponse.first_name);
            setCookies("FIN Number", prospectResponse.fin_number);
            const routeChoice = prospectResponse.route_choice;
            if (routeChoice.route_choice && routeChoice.route_choice !== "") {
              if (routeChoice === "Make More Money") {
                window.location.href = "/route/make-more-money";
              }
              if (routeChoice === "Manage Money Better") {
                window.location.href = "/route/manage-money-better";
              }
              if (routeChoice === "Both") {
                window.location.href = "/route/both";
              }
            } else {
              window.location.href = "/route";
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Oops, There was an unexpected error.");
            throw new SentryError(
              `Oops, There was an unexpected error onboarding.js: ${getUrlParameter(
                "prospectEmail"
              )}`,
              error
            );
          });
      }
    })
    .catch(() => {
      $(".not_found").addClass("show_not_found");
      $(".page").addClass("pnf");
    });
}

function setPageCookies(advisorResponse) {
  setCookies("isCanadianLink", is_canadian);
  setCookies("COMPANY_ID", advisorResponse.companyId);
  setCookies("COMPANY_URL", advisorResponse.companyUrl);
  setCookies("USER_ID", advisorResponse.userId);
  setCookies("URL_COMPANY", advisorResponse.companyUrl);
  setCookies("USER_URL", getUrlParameter("id") || getUrlParameter("user"));
  setCookies("APTMT_LINK", advisorResponse.appointmentBookingLink);
  setCookies("REP_NAME", advisorResponse.firstName);
  setCookies("PIC", advisorResponse.profilePic);
  setCookies("PHONE", advisorResponse.phone);
  setCookies("EMAIL", advisorResponse.email);
  setCookies("VIDEO", advisorResponse.videoProfileLink);
  $(document).prop("title", "DiscoverFIN");
  setCookies("isAffiliateUrl", advisorResponse.isAffiliateUrl);
  setCookies("affiliateId", advisorResponse.affiliateId);
}

fetchAdvisorAndProspect();
