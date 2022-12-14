import { cookies, initiateAdvisorLogo, toDollar } from "../../../utils";

export default function resultInit() {
  require("../../../utils/scratch");

  initiateAdvisorLogo(cookies.get("REP_NAME"));

  $("#fin_number").html(toDollar(cookies.get("FIN Number")));

  $(".user_name").each(function () {
    $(this).html(cookies.get("Name"));
  });
}
