import { cookies, initiateAdvisorLogo, toDollar } from "../../../utils";

export default function resultInit() {
  require("../../../utils/scratch");

  if (cookies.get("isRyanSemons") !== "true") {
    initiateAdvisorLogo(cookies.get("REP_NAME"));
  } else {
    $(".logo-container").html(
      "<img width='180px' src='https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/6493400b63c62651c3ba9ae5_clear_financial_vision.png' />"
    );
  }

  $("#fin_number").html(toDollar(cookies.get("FIN Number")));

  $(".user_name").each(function () {
    $(this).html(cookies.get("Name"));
  });
}
