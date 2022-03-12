//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

var URL_COMPANY = readCookie("URL_COMPANY") !== 'undefined' ? readCookie("URL_COMPANY") : readCookie("COMPANY_URL");
var URL_USER = readCookie("URL_USER") !== 'undefined' ? readCookie("URL_USER") : readCookie("USER_URL");

trackMixPanelEvent("Prospect visited final screen", {
  company: URL_COMPANY,
  fieldTrainer: URL_USER,
});

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
  "https://discoverfin.io/appointment?company=" +
    URL_COMPANY +
    "&user=" +
    URL_USER +
    "&video=false"
);

// learn more
$(".slide_cta").click(function () {
  // lastPopupShown = true;
  // $("#email-sent-text").css("display", "block");
  // $(".last-popup").addClass("active");
  trackMixPanelEvent("Clicked Email Free Video", {
    company: URL_COMPANY,
    type: "Fin Prospect",
    page: "FIN APP FINAL STEP",
    fieldTrainer: URL_USER,
  });
});

$(".fin_learn_more").click(function () {
  $("#video").attr("src", $("#video").attr("src") + "?autoplay=1");
  trackMixPanelEvent("Clicked Watch FIN Trailer", {
    company: URL_COMPANY,
    type: "Fin Prospect",
    page: "FIN APP FINAL STEP",
    fieldTrainer: URL_USER,
  });
});

$(".iframe-back").click(function () {
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://discoverfin.io/appointment?company=" +
      URL_COMPANY +
      "&user=" +
      URL_USER +
      "&video=false"
  );
});

$("#learn-more-prospect").on("click", function () {
  trackMixPanelEvent("Clicked Learn More", {
    company: URL_COMPANY,
    type: "Fin Prospect",
    page: "FIN APP FINAL STEP",
    fieldTrainer: URL_USER,
  });
});

$(".closer-last").click(function () {
  // $(".last-popup").removeClass("active");
  $(".appointment-iframe .w-iframe iframe").attr(
    "src",
    "https://discoverfin.io/appointment?company=" +
      URL_COMPANY +
      "&user=" +
      URL_USER +
      "&video=false"
  );
});