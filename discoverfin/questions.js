function isEmail(e) {
  return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    e
  );
}

$(".button_blocker.email").click(function () {
  alert("Please enter a correct email");
});

$(".button_blocker.check").click(function () {
  alert("Please accept the terms and conditions");
});

$(".text-field.email").keyup(function () {
    if(isEmail($(this).val())){
      $(".button_blocker").addClass("hide");      
    } else {
      $(".button_blocker").removeClass("hide");  
    }  
});


var unique_url = "mayank";
var user_url = "mayank";
var user_id = "1n6kcukwtrg";
$("#unique_id").val("1n6kcukwtrg");
if (
  readCookie("URL") != "" &&
  readCookie("ID") != "" &&
  readCookie("USER_URL") != "" &&
  readCookie("USER_ID") != ""
) {
  unique_url = readCookie("URL");
  user_url = readCookie("USER_URL");
  user_id = readCookie("USER_ID");
  $("#unique_id").val("" + readCookie("ID"));
}
initializeVar();
function initializeVar() {
  avg_retirement_age = 0;
  default_death_age = 0;
}




$("#guessed_fin").val("skipped");

$("#user_name").keyup(function () {
  var var_name = $(this).val();
  if (var_name.length > 1) {
    $("#ques_1_active").addClass("active");
    $("#ques_1_btn").addClass("go_ahead");
    $(".body").addClass("ques");
  } else {
    $("#ques_1_active").removeClass("active");
    $("#ques_1_btn").removeClass("go_ahead");
    $(".body").removeClass("ques");
  }
  var_name = var_name.charAt(0).toUpperCase() + var_name.slice(1);
  $(".var_name").html("" + var_name);
});

$("#user_name").on("keypress", function (e) {
  if (e.which == 13) {
    e.preventDefault();
    if ($("#ques_1_btn").hasClass("go_ahead")) {
      $("#ques_1_btn")[0].click();
    }
  }
});

$("#age_dummy").keyup(function () {
  var var_age = $(this).val();
  if (var_age.length > 1) {
    if (var_age > 17 && var_age < 71) {
      $("#ques_2_active").addClass("active");
      $("#ques_2_btn").addClass("go_ahead");
      $(".age_alert").removeClass("alert");
    } else {
      $(".age_alert").addClass("alert");
      $("#ques_1_btn").removeClass("go_ahead");
    }
  } else {
    $("#ques_2_active").removeClass("active");
    $("#ques_1_btn").removeClass("go_ahead");
  }
});

$("#age_dummy").on("keypress", function (e) {
  if (e.which == 13) {
    e.preventDefault();
    if ($("#ques_2_btn").hasClass("go_ahead")) {
      $("#ques_2_btn")[0].click();
    }
  }
});

$(".options_popup.step_3 .options_container .option").click(function () {
  valueee = $(this).attr("data-age");
  valueee2 = $(this).attr("data-default");
  //alert(valueee);
  avg_retirement_age = parseInt(valueee);
  default_death_age = parseInt(valueee2);
});

$("#dummy_income").keyup(function () {
  var dummy_income = $(this).val();
  $("#user_income").val(dummy_income);

  if ($("#user_income").val() != "") {
    if (parseInt($("#user_income").val()) > 0) {
      var income = parseInt(
        $("#user_income").val().replace(/[^\d]/g, "").replace(/,/g, ""),
        10
      ).toLocaleString();
      $("#user_income").val(income);
    } else {
      $("#user_income").val("");
    }
  } else {
    $("#user_income").val("");
  }

  var var_income = $("#user_income")
    .val()
    .replace(/,/g, "")
    .replace(/[^\d]/g, "");
  if (var_income > 999) {
    $("#ques_four_active").addClass("active");
    $("#ques_4_btn").addClass("go_ahead");
  } else {
    $("#ques_four_active").removeClass("active");
    $("#ques_4_btn").removeClass("go_ahead");
  }
  if (var_income > 0) {
    $(".dollar").addClass("show");
  } else {
    $(".dollar").removeClass("show");
  }
});

$("#user_income").on("keypress", function (e) {
  if (e.which == 13) {
    e.preventDefault();
    if ($("#ques_4_btn").hasClass("go_ahead")) {
      $("#ques_4_btn")[0].click();
    }
  }
});

var year_left_in_retirement;
var fin_factor;

$("#ques_4_btn").click(function () {
  var incomebi = $("#user_income").val().replace(/,/g, "");
  var userage = parseInt($("#user_age").val());
  avg_retirement_age = avg_retirement_age;
  year_left_in_retirement = avg_retirement_age - userage;
  var inflation_factor = Math.pow(1.025, year_left_in_retirement);
  inflation_factor = Math.round((inflation_factor + 0.00001) * 100) / 100;
  var income_after_inflation = parseInt(incomebi) * inflation_factor;
  $("#ibi").html("$" + addCommas(parseInt(incomebi)));
  $(".income_after_inflation").html(
    addCommas(parseInt(income_after_inflation))
  );
  $("#iai").html("$" + addCommas(parseInt(income_after_inflation)));
  $("#income_after_inflation").val(parseInt(income_after_inflation));
  $("#at_age").html(avg_retirement_age);
});

$(".options_popup.step_3 .option").click(function () {
  $(".options_popup.step_3 .option").removeClass("active");
  $(this).addClass("active");
  var ans = $(this).children().html();
  $("#step_3_selector").addClass("lightup");
  $("#light_arrow_3").addClass("show");
  $("#step_3_selector").html(ans);
  $("#retirement_age").val(ans);
  $("#ques_3_active").addClass("active");
  $("#ques_3_btn").addClass("go_ahead");
});

$(".options_popup.step_5 .option").click(function () {
  $(".options_popup.step_5 .option").removeClass("active");
  $(this).addClass("active");
  var ans1 = $(this).children().html();
  $("#step_5_selector").addClass("lightup");
  $("#light_arrow_5").addClass("show");
  $("#step_5_selector").html(ans1);
  $("#ques_5_active").addClass("active");
  $("#ques_5_btn").addClass("go_ahead");
  $("#pension_choice").val(ans1);

  var fin_array = [
    4.7, 5.5, 6.2, 6.9, 7.7, 8.5, 9.18, 9.86, 10.54, 11.22, 11.9, 12.48, 13.06,
    13.64, 14.22, 14.8, 15.3, 15.8, 16.3, 16.8, 17.3, 17.74, 18.18, 18.62,
    19.06, 19.5, 19.85, 20.2, 20.55, 20.9, 21.25, 21.6, 21.95, 22.3, 22.65, 23,
    23.35, 23.7, 24.05, 24.4, 24.75,
  ];
  var ylir = default_death_age;
  fin_factor = fin_array[ylir - 5];
  //calcuating_fin_number
  var fin_num =
    $(".income_after_inflation").html().replace(/,/g, "") * fin_factor;
  selected_ans = parseInt($(this).attr("data-ans"));
  user_age = parseInt($("#user_age").val());

  if (
    (user_age < 30 && selected_ans == 1) ||
    (user_age < 30 && selected_ans == 3)
  ) {
    fin_num = fin_num;
  } else if (
    (user_age > 30 && user_age < 40 && selected_ans == 1) ||
    (user_age > 30 && user_age < 40 && selected_ans == 3)
  ) {
    fin_num = fin_num - (fin_num / 100) * 20;
  } else if (
    (user_age > 40 && selected_ans == 1) ||
    (user_age > 40 && selected_ans == 3)
  ) {
    fin_num = fin_num - (fin_num / 100) * 30;
  } else if (user_age > 30 && selected_ans == 2) {
    fin_num = fin_num - (fin_num / 100) * 50;
  } else {
    fin_num = fin_num;
  }

  $("#fin_number").val(fin_num);
});

$(".guess_option").click(function () {
  $(".guess_option").removeClass("active");
  $(this).addClass("active");
  $("#guess_btn").addClass("active");
  $("#skipper").addClass("hidden");
  $("#guess_1_btn").addClass("go_ahead");
  var ans3 = $(this).children().html();
  $("#guessed_fin").val(ans3);
});

$("#guess_back").click(function () {
  $(".guess_option").removeClass("active");
  $("#guess_btn").removeClass("active");
  $("#skipper").removeClass("hidden");
  $("#guess_1_btn").removeClass("go_ahead");
  $("#guessed_fin").val("skipped");
});

var country = "United States";
$(".radio-button-field").click(function () {
  if ($(this).children("input").prop("checked") == true) {
    country = $(this).children("input").attr("value");
  }
});

$("#submit_btn").click(function () {
  unique_id = $("#unique_id").val();
  user_id = user_id;
  name = $("#user_name").val();
  age = $("#user_age").val();
  retirement_age = $("#retirement_age").val();
  income_after_inflation = parseInt($("#income_after_inflation").val());
  income_befor_inflation = parseInt($("#user_income").val().replace(/,/g, ""));
  pension_choice = $("#pension_choice").val();
  guessed_fin = $("#guessed_fin").val();
  email = $("#email").val();
  fin_number = parseInt($("#fin_number").val());
  country_name = country;

  atomic("https://" + api_url + "/api/v1/users/submit/form", {
    method: "POST",
    data: {
      "Unique-Id": unique_id,
      "User-Id": user_id,
      "Name": name,
      "Age": age,
      "Retirement-Age": retirement_age,
      "Annual-Income-after-inflation": income_after_inflation,
      "Annual-Income-before-Inflation": income_befor_inflation,
      "Pension-Choice": pension_choice,
      "Guessed-FIN": guessed_fin,
      "Email": email,
      "Fin-Number": fin_number,
      "country": country_name,
    },
  })
    .then(function (response) {
      console.log(response.data);
      window.location.href = "/result";
      console.log(response.xhr);
    })
    .catch(function (error) {
      console.log(error.status);
      console.log(error.statusText);
    });

  function setCookies(field1, value1) {
    document.cookie = field1 + "=" + value1 + ";path=/";
  }
  setCookies("Unique ID", "" + unique_id);
  setCookies("Unique URL", unique_url);
  setCookies("User ID", "" + user_id);
  setCookies("User URL", user_url);
  setCookies("Name", "" + name);
  setCookies("Age", "" + age);
  setCookies("Retirement Age", "" + retirement_age);
  setCookies("Income After Inflation", "" + income_after_inflation);
  setCookies("Income Before Inflation", "" + income_befor_inflation);
  setCookies("Pension Choice", "" + pension_choice);
  setCookies("Guessed FIN", "" + guessed_fin);
  setCookies("Email", "" + email);
  setCookies("FIN Number", "" + fin_number);
  setCookies("Country", "" + country_name);
});

$("*").animate({ scrollTop: 0 }, "fast");

$(".step_btn").click(function () {
  $("*").scrollTop(0);
});
$("input").blur(function () {
  $("*").scrollTop(0);
});
$("input").focusout(function () {
  $("*").scrollTop(0);
});
$("#age_dummy").keyup(function () {
  var dummy_val = $(this).val();
  $("#user_age").val(dummy_val);
});
