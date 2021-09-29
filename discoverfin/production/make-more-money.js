var company_id, prospect_id, user_name;

if (
  readCookie("COMPANY_ID") &&
  readCookie("prospect_id") &&
  readCookie("Name") &&
  readCookie("FIN Number")
) {
  company_id = readCookie("COMPANY_ID");
  prospect_id = readCookie("prospect_id");
  user_name = readCookie("Name");
  setPageVariableValue();
} else {
  window.location.href = "/404";
}

function setPageVariableValue() {
  $(".user_name").each(function () {
    $(this).html("" + user_name);
  });
}

$("#submit_btn").prop("disabled", true);

var progress_number = 0;
var reduction_count = 0;

function progress() {
  progress_number += 25;
  $(".progress_number").html("" + progress_number);
  $(".inner_prog_bar").css("width", progress_number + "%");
  if (progress_number == 100) {
    $("#submit_btn").prop("disabled", false);
  }
}

function progress_reduce() {
  progress_number -= 25;
  $(".progress_number").html("" + progress_number);
  $(".inner_prog_bar").css("width", progress_number + "%");
  $("#submit_btn").prop("disabled", true);
}

$("#Slide_1 .slide_cta").click(function () {
  progress();
});

var answer_array_1 = [$("#ques_1").text()];
var answer_array_2 = [$("#ques_2").text()];
var answer_array_3 = [$("#ques_3").text()];

$("#Slide_2 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_1.splice(answer_array_1.indexOf(get_value), 1);
    $("#question_1").val(answer_array_1);
  } else {
    $(check_element).addClass("checked");
    answer_array_1.push(get_value);
    $("#question_1").val(answer_array_1);
  }

  if (answer_array_1.length != 0) {
    $("#Slide_2 .next_btn").addClass("active");
  } else {
    $("#Slide_2 .next_btn").removeClass("active");
    if (progress_number > 50) {
      if (reduction_count == 0) {
        progress_reduce();
        $("#Slide_2 .next_btn").attr("data-clicked", "no");
      }
      reduction_count = 1;
    }
  }
});

$("#Slide_3 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_2.splice(answer_array_2.indexOf(get_value), 1);
    $("#question_2").val(answer_array_2);
  } else {
    $(check_element).addClass("checked");
    answer_array_2.push(get_value);
    $("#question_2").val(answer_array_2);
  }

  if (answer_array_2.length != 0) {
    $("#Slide_3 .next_btn").addClass("active");
  } else {
    $("#Slide_3 .next_btn").removeClass("active");
    if (progress_number > 50) {
      if (reduction_count == 0) {
        progress_reduce();
        $("#Slide_3 .next_btn").attr("data-clicked", "no");
      }
      reduction_count = 1;
    }
  }
});

$("#Slide_4 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_3.splice(answer_array_3.indexOf(get_value), 1);
    $("#question_3").val(answer_array_3);
  } else {
    $(check_element).addClass("checked");
    answer_array_3.push(get_value);
    $("#question_3").val(answer_array_3);
  }

  if (answer_array_3.length != 0) {
    $("#Slide_4 .next_btn").addClass("active");
  } else {
    $("#Slide_4 .next_btn").removeClass("active");
    if (progress_number > 75) {
      if (reduction_count == 0) {
        progress_reduce();
        $("#Slide_4 .next_btn").attr("data-clicked", "no");
      }
      reduction_count = 1;
    }
  }
});

$("#Slide_2 .next_btn").click(function () {
  if ($(this).attr("data-clicked") == "no") {
    progress();
  }
  $(this).attr("data-clicked", "yes");
  reduction_count = 0;
});

$("#Slide_3 .next_btn").click(function () {
  if ($(this).attr("data-clicked") == "no") {
    progress();
  }
  $(this).attr("data-clicked", "yes");
  reduction_count = 0;
});

$("#Slide_4 .next_btn").click(function () {
  if ($(this).attr("data-clicked") == "no") {
    progress();
  }
  $(this).attr("data-clicked", "yes");
  reduction_count = 0;
});

// Reading name cookie
var user_name = readCookie("Name");
$("#user_name").html("" + user_name);

//turning arrays into strings
function array_to_string(array_item) {
  var stringy = "";
  for (i = 0; i < array_item.length; i++) {
    stringy = stringy + array_item[i];
    if (i < array_item.length - 1) {
      stringy = stringy + " * ";
    }
  }
  return stringy;
}

//Submitting Form
function submit_route_answers() {
  ques_1 = array_to_string(answer_array_1);
  ques_2 = array_to_string(answer_array_2);
  ques_3 = array_to_string(answer_array_3);

  axios({
    method: "put",
    url:
      "https://" +
      api_url +
      "/api/v1/users/company/" +
      company_id +
      "/prospects/" +
      prospect_id,
    data: {
      ques_1: ques_1,
      ques_2: ques_2,
      ques_3: ques_3,
    },
  })
    .then(function () {
      window.location.href = "/route/make-more-money/video";
    })
    .catch(function (error) {
      catchExceptionToSentry("error", error);
      alert("Oops, There was an unexpected error.");
    });
}

$("#submit_btn").click(function () {
  if (
    answer_array_1.length == 1 ||
    answer_array_2.length == 1 ||
    answer_array_3.length == 1
  ) {
    alert("Please answer all questions");
  } else {
    submit_route_answers();
  }
});
