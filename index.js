// const { pathname } = window.location;
// let openedOneTime = false;
// if (
//   !pathname.startsWith("/questions") &&
//   !pathname.startsWith("/en") &&
//   !pathname.endsWith("/video") &&
//   window.location.hostname === "dev.discoverfin.io"
// ) {
//   const URL_COMPANY = readCookie("URL_COMPANY");
//   const URL_USER = readCookie("URL_USER");

//   if ($("#schedule_btn").length > 0) {
//     $("#schedule_btn").css("display", "flex");
//     $("#schedule_btn").click(() => {
//       $(".appointment-iframe .w-iframe iframe").attr(
//         "src",
//         `https://${window.location.hostname}/appointment-copy?company=${URL_COMPANY}&user=${URL_USER}&video=false`
//       );
//       $(".last-popup").css("display", "flex");
//     });
//     $(".iframe-back").click(() => {
//       $(".appointment-iframe").css("display", "flex");
//       $(".appointment-iframe").css("opacity", "1");
//       $(".appointment-iframe").css(
//         "transform",
//         "translate3d(0px, 0, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
//       );
//       $(".last-popup").css("display", "none");
//     });
//   }
// }
