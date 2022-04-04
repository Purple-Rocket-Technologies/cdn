//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

const URL_COMPANY =
  readCookie("URL_COMPANY") !== "undefined"
    ? readCookie("URL_COMPANY")
    : readCookie("COMPANY_URL");
const URL_USER =
  readCookie("URL_USER") !== "undefined"
    ? readCookie("URL_USER")
    : readCookie("USER_URL");

let prospectEmail;

const appointmentLink = !checkIsEmpty(readCookie("isOldUrl"))
  ? `https://${window.location.host}/appointment?company=${readCookie(
      "isOldUrl"
    )}&user=${URL_USER}&video=false`
  : `https://${window.location.host}/appointment?id=${URL_USER}&video=false`;

// Reading name cookie
const user_name = readCookie("Name");
$(".user_name").each(function () {
  $(this).html("" + user_name);
});

$("#video-area").css(
  "background-image",
  `url(${
    window.location.pathname.includes("make-more-money")
      ? "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447936cd9d3938d09c181d_more_than_buisness.png"
      : "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447935eafc80b0556a88bd_7_steps.png"
  })`
);

const getTrailerId = () => {
  return window.location.pathname.includes("make-more-money")
    ? "445443796"
    : "614514350";
};

const videoTitle = () => {
  return window.location.pathname.includes("make-more-money")
    ? "More than a Business"
    : "7 Steps To Create A Clear Financial Vision";
};

$("#video-title").text(videoTitle());

const setTrailerVideo = () => {
  $("#video").each(() => {
    $(this).attr("src", `https://player.vimeo.com/video/${getTrailerId()}`);
  });
};

$("#aptmt_link").attr("href", appointmentLink);

setTrailerVideo();
/**
 *
 *
 * @param {boolean} [isScrolling=true]
 * @param {*} scrollDirection
 * @param {*} targetElement
 */
function scrollButtonHandlers(
  isScrolling = true,
  scrollDirection,
  targetElement
) {
  if (
    isScrolling
      ? scrollDirection === "up"
      : window.scrollY > targetElement.offsetTop + targetElement.offsetHeight
  ) {
    $(".hide-on-scroll").each(function () {
      $(this).css("display", "block");
    });
    $(".down-arrow").css("display", "none");
  } else {
    $(".hide-on-scroll").each(function () {
      $(this).css("display", "none");
    });
  }
  if (window.scrollY < targetElement.offsetTop + targetElement.offsetHeight) {
    $(".down-arrow").css("display", "block");
  } else {
    $(".down-arrow").css("display", "none");
  }
}

let scroll_position = 0;
let scroll_direction;

// Setup isScrolling variable
let isScrolling;

// Listen for scroll events
window.addEventListener(
  "scroll",
  function () {
    scroll_direction =
      document.body.getBoundingClientRect().top > scroll_position
        ? "up"
        : "down";
    scroll_position = document.body.getBoundingClientRect().top;
    const elementTarget = document.getElementById("header_area");
    scrollButtonHandlers(true, scroll_direction, elementTarget);
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      scrollButtonHandlers(false, scroll_direction, elementTarget);
    }, 66);
  },
  false
);

const rep_name = capitalize(readCookie("REP_NAME"));
$(".rep_name").text(rep_name);
$("#rep-name").text(rep_name);
$(".rep_name_cta").text(rep_name);
$("#user-name").text(readCookie("Name"));
$("#rep_name").text(rep_name);
$("#rep-image").attr("src", readCookie("PIC"));
$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");
$("#appointment-iframe iframe").attr("src", appointmentLink);

$("#message-rep").each(function () {
  $(this).attr("href", `sms:${readCookie("PHONE")}`);
  $(this).attr("target", "_parent");
});

const getVideoType = () => {
  return window.location.pathname.includes("make-more-money")
    ? "businessOverview"
    : "financialHouse";
};

const getPathAnswers = async (id) => {
  return await axios({
    method: "get",
    url: `https://${api_url}/api/v1/users/company/${readCookie(
      "COMPANY_ID"
    )}/prospects/?_id=${id}`,
  });
};

const questionAndAnswersOfProspect = (prospectAnswers) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return [
    prospectAnswers.ques_1,
    prospectAnswers.ques_2,
    prospectAnswers.ques_3,
    prospectAnswers.ques_4,
    prospectAnswers.ques_5,
  ]
    .filter(
      (answer) =>
        answer
          .toLowerCase()
          .includes(
            "what are areas you want to evaluate or know more about?"
          ) && answer !== ""
    )
    .map((currentItem) =>
      currentItem
        ? currentItem.split("*").splice(1, currentItem.split("*").length - 1)
        : []
    )
    .reduce((a, b) => a.concat(b), [])
    .map(
      (currentItem) => `<div class="${
        isMobile ? "div-block-84" : "div-block-65"
      }"><img
      class="pointer-image"
      src="https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/620e98d16dc631d33da9dd03_Group%20272.svg"
      loading="lazy" alt=""><h2 class="${
        isMobile ? "ml-3-2 text-18 font-normal " : "font-normal ml-3"
      }">${currentItem}</h2></div>`
    );
};

const getVideoBaseUrl = () => {
  if (window.location.host === "dev.discoverfin.io") {
    return "https://devvideo.discoverfin.io";
  } else if (window.location.host === "staging.discoverfin.io") {
    return "https://stagingvideo.discoverfin.io";
  } else if (window.location.host === "discoverfin.io") {
    return "https://video.discoverfin.io";
  } else if (window.location.host === "qa.discoverfin.io") {
    return "https://qavideo.discoverfin.io";
  }
};

const openVideoApp = (email) => {
  window.open(
    !checkIsEmpty(readCookie("isOldUrl"))
      ? `${getVideoBaseUrl()}/${getVideoType()}?company=${readCookie(
          "isOldUrl"
        )}&user=${URL_USER}&fname=${readCookie("Name")}&email=${email}`
      : `${getVideoBaseUrl()}/${getVideoType()}?id=${URL_USER}&fname=${readCookie(
          "Name"
        )}&email=${email}`,
    "_self"
  );
};

async function populatePathOptions() {
  const parent = $("#ans-selected");
  let prospectAnswers = await getPathAnswers(readCookie("prospect_id"));
  prospectAnswers = prospectAnswers["data"]["data"][0];
  $("#fin_number").text(
    Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(prospectAnswers["fin_number"])
  );

  $("#video-area").click(() => {
    openVideoApp(prospectAnswers["email"]);
  });

  $(".open-video").each(function () {
    $(this).click(() => {
      openVideoApp(prospectAnswers["email"]);
    });
  });

  const isMakeMoreMoney = window.location.pathname.includes("make-more-money");
  if (!isMakeMoreMoney) {
    $(".manage-both").css("display", "block");
    parent.html(questionAndAnswersOfProspect(prospectAnswers));
  } else {
    $(".manage-both").css("display", "none");
  }
}

populatePathOptions();

$("#watch-trailer").click(function () {
  new Vimeo.Player($("#video")).play();
  trackMixPanelEvent("Clicked Watch FIN Trailer", {
    company: URL_COMPANY,
    type: "Fin Prospect",
    page: "FIN APP FINAL STEP",
    fieldTrainer: URL_USER,
  });
});

$(".iframe-back").click(function () {
  $("#appointment-iframe iframe").attr("src", appointmentLink);
});

$(".closer-last").click(function () {
  // $(".last-popup").removeClass("active");
  $("#appointment-iframe iframe .w-iframe iframe").attr("src", appointmentLink);
});
