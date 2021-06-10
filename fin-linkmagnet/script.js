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
