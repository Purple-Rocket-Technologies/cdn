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
$(".rep-phoito").css("background-image", "url('" + readCookie("PIC") + "')");
$('.appointment-iframe .w-iframe iframe').attr('src','https://staging.discoverfin.io/appointment?company=' + readCookie('URL_COMPANY') + '&user=' + readCookie('URL_USER')); 

// learn more
$('.slide_cta').click(function(){
  $('.last-popup').addClass('active');
});

$('.fin_learn_more').click(function(){
  $("#video").attr("src",$("#video").attr("src")+"?autoplay=1");
});

$('.iframe-back').click(function(){
  $('.appointment-iframe .w-iframe iframe').attr('src','https://staging.discoverfin.io/appointment?company=' + readCookie('URL_COMPANY') + '&user=' + readCookie('URL_USER')); 
});

$('.closer-last').click(function(){
  $('.last-popup').removeClass('active');
  $('.appointment-iframe .w-iframe iframe').attr('src','https://staging.discoverfin.io/appointment?company=' + readCookie('URL_COMPANY') + '&user=' + readCookie('URL_USER')); 
});


