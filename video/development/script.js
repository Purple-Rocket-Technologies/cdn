//*******************************/
//**ALL VARIABLES DECLARATIONS***/
//*******************************/
var videoType = (window.location.pathname).replace('/', '');
var country_val;
var lang_val;
var video_id;
var video_prospect_id;
var totalDurationTime;
var playerinitialized = 0;
var currentTiming;
var watchpercentage;
var options;
var mcq = [];


//*******************************/
//********ALL FUNCTIONS *********/
//*******************************/

// reading url parameters
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

// Check email format
function isEmail(e) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      e
    );
}

// show error message
function error_show(msg){
    $('#error_msg').text(msg);
    $(function() {$('.error-triggerer').click(function() {this.click();}).click();});
}

// show success message
function success_show(msg){
    $('.success-msg-text').text(msg);
    $(function() {$('.success-triggerer').click(function() {this.click();}).click();});
}

//formating seconds into time
function format(time) {   
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

//Validating URL
function validateUrl(company, user){
    validateCompanyUserAPI = "https://"+api_url+"/api/v1/users/getCompany/name/"+company+'/'+user;
    axios({
        method: 'get',
        url: validateCompanyUserAPI
    })
    .then(function(response) {
        if(response.data.status == 200){
            //setting necessary cookies
            setCookies('COMPANY_ID', response.data.data.companyId);	
	        setCookies('USER_ID', response.data.data.userId);
            setCookies('PIC', response.data.data.profilePic);
            setCookies('REP_NAME', response.data.data.firstName);
            setCookies('APTMT_LINK', response.data.data.appointmentBookingLink);
            setCookies('VIDEO', response.data.data.videoProfileLink);
            setCookies('PHONE', response.data.data.phone);
            setCookies('EMAIL', response.data.data.email);
            continuationCheck();
        } else {
            $('.fourofour').addClass('show');
        }        
    })
    .catch(function (error) {
        //error_show("Oops, There was an unexpected error."); 
    }); 
}


function continuationCheck(){
    if(getUrlParameter('prospectEmail')) {        
        axios({
            method: 'get',
            url: 'https://' + api_url + '/api/v1/users/company/'+ readCookie('COMPANY_ID') +'/videoProspects?email=' + getUrlParameter('prospectEmail'),
        }).then(function(response) { 
            if(response.data.count > 0){
                video_prospect_id = response.data.data[0]._id;
                prospect_watchpercentage = response.data.data[0].watchPercentage;
                prospect_pathChoosen = response.data.data[0].pathChoosen;
                redirectContinuer();
            } else {
                $('.main-app-container').addClass("show"); 
            }
        }).catch(function (error) {
            console.log(error);
            alert("Oops, There was an unexpected error."); 
        });

        
    } else {
        // normal flow if not a continuation
        $('.main-app-container').addClass("show");        
    }     
}

function redirectContinuer(){
    if(prospect_watchpercentage < 90){
        checkVideoProspect(getUrlParameter('prospectEmail'));
        $('.main-app-container').addClass("show");  

    } else if(prospect_pathChoosen == undefined){
        checkVideoProspect(getUrlParameter('prospectEmail'));
        $(function() {$('.nav-bullet-dot:nth-child(3)').click(function() {this.click();}).click();});
        $('.site-content-wrapper.video').addClass("move");
        $('.site-content-wrapper.paths').addClass("move");
        setTimeout(function(){ $('.main-app-container').addClass("show");  }, 1000);          

    } else {
        triggerRenderOptions(prospect_pathChoosen);
        setTimeout(function(){ $('.main-app-container').addClass("show"); }, 1000);
        
    }
}


//Validating video type
function validateVideoType(typeName){
    validateVideoTypeAPI = "https://"+api_url+"/api/v1/users/videoProspects/leadCapturingVideos?type=" + typeName;
    axios({
        method: 'get',
        url: validateVideoTypeAPI
    })
    .then(function(response) {
        document.title = response.data.data[0].name; // Setting page title
        if(response.data.count > 0){
            validateUrl(getUrlParameter('company'), getUrlParameter('user'));
            setPathsContentVariable(videoType);
        } else {
            $('.fourofour').addClass('show');	      
        }       
    })
    .catch(function (error) {
        $('.fourofour').addClass('show');	             
    }); 
}


//Setting paths content variable
async function setPathsContentVariable(videoType){
    pathsContentAPI = "https://"+api_url+"/api/v1/users/videoProspects/paths?type=" + videoType;
    

    axios({
        method: 'get',
        url: pathsContentAPI
    })
    .then(async function(response) {

         for(i=0; i < response.data.data.length; i++){
            var description_array = response.data.data[i].description;
            $('.path-option:nth-child('+ (i+1) +') .heading').text( await translateToLanguage(response.data.data[i].name, 'en', Weglot.getCurrentLang()));
    
            for(j=0; j < description_array.length; j++){
                var description_item = "<div class='path-text'>"+ description_array[j] +"</div>";
                $('.path-option:nth-child('+ (i+1) +')').append(description_item);
            }    
        }
    })
    .catch(function (error) {
        error_show("Oops, There was an unexpected error."); 
    });     
}



// Render Video 
function renderVideo(videoID){
    iframe = document.getElementById('video');
    player = new Vimeo.Player(iframe);
    player.loadVideo(videoID).then(function(id) {setTotalDuration(); playerinitialized = 1;}).catch(function(error) {});
    player.pause();    
    setFinalFunction();
}

//fetch video
function fetchVideo(type, country, lang){
    var fetchVideoAPI = "https://" + api_url + "/api/v1/users/videoProspects/leadCapturingVideos?type=" + type + "&countryCode=" + country + "&language=" + lang;
    axios({
        method: 'get',
        url: fetchVideoAPI
    })
    .then(function(response) {
        video_id = response.data.data[0].url;
        renderVideo(video_id);       
    })
    .catch(function (error) {
        error_show("Oops, There was an unexpected error.");    
    }); 
}


// Check Video Prospect
function checkVideoProspect(email_val) {
    var checkVideoProspectAPI = 'https://'+ api_url +'/api/v1/users/company/' + readCookie('COMPANY_ID') +'/videoProspects?email=' + email_val;

    axios({
        method: 'get',
        url: checkVideoProspectAPI
    })
    .then(function(response) {
        if(response.data.count == 1){ 
            video_prospect_id = response.data.data[0]._id;
            if(!getUrlParameter('prospectEmail')){
                success_show('Welcome ' + response.data.data[0].firstName + '! Enjoy your video');
            }                           
            country_val = response.data.data[0].country;
            lang_val = response.data.data[0].language;
            fetchVideo(videoType, country_val, lang_val);   
            letsStart();
        } else {                           
            createVideoProspect();            
        }    
    })
    .catch(function (error) {
        error_show(error.response.data.message); 
    }); 
}


// Create Video Prospect
function createVideoProspect(){
    var createVideoProspectID = 'https://'+ api_url +'/api/v1/users/company/' + readCookie('COMPANY_ID') +'/videoProspects';
    axios({
        method: 'post',
        url: createVideoProspectID,
        data: {
            videoName: document.title,
            firstName: $("#fname").val(),
            lastName: $("#lname").val(),
            email: $("#email").val(),
            phone: Inputmask.unmask($('#phone').val(), { mask: "(999) 999-9999" }),
            country: country_val,
            language: lang_val,
            watchingWith: $("#peoplewatching").val(),
            watchedTime: 0,
            totalVideoTime: format(totalDurationTime),
            watchPercentage: 0,         
            appointmentCompleted: false,    
            userId: readCookie('USER_ID'),
            companyId: readCookie('COMPANY_ID')        
        }
    })
    .then(function(response) {        
        video_prospect_id = response.data.data._id;   
        success_show('Your details have been verified, Enjoy your video!');
        letsStart();
    })
    .catch(function(error) {
        error_show(error.response.data.message); 
    }); 
}


// Move the screens on successfull prospect
function letsStart(){    
    $(function() {$('.nav-bullet-dot:nth-child(2)').click(function() {this.click();}).click();});
    $('.onboarding').addClass("pan-out");
    $('.watch-video').addClass("pan-in");
    $("*").scrollTop(0);
}


// Update watch percentage
function updateWatchtime(time, percentage){
    var updateWatchTimeAPI = 'https://'+ api_url +'/api/v1/users/company/' + readCookie("COMPANY_ID") +'/videoProspects/' + video_prospect_id;
    axios({
        method: 'put',
        url: updateWatchTimeAPI,
        data: {
            watchedTime: format(time),
            watchPercentage: parseInt(percentage),             
        }
    })
    .then(function(response) {        
        //console.log(response.data);
        //console.log(response.xhr);
    })
    .catch(function (error) {
        //console.log(response.data);
        //console.log(response.xhr);
    }); 
}


/********************************/
/*******CUSTOM VIDEO CONTROLS****/
/******************************/

// Forward Backward Functionality
$('#forward').click(function(){
    player.setCurrentTime(currentTiming+10);
});

$('#backward').click(function(){
	player.setCurrentTime(currentTiming-10);
});


//Fullscreen function
$('#fullscreen').click(function(){
    player.requestFullscreen();
});

// Setting total time duration of video
function setTotalDuration(){
    player.getDuration().then(function(duration) {
        totalDurationTime = duration;            
        $('.totaltime').text(format(duration));
    });
}

// Progress bar update
setInterval(function(){ 
    if(playerinitialized == 1){
  	    player.getCurrentTime().then(function(seconds) {
            watchpercentage = (seconds/totalDurationTime)*100;
        });
        $('.progress-bar-inner').css('width',watchpercentage+'%');
    }   
}, 200);


// Current timing
setInterval(function(){ 
    if(playerinitialized == 1){
     player.getCurrentTime().then(function(seconds) {
        $('.elapsedtime').text(format(seconds));
        currentTiming = seconds;
     });
 }    	
}, 200);


// Move the screen when watched full video
function setFinalFunction(){
    player.on('ended', function() {
        $(function() {$('.nav-bullet-dot:nth-child(3)').click(function() {this.click();}).click();});
        $('.site-content-wrapper.video').addClass("move");
        $('.site-content-wrapper.paths').addClass("move");
    });
}

// Rendering path questions based on the path selected
function render_options(){
    for(i=0; i <= options.length; i++){
        $('.checkbox-field:nth-child('+(i)+')').show();
        $('.checkbox-field:nth-child('+ (i+1) +') .checkbox-label').text(options[i]);
    }
    $(function() {$('.nav-bullet-dot:nth-child(4)').click(function() {this.click();}).click();});
    $('.watch-video').addClass('pan-out');
    $('.path-container').addClass('pan-in');
}



/********************************/
/*******PAGE LOAD TRIGGER*******/
/******************************/
$('#phone').inputmask("(999) 999-9999"); //Masking the phone number field
$('.checkbox-field').hide();
validateVideoType(videoType); //validating video type from the url


/*********************************/
/******** EVENT TRIGGERS ********/
/*******************************/


$('#country-us').click(function () {    
    Weglot.switchTo('en');
});

$('#country-es').click(function () {    
    Weglot.switchTo('es');
});

$('#country-ca').click(function () {
    Weglot.switchTo('en');
});

$('#country-ca-es').click(function () {  
    Weglot.switchTo('es');
});




// email help text 
$('#email').on('focus blur', toggleFocus);

function toggleFocus(e){
    console.log(e.type)

    if( e.type == 'focus' ){ 
        $('.email_help_text').addClass("active");
    }
    else{
        $('.email_help_text').removeClass("active");
    }
}





//Setting cookie name
$('#fname').keyup(function(){
    setCookies('Name', $(this).val());
});

//Country Button functions
$('.country-btn').click(function(){
    $('.country-btn').removeClass('active');
    $(this).addClass('active');
   	country_val = $(this).attr('data-country');
    lang_val = $(this).attr('data-lang');   	
    fetchVideo(videoType, country_val, lang_val);  
});  

$('.non-clicker').click(function(){
    error_show("Please select a language first.");     
})


$('.onboad').click(function(){
    if(country_val != ''){
        if($('#peoplewatching').val() != '' && $('#phone').val() != '' && $('#lname').val() != '' && $('#fname').val() != ''){
            if(isEmail($('#email').val())){                  
                checkVideoProspect($('#email').val());
            } else {
                error_show("Please enter a correct email.");     
            }   
        } else {
            error_show("Please fill in all details.");     
        }
    } else{
        error_show("Please select your country.");
    } 
});


// Updating watch time percentage thorough api
var set10 = setInterval(function() {if (watchpercentage > 10) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set10);}}, 1000);
var set20 = setInterval(function() {if (watchpercentage > 20) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set20);}}, 1000);
var set30 = setInterval(function() {if (watchpercentage > 30) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set30);}}, 1000);
var set40 = setInterval(function() {if (watchpercentage > 40) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set40);}}, 1000);
var set50 = setInterval(function() {if (watchpercentage > 50) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set50);}}, 1000);
var set60 = setInterval(function() {if (watchpercentage > 60) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set60);}}, 1000);
var set70 = setInterval(function() {if (watchpercentage > 70) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set70);}}, 1000);
var set80 = setInterval(function() {if (watchpercentage > 80) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set80);}}, 1000);
var set90 = setInterval(function() {if (watchpercentage > 90) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage)); clearInterval(set90);}}, 1000);
var set96 = setInterval(function() {if (watchpercentage > 96) {updateWatchtime(totalDurationTime, 100);clearInterval(set96);}}, 1000);

// Changing the video text based on progress
var set32 = setInterval(function() {
    if (watchpercentage < 32) {
        $('.interval_text_item:nth-child(1)').addClass('active');
        $('.interval_text_item:nth-child(2)').removeClass('active');
        $('.interval_text_item:nth-child(3)').removeClass('active');
        clearInterval(set32);
    }
}, 1000);

var set35 = setInterval(function() {
    if (watchpercentage > 67) {
        $('.interval_text_item:nth-child(2)').addClass('active');
        $('.interval_text_item:nth-child(1)').removeClass('active');
        $('.interval_text_item:nth-child(3)').removeClass('active');
        clearInterval(set35);
    }
}, 1000);

var set75 = setInterval(function() {
    if (watchpercentage > 96) {
        $('.interval_text_item:nth-child(3)').addClass('active');
        $('.interval_text_item:nth-child(2)').removeClass('active');
        $('.interval_text_item:nth-child(1)').removeClass('active');
        clearInterval(set75);
    }
}, 1000);


$('.path-option').click(function(){
    var path_name_value = $(this).children(".heading").text();
    triggerRenderOptions(path_name_value);
});

function triggerRenderOptions(path_name){
    $('.path-heading').text(path_name);
    var getPathOptionsAPI = "https://" + api_url + "/api/v1/users/videoProspects/paths/?name=" + path_name;
    var setPathAPI = "https://" + api_url + "/api/v1/users/company/" + readCookie('COMPANY_ID') + "/videoProspects/" +  video_prospect_id;
    
    axios({
        method: 'put',
        url: setPathAPI,
        data: {
            pathChoosen: path_name        
        }
    })
    .then(function (response) {
        
        // Getting path options afte a successfull post
        axios({
            method: 'get',
            url: getPathOptionsAPI    
        })
        .then(function(response) {        
            options = response.data.data[0].options;                  
            render_options();
        })
        .catch(function (error) {
            console.log(error.status); 
            console.log(error.statusText);
            error_show("Oops, There was an unexpected error."); 
        });   

    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        error_show("Oops, There was an unexpected error."); 
    });   
}


$('.checkbox-field').click(function(){
    var get_value = $(this).children('.checkbox-label').text();
    var check_element = $(this).children('.checkbox');

    if(check_element.hasClass('active')) {       
        mcq.splice(mcq.indexOf(get_value), 1);             
        check_element.removeClass('active');  
        console.log(mcq);
    } else {
        mcq.push(get_value); 
        check_element.addClass('active');
        console.log(mcq);
    }    
});

$('.submit.paths').click(function(){
    var setPathOptionsAPI = "https://" + api_url + "/api/v1/users/company/" + readCookie('COMPANY_ID') + "/videoProspects/" +  video_prospect_id;

    if(mcq.length != 0){
        axios({
            method: 'put',
            url: setPathOptionsAPI,
            data: {
                interests: mcq        
            }
        })
        .then(function (response) {
            console.log(response.data);     
            $('.user_name').text($("#fname").val());
            $('.rep_name, .rep_name_cta').text(readCookie('REP_NAME'));
            $('.rep-phoito').css("background-image","url('"+ readCookie('PIC') +"')"); 
            success_show("Your answers have been sent successfully!"); 
            $('.appointment-iframe .w-iframe iframe').attr('src','https://dev.discoverfin.io/appointment?company=' + getUrlParameter('company') + '&user=' + getUrlParameter('user')); 
            $('.last-popup').addClass('active');            
        })
        .catch(function (error) {
            console.log(error.status); 
            console.log(error.statusText);
            error_show("Oops, There was an unexpected error."); 
        });      
    } else {
        error_show('Please select at least one option');
    }
});

$('.iframe-back').click(function(){
    $('.appointment-iframe .w-iframe iframe').attr('src','https://dev.discoverfin.io/appointment?company=' + getUrlParameter('company') + '&user=' + getUrlParameter('user')); 
});
  
$('.closer-last').click(function(){
    $('.last-popup').removeClass('active');
    $('.appointment-iframe .w-iframe iframe').attr('src','https://dev.discoverfin.io/appointment?company=' + getUrlParameter('company') + '&user=' + getUrlParameter('user')); 
});