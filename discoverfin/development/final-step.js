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

var appointment_link = "https://" + readCookie("APTMT_LINK");
$("#aptmt_link").attr("href", appointment_link);

var rep_name = capitalize(readCookie("REP_NAME"));
$(".rep_name").text(rep_name);
$("#rep-name").text(rep_name);
$(".rep_name_cta").text(rep_name);
$("#user-name").text(readCookie("Name"));
$("#rep_name").text(rep_name);
$("#rep-image").attr("src", readCookie("PIC"));
$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");
$(".appointment-iframe .w-iframe iframe").attr(
  "src",
  "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
);

const getPathAnswers = async (id) => {
  return await axios({
    method: "get",
    url: `https://${api_url}/api/v1/users/company/${readCookie(
      "COMPANY_ID"
    )}/prospects/?_id=${id}`,
  });
};

const questionAndAnswersOfProspect = (prospectAnswers) => {
  return [
    prospectAnswers.ques_1,
    prospectAnswers.ques_2,
    prospectAnswers.ques_3,
    prospectAnswers.ques_4,
    prospectAnswers.ques_5,
  ]
    .filter((currentItem) => currentItem !== "")
    .map((currentItem) =>
      currentItem
        ? currentItem.split("*").splice(1, currentItem.split("*").length - 1)
        : []
    )
    .reduce((a, b) => a.concat(b), [])
    .map(
      (currentItem) => `<div class="div-block-65"><img
      src="https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/620e98d16dc631d33da9dd03_Group%20272.svg"
      loading="lazy" alt=""><h2 class="ml-3 font-normal">${currentItem}</h2></div>`
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
  parent.html(questionAndAnswersOfProspect(prospectAnswers));
}

populatePathOptions();

$("#watch-trailer").click(function () {
  $("#video").attr("src", $("#video").attr("src") + "?autoplay=1");
});

$(".iframe-back").click(function () {
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
  );
});

$(".closer-last").click(function () {
  // $(".last-popup").removeClass("active");
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://dev.discoverfin.io/appointment?id=" + URL_USER + "&video=false"
  );
});
