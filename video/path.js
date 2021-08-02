var videoprospectid = readCookie('VIDEO_PROSPECT_ID');
var companyId = readCookie('ID');
var options;

var get_api = "https://" + environment + "/api/v1/users/videoProspects/paths/?name=" + $('.path-heading').text();
var put_api = "https://" + environment + "/api/v1/users/company/" + companyId + "/videoProspects/" +  videoprospectid;


$('.checkbox-field').hide();
$('.rep_name').text(capitalize(readCookie('NAME')));
$('.user_name').text(capitalize(readCookie('USER_NAME')));
$('.ft-container .submit').attr('href','https://'+readCookie('LINK'));
$('.ft-image').css("background-image","url('"+ readCookie('PIC')+"')");

function render_options(){
    for(i=0; i <= options.length; i++){
        $('.checkbox-field:nth-child('+(i)+')').show();
        $('.checkbox-field:nth-child('+ (i+1) +') .checkbox-label').text(options[i]);
    }    
}

atomic(get_api, {
    method: 'GET',
})
.then(function (response) {
  	options = response.data.data[0].options;      
    render_options();
})
.catch(function (error) {
  	console.log(error.status); 
   	console.log(error.statusText);
    alert("Oops, There was an unexpected error."); 
});	

var mcq = [];

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

/* $('.submit').click(function(){
    if(mcq.length != 0){
        atomic(put_api, {
            method: 'PUT',
            data: {
                'interests': mcq
            },
        })
        .then(function (response) {
            console.log(response.data);
            $(function() {$('.dummy_submit').click(function() {this.click();}).click();});
        })
        .catch(function (error) {
            //console.log(error.status); 
            //console.log(error.statusText);
            alert("Oops, There was an unexpected error."); 
        });	
    } else {
        alert('Please select at least one option');
    }
}); */


$('.submit').click(function(){
    if(mcq.length != 0){
        axios({
            method: 'put',
            url: put_api,
            data: {
                interests: mcq        
            }
        })
        .then(function (response) {
            console.log(response.data);
            $(function() {$('.dummy_submit').click(function() {this.click();}).click();});
        })
        .catch(function (error) {
            console.log(error.status); 
            console.log(error.statusText);
            alert("Oops, There was an unexpected error."); 
        });      
    } else {
        alert('Please select at least one option');
    }
});
   



