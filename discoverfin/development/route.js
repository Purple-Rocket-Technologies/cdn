

var company_id, prospect_id, route_selection, user_name, fin_num;

if(getUrlParameter('company') && getUrlParameter('user') && getUrlParameter('prospectEmail')){
    getAPIparams();    
} else if(readCookie('COMPANY_ID') && readCookie('prospect_id') && readCookie('Name') && readCookie('FIN Number')){
    company_id = readCookie('COMPANY_ID');     
    prospect_id = readCookie('prospect_id');
    user_name = readCookie('Name');
    fin_num = readCookie('FIN Number');
    setPageVariableValue();
} else {
    window.location.href = '/404';
}

//fetching company, user and prospect IDs
function getAPIparams() {
    axios({
        method: 'get',
        url: 'https://' + api_url + '/api/v1/users/getCompany/name/' + getUrlParameter('company') + '/' + getUrlParameter('user'),
      })
      .then(function(response) {    
        company_id = response.data.data.companyId;       
        setCookies("COMPANY_ID",company_id);

        // getting prospect id
        axios({
            method: 'get',
            url: 'https://' + api_url + '/api/v1/users/company/'+ company_id +'/prospects?email=' + getUrlParameter('prospectEmail'),

        }).then(function(response) {  

            if(response.data.count > 0){
                prospect_id = response.data.data[0]._id;
                user_name = response.data.data[0].first_name;
                fin_num = response.data.data[0].fin_number;

                setCookies("prospect_id",prospect_id);
                setCookies("Name",user_name);
                setCookies("FIN Number",fin_num);
                setPageVariableValue();
            } else {
                window.location.href = '/404';
            }       

        }).catch(function (error) {
            console.log(error);
            alert("Oops, There was an unexpected error."); 
        });

      })
      .catch(function (error) {
        console.log(error);
        alert("Oops, There was an unexpected error."); 
    });
}

function setPageVariableValue() {
    fin_num = addCommas(fin_num);   
    $('#user_name').html('' + user_name);
    $('#fin_num').html('$' + fin_num);
}


$('#route_1').click(function () {
    route_selection = 'Manage Money Better';
    submitRoute('/route/manage-money-better');
});

$('#route_2').click(function () {
    route_selection = 'Make More Money';
    submitRoute('/route/make-more-money');
});

$('#route_3').click(function () {
    route_selection = 'Both';
    submitRoute('/route/both');
});

function submitRoute(redirectUrl) {
    axios({
        method: 'put',
        url: 'https://' + api_url + '/api/v1/users/company/'+ company_id +'/prospects/' + prospect_id,    
        data: {
            route_choice: route_selection, 
        }   
    }).then(function(response) {     
        window.location.href = redirectUrl;        
    })
    .catch(function (error) {
        console.log(error);
        alert("Oops, There was an unexpected error."); 
    });  
}