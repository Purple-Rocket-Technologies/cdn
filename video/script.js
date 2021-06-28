
var totalDurationTime;
var watchpercentage;    
var currentTiming;
var playerinitialized = 0;
var api_url = 'devbackendapp.discoverfin.io';

//*******************************/
//********ALL FUNCTIONS *********/
//*******************************/

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

function error_show(msg){
    $('#error_msg').text(msg);
    $(function() {$('.error-triggerer').click(function() {this.click();}).click();});
}


function format(time) {   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

//Initialize player
iframe = document.getElementById('video');
player = new Vimeo.Player(iframe);

function toggleVideo(country){

    if(country == 'US'){
        player.loadVideo(441446411).then(function(id) {}).catch(function(error) {});
        player.pause();
        setDuration();
    }

    if(country == 'CA'){
        player.loadVideo(444573838).then(function(id) {}).catch(function(error) {});
        setDuration();         
    }

    if(country == 'EU'){        
        player.loadVideo(456821364).then(function(id) {}).catch(function(error) {});
          
    }    
   
    setDuration();    
    playerinitialized = 1;    
}

function setDuration(){
    player.getDuration().then(function(duration) {
        totalDurationTime = duration;
        $('.totaltime').text(format(duration));
    });
}

player.on('ended', function() {
    $(function() {$('.nav-bullet-dot:nth-child(3)').click(function() {this.click();}).click();});
});


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


//*******************************/
//********ALL TRIGGERS *********/
//*******************************/

//Masking phone field
$('#phone').inputmask("(999) 999-9999");

//Country Button functions
$('.country-btn').click(function(){

    //active inactive state
    $('.country-btn').removeClass('active');
    $(this).addClass('active');

    //Setting values in text field
   	var country_val = $(this).attr('data-country');
    var lang_val = $(this).attr('data-lang');
   	$('#country').val(''+country_val);
    $('#lang').val(''+lang_val);   
});  


/*Setting video url based on language */
$('#country-us').click(function(){
    toggleVideo('US');  
    Weglot.switchTo('en');  
});

$('#country-ca').click(function(){
    toggleVideo('CA');
    Weglot.switchTo('en');
});

$('#country-es').click(function(){
    toggleVideo('EU');
    Weglot.switchTo('es');
});  

$('#country-ca-es').click(function(){
    toggleVideo('EU');
    Weglot.switchTo('es');
});


//Fullscreen function
$('#fullscreen').click(function(){
  	player.requestFullscreen();
});
    
// Current timing
setInterval(function(){ 
   	if(playerinitialized == 1){
		player.getCurrentTime().then(function(seconds) {
        $('.elapsedtime').text(format(seconds));
	    	currentTiming = seconds;
	    });
	}    	
}, 200);


// Progress bar update
setInterval(function(){ 
    if(playerinitialized == 1){
  	    player.getCurrentTime().then(function(seconds) {
            watchpercentage = (seconds/totalDurationTime)*100;
        });
        $('.progress-bar-inner').css('width',watchpercentage+'%');
    }   
}, 200);


/* sending updated watchtimes */
var set10 = setInterval(function() {if (watchpercentage > 10) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set10);}}, 1000);
var set20 = setInterval(function() {if (watchpercentage > 20) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set20);}}, 1000);
var set30 = setInterval(function() {if (watchpercentage > 30) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set30);}}, 1000);
var set40 = setInterval(function() {if (watchpercentage > 40) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set40);}}, 1000);
var set50 = setInterval(function() {if (watchpercentage > 50) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set50);}}, 1000);
var set60 = setInterval(function() {if (watchpercentage > 60) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set60);}}, 1000);
var set70 = setInterval(function() {if (watchpercentage > 70) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set70);}}, 1000);
var set80 = setInterval(function() {if (watchpercentage > 80) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set80);}}, 1000);
var set90 = setInterval(function() {if (watchpercentage > 90) {updateWatchtime(parseInt(currentTiming), parseInt(watchpercentage));clearInterval(set90);}}, 1000);
var set96 = setInterval(function() {if (watchpercentage > 96) {updateWatchtime(totalDurationTime, 100);clearInterval(set96);}}, 1000);


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


// Playpause Functionality
$('#playpause').click(function(){
    player.getPaused().then(function(paused) {
        if(paused == true){
            player.play();
        } else {
            player.pause();
        }
    });
});



// Forward Backward Functionality
$('#forward').click(function(){
    player.setCurrentTime(currentTiming+10);
});

$('#backward').click(function(){
	player.setCurrentTime(currentTiming-10);
});



// Validating data on submit button
$('.submit').click(function(){
    if($('#country').val() != ''){
        if($('#peoplewatching').val() != '' && $('#phone').val() != '' && $('#lname').val() != '' && $('#fname').val() != ''){
            checkVideoProspect();            
        } else {
            error_show("Please fill in all details.");     
        }
    } else{
        error_show("Please select your country.");
    }      

    setTimeout(function(){
        player.getDuration().then(function(duration) {
            totalDurationTime = duration;
            $('.totaltime').text(format(duration));
        });
    }, 3000);
});


//Setting language to spanish and english


//*******************************/
//********ALL API REQUESTS *********/
//*******************************/

//Validating the link
var user = getUrlParameter('user');
var company = getUrlParameter('company');

atomic('https://'+ api_url +'/api/v1/users/getCompany/name/'+company+'/'+user, {
	method: 'GET',
})
.then(function (response) {					
    if(response.data.error==true){
    	console.log('Error');
        $('.fourofour').addClass('show');	       
    }
    else{      	
    	$('.main-app-container').addClass("show");		
      	setCookies('ID', response.data.data.companyId);	
		setCookies('USER_ID', response.data.data.userId);
		console.clear();
    }
})
.catch(function (error) {
	console.log(error.status); // xhr.status
	console.log(error.statusText); // xhr.statusText
});



// submitting first data and setting cookies
function createVideoProspect(){
    atomic('https://'+ api_url +'/api/v1/users/company/' + readCookie('ID') +'/videoProspects', {
        method: 'POST',
        data: {
            'firstName': $("#fname").val(),
            'lastName': $("#lname").val(),

            'phone': Inputmask.unmask($('#phone').val(), { mask: "(999) 999-9999" }),
            'country': $("#country").val(),
            
            'watchingWith': $("#peoplewatching").val(),
            'watchedTime': 0,
            'totalVideoTime': totalDurationTime,

            'watchPercentage': 0,           

            'appointmentCompleted': false,    
            'userId': readCookie('USER_ID'),
            'companyId': readCookie('ID')
        },
    })
    .then(function (response) {
    	console.log(response.data);
    	console.log(response.xhr);

        // Setting Cookies
        setCookies('VIDEO_PROSPECT_ID',response.data.data._id);         
        setCookies('USER_NAME', $('#fname').val());
        
        // Initiate Visual Functions
        $(function() {$('.nav-bullet-dot:nth-child(2)').click(function() {this.click();}).click();});
		$("*").scrollTop(0);
    })
    .catch(function (error) {
    	console.log(error.status); 
    	console.log(error.statusText);
        error_show("Oops, There was an unexpected error."); 
    });	
}


//Check Video Prospect
function checkVideoProspect() {
    var unmaskedPhone = Inputmask.unmask($("#phone").val(), { mask: "(999) 999-9999" });

    atomic('https://'+ api_url +'/api/v1/users/company/' + readCookie('ID') +'/videoProspects?phone=' +unmaskedPhone, {
        method: 'GET',
    })
    .then(function (response) {
        if(response.data.count == 1){
        
            setCookies('VIDEO_PROSPECT_ID',response.data.data[0]._id);         
            setCookies('USER_NAME', $('#fname').val());                                    
            toggleVideo(response.data.data[0].country);

            $('.success-msg-text').text('Welcome ' + response.data.data[0].firstName + '! Enjoy your video');
            $(function() {$('.nav-bullet-dot:nth-child(2)').click(function() {this.click();}).click();});
    		$("*").scrollTop(0);
        } else {
            $('.success-msg-text').text('Your details have been verified, Enjoy your video!');
            createVideoProspect();
        }     
    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        error_show("Oops, There was an unexpected error."); 
    });	
}

// Update watch percentage
function updateWatchtime(time, percentage){
atomic('https://'+ api_url +'/api/v1/users/company/' + readCookie("ID") +'/videoProspects/' + readCookie("VIDEO_PROSPECT_ID"), {
        method: 'PUT',
        data: {
            'watchedTime': time,
            'watchPercentage': percentage
        },
    })
    .then(function (response) {
    	console.log(response.data);
    	console.log(response.xhr);
    })
    .catch(function (error) {
    	console.log(error.status); 
    	console.log(error.statusText);        
    });
}


// Update path
function updatepath(path){
    atomic('https://'+ api_url +'/api/v1/users/company/' + readCookie("ID") +'/videoProspects/' + readCookie("VIDEO_PROSPECT_ID"), {
            method: 'PUT',
            data: {
                "pathChoosen": path
            },
        })
        .then(function (response) {
            console.log(response.data);
            console.log(response.xhr);
        })
        .catch(function (error) {
            console.log(error.status); 
            console.log(error.statusText);        
        });
}


$('#path_1').click(function(){updatepath("Path 1")});
$('#path_2').click(function(){updatepath("Path 2")});
$('#path_3').click(function(){updatepath("Path 3")});