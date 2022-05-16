const { BasePage, finBaseUrl } = require("../../../utils");
const { getUser } = require("../../../service/fin/onboarding.service");
const { onBoarding } = require("../../../utils/onboarding.utils");
const {
  fetchVideoService,
  getVideoProspect,
  fetchValidateVideoType,
  getPathsContentAPI,
  createVideoProspectService,
  updateWatchTimeAPI,
  updateVideoProspect,
  getPathOptions,
  setPathOptionsAPI,
} = require("../../../service/video");
const videoUtils = require("../../../utils/video.utils");
const { url, getVideoBaseUrl } = require("../../../utils/index");
let videoType = getVideoBaseUrl();
let watchpercentage = 0;
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

//Setting paths content variable
async function setPathsContentVariable(videoType) {
  await getPathsContentAPI(videoType)
    .then(async function (response) {
      [...$(".path-option")].forEach((elem) => {
        let temp = [];
        for (let i = 0; i < elem.childNodes.length; i++) {
          const item = elem.childNodes[i];
          if (!item.className.includes("path-text")) {
            temp.push(item);
          }
        }
        elem.innerHTML = "";
        temp.forEach((item) => {
          elem.append(item);
        });
      });

      let description_item_text;
      let description_array;
      let path_name;
      for (let i = 0; i < response.data.data.length; i++) {
        let it = response.data.data[i];
        //setting title of path
        if ((await Weglot.getCurrentLang()) === "es") {
          path_name = await translateToLanguage([it.name], "en", "es");
        } else {
          path_name = it.name;
        }
        $(".path-option:nth-child(" + (i + 1) + ") .heading").text(path_name);

        //setting description of path
        description_array = it.description;

        for (let j = 0; j < description_array.length; j++) {
          let elem = description_array[j];
          if ((await Weglot.getCurrentLang()) === "es") {
            description_item_text = await translateToLanguage(
              [elem],
              "en",
              "es"
            );
          } else {
            description_item_text = elem;
          }
          const html_elem = $(`.path-option:nth-child(${i + 1})`);
          if (!html_elem[0].innerHTML.includes(description_item_text)) {
            html_elem.append(
              `<div class='path-text'>${description_item_text}</div>`
            );
          }
        }
      }
    })
    .catch(function (error) {
      videoUtils.methods.error_show("Oops, There was an unexpected error.");
      console.error(error);
    });
}

async function validateVideoType(typeName) {
  await fetchValidateVideoType(typeName)
    .then(function (response) {
      document.title = response.data.data[0].name; // Setting page title
      $("#video-title").text(response.data.data[0].name); // Setting video title
      videoUtils.methods.renderVideo(response.data.data[0].url); // Rendering video
      if (response.data.count > 0) {
        validateUrl(getUrlParameter("company"), getUrlParameter("user"));
        setPathsContentVariable(videoType);
      } else {
        $(".fourofour").addClass("show");
      }
    })
    .catch(function (error) {
      $(".fourofour").addClass("show");
    });
}

// Check Video Prospect
async function checkVideoProspect(email_val) {
  let companyId = readCookie("COMPANY_ID");
  await getVideoProspect(companyId, email_val)
    .then(function (response) {
      if (response.data.count === 1) {
        videoUtils.default.initialState.VIDEO_PROSPECT_ID =
          response.data.data[0]._id;
        if (!getUrlParameter("prospectEmail")) {
          videoUtils.default.methods.showSuccess(
            "Welcome " + response.data.data[0].firstName + "! Enjoy your video"
          );
        }
        videoUtils.default.initialState.COUNTRY =
          response.data.data[0].country || "US";
        videoUtils.default.initialState.LANG =
          response.data.data[0].language || "EN";
        videoUtils.default.methods.fetchVideo(
          videoType,
          videoUtils.default.initialState.COUNTRY,
          videoUtils.default.initialState.LANG
        );
        letsStart();
      } else {
        createVideoProspect();
      }
    })
    .catch(function (error) {
      error_show(error.response.data.message);
    });
}

// Create Video Prospect
async function createVideoProspect() {
  await videoUtils.default.methods.fetchVideo(
    videoType,
    videoUtils.default.initialState.COUNTRY || "US",
    videoUtils.default.initialState.LANG || "EN"
  );
  const data = {
    videoName: document.title,
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    email: $("#email").val(),
    phone: Inputmask.unmask($("#phone").val(), { mask: "(999) 999-9999" }),
    country: videoUtils.default.initialState.COUNTRY || "US",
    language: videoUtils.default.initialState.LANG || "EN",
    watchingWith: $("#peoplewatching").val(),
    watchedTime: 0,
    totalVideoTime: format(videoUtils.default.initialState.VIDEO_TOTAL_TIME),
    watchPercentage: 0,
    appointmentCompleted: false,
    userId: readCookie("USER_ID"),
    companyId: readCookie("COMPANY_ID"),
  };
  if (readCookie("isAffiliateUrl") === "true") {
    data.affiliateId = readCookie("affiliateId");
  }
  await createVideoProspectService(data.companyId, data)
    .then(function (response) {
      videoUtils.default.initialState.VIDEO_PROSPECT_ID =
        response.data.data._id;
      videoUtils.default.methods.showSuccess(
        "Your details have been verified, Enjoy your video!"
      );
      letsStart();
    })
    .catch(function (error) {
      videoUtils.default.methods.showError(error.response.data.message);
    });
}

// Update watch percentage
async function updateWatchtime(time, percentage) {
  let companyId = readCookie("COMPANY_ID");
  let UpdateData = {
    watchedTime: format(time),
    watchPercentage: parseInt(percentage),
  };
  await updateWatchTimeAPI(
    companyId,
    videoUtils.default.initialState.VIDEO_PROSPECT_ID,
    UpdateData
  )
    .then(function (response) {
      // trackMixPanelEvent(`Watched ${videoType} ${parseInt(percentage)}%`, {
      //   videoType,
      //   percentage: parseInt(percentage),
      //   watchedTime: format(time),
      // });
      //console.log(response.data);
      //console.log(response.xhr);
    })
    .catch(function (error) {
      //console.log(response.data);
      //console.log(response.xhr);
    });
}

// Progress bar update
setInterval(function () {
  if (videoUtils.default.initialState.IS_PLAYER_LOADED) {
    videoUtils.default.initialState.PLAYER.getCurrentTime().then(function (
      seconds
    ) {
      watchpercentage =
        (seconds / videoUtils.default.initialState.VIDEO_TOTAL_TIME) * 100;
    });
    $(".progress-bar-inner").css("width", watchpercentage + "%");
  }
}, 200);

// Current timing
setInterval(function () {
  if (videoUtils.default.initialState.IS_PLAYER_LOADED) {
    videoUtils.default.initialState.PLAYER.getCurrentTime().then(function (
      seconds
    ) {
      $(".elapsedtime").text(format(seconds));
      const schedule_footer = $(".schedule-footer");
      watchpercentage =
        (seconds / videoUtils.default.initialState.VIDEO_TOTAL_TIME) * 100;
      //if (watchpercentage >= 93) {
      //if (schedule_footer.css("display") === "none") {
      // schedule_footer.css("display", "flex");
      // $("#window_frame").attr(
      // "src",
      //`https://discoverfin.io/appointment?company=${getUrlParameter(
      // "company"
      //)}&user=${getUrlParameter("user")}&video=true`
      //);
      //}
      //}
      videoUtils.default.initialState.PLAYER_CURRENT_TIME = seconds;
    });
  }
}, 200);

// Rendering path questions based on the path selected
async function render_options() {
  for (i = 0; i <= videoUtils.default.initialState.PATH_OPTIONS.length; i++) {
    $(".checkbox-field:nth-child(" + i + ")").show();
    let text = videoUtils.default.initialState.PATH_OPTIONS[i];
    if ((await Weglot.getCurrentLang()) === "es") {
      if (text) {
        text = await translateToLanguage([text], "en", "es");
      }
    }
    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").text(text);
    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").attr(
      "en",
      videoUtils.default.initialState.PATH_OPTIONS[i]
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

async function video_Int() {
  const USER_URL = url.query.get("id") || url.query.get("user");
  const TYPE = getVideoBaseUrl();
  const appLink = finBaseUrl(
    USER_URL,
    url.query.get("company"),
    TYPE,
    "appointment"
  );
  let page = new videoPage({
    ...videoUtils.initialState,
    USER_URL,
    IS_OLD_LINK: url.query.get("company"),
    APPOINTMENT_LINK: `${appLink}&video=true`,
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

  //Setting cookie name
  $("#fname").keyup(function () {
    setCookies("Name", $(this).val());
    // trackMixPanelEvent(`Video Prospect Journey Started`, {
    //   prospectName: $(this).val(),
    // });
  });

  //Country Button functions
  $(".country-btn").click(function () {
    $(".country-btn").removeClass("active");
    $(this).addClass("active");
    videoUtils.default.initialState.COUNTRY = $(this).attr("data-country");
    videoUtils.default.initialState.LANG = $(this).attr("data-lang");
    fetchVideo(
      videoType,
      videoUtils.default.initialState.COUNTRY,
      videoUtils.default.initialState.LANG
    );
  });

  $(".non-clicker").click(function () {
    error_show("Please select a language first.");
  });

  $(".onboad").click(function () {
    if (videoUtils.default.initialState.COUNTRY !== "") {
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

  // Updating watch time percentage thorough api
  const set10 = setInterval(function () {
    if (watchpercentage > 10) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set10);
    }
  }, 1000);
  const set20 = setInterval(function () {
    if (watchpercentage > 20) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set20);
    }
  }, 1000);
  const set30 = setInterval(function () {
    if (watchpercentage > 30) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set30);
    }
  }, 1000);
  const set40 = setInterval(function () {
    if (watchpercentage > 40) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set40);
    }
  }, 1000);
  const set50 = setInterval(function () {
    if (watchpercentage > 50) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set50);
    }
  }, 1000);
  const set60 = setInterval(function () {
    if (watchpercentage > 60) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set60);
    }
  }, 1000);
  const set70 = setInterval(function () {
    if (watchpercentage > 70) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set70);
    }
  }, 1000);
  const set80 = setInterval(function () {
    if (watchpercentage > 80) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set80);
    }
  }, 1000);
  const set90 = setInterval(function () {
    if (watchpercentage > 90) {
      updateWatchtime(
        parseInt(videoUtils.default.initialState.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set90);
    }
  }, 1000);
  const set96 = setInterval(function () {
    if (watchpercentage > 96) {
      updateWatchtime(videoUtils.default.initialState.VIDEO_TOTAL_TIME, 100);
      clearInterval(set96);
    }
  }, 1000);

  // Changing the video text based on progress
  const set32 = setInterval(function () {
    if (watchpercentage < 32) {
      $(".interval_text_item:nth-child(1)").addClass("active");
      $(".interval_text_item:nth-child(2)").removeClass("active");
      $(".interval_text_item:nth-child(3)").removeClass("active");
      clearInterval(set32);
    }
  }, 1000);

  const set35 = setInterval(function () {
    if (watchpercentage > 67) {
      $(".interval_text_item:nth-child(2)").addClass("active");
      $(".interval_text_item:nth-child(1)").removeClass("active");
      $(".interval_text_item:nth-child(3)").removeClass("active");
      clearInterval(set35);
    }
  }, 1000);

  const set75 = setInterval(function () {
    if (watchpercentage > 96) {
      $(".interval_text_item:nth-child(3)").addClass("active");
      $(".interval_text_item:nth-child(2)").removeClass("active");
      $(".interval_text_item:nth-child(1)").removeClass("active");
      clearInterval(set75);
    }
  }, 1000);

  $(".path-option").click(function () {
    var path_name_value = $(this).children(".heading").text();
    //const schedule_footer = $(".schedule-footer");
    //schedule_footer.remove();
    triggerRenderOptions(path_name_value);
  });

  async function triggerRenderOptions(path_name) {
    let COMPANY_ID = readCookie("COMPANY_ID");
    $(".path-heading").text(path_name);
    path_name = path_name.includes("1")
      ? "Path 1"
      : path_name.includes("2")
      ? "Path 2"
      : path_name.includes("3")
      ? "Path 3"
      : "";

    // track path clicked event to mixpanel
    // trackMixPanelEvent(`${videoType}: ${path_name} Clicked`, {
    //   companyId: readCookie("COMPANY_ID"),
    //   videoUtils.default.initialState.VIDEO_PROSPECT_ID,
    //   pathChoosen: path_name,
    // });
    await updateVideoProspect(
      COMPANY_ID,
      videoUtils.default.initialState.VIDEO_PROSPECT_ID,
      BODY
    )
      .then(async function (response) {
        let BODY = {
          pathChoosen: path_name,
        };
        // Getting path options afte a successfull post
        await getPathOptions(path_name)
          .then(function (response) {
            videoUtils.default.initialState.PATH_OPTIONS =
              response.data.data[0].options;
            render_options();
          })
          .catch(function (error) {
            console.log(error.status);
            console.log(error.statusText);
            error_show("Oops, There was an unexpected error.");
          });
      })
      .catch(function (error) {
        console.log(error.status);
        console.log(error.statusText);
        error_show("Oops, There was an unexpected error.");
      });
  }

  $(".checkbox-field").click(function () {
    const get_value = $(this).children(".checkbox-label").attr("en");
    const check_element = $(this).children(".checkbox");

    if (check_element.hasClass("active")) {
      if (typeof get_value === "string") {
        videoUtils.default.initialState.MCQ_OPTIONS.splice(
          videoUtils.default.initialState.MCQ_OPTIONS.indexOf(get_value),
          1
        );
        check_element.removeClass("active");
      }
    } else {
      if (typeof get_value === "string") {
        videoUtils.default.initialState.MCQ_OPTIONS.push(get_value);
        check_element.addClass("active");
      }
    }
  });

  $(".submit.paths").click(async () => {
    let COMPANY_ID = readCookie("COMPANY_ID");

    if (videoUtils.default.initialState.MCQ_OPTIONS.length !== 0) {
      let BODY = {
        interests: videoUtils.default.initialState.MCQ_OPTIONS,
      };
      await setPathOptionsAPI(
        COMPANY_ID,
        videoUtils.default.initialState.VIDEO_PROSPECT_ID,
        BODY
      )
        .then(function (response) {
          console.log(response.data);
          // trackMixPanelEvent(
          //   `Video Prospect Journey Completed`,
          //   response.data.data
          // );
          $(".user_name").text($("#fname").val());
          $(".rep_name, .rep_name_cta").text(readCookie("REP_NAME"));
          $(".rep-phoito").css(
            "background-image",
            "url('" + readCookie("PIC") + "')"
          );
          videoUtils.default.methods.showSuccess(
            "Your answers have been sent successfully!"
          );
          $(".appointment-iframe .w-iframe iframe").attr(
            "src",
            appointment_link
          );
          $(".last-popup").addClass("active");
        })
        .catch(function (error) {
          console.log(error.status);
          console.log(error.statusText);
          videoUtils.default.methods.showError(
            "Oops, There was an unexpected error."
          );
        });
    } else {
      videoUtils.default.methods.showError("Please select at least one option");
    }
  });

  $(".iframe-back").click(function () {
    $(".appointment-iframe .w-iframe iframe").attr("src", appointment_link);
  });

  $(".closer-last").click(function () {
    $(".last-popup").removeClass("active");
    $(".appointment-iframe .w-iframe iframe").attr("src", appointment_link);
  });
}

video_Int();
