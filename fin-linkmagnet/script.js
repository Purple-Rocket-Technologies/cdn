//Variable Declaration
var statesList = [];
var selectedCountry;
var selectedCountryName;
var price_array = [];
var stripeId;


//api list
var get_states_api = "https://" + api_url + "/api/v1/users/countriesAndStates/?abbreviation=";
var get_pricing = "https://" + api_url + "/api/v1/users/assets/calculateTotal";
var checkCompanyEmail = "https://" + api_url + "/api/v1/users/checkCompanyUserEmail";
var createCharge = "https://" + api_url + "/api/v1/users/createCharge";
var fetchPlan = "https://" + api_url + "/api/v1/users/plans?planName=";

$('#select-billing option:nth-child(1)').attr("data-stripe", "FINTap Monthly");
$('#select-billing option:nth-child(2)').attr("data-stripe", "FINTap Yearly");
//*************************************************//
//***************Functions declations*************//
//***********************************************//


//Masking phone field
$('#business-phone').inputmask("(999) 999-9999");


// Setting plan on page load
axios({
    method: 'get',
    url: fetchPlan + 'FINTap Monthly',
}).then(function (response) {
    console.log("fetched started");
    stripeId = response.data.data[0].stripeId;
    
}).catch(function (error) {
    console.log(error.status);
    console.log(error.statusText);
});


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function setSelectStates(country) {
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

            for (index = 0; index < Object.keys(statesList.states).length; index++) {
                var state_name = statesList.states[index].name;
                var state_abb = statesList.states[index].abbreviation;

                option_element = '<option value="' + state_abb + '">' + state_name + '</option>';
                $('#state').append(option_element);
            }
        })
        .catch(function (error) {
            console.log(error.status);
            console.log(error.statusText);
            alert("Oops, There was an unexpected error.");
        });
}


function updatePricing() {
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


function setPriceValues() {
    $('#price-setupfee').text("$" + price_array.setupFee);
    $('#price-link').text("$" + price_array.subscriptionTotal);
    $('#price-bracelet').text("$" + price_array.braceletsTotal);
    $('#price-shipping').text("$" + price_array.shippingCost);
    $('#price-total, #total-price').text("$" + parseFloat(price_array.invoiceTotal).toFixed(2));
    $('#recurring-price').text("$" + price_array.subscriptionTotal);
    $('.pmt-discount-percentage').text(price_array.coupon.discountPercent);
    $('.pmt-coupon-code').text(price_array.coupon.couponCode);

    $('#link-qty').text($('#no-of-links').val());
    $('#bracelet-qty').text($('#number-of-bracelets').val());
    $('#price-single-bracelet').text("$" + (price_array.braceletsTotal / $('#number-of-bracelets').val()).toFixed(2));
    $('#price-single-link').text("$" + (price_array.subscriptionTotal / $('#no-of-links').val()).toFixed(2));
    $('#next-billing-date').text();
}



//coupon add in field
$('.copy-code, .pmt-coupon-container').click(function () {
    var couponcode = $('.pmt-coupon-code').text();
    $('#coupon').val(couponcode);
    $('#coupon').attr("data-discount", parseInt($('.pmt-discount-percentage').text()));
});

$('#coupon').attr("data-discount", "5");


$('.pmt-coupon-button').click(function () {
    if ($('#coupon').val() != '') {
        $('.coupon-message').addClass('active');

        var discount_percentage = $('#coupon').attr("data-discount");
        var discount_price = ((price_array.braceletsTotal) / 100) * discount_percentage;
        var discounted_price_on_bracelet = price_array.invoiceTotal - discount_price;
        price_array.payblePrice = discounted_price_on_bracelet;

        $('.discount-amout').children('strong').text('$' + parseFloat(discount_price));
        $('.pmt-total-text.discount').text("- $" + parseFloat(discount_price));
        $('.pmt-total-text.discounted, #total-price').text("$" + parseFloat(discounted_price_on_bracelet).toFixed(2));
    } else {
        alert('Please enter a coupon code.');
    }

});


//Activating shipping and continue button
$('.pmt-radio-field').click(function () {
    $('.trigger-button.open-address')[0].click();
    setSelectStates($(this).children('input').val());
    selectedCountry = $(this).children('input').val();
    selectedCountryName = $(this).children('input').attr('data-country-name');
    $('.disable-product').addClass("hide");
});

// Not letting user enter link number above 100
$('#number-of-bracelets').keyup(function () {
    if ($(this).val() > 100) {
        $(this).val(100);
    }
});

// Message on disabled fields
$('.pmt-fader').click(function () {
    alert("Please click on \"Edit my details\" to change.");
});

// Message on disabled fields
$('.disable-product').click(function () {
    alert("Please select your country first");
});


$('#no-of-links').change(function () {
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
            if ($('#no-of-links').val() != '') {
                var perlinkprice = parseInt(response.data.data.data.subscriptionTotal).toFixed(2);
                $('.pmt-price-hightlight.link').text("$" + perlinkprice);
            } else {
                $('.pmt-price-hightlight.link').text("$75.00");
            }
        })
        .catch(function (error) {
            console.log(error.status);
            console.log(error.statusText);
            alert("Oops, There was an unexpected error.");
        });
});


$('#select-billing').change(function () {
    axios({
        method: 'post',
        url: get_pricing,
        data: {
            planType: $("#select-billing").val(),
            shippingType: selectedCountry,
            qty_links: parseInt($('#no-of-links').val())
        }
    }).then(function (response) {
        linkprice = parseInt(response.data.data.data.subscriptionTotal).toFixed(2);
        $('.pmt-price-hightlight.link').text("$" + linkprice);
        $('.pmt-price-hightlight.setup').text("$" + response.data.data.data.setupFee);

    }).catch(function (error) {
        console.log(error.status);
        console.log(error.statusText);
        alert("Oops, There was an unexpected error.");
    });

    if ($("#select-billing").val() == "FINTap_Monthly") {
        $('.per-month').text("/month");
    } else if ($("#select-billing").val() == "FINTap_Yearly") {
        $('.per-month').text("/year");
    }
});

$('#select-billing').change(function () {
    var selected_element = $(this).find('option:selected');
    var active_plan = selected_element.attr("data-stripe");

    axios({
        method: 'get',
        url: fetchPlan + active_plan,
    }).then(function (response) {
        stripeId = response.data.data[0].stripeId;
    }).catch(function (error) {
        console.log(error.status);
        console.log(error.statusText);
    });
});


$('#number-of-bracelets').keyup(function () {
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
            braceletprice = parseInt(response.data.data.data.braceletsTotal).toFixed(2);
            $('.pmt-price-hightlight.bracelet').text("$" + braceletprice);
        })
        .catch(function (error) {
            console.log(error.status);
            console.log(error.statusText);
            alert("Oops, There was an unexpected error.");
        });
});


$('.continue_btn').click(function () {
    isEmail($('#business-email').val());
    //validate all fields
    if ($('#no-of-links').val() >= 5) {
        if ($('#number-of-bracelets').val() != '') {
            if ($('#first-name').val() != '' && $('#last-name').val() != '') {
                if ($('#business-name').val() != '') {
                    if (isEmail($('#business-email').val())) {
                        if ($('#add_1').val() != '') {
                            if ($('#city').val() != '') {
                                if ($('#zip').val() != '') {
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

    function movetocart() {
        updatePricing();

        $('.continue_btn').addClass('hide');
        $('.edit_btn').addClass('active');
        $('.pmt-fader').addClass('active');
        $('.trigger-button.open-cart')[0].click();

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#add_2").offset().top
        }, 1000);
    }

    if ($("#select-billing").val() == "FINTap_Monthly") {
        $('#m-y').text("monthly");
    } else if ($("#select-billing").val() == "FINTap_Yearly") {
        $('#m-y').text("yearly");
    }

});


$('.edit_btn').click(function () {
    $('.continue_btn').removeClass('hide');
    $('.edit_btn').removeClass('active');
    $('.pmt-fader').removeClass('active');
    $('.coupon-message').removeClass('active');
    $('#coupon').val('');
    $('.trigger-button.close-cart')[0].click();
    $('.pmt-total-text.discount').text("- $0.00");

    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 1000);
});



$('#checkout_btn').click(function () {
    var email = $('#business-email').val();

    atomic(checkCompanyEmail, {
        method: 'POST',
        data: {
            'email': email
        },
    }).then(function (response) {
        if (response.data.status == 200) {
            var checkout_name = $('#first-name').val() + " " + $('#last-name').val();
            var checkout_company = $('#business-name').val();
            var checkout_email = $('#business-email').val();
            $('#checkout_name').text(checkout_name);
            $('#checkout_company').text(checkout_company);
            $('#checkout_email').text(checkout_email.toString().toLowerCase());
            $('#checkout_price').text("$" + parseFloat(price_array.payblePrice).toFixed(2));
            $('.trigger-button.open-checkout')[0].click();
        } else {
            alert('Email already exists');
            return false;
        }
    }).catch(function (error) {
        console.log(error.status);
        console.log(error.statusText);
    });
});




//*************************************************//
//***************Stripe Integration***************//
//***********************************************//


$('#payment_submit_btn').click(function () {
    $('#pay_now').trigger('click');
});


$('#payment_submit_btn').click(function () {
    setTimeout(function () {
        if ($('.StripeElement').hasClass('StripeElement--invalid') == true) {
            // Do nothing
        } else {
            if ($('#checkbox').prop('checked') == true) {
                $('.payment_loader').addClass('show');
            } else {
                alert('Please agree to the terms and conditions.');
            }
        }
    }, 500);
});


var stripe = Stripe('pk_test_51H9OieCKHZ8kusjLzWw353ZdzHc9Atug0VunuxSd7dR8Dl1e0LDFRGq5GGp4IfjTqQJSRdDKfNtgMSuuyC9P3HpI00OUJLyPof');
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
var style = {
    base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        color: '#32325d',
    },
};

// Create an instance of the card Element.
var card = elements.create('card', { style: style });

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment_form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('business-email').value
    console.log(email)

    if (email == '') {
        // console.log("error")
        alert("Enter Email");
    } else if (!validateEmail(email)) {
        alert("Email is invalid");
    }
    else {
        stripe.createPaymentMethod({
            type: 'card',
            card: card,
            billing_details: {
                name: $('#name-on-card').val(),               
            },
        }).then(function (result) {
            // Handle result.error or result.paymentMethod
            if(result.error){
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                console.log(result.paymentMethod);
                var apiResult = stripeTokenHandler(result.paymentMethod);                
            }
        });

        // console.log("No error")
        // stripe.createToken(card).then(function (result) {
        //     if (result.error) {
        //         // Inform the customer that there was an error.
        //         var errorElement = document.getElementById('card-errors');
        //         errorElement.textContent = result.error.message;
        //         // console.log("error true")
        //     } else {
        //         //console.log(result.token)
        //         // Send the token to your server.
        //         var apiResult = stripeTokenHandler(result.token);
        //         //console.log(apiResult);
        //     }
        // });

    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

async function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    console.log("Token handler started");

    var form = document.getElementById('payment_form');
    // var hiddenInput = document.createElement('input');
    // hiddenInput.setAttribute('type', 'hidden');
    // hiddenInput.setAttribute('name', 'stripeToken');
    // hiddenInput.setAttribute('value', token.id);
    // form.appendChild(hiddenInput);
    var email = document.getElementById('business-email').value

    var todo = {
        advisorEmail: $('#business-email').val(),
        advisorName: ($('#business-name').val()).trim(),
        phone: $('#business-phone').val(),
        firstName: ($('#first-name').val()).trim(),
        lastName: ($('#last-name').val()).trim(),
        companyEmail: $('#business-email').val(),
        companyName: ($('#business-name').val()).trim(),
        desc: "payment",
        pay: "usd",
        plan: stripeId,
        token: token.id,
        qty_links: $('#no-of-links').val(),
        qty_bracelets: $('#number-of-bracelets').val(),
        addressLine1: $('#add_1').val(),
        addressLine2: $('#add_2').val(),
        appartment: "",
        city: $('#city').val(),
        state: $('#state').find('option:selected').text(),
        stateCode: $('#state').val(),
        country: selectedCountryName,
        countryCode: selectedCountry,
        postalCode: $('#zip').val(),
        couponCode: $('#coupon').val()
    }

    const addedTodo = await addTodo(todo);

    if (addedTodo.status === 200 && addedTodo.data.success != undefined && addedTodo.data.success == 'success' && addedTodo.data.url != '' || addedTodo.status === 204 && addedTodo.data.success != undefined && addedTodo.data.success == 'success' && addedTodo.data.url != '') {
        var redirect_url = addedTodo.data.url;
        console.log(redirect_url);
        window.parent.location = redirect_url;
        window.location.replace(redirect_url);
    } else if (addedTodo.status != 200 && addedTodo.error == true) {
        $('.payment_loader').removeClass('show');
        alert('Your payment was declined. Please try again.');
    }
}

const BASE_URL = createCharge;
const addTodo = async todo => {
    try {
        console.log("CreateCharge API called");
        const res = await axios.post(`${BASE_URL}`, todo);
        const addedTodo = res.data;
        return addedTodo;
    } catch (e) {
        console.error(e);
    }
};



