//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

// Reading name cookie
var user_name = readCookie("Name");
$(".user_name").each(function () {
  $(this).html("" + user_name);
});

var appointment_link = "https://" + readCookie("APTMT_LINK");
$("#aptmt_link").attr("href", appointment_link);

var rep_name = capitalize(readCookie("REP_NAME"));
$(".rep_name").text(rep_name);
$(".rep_name_cta").text(rep_name);

$("#cta_btn").click(function () {
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
  ques_1 = readCookie("question_1");
  ques_2 = readCookie("question_2");
  ques_3 = readCookie("question_3");
  ques_4 = readCookie("question_4");
  ques_5 = readCookie("question_5");

  atomic("https://" + api_url + "/api/v1/users/submit/form", {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
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
      "hasRequestedVideoEmail": true,
    },
  })
    .then(function (response) {
      console.log(response.data); // xhr.responseText
      console.log(response.xhr); // full response
    })
    .catch(function (error) {
      console.log(error.status); // xhr.status
      console.log(error.statusText); // xhr.statusText
    });
});

$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");


$('.appointment-iframe .w-iframe iframe').attr('src','/appointment?company=' + readCookie('URL_COMPANY') + '&user=' + readCookie('URL_USER')); 

// learn more
$('.slide_cta').click(function(){
  $('.last-popup').addClass('active');
});

$('.fin_learn_more').click(function(){
  $('.last-popup').addClass('active');
});

$('.iframe-back').click(function(){
  $('.appointment-iframe .w-iframe iframe').attr('src','/appointment');  
});

$('.closer-last').click(function(){
  $('.last-popup').removeClass('active');
  $('.appointment-iframe .w-iframe iframe').attr('src','/appointment');
});


