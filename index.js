const { pathname } = window.location;

if (
  !pathname.startsWith("/questions") &&
  !pathname.startsWith("/en") &&
  window.location.hostname === "dev.discoverfin.io"
) {
  const URL_COMPANY = readCookie("URL_COMPANY");
  const URL_USER = readCookie("URL_USER");

  if ($("#schedule_btn").length > 0) {
    $("#schedule_btn").css("display", "flex");
    $("#schedule_btn").click(() => {
      $(".last-popup").css("display", "flex");
      $(".appointment-iframe .w-iframe iframe").attr(
        "src",
        `https://${window.location.hostname}/appointment-copy?company=${URL_COMPANY}&user=${URL_USER}&video=false`
      );
    });
  }
}
