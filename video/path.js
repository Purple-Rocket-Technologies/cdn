var get_api = "https://devbackendapp.discoverfin.io/api/v1/users/videoProspects/paths/?name=" + $('.path-heading').text();
var put_api = 'https://devbackendapp.discoverfin.io/api/v1/users/company/'+ companyId +'/videoProspects/' +  videoprospectid;

var videoprospectid = readCookie('VIDEO_PROSPECT_ID');
var companyId = readCookie('ID');
var options;

$('.checkbox-field').hide();
$('.rep_name').text(capitalize(readCookie('NAME')));
$('.user_name').text(capitalize(readCookie('USER_NAME')));
$('.ft-container .submit').attr('href','https://'+readCookie('LINK'));
$('.ft-image').css("background-image","url('"+ readCookie('PIC')+"')");

function render_options(){
    for(i=0; i <= options.length; i++){
        $('.checkbox-field:nth-child('+(i+1)+')').show();
        $('.checkbox-field:nth-child('+ (i+1) +') span').text(options[i]);
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
    error_show("Oops, There was an unexpected error."); 
});	



