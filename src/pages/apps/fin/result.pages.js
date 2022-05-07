import { cookies, toDollar } from "../../../utils";

export default function resultInit() {
  require("../../../utils/scratch");

  $("#fin_number").html(toDollar(cookies.get("FIN Number")));

  $(".user_name").each(function () {
    $(this).html(cookies.get("Name"));
  });
}
