var user_name = readCookie('Name');
var appointment_link;
var rep_name;
var rep_phone;
var rep_email;
var rep_pic;
var video_id;
var user = getUrlParameter('user');
var company = getUrlParameter('company');

atomic('https://' + api_url + '/api/v1/users/getCompany/name/' + company + '/' + user, {
    method: 'GET',
})
.then(function (response) {
    if (response.data.error == true) {
        console.log('Error');            
        window.location.href = '/404';
    }
    else
    {       
        console.log(response.data);          
        appointment_link = response.data.data.appointmentBookingLink;
        rep_name = response.data.data.firstName + " " + response.data.data.lastName;
        rep_pic = response.data.data.profilePic;
        rep_phone = response.data.data.phone;
        rep_email = response.data.data.email;
        video_id = $.trim(response.data.data.videoProfileLink);
        map_all_data();
    }
})
.catch(function (error) {
    console.log(error.status); // xhr.status
    console.log(error.statusText); // xhr.statusText
});


function map_all_data(){
    if(user_name){
        $('.user_name').each(function(){
            $(this).html(''+user_name);
        });
    } else {
        $('.user_name').addClass('hide');
    }    
    
    $('#aptmt_link1').attr('href',appointment_link);
    $('#aptmt_link2').attr('href',appointment_link);
    $('#aptmt_link3').attr('href',appointment_link);
    
    $('.rep_name').text(rep_name);
    
    $('#phone').text(rep_phone);
    
    $('#email_id').text(rep_email);
    
    $('.apt-rep-image').css("background-image","url('"+ rep_pic +"')");    

    if(video_id){
        $('.apt-hero-bottomsection').addClass('active');
        $('.apt-reps-video').append(video_id);                
    }    
}
       

$('.closer-last').click(function(){
    $('#window_frame').attr("src","/appointment");
});



