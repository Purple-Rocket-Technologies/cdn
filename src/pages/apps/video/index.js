const { BasePage, finBaseUrl } = require("../../../utils");
const { getUser } = require("../../../service/fin/onboarding.service");
const { onBoarding } = require("../../../utils/onboarding.utils");
const { getVideoProspect } = require("../../../service/video");
const videoUtils = require("../../../utils/video.utils");

class videoPage extends BasePage {
  constructor(_object) {
    super(_object);
  }
}

async function fetchAdvisor(page) {
  const { USER_URL, COMPANY_URL, IS_OLD_LINK } = page;
  const advisor = await getUser(USER_URL, COMPANY_URL);
  page.COMPANY_ID = advisor.company_id;
  onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
  page.ADVISOR = advisor;
  return page;
}

async function redirectContinuer(page) {
  if (url.query.get("prospectEmail")) {
    const videoProspect = await getVideoProspect(
      page.COMPANY_ID,
      url.query.get("prospectEmail")
    );
    videoProspect;
  }
}

async function init() {
  const USER_URL = url.query.get("id") || url.query.get("user");
  let page = new videoPage({
    ...videoUtils.initialState,
    USER_URL,
    IS_OLD_LINK: url.query.get("company"),
    APPOINTMENT_LINK: `${finBaseUrl(
      USER_URL,
      url.query.get("company"),
      "getBaseUrl",
      "appointment"
    )}&video=true`,
  });
  try {
    page = await fetchAdvisor(page);
    page.track("Prospect Visited Appointment page", {
      rep: page.advisor.firstName,
    });
  } catch (e) {
    $(".fourofour").addClass("show");
    console.log(e);
  }

  //Country Button functions
  $(".country-btn").click(function () {
    $(".country-btn").removeClass("active");
    $(this).addClass("active");
    country_val = $(this).attr("data-country");
    lang_val = $(this).attr("data-lang");
    videoUtils.methods.fetchVideo(videoType, country_val, lang_val);
  });

  $(".non-clicker").click(function () {
    error_show("Please select a language first.");
  });

  $(".onboad").click(function () {
    if (country_val !== "") {
      if (
        $("#peoplewatching").val() != "" &&
        $("#phone").val() != "" &&
        $("#fname").val() != ""
      ) {
        if (isEmail($("#email").val())) {
          checkVideoProspect($("#email").val());
        } else {
          error_show("Please enter a correct email.");
        }
      } else {
        error_show("Please fill in all details.");
      }
    } else {
      error_show("Please select your country.");
    }
  });

  $("#fname").keyup(function () {
    setCookies("Name", $(this).val());
    // trackMixPanelEvent(`Video Prospect Journey Started`, {
    //   prospectName: $(this).val(),
    // });
  });
  // Move the screen when watched full video
  function setFinalFunction() {
    player.on("ended", function () {
      $(function () {
        $(".nav-bullet-dot:nth-child(3)")
          .click(function () {
            this.click();
          })
          .click();
      });
      $(".site-content-wrapper.video").addClass("move");
      $(".site-content-wrapper.paths").addClass("move");
    });
  }

  // Rendering path questions based on the path selected
  async function render_options() {
    for (i = 0; i <= options.length; i++) {
      $(".checkbox-field:nth-child(" + i + ")").show();
      let text = options[i];
      if ((await Weglot.getCurrentLang()) === "es") {
        if (text) {
          text = await translateToLanguage([text], "en", "es");
        }
      }
      $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").text(
        text
      );
      $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").attr(
        "en",
        options[i]
      );
    }
    $(function () {
      $(".nav-bullet-dot:nth-child(4)")
        .click(function () {
          this.click();
        })
        .click();
    });
    $(".watch-video").addClass("pan-out");
    $(".path-container").addClass("pan-in");
  }

  /********************************/
  /*******PAGE LOAD TRIGGER*******/
  /******************************/
  $("#phone").inputmask("(999) 999-9999"); //Masking the phone number field
  $(".checkbox-field").hide();
  validateVideoType(videoType); //validating video type from the url

  /*********************************/
  /******** EVENT TRIGGERS ********/
  /*******************************/

  $("#country-us").click(function () {
    Weglot.switchTo("en");
    validateVideoType(videoType);
  });

  $("#country-es").click(function () {
    Weglot.switchTo("es");
    validateVideoType(videoType);
  });

  $("#country-ca").click(function () {
    Weglot.switchTo("en");
    validateVideoType(videoType);
  });

  $("#country-ca-es").click(function () {
    Weglot.switchTo("es");
    validateVideoType(videoType);
  });

  // email help text
  $("#email").on("focus blur", toggleFocus);

  function toggleFocus(e) {
    console.log(e.type);

    if (e.type === "focus") {
      $(".email_help_text").addClass("active");
    } else {
      $(".email_help_text").removeClass("active");
    }
  }

  redirectContinuer(page);

  // Move the screens on successfull prospect
  function letsStart() {
    $(function () {
      $(".nav-bullet-dot:nth-child(2)")
        .click(function () {
          this.click();
        })
        .click();
    });
    $(".onboarding").addClass("pan-out");
    $(".watch-video").addClass("pan-in");
    $("*").scrollTop(0);
  }

  // Forward Backward Functionality
  $("#forward").click(function () {
    player.setCurrentTime(currentTiming + 10);
  });

  $("#backward").click(function () {
    player.setCurrentTime(currentTiming - 10);
  });

  //Fullscreen function
  $("#fullscreen").click(function () {
    player.requestFullscreen();
  });

  function setFinalFunction() {
    player.on("ended", function () {
      $(function () {
        $(".nav-bullet-dot:nth-child(3)")
          .click(function () {
            this.click();
          })
          .click();
      });
      $(".site-content-wrapper.video").addClass("move");
      $(".site-content-wrapper.paths").addClass("move");
    });
  }
}
module.exports = {
  init,
};
