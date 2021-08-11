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



var answer_array_1 = [$("#ques_1").text()];
var answer_array_2 = [$("#ques_2").text()];
var answer_array_3 = [$("#ques_3").text()];
var answer_array_4 = [$("#ques_4").text()];

$("#Slide_2 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_1.splice(answer_array_1.indexOf(get_value), 1);
    $("#question_0").val(answer_array_1);
  } else {
    $(check_element).addClass("checked");
    answer_array_1.push(get_value);
    $("#question_0").val(answer_array_1);
  }

  if (answer_array_1.length != 0) {
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



$("#Slide_3 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_2.splice(answer_array_2.indexOf(get_value), 1);
    $("#question_1").val(answer_array_2);
  } else {
    $(check_element).addClass("checked");
    answer_array_2.push(get_value);
    $("#question_1").val(answer_array_2);
  }

  if (answer_array_2.length != 0) {
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



$("#Slide_4 .check").click(function () {
  var get_value = $(this).children(".check_box").siblings("div").html();
  check_element = $(this).children(".check_box").children(".extended_tick");

  if ($(check_element).hasClass("checked")) {
    $(check_element).removeClass("checked");
    answer_array_3.splice(answer_array_3.indexOf(get_value), 1);
    $("#question_2").val(answer_array_3);
  } else {
    $(check_element).addClass("checked");
    answer_array_3.push(get_value);
    $("#question_2").val(answer_array_3);
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


/*
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
*/


$('#Slide_5 .toggle_option').click(function () {
  $('#Slide_5 .toggle_option').removeClass('active');
  $(this).addClass('active');
  $('#nos_child').val('');

  var get_ans = $(this).children().html();

  if (get_ans == 'Me + Partner') {
      $('#Slide_5 .next_btn').removeClass('active');
      $('#nos_child').keyup(function () {
          if ($(this).val() == '') {
              $('#Slide_5 .next_btn').removeClass('active');
          } else {
              $('#Slide_5 .next_btn').addClass('active');
              answer_array_value = 'With my partner & have ' + $('#nos_child').val() + ' childrens';
              answer_array_4 = [];
              answer_array_4.push($("#ques_4").text());
              answer_array_4.push(answer_array_value);
          }
      });
  } else if (get_ans == 'Me') {
      $('#Slide_5 .next_btn').removeClass('active');
      $('#nos_child').keyup(function () {
          if ($(this).val() == '') {
              $('#Slide_5 .next_btn').removeClass('active');
          } else {
              $('#Slide_5 .next_btn').addClass('active');
              answer_array_value = 'No one & have ' + $('#nos_child').val() + ' childrens';
              answer_array_4 = [];
              answer_array_4.push($("#ques_4").text());
              answer_array_4.push(answer_array_value);
          }
      });
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

//turning arrays into strings
function array_to_string(array_item){
  var stringy = "";
  for(i=0;i<array_item.length;i++){
      stringy = stringy + array_item[i];
      if(i < array_item.length-1){
          stringy = stringy + " * ";    
      }
  }
  return stringy;
}

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
  ques_1 = array_to_string(answer_array_1);
  ques_2 = array_to_string(answer_array_2);
  ques_3 = array_to_string(answer_array_3);
  ques_4 = array_to_string(answer_array_4);
  ques_5 = "";

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
      "route_choice": route_selection,
      "ques_1": ques_1,
      "ques_2": ques_2,
      "ques_3": ques_3,
      "ques_4": ques_4,
      "ques_5": ques_5
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

  setCookies('question_1', '' + ques_1);
  setCookies('question_2', '' + ques_2);
  setCookies('question_3', '' + ques_3);
  setCookies('question_4', '' + ques_4);
  setCookies('question_5', '' + ques_5);
});
