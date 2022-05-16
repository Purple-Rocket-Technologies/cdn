const { BasePage, finBaseUrl, cookies } = require("../../../utils");
const { getUser } = require("../../../service/fin/onboarding.service");
const { onBoarding } = require("../../../utils/onboarding.utils");
const {
  fetchVideoService,
  getVideoProspect,
  getPathsContentAPI,
  createVideoProspectService,
  updateVideoProspect,
  getPathOptions,
  setPathOptionsAPI,
} = require("../../../service/video");
const videoUtils = require("../../../utils/video.utils").default;
const { isEmail } = videoUtils.methods;
const { url } = require("../../../utils/index");
let videoType = window.location.pathname.replace("/", "");
let watchpercentage = 0;
let page = null;
class videoPage extends BasePage {
  constructor(_object) {
    super(_object);
  }
}

async function fetchAdvisor(page) {
  const { USER_URL, COMPANY_URL, IS_OLD_LINK } = page;
  const advisor = await getUser(USER_URL, COMPANY_URL);
  page.COMPANY_ID = advisor.companyId;
  onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
  page.ADVISOR = advisor;
  return page;
}

async function redirectContinuer(page) {
  if (url.query.get("prospectEmail")) {
    getVideoProspect(page.COMPANY_ID, url.query.get("prospectEmail")).then(
      (res) => {}
    );
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
      for (let i = 0; i < response.length; i++) {
        let it = response[i];
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
      $(".main-app-container").addClass("show");
    })
    .catch(function (error) {
      videoUtils.methods.showError("Oops, There was an unexpected error.");
      console.error(error);
    });
}

async function validateVideoType(typeName) {
  await fetchVideoService([
    {
      key: "type",
      value: typeName,
    },
  ])
    .then(function (response) {
      console.table({ response });
      document.title = response.data[0].name; // Setting page title
      $("#video-title").text(response.data[0].name); // Setting video title
      videoUtils.methods.renderVideo(response.data[0].url); // Rendering video
      setPathsContentVariable(videoType);
    })
    .catch(function (error) {
      console.log(error, "err");
      $(".fourofour").addClass("show");
    });
}

// Check Video Prospect
async function checkVideoProspect(email_val) {
  let companyId = cookies.get("COMPANY_ID");
  await getVideoProspect(companyId, email_val)
    .then(function (response) {
      page.VIDEO_PROSPECT_ID = response[0]._id;
      if (!getUrlParameter("prospectEmail")) {
        videoUtils.methods.showSuccess(
          "Welcome " + response[0].firstName + "! Enjoy your video"
        );
      }
      page.COUNTRY = response[0].country || "US";
      page.LANG = response[0].language || "EN";
      videoUtils.methods.fetchVideo(videoType, page.COUNTRY, page.LANG);
      letsStart();
    })
    .catch(function (error) {
      if (error.count === 0) {
        createVideoProspect();
      } else {
        videoUtils.methods.showError(error.response.data.message);
      }
    });
}

// Create Video Prospect
async function createVideoProspect() {
  await videoUtils.methods.fetchVideo(
    videoType,
    page.COUNTRY || "US",
    page.LANG || "EN"
  );
  console.table(page);
  const data = {
    videoName: document.title,
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    email: $("#email").val(),
    phone: Inputmask.unmask($("#phone").val(), { mask: "(999) 999-9999" }),
    country: page.COUNTRY || "US",
    language: page.LANG || "EN",
    watchingWith: $("#peoplewatching").val(),
    watchedTime: 0,
    totalVideoTime: videoUtils.methods.formatSecondsToTime(
      page.VIDEO_TOTAL_TIME
    ),
    watchPercentage: 0,
    appointmentCompleted: false,
    userId: cookies.get("USER_ID"),
    companyId: cookies.get("COMPANY_ID"),
  };
  if (cookies.get("isAffiliateUrl") === "true") {
    data.affiliateId = cookies.get("affiliateId");
  }
  await createVideoProspectService(data.companyId, data)
    .then(function (response) {
      page.VIDEO_PROSPECT_ID = response._id;
      videoUtils.methods.showSuccess(
        "Your details have been verified, Enjoy your video!"
      );
      videoUtils.methods.letsStart();
    })
    .catch(function (error) {
      videoUtils.methods.showError(
        error.response && error.response.data && error.response.data.message
      );
    });
}

// Update watch percentage
async function updateWatchtime(time, percentage) {
  let companyId = cookies.get("COMPANY_ID");
  let UpdateData = {
    watchedTime: videoUtils.methods.formatSecondsToTime(time),
    watchPercentage: parseInt(percentage),
  };
  await updateVideoProspect(companyId, page.VIDEO_PROSPECT_ID, UpdateData)
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

// Current timing
setInterval(function () {
  page.PLAYER = new Vimeo.Player(document.getElementById("video"));
  if (page.IS_PLAYER_LOADED) {
    page.PLAYER.getCurrentTime().then(function (seconds) {
      $(".elapsedtime").text(videoUtils.methods.formatSecondsToTime(seconds));
      const schedule_footer = $(".schedule-footer");
      watchpercentage = (seconds / page.VIDEO_TOTAL_TIME) * 100;
      $(".progress-bar-inner").css("width", watchpercentage + "%");
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
      page.PLAYER_CURRENT_TIME = seconds;
    });
  }
}, 200);

// Rendering path questions based on the path selected
async function render_options() {
  for (i = 0; i <= page.PATH_OPTIONS.length; i++) {
    $(".checkbox-field:nth-child(" + i + ")").show();
    let text = page.PATH_OPTIONS[i];
    if ((await Weglot.getCurrentLang()) === "es") {
      if (text) {
        text = await translateToLanguage([text], "en", "es");
      }
    }
    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").text(text);
    $(".checkbox-field:nth-child(" + (i + 1) + ") .checkbox-label").attr(
      "en",
      page.PATH_OPTIONS[i]
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
  const TYPE = "getBaseUrl";
  const appLink = finBaseUrl(
    USER_URL,
    url.query.get("company"),
    TYPE,
    "appointment"
  );
  page = new videoPage({
    ...videoUtils.initialState,
    USER_URL,
    IS_OLD_LINK: url.query.get("company"),
    APPOINTMENT_LINK: `${appLink}&video=true`,
  });
  try {
    page = await fetchAdvisor(page);
    // page.track("Prospect Visited Appointment page", {
    //   rep: page.ADVISOR.firstName,
    // });
  } catch (e) {
    console.log(e);
    $(".fourofour").addClass("show");
  }

  /********************************/
  /*******PAGE LOAD TRIGGER*******/
  /******************************/
  $("#phone").inputmask("(999) 999-9999"); //Masking the phone number field
  $(".checkbox-field").hide();
  await validateVideoType(videoType); //validating video type from the url
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
    page.COUNTRY = $(this).attr("data-country");
    page.LANG = $(this).attr("data-lang");
    videoUtils.methods.fetchVideo(videoType, page.COUNTRY, page.LANG);
  });

  $(".non-clicker").click(function () {
    videoUtils.methods.showError("Please select a language first.");
  });

  $(".onboad").click(function () {
    if (page.COUNTRY !== "") {
      if (
        $("#peoplewatching").val() != "" &&
        $("#phone").val() != "" &&
        $("#fname").val() != ""
      ) {
        if (isEmail($("#email").val())) {
          checkVideoProspect($("#email").val());
        } else {
          videoUtils.methods.showError("Please enter a correct email.");
        }
      } else {
        videoUtils.methods.showError("Please fill in all details.");
      }
    } else {
      videoUtils.methods.showError("Please select your country.");
    }
  });

  // Updating watch time percentage thorough api
  const set10 = setInterval(function () {
    if (watchpercentage > 10) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set10);
    }
  }, 1000);
  const set20 = setInterval(function () {
    if (watchpercentage > 20) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set20);
    }
  }, 1000);
  const set30 = setInterval(function () {
    if (watchpercentage > 30) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set30);
    }
  }, 1000);
  const set40 = setInterval(function () {
    if (watchpercentage > 40) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set40);
    }
  }, 1000);
  const set50 = setInterval(function () {
    if (watchpercentage > 50) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set50);
    }
  }, 1000);
  const set60 = setInterval(function () {
    if (watchpercentage > 60) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set60);
    }
  }, 1000);
  const set70 = setInterval(function () {
    if (watchpercentage > 70) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set70);
    }
  }, 1000);
  const set80 = setInterval(function () {
    if (watchpercentage > 80) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set80);
    }
  }, 1000);
  const set90 = setInterval(function () {
    if (watchpercentage > 90) {
      updateWatchtime(
        parseInt(page.PLAYER_CURRENT_TIME),
        parseInt(watchpercentage)
      );
      clearInterval(set90);
    }
  }, 1000);
  const set96 = setInterval(function () {
    if (watchpercentage > 96) {
      updateWatchtime(page.VIDEO_TOTAL_TIME, 100);
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
    let COMPANY_ID = cookies.get("COMPANY_ID");
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
    //   page.VIDEO_PROSPECT_ID,
    //   pathChoosen: path_name,
    // });
    await updateVideoProspect(COMPANY_ID, page.VIDEO_PROSPECT_ID, {
      pathChoosen: path_name,
    })
      .then(async function (response) {
        // Getting path options afte a successfull post
        await getPathOptions(path_name)
          .then(function (response) {
            page.PATH_OPTIONS = response.data.data[0].options;
            render_options();
          })
          .catch(function (error) {
            console.log(error.status);
            console.log(error.statusText);
            videoUtils.methods.showError(
              "Oops, There was an unexpected error."
            );
          });
      })
      .catch(function (error) {
        console.log(error.status);
        console.log(error.statusText);
        videoUtils.methods.showError("Oops, There was an unexpected error.");
      });
  }

  $(".checkbox-field").click(function () {
    const get_value = $(this).children(".checkbox-label").attr("en");
    const check_element = $(this).children(".checkbox");

    if (check_element.hasClass("active")) {
      if (typeof get_value === "string") {
        page.MCQ_OPTIONS.splice(page.MCQ_OPTIONS.indexOf(get_value), 1);
        check_element.removeClass("active");
      }
    } else {
      if (typeof get_value === "string") {
        page.MCQ_OPTIONS.push(get_value);
        check_element.addClass("active");
      }
    }
  });

  $(".submit.paths").click(async () => {
    let COMPANY_ID = cookies.get("COMPANY_ID");

    if (page.MCQ_OPTIONS.length !== 0) {
      let BODY = {
        interests: page.MCQ_OPTIONS,
      };
      await setPathOptionsAPI(COMPANY_ID, page.VIDEO_PROSPECT_ID, BODY)
        .then(function (response) {
          console.log(response.data);
          // trackMixPanelEvent(
          //   `Video Prospect Journey Completed`,
          //   response.data.data
          // );
          $(".user_name").text($("#fname").val());
          $(".rep_name, .rep_name_cta").text(cookies.get("REP_NAME"));
          $(".rep-phoito").css(
            "background-image",
            "url('" + cookies.get("PIC") + "')"
          );
          videoUtils.methods.showSuccess(
            "Your answers have been sent successfully!"
          );
          $(".appointment-iframe .w-iframe iframe").attr(
            "src",
            page.APPOINTMENT_LINK
          );
          $(".last-popup").addClass("active");
        })
        .catch(function (error) {
          console.log(error.status);
          console.log(error.statusText);
          videoUtils.methods.showError("Oops, There was an unexpected error.");
        });
    } else {
      videoUtils.methods.showError("Please select at least one option");
    }
  });

  $(".iframe-back").click(function () {
    $(".appointment-iframe .w-iframe iframe").attr(
      "src",
      page.APPOINTMENT_LINK
    );
  });

  $(".closer-last").click(function () {
    $(".last-popup").removeClass("active");
    $(".appointment-iframe .w-iframe iframe").attr(
      "src",
      page.APPOINTMENT_LINK
    );
  });
}

try {
  video_Int()
    .then((r) => {
      console.log("video_Int");
    })
    .catch((e) => {
      console.error(e);
    });
} catch (e) {
  console.error(e);
}
