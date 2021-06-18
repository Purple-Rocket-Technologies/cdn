//Variable Declaration
var statesList = [];
var selectedCountry;
var price_array = [];

//api list
var get_states_api = "https://devbackendapp.discoverfin.io/api/v1/users/countriesAndStates/?abbreviation=";
var get_pricing = "https://devbackendapp.discoverfin.io/api/v1/users/assets/calculateTotal";


//*************************************************//
//***************Functions declations*************//
//***********************************************//


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}



function setSelectStates(country){    
    //emptying already added options
    Object.getOwnPropertyNames(statesList).forEach(function (prop) {
        delete statesList[prop];
    });
    $('#state').children('option').remove();

    //calling api
    atomic(get_states_api + country, {
        method: 'GET',
    })
    .then(function (response) {
        statesList = response.data.data[0]; 

        for(index = 0; index < Object.keys(statesList.states).length; index++) {
            var state_name = statesList.states[index].name;
            var state_abb = statesList.states[index].abbreviation;
            
            option_element = '<option value="'+state_abb+'">'+state_name+'</option>';
            $('#state').append(option_element);
        }         
    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        alert("Oops, There was an unexpected error."); 
    });	   
}


function updatePricing(){
    axios({
        method: 'post',
        url: "https://devbackendapp.discoverfin.io/api/v1/users/assets/calculateTotal",
        data: {
            planType: $("#select-billing").val(),
            shippingType: selectedCountry,
            qty_links: parseInt($('#no-of-links').val()),
            qty_bracelets: parseInt($('#number-of-bracelets').val())
        }
    })
    .then(function (response) {
        //console.log(response.data.data.data);
        price_array = response.data.data.data;    
        setPriceValues();  
    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        alert("Oops, There was an unexpected error."); 
    });
}

//Hello

function setPriceValues() {
    $('#price-setupfee').text("$"+price_array.setupFee);
    $('#price-link').text("$"+price_array.subscriptionTotal);
    $('#price-bracelet').text("$"+price_array.braceletsTotal);
    $('#price-shipping').text("$"+price_array.shippingCost); 
    $('#price-total, #total-price').text("$"+price_array.invoiceTotal);
    $('#recurring-price').text("$"+price_array.subscriptionTotal); 


    $('#link-qty').text($('#no-of-links').val());
    $('#bracelet-qty').text($('#number-of-bracelets').val());
    $('#price-single-bracelet').text("$"+ (price_array.braceletsTotal / $('#number-of-bracelets').val()).toFixed(2));
    $('#price-single-link').text("$"+ (price_array.subscriptionTotal / $('#no-of-links').val()).toFixed(2));
    $('#next-billing-date').text();
}


//onload
$('.pmt-country').addClass('active');
$('.pmt-products').addClass('active');

//Activating shipping and continue button
$('.pmt-radio-field').click(function(){
    $('.pmt-address').addClass('active');
    $('.pmt-continue-btn-container').addClass('active');
    setSelectStates($(this).children('input').val());
    selectedCountry = $(this).children('input').val();
});

// Not letting user enter link number above 100
$('#number-of-bracelets').keyup(function(){
    if($(this).val() > 100){
        $(this).val(100);
    }
});

// Message on diabled fields
$('.pmt-fader').click(function(){
    alert("Please click on \"Edit my details\" to change.");
});

$('.continue_btn').click(function(){
    isEmail($('#business-email').val());
    

    //validate all fields
    if($('#no-of-links').val() >= 5){
        if($('#number-of-bracelets').val() != ''){
            if($('#name').val() != ''){
                if($('#business-name').val() != ''){
                    if(isEmail($('#business-email').val())){
                        if($('#add_1').val() != ''){
                            if($('#city').val() != ''){
                                if($('#zip').val() != ''){
                                    movetocart();
                                } else {
                                    alert('Please enter your zip code.');
                                }
                            } else {
                                alert('Please enter your city.');
                            }                
                        } else {
                            alert('Please enter your Address Line 1.');
                        }
                    } else {
                        alert('Please enter a valid email address.');
                    }
                } else {
                    alert('Please enter your business name.');
                }
            } else {
                alert('Please enter your name.');
            }
        } else {
            alert('Please select no. of bracelets.');
        }
    } else {
        alert('Please select no. of links.');
    }

    function movetocart(){
        updatePricing();

        $('.continue_btn').addClass('hide');
        $('.edit_btn').addClass('active');
        $('.pmt-fader').addClass('active');
        $('.pmt-overview').addClass('active');

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#add_2").offset().top
        }, 1000);
    }   

    if($("#select-billing").val() == "FINTap_Monthly"){
        $('#m-y').text("monthly");
    } else if($("#select-billing").val() == "FINTap_Yearly"){
        $('#m-y').text("yearly");
    }

});


$('.edit_btn').click(function(){
    $('.continue_btn').removeClass('hide');
    $('.edit_btn').removeClass('active');
    $('.pmt-fader').removeClass('active');
    $('.pmt-overview').removeClass('active');

    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 1000);
});




