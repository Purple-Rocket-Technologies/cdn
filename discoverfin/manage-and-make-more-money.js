// Reading name cookie
var user_name = readCookie("Name");
$(".user_name").each(function () {
  $(this).html("" + user_name);
});

$("#submit_btn").prop("disabled", true);

var progress_number = 0;
var reduction_count = 0;

function progress() {
  progress_number += 20;
  $(".progress_number").html("" + parseInt(progress_number));
  $(".inner_prog_bar").css("width", progress_number + "%");
  if (progress_number == 100) {
    $("#submit_btn").prop("disabled", false);
  }
}

function progress_reduce() {
  progress_number -= 20;
  $(".progress_number").html("" + progress_number);
  $(".inner_prog_bar").css("width", progress_number + "%");
  $("#submit_btn").prop("disabled", true);
}

$("#Slide_1 .slide_cta").click(function () {
  progress();
});

var mcqo = [];
$("#Slide_2 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    mcqo.splice(mcqo.indexOf(get_value), 1);
    $("#question_0").val(mcqo);
  } else {
    $(check_element).addClass("checked");
    mcqo.push(get_value);
    $("#question_0").val(mcqo);
  }

  if (mcqo.length != 0) {
    $("#Slide_2 .next_btn").addClass("active");
  } else {
    $("#Slide_2 .next_btn").removeClass("active");
    if (progress_number > 75) {
      if (reduction_count == 0) {
        progress_reduce();
        $("#Slide_2 .next_btn").attr("data-clicked", "no");
      }
      reduction_count = 1;
    }
  }
});

var mcq = [];

$("#Slide_3 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    mcq.splice(mcq.indexOf(get_value), 1);
    $("#question_1").val(mcq);
  } else {
    $(check_element).addClass("checked");
    mcq.push(get_value);
    $("#question_1").val(mcq);
  }

  if (mcq.length != 0) {
    $("#Slide_3 .next_btn").addClass("active");
  } else {
    $("#Slide_3 .next_btn").removeClass("active");
    if (progress_number > 75) {
      if (reduction_count == 0) {
        progress_reduce();
        $("#Slide_3 .next_btn").attr("data-clicked", "no");
      }
      reduction_count = 1;
    }
  }
});

var mcq1 = [];

$("#Slide_4 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    mcq1.splice(mcq1.indexOf(get_value), 1);
    $("#question_2").val(mcq1);
  } else {
    $(check_element).addClass("checked");
    mcq1.push(get_value);
    $("#question_2").val(mcq1);
  }

  if (mcq1.length != 0) {
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

$("#Slide_5 .toggle_option").click(function () {
  $("#Slide_5 .toggle_option").removeClass("active");
  $(this).addClass("active");

  var get_ans = $(this).children().html();

  if (get_ans == "Me + Partner") {
    //$('.child_nos').addClass('active');
    $("#Slide_5 .next_btn").removeClass("active");
    $("#question_3").val("Me + Partner");
    $("#nos_child").keyup(function () {
      if ($(this).val() == "") {
        $("#Slide_5 .next_btn").removeClass("active");
      } else {
        $("#Slide_5 .next_btn").addClass("active");
        $("#question_3").val(
          "Me + Partner (" + $("#nos_child").val() + " Child)"
        );
      }
    });
  } else if (get_ans == "Me") {
    //$('.child_nos').removeClass('active');
    $("#Slide_5 .next_btn").removeClass("active");
    $("#question_3").val("Me");
    $("#nos_child").keyup(function () {
      if ($(this).val() == "") {
        $("#Slide_5 .next_btn").removeClass("active");
      } else {
        $("#Slide_5 .next_btn").addClass("active");
        $("#question_3").val("Me (" + $("#nos_child").val() + " Child)");
      }
    });
  }
});

$("#Slide_6 .toggle_option").click(function () {
  $("#Slide_6 .toggle_option").removeClass("active");
  $(this).addClass("active");

  var get_ans = $(this).children().html();
  $("#question_4").val(get_ans);

  if ($("#question_4").val() == "") {
    $("#Slide_6 .next_btn").removeClass("active");
  } else {
    $("#Slide_6 .next_btn").addClass("active");
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
});

$("#Slide_5 .next_btn").click(function () {
  if ($(this).attr("data-clicked") == "no") {
    progress();
  }
  $(this).attr("data-clicked", "yes");
});

$("#Slide_6 .next_btn").click(function () {
  if ($(this).attr("data-clicked") == "no") {
    progress();
  }
  $(this).attr("data-clicked", "yes");
});

// Reading name cookie
var user_name = readCookie("Name");
$("#user_name").html("" + user_name);

//Submitting Form

$("#submit_btn").click(function () {
  unique_id = readCookie("Unique ID");
  user_id = readCookie("User ID");
  name = readCookie("Name");
  age = readCookie("Age");
  retirement_age = readCookie("Retirement Age");
  income_after_inflation = readCookie("Income After Inflation");
  income_befor_inflation = readCookie("Income Before Inflation");
  pension_choice = readCookie("Pension Choice");
  guessed_fin = readCookie("Guessed FIN");
  email = readCookie("Email");
  fin_number = readCookie("FIN Number");
  country_name = readCookie("Country");
  route_selection = readCookie("Route Selection");
  ques_1 = $("#question_1").val();
  ques_2 = $("#question_2").val();
  ques_3 = $("#question_3").val();

  atomic("https://" + api_url + "/api/v1/users/submit/form", {
    method: "POST",
    data: {
      "Unique-Id": unique_id,
      "User-Id": user_id,
      Name: name,
      Age: age,
      "Retirement-Age": retirement_age,
      "Annual-Income-after-inflation": income_after_inflation,
      "Annual-Income-before-Inflation": income_befor_inflation,
      "Pension-Choice": pension_choice,
      "Guessed-FIN": guessed_fin,
      Email: email,
      "Fin-Number": fin_number,
      country: country_name,
      route_choice: route_selection,
      ques_1: ques_1,
      ques_2: ques_2,
      ques_3: ques_3,
    },
  })
    .then(function (response) {
      window.location.href = "/route/both/webinar";
      console.log(response.data); // xhr.responseText
      console.log(response.xhr); // full response
    })
    .catch(function (error) {
      alert("Oops, something went wrong!");
      console.log(error.status); // xhr.status
      console.log(error.statusText); // xhr.statusText
    });

  //passsing form in cookie
  function setCookies(field1, value1) {
    document.cookie = field1 + "=" + value1 + ";path=/";
  }

  setCookies("question_1", "" + ques_1);
  setCookies("question_2", "" + ques_2);
  setCookies("question_3", "" + ques_3);
});
