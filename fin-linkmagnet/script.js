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
        url: get_pricing,
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



//coupon add in field
$('.copy-code').click(function(){
    var couponcode = $(this).children('.pmt-coupon-code').text();
    $('#coupon').val(couponcode);
    $('#coupon').attr("data-discount",parseInt($('.pmt-discount-percentage').text()));
});

$('#coupon').attr("data-discount","5");


$('.pmt-coupon-button').click(function(){

    if($('#coupon').val() != ''){
        $('.coupon-message').addClass('active');
    
        var discount_percentage = $('#coupon').attr("data-discount");
        var discount_price = ((price_array.braceletsTotal)/100)*discount_percentage;
        var discounted_price_on_bracelet = price_array.braceletsTotal-(((price_array.braceletsTotal)/100)*discount_percentage);

        $('.discount-amout').children('strong').text('$'+parseFloat(discount_price));
        $('.pmt-total-text.discount').text("- $"+parseFloat(discount_price));
        $('.pmt-total-text.discounted, #total-price').text("$"+(price_array.invoiceTotal - discount_price));    
    } else {
        alert('Please enter a coupon code.');
    }
    
});


//Activating shipping and continue button
$('.pmt-radio-field').click(function(){
    $('.trigger-button.open-address')[0].click(); 
    setSelectStates($(this).children('input').val());
    selectedCountry = $(this).children('input').val();
    $('.disable-product').addClass("hide");
});

// Not letting user enter link number above 100
$('#number-of-bracelets').keyup(function(){
    if($(this).val() > 100){
        $(this).val(100);
    }
});

// Message on disabled fields
$('.pmt-fader').click(function(){
    alert("Please click on \"Edit my details\" to change.");
});

// Message on disabled fields
$('.disable-product').click(function(){
    alert("Please select your country first");
});

$('.continue_btn').click(function(){
    isEmail($('#business-email').val());
    //validate all fields
    if($('#no-of-links').val() >= 5){
        if($('#number-of-bracelets').val() != ''){
            if($('#first-name').val() != '' && $('#last-name').val() != ''){
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
                alert('Please enter your first name and last name.');
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
        $('.trigger-button.open-cart')[0].click(); 

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
    $('.trigger-button.close-cart')[0].click(); 

    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 1000);
});

/*
$('#no-of-links').change(function(){
    axios({
        method: 'post',
        url: get_pricing,
        data: {
            planType: $("#select-billing").val(),
            shippingType: selectedCountry,
            qty_links: parseInt($('#no-of-links').val())        
        }
    })
    .then(function (response) {
        //console.log(response.data.data.data);
        var perlinkprice = praseFloat(response.data.data.data.subscriptionTotal / parseInt($('#no-of-links').val()));   
        $('.pmt-price-hightlight.link').text("$"+perlinkprice);
    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        alert("Oops, There was an unexpected error."); 
    });
});


$('#select-billing').change(function(){

    axios({
        method: 'post',
        url: get_pricing,
        data: {
            planType: $("#select-billing").val(),
            shippingType: selectedCountry,   
            qty_links: parseInt($('#no-of-links').val()) 
        }
    })
    .then(function (response) {
        linkprice = response.data.data.data.subscriptionTotal / parseInt($('#no-of-links').val());
        $('.pmt-price-hightlight.link').text("$"+linkprice);
        $('.pmt-price-hightlight.setup').text("$"+response.data.data.data.setupFee);
    })
    .catch(function (error) {
        console.log(error.status); 
        console.log(error.statusText);
        alert("Oops, There was an unexpected error."); 
    });

    if($("#select-billing").val() == "FINTap_Monthly"){
        $('.per-month').text("/month");
    } else if($("#select-billing").val() == "FINTap_Yearly"){
        $('.per-month').text("/year");
    }
});

*/



