//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

var URL_COMPANY =
  readCookie("URL_COMPANY") !== "undefined"
    ? readCookie("URL_COMPANY")
    : readCookie("COMPANY_URL");
var URL_USER =
  readCookie("URL_USER") !== "undefined"
    ? readCookie("URL_USER")
    : readCookie("USER_URL");

let lastPopupShown = false;

// Reading name cookie
var user_name = readCookie("Name");
$(".user_name").each(function () {
  $(this).html("" + user_name);
});

$("#video-area").css(
  "background-image",
  `url(${
    window.location.pathname.includes("make-more-money")
      ? "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/6210dad4ad797ee88f50da1c_Group%20287.png"
      : "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/6210877dd8fc1e63e01c0ea4_7%201.png"
  })`
);

const getTrailerId = () => {
  return window.location.pathname.includes("make-more-money")
    ? "445443796"
    : "614514350";
};

const setTrailerVideo = () => {
  $("#video").attr("src", `https://player.vimeo.com/video/${getTrailerId()}`);
};

var appointment_link = "https://" + readCookie("APTMT_LINK");
$("#aptmt_link").attr("href", appointment_link);

setTrailerVideo();

var rep_name = capitalize(readCookie("REP_NAME"));
$(".rep_name").text(rep_name);
$("#rep-name").text(rep_name);
$(".rep_name_cta").text(rep_name);
$("#user-name").text(readCookie("Name"));
$("#rep_name").text(rep_name);
$("#rep-image").attr("src", readCookie("PIC"));
$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");
$("#appointment-iframe iframe").attr(
  "src",
  "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
);
$("#message-rep").click(() => {
  window.open(`sms:${readCookie("PHONE")}`, "_parent");
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
  ]
    .filter((currentItem) => currentItem !== "")
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

const openVideoApp = (prospectAnswers) => {
  window.open(
    `https://devvideo.discoverfin.io/${getVideoType()}?id=${URL_USER}&fname=${readCookie(
      "Name"
    )}&email=${prospectAnswers["email"]}`,
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
    openVideoApp(prospectAnswers);
  });
  $("#open-video").click(() => {
    openVideoApp(prospectAnswers);
  });
  
  parent.html(questionAndAnswersOfProspect(prospectAnswers));
}

populatePathOptions();

$("#watch-trailer").click(function () {
  $("#video").attr("src", $("#video").attr("src") + "?autoplay=1");
});

$(".iframe-back").click(function () {
  $("#appointment-iframe iframe").attr(
    "src",
    "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
  );
});

$(".closer-last").click(function () {
  // $(".last-popup").removeClass("active");
  $("#appointment-iframe iframe .w-iframe iframe").attr(
    "src",
    "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
  );
});

