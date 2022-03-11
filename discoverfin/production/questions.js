var relativ_url = window.location.origin + window.location.pathname;
var curren_url = window.location;
if (curren_url != relativ_url) {
  window.location = relativ_url;
}

$("body").on("scroll mousewheel touchmove", function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});

function initializeVar() {
  avg_retirement_age = 0;
  default_death_age = 0;
}

function isEmail(e) {
  return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    e
  );
}

initializeVar();

$(".button_blocker.email").click(function () {
  alert("Please enter a correct email");
});

$(".button_blocker.check").click(function () {
  alert("Please accept the terms and conditions");
});

$(".text-field.email").keyup(function () {
  if (isEmail($(this).val())) {
    $(".button_blocker.email").addClass("hide");
  } else {
    $(".button_blocker.email").removeClass("hide");
  }
});

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

$("#ques_1_btn").on("click", function () {
  trackMixPanelEvent("FIN Prospect Started Journey", {
    first_name: $("#user_name").val(),
  });
});
$("#user_age").keyup(function () {
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

//question two desktop 1
$("#user_age").on("keypress", function (e) {
  if (e.which == 13) {
    e.preventDefault();
    if ($("#ques_2_btn").hasClass("go_ahead")) {
      $("#ques_2_btn")[0].click();
    }
  }
});
//avg retirement age
$(".options_popup.step_3 .options_container .option").click(function () {
  valueee = $(this).attr("data-age");
  valueee2 = $(this).attr("data-default");
  //alert(valueee);
  avg_retirement_age = parseInt(valueee);
  default_death_age = parseInt(valueee2);
});

//Question 4 Validation
$("#user_income").keyup(function () {
  var var_income = $(this).val().replace(/,/g, "").replace(/[^\d]/g, "");
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

// Live Comma
$("#user_income").keyup(function () {
  if ($(this).val() != "") {
    if (parseInt($(this).val()) > 0) {
      var income = parseInt(
        $(this).val().replace(/[^\d]/g, "").replace(/,/g, ""),
        10
      ).toLocaleString();
      $(this).val(income);
    } else {
      $(this).val("");
    }
  } else {
    $(this).val("");
  }
});

//question four desktop 1
$("#user_income").on("keypress", function (e) {
  if (e.which == 13) {
    e.preventDefault();
    if ($("#ques_4_btn").hasClass("go_ahead")) {
      $("#ques_4_btn")[0].click();
    }
  }
});

//inflation calculation ques_4_btn

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

var country_val = readCookie("country");

async function createNewProspect() {
  if (Weglot.getCurrentLang() == "es") {
    [retirement_age, pension_choice, guessed_fin] = await translateToLanguage([
      $("#retirement_age").val(),
      $("#pension_choice").val(),
      $("#guessed_fin").val(),
    ]);
  } else {
    [retirement_age, pension_choice, guessed_fin] = [
      $("#retirement_age").val(),
      $("#pension_choice").val(),
      $("#guessed_fin").val(),
    ];
  }

  const data = {
    companyId: readCookie("COMPANY_ID"),
    userId: readCookie("USER_ID"),
    first_name: $("#user_name").val(),
    age: $("#user_age").val(),
    annual_income_after_inflation: parseInt($("#income_after_inflation").val()),
    annual_income_before_inflation: parseInt(
      $("#user_income").val().replace(/,/g, "")
    ),
    retirement_age,
    pension_choice,
    guessed_fin,
    email: $("#email").val(),
    fin_number: parseInt($("#fin_number").val()),
    country: country_val,
  };

  if (readCookie("isAffiliateUrl") == "true") {
    data.affiliateId = readCookie("affiliateId");
  }

  axios({
    method: "post",
    url:
      "https://" +
      api_url +
      "/api/v1/users/company/" +
      readCookie("COMPANY_ID") +
      "/prospects",
    data,
  })
    .then(function (response) {
      setCookies("prospect_id", response.data.data._id);
      setCookies("FIN Number", "" + response.data.data.fin_number);
      setCookies("Name", response.data.data.first_name);
      setCookies("Country", response.data.data.country);
      window.location.href = "/result";
      trackMixPanelEvent("FIN Prospect created.", response.data.data);
    })
    .catch(function (error) {
      alert(error.response.data.message);
      throw new SentryError(
        `Error while creating a prospect email: ${$("#email").val()}`,
        error
      );
    });

  //trrigerring the email
  // axios({
  //   method: 'post',
  //   url: 'https://'+ api_url +'/api/v1/users/email/send/finResults',
  //   data: {
  //     companyId: readCookie('COMPANY_ID'),
  //     userId: readCookie('USER_ID'),
  //     prospectName : $("#user_name").val(),
  //     prospectEmail: $("#email").val(),
  //     finNumber: parseInt($("#fin_number").val())
  //   }
  // })
  // .then(function(response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   alert("Oops, There was an unexpected error.");
  // });
}

async function updateProspect(prospectID) {
  if (Weglot.getCurrentLang() == "es") {
    [retirement_age, pension_choice, guessed_fin] = await translateToLanguage([
      $("#retirement_age").val(),
      $("#pension_choice").val(),
      $("#guessed_fin").val(),
    ]);
  } else {
    [retirement_age, pension_choice, guessed_fin] = [
      $("#retirement_age").val(),
      $("#pension_choice").val(),
      $("#guessed_fin").val(),
    ];
  }

  axios({
    method: "put",
    url:
      "https://" +
      api_url +
      "/api/v1/users/company/" +
      readCookie("COMPANY_ID") +
      "/prospects/" +
      prospectID,
    data: {
      age: $("#user_age").val(),
      retirement_age,
      annual_income_after_inflation: parseInt(
        $("#income_after_inflation").val()
      ),
      annual_income_before_inflation: parseInt(
        $("#user_income").val().replace(/,/g, "")
      ),
      pension_choice,
      guessed_fin,
      fin_number: parseInt($("#fin_number").val()),
    },
  })
    .then(function (response) {
      setCookies("prospect_id", response.data.data._id);
      setCookies("FIN Number", "" + response.data.data.fin_number);
      setCookies("Name", response.data.data.first_name);
      setCookies("Country", response.data.data.country);
      window.location.href = "/result";
    })
    .catch(function (error) {
      alert(error.response.data.message);
      throw new SentryError(
        `Error while updating prospect: ${prospectID}`,
        error
      );
    });
}

$("#submit_btn").click(function () {
  const terms = $("#terms").is(":checked");
  const email_address = isEmail($("#email").val());
  if (email_address) {
    if (!terms) {
      alert("Please accept the terms and conditions");
    } else {
      axios({
        method: "get",
        url:
          "https://" +
          api_url +
          "/api/v1/users/company/" +
          readCookie("COMPANY_ID") +
          "/prospects?email=" +
          $("#email").val(),
      })
        .then(function (response) {
          if (response.data.count === 0) {
            createNewProspect();
          } else {
            updateProspect(response.data.data[0]._id);
          }
        })
        .catch(function (error) {
          // alert("Oops, There was an unexpected error.");
          throw new SentryError(
            `Error While submitting results: ${$("#email").val()}`,
            error
          );
        });
    }
  } else {
    alert("Please enter your email address");
  }
});
