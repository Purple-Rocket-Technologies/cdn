
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}



function setCookies(field1, value1) {
    document.cookie = field1 + "=" + value1 + ";path=/";
}

setCookies('START_OVER_URL', window.location.href);
var home_link = readCookie('START_OVER_URL');
$('#start_over').attr('href', home_link);

var user = getUrlParameter('user');
var company = getUrlParameter('company');

atomic('https://' + api_url + '/api/v1/users/getCompany/name/' + company + '/' + user, {
    method: 'GET',

})
    .then(function (response) {
        if (response.data.error == true) {
            console.log('Error');
            $('.not_found').addClass('show_not_found');
            $('.page').addClass('pnf');
        }
        else {
            $('.main_start_div').addClass("show");
            setCookies('ID', response.data.data.companyId);
            setCookies('URL', response.data.data.url);
            setCookies('USER_ID', response.data.data.userId);
            setCookies('USER_URL', response.data.data.userUrl);
            setCookies('APTMT_LINK', response.data.data.appointmentBookingLink);
            setCookies('REP_NAME', response.data.data.firstName);
            setCookies('PIC', response.data.data.profilePic);
            setCookies('PHONE', response.data.data.phone);
            setCookies('EMAIL', response.data.data.email);
            $(document).prop('title', 'DiscoverFIN');
            console.clear();
        }

    })
    .catch(function (error) {
        console.log(error.status); // xhr.status
        console.log(error.statusText); // xhr.statusText
    });


var pageWidth = $(window).width();
if (pageWidth < 1024) {    
    var height = (($('.video_placeholder').width() / 16) * 9);
    $('.video_placeholder').height(height);
}


var iframe = document.getElementById('video');
var player = new Vimeo.Player(iframe);

player.on('play', function () {
    $('.arrow_lottie').css("opacity", "0");
    $('.title').addClass('hide');
});

player.on('ended', function () {
    $('.cta_btn').addClass('active');
});

setCookies('INITIAL_LINK', window.location.href);

$('#lang_us').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/445268145');
    Weglot.switchTo('en');
});

$('#lang_ca').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/551499288');
    Weglot.switchTo('en');
});

$('#lang_es').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/452754620');
    Weglot.switchTo('es');
});

$('#lang_ca_es').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/452754620');
    Weglot.switchTo('es');
});
