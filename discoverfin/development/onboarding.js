
setCookies('START_OVER_URL', window.location.href);
var home_link = readCookie('START_OVER_URL');
$('#start_over').attr('href', home_link);

var user = getUrlParameter('user');
var company = getUrlParameter('company');
setCookies('URL_USER', user);
setCookies('URL_COMPANY', company);

axios({
    method: 'get',
    url: 'https://' + api_url + '/api/v1/users/getCompany/name/' + company + '/' + user,
}).then(function(response) {    
    if (response.data.error == true) {
        console.log('Error');
        $('.not_found').addClass('show_not_found');
        $('.page').addClass('pnf');
    }
    else {
        $('.main_start_div').addClass("show");        
        setCookies('COMPANY_ID', response.data.data.companyId);
        setCookies('COMPANY_URL', response.data.data.companyUrl);
        setCookies('USER_ID', response.data.data.userId);
        setCookies('USER_URL', response.data.data.userUrl); 
        setCookies('APTMT_LINK', response.data.data.appointmentBookingLink);
        setCookies('REP_NAME', response.data.data.firstName);
        setCookies('PIC', response.data.data.profilePic);
        setCookies('PHONE', response.data.data.phone);
        setCookies('EMAIL', response.data.data.email);
        setCookies('VIDEO', response.data.data.videoProfileLink);           
        $(document).prop('title', 'DiscoverFIN');
    }
}).catch(function (error) {
    console.log(error.status); // xhr.status
    console.log(error.statusText); // xhr.statusText
});

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
    setCookies("country","United States");
});

$('#lang_ca').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/551499288');
    Weglot.switchTo('en');
    setCookies("country","Canada");
});

$('#lang_es').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/452754620');
    Weglot.switchTo('es');
    setCookies("country","United States");
});

$('#lang_ca_es').click(function () {
    $('.fin_video').attr('src', 'https://player.vimeo.com/video/452754620');
    Weglot.switchTo('es');
    setCookies("country","Canada");
});
