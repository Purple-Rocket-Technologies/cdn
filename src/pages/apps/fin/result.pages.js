import { cookies, initiateAdvisorLogo, toDollar } from "../../../utils";

export default function resultInit() {
  require("../../../utils/scratch");

  if (
    cookies.get("isRyanSemons") !== "true" &&
    cookies.get("EMAIL") !== "info@fintell.ai"
  ) {
    initiateAdvisorLogo(cookies.get("REP_NAME"));
  } else if (cookies.get("EMAIL") !== "info@fintell.ai") {
    $(".logo-container").html(
      "<img width='180px' src='https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/6493400b63c62651c3ba9ae5_clear_financial_vision.png' />"
    );
  } else if (cookies.get("EMAIL") === "info@fintell.ai") {
    $(".main_logo").attr(
      "src",
      "https://app.wealthio.com/_nuxt/a138a4fc1e71dc5dda40cbcd66489af4.svg"
    );
    $(".main_logo").css("width", "200px");
    $("#logo-container").html(
      "<img width='200px' src='https://app.wealthio.com/_nuxt/a138a4fc1e71dc5dda40cbcd66489af4.svg' />"
    );
  }

  $("#fin_number").html(toDollar(cookies.get("FIN Number")));

  $(".user_name").each(function () {
    $(this).html(cookies.get("Name"));
  });
}
