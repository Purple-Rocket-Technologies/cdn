//reading cookies
const fin_num = addCommas(parseInt(readCookie("FIN Number")));
$("#fin_number").html("$" + fin_num);
const user_name = readCookie("Name");

$(".user_name").each(function () {
  $(this).html("" + user_name);
});
