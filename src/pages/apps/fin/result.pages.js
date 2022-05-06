import { cookies } from "../../../utils";

export default function resultInit() {
  require("../../../utils/scratch");

  const FIN_NUMBER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(parseInt(cookies.get("FIN Number")));

  $("#fin_number").html(FIN_NUMBER);

  $(".user_name").each(function () {
    $(this).html(cookies.get("Name"));
  });
}
