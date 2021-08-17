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


var video_id = $.trim(readCookie('VIDEO'));
const aptmturl = new URL(video_id);
videotokenID = aptmturl.pathname
videotokenID = videotokenID.replace('/','');
iframeUrl = "https://player.vimeo.com/video/" + videotokenID + "?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=ed9a32a11a";


if(video_id != ""){
    $('#aptmt_video').attr('src',iframeUrl);
    $('.apt-hero-bottomsection').addClass('active');    
}



