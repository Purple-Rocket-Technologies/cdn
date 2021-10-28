//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

var URL_COMPANY = readCookie("URL_COMPANY");
var URL_USER = readCookie("URL_USER");

let lastPopupShown = false;
// Reading name cookie
var user_name = readCookie("Name");
$(".user_name").each(function () {
  $(this).html("" + user_name);
});

console.log(URL_COMPANY, URL_USER);

var appointment_link = "https://" + readCookie("APTMT_LINK");
$("#aptmt_link").attr("href", appointment_link);

var rep_name = capitalize(readCookie("REP_NAME"));
$(".rep_name").text(rep_name);
$(".rep_name_cta").text(rep_name);
$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");
$(".appointment-iframe .w-iframe iframe").attr(
  "src",
  "https://staging.discoverfin.io/appointment?company=" +
    URL_COMPANY +
    "&user=" +
    URL_USER
);

setTimeout(() => {
  if (!lastPopupShown) {
    $("#email-sent-text").css("display", "none");
    $(".last-popup").addClass("active");
  }
}, 22000);

// learn more
$(".slide_cta").click(function () {
  lastPopupShown = true;
  $("#email-sent-text").css("display", "block");
  $(".last-popup").addClass("active");
});

$(".fin_learn_more").click(function () {
  $("#video").attr("src", $("#video").attr("src") + "?autoplay=1");
});

$(".iframe-back").click(function () {
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://staging.discoverfin.io/appointment?company=" +
      URL_COMPANY +
      "&user=" +
      URL_USER
  );
});

$(".closer-last").click(function () {
  $(".last-popup").removeClass("active");
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://staging.discoverfin.io/appointment?company=" +
      URL_COMPANY +
      "&user=" +
      URL_USER
  );
});
