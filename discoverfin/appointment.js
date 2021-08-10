var user_name = readCookie('Name');
$('.user_name').each(function(){
    $(this).html(''+user_name);
});

var appointment_link = readCookie('APTMT_LINK');
$('#aptmt_link1').attr('href',appointment_link);
$('#aptmt_link2').attr('href',appointment_link);
$('#aptmt_link3').attr('href',appointment_link);

var rep_name = capitalize(readCookie('REP_NAME'));
$('.rep_name').text(rep_name);

var rep_phone = readCookie('PHONE');
$('#phone').text(rep_phone);

var rep_email = readCookie('EMAIL');
$('#email_id').text(rep_email);

$('.apt-rep-image').css("background-image","url('"+ readCookie('PIC')+"')");

$('.closer-last').click(function(){
    $('#window_frame').attr("src","/appointment");
});