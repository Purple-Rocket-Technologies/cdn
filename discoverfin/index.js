var statesList = [];
var selectedCountry;
var selectedCountryName;
var price_array = [];
var stripeId;
let trailMode = false;

//api list
var get_states_api =
  "https://" + api_url + "/api/v1/users/countriesAndStates/?abbreviation=";
var get_pricing = "https://" + api_url + "/api/v1/users/assets/calculateTotal";
var checkCompanyEmail =
  "https://" + api_url + "/api/v1/users/checkCompanyUserEmail";
var createCharge = "https://" + api_url + "/api/v1/users/createCharge";
var fetchPlan = "https://" + api_url + "/api/v1/users/plans?limit=100";
let allPlans = [];

// $("#Billing option:nth-child(1)").attr("value", "FINTap Monthly");
// $("#Billing option:nth-child(2)").attr("value", "FINTap Yearly");

// $("#billing_freq").text("Monthly");

function openStripeModal() {
  //*************************************************//
  //***************Stripe Integration***************//
  //***********************************************//

  $("#details-popup").css("display", "none");
  $("#stripepopup").css("display", "flex");
  var stripe = Stripe(
    "pk_test_51H9OieCKHZ8kusjLzWw353ZdzHc9Atug0VunuxSd7dR8Dl1e0LDFRGq5GGp4IfjTqQJSRdDKfNtgMSuuyC9P3HpI00OUJLyPof"
  );
  var elements = stripe.elements();

  // Custom styling can be passed to options when creating an Element.
  var style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: "16px",
      color: "#32325d",
    },
  };

  // Create an instance of the card Element.
  var card = elements.create("card", { style: style });

  // Add an instance of the card Element into the `card-element` <div>.
  card.mount("#card-element");

  $("#payment_submit_btn").click(function () {
    setTimeout(function () {
      if ($(".StripeElement").hasClass("StripeElement--invalid") == true) {
        // Do nothing
      } else {
        if ($("#Checkbox-2").prop("checked") == true) {
          stripe
            .createPaymentMethod({
              type: "card",
              card: card,
              billing_details: {
                name: $("#name-on-card").val(),
              },
            })
            .then(function (result) {
              // Handle result.error or result.paymentMethod
              if (result.error) {
                console.log("createPaymentMethod result.error", result.error);
                var errorElement = document.getElementById("card-errors");
                errorElement.textContent = result.error.message;
              } else {
                console.log(
                  "createPaymentMethod=>stripeTokenHandler",
                  result.paymentMethod
                );
                stripeTokenHandler(result.paymentMethod);
              }
            });
          $(".payment_loader").css("display", "flex");
          $("#step-3").css("display", "none");
        } else {
          alert("Please agree to the terms and conditions.");
        }
      }
    }, 500);
  });

  async function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    console.log("Token handler started");
    var reqBody = {
      advisorEmail: $("#Business-Email").val(),
      advisorName: $("#business-name").val().trim(),
      phone: $("#business-phone").val(),
      firstName: removSpecialCharactersFromName($("#first-name").val().trim()),
      lastName: removSpecialCharactersFromName($("#last-name").val().trim()),
      companyEmail: $("#Business-Email").val(),
      companyName: $("#business-name").val().trim(),
      desc: "payment",
      pay: "usd",
      plan: stripeId,
      token: token.id,
      qty_links: $("#no-of-links").val(),
      qty_bracelets: $("#number-of-bracelets").val(),
      addressLine1: $("#add_1").val(),
      addressLine2: $("#add_2").val(),
      appartment: "",
      city: $("#City").val(),
      state: $("#state").find("option:selected").text(),
      stateCode: $("#state").val(),
      country: selectedCountryName,
      countryCode: selectedCountry,
      postalCode: $("#zip-code").val(),
    };
    if (price_array.coupon) {
      reqBody.couponCode = price_array.coupon.couponCode;
    }
    await axios
      .post(`${createCharge}`, reqBody)
      .then((addedTodo) => {
        addedTodo = addedTodo.data;
        const redirect_url = addedTodo.data.url;
        window.parent.location = redirect_url;
        window.location.replace(redirect_url);
      })
      .catch((e) => {
        console.log(e);
        $(".payment_loader").css("display", "none");
        $("#step-3").css("display", "block");
        alert("Your payment was declined. Please try again.");
      });
  }
}

//Masking phone field
//$("#business-phone").inputmask("(999) 999-9999");

const removSpecialCharactersFromName = (name) =>
  name !== "" ? name.replace(/[^a-zA-Z0-9]/g, "") : name;

function fetchPlansUrl() {
  return `${fetchPlan}`;
}

// Setting plan on page load
axios({
  method: "get",
  url: fetchPlansUrl(),
})
  .then(function (response) {
    allPlans = response.data.data;
    stripeId = response.data.data.filter(
      (plan) => plan.planName === "The FIN System Monthly"
    )[0].stripeId;
  })
  .catch(function (error) {
    console.log(error.status);
    console.log(error.statusText);
  });

function filterPlan(planName, duration) {
  return allPlans.filter(
    (plan) => plan.planName === `${planName} ${duration}`
  )[0];
}

function calculatePricing() {
  const links = $("#no-of-links").val() || 1;
  console.log(links);
  const bracelets = $("#number-of-bracelets").val() || 0;
  const billingFrequency = $("#Billing").val();
  axios({
    method: "post",
    url: get_pricing,
    data: {
      planType: billingFrequency.replace(/\s/g, "_"),
      shippingType: selectedCountry,
      qty_links: parseInt(links),
      qty_bracelets: parseInt(bracelets),
    },
  })
    .then(function (response) {
      price_array = response.data.data.data;
      setPriceValues();
    })
    .catch(function (error) {
      console.log(error);
      alert("Oops, There was an unexpected error.");
    });
}

function setPriceValues() {
  const { discountPercent = 0, couponCode = 0 } = price_array.coupon || {};
  const toSet = [
    {
      elem: $("#price-setupfee"),
      value: "$" + price_array.setupFee,
    },
    {
      elem: $("#price-link"),
      value: "$" + price_array.subscriptionTotal,
    },
    {
      elem: $("#price-bracelet"),
      value: "$" + price_array.braceletsTotal,
    },
    {
      elem: $("#bracelets-price"),
      value: "$" + price_array.braceletsTotal,
    },
    {
      elem: $("#price-shipping"),
      value: "$" + price_array.shippingCost,
    },
    {
      elem: $("#price-total, #total-price"),
      value: "$" + parseFloat(price_array.invoiceTotal).toFixed(2),
    },
    {
      elem: $("#recurring-price"),
      value: "$" + price_array.subscriptionTotal,
    },
    {
      elem: $(".recurring-price"),
      value: "$" + price_array.subscriptionTotal,
    },
    {
      elem: $(".pmt-discount-percentage"),
      value: "$" + discountPercent,
    },
    {
      elem: $(".pmt-coupon-code"),
      value: "$" + couponCode,
    },
    {
      elem: $("#link-qty"),
      value: "$" + $("#no-of-links").val(),
    },
    {
      elem: $("#bracelet-qty"),
      value: "$" + $("#number-of-bracelets").val(),
    },
    {
      elem: $("#price-single-bracelet"),
      value:
        "$" +
        (price_array.braceletsTotal / $("#number-of-bracelets").val()).toFixed(
          2
        ),
    },
    {
      elem: $("#price-single-link"),
      value:
        "$" +
        (price_array.subscriptionTotal / $("#no-of-links").val()).toFixed(2),
    },
    {
      elem: $("#next-billing-date"),
      value: "",
    },
  ];

  toSet.forEach((element) => {
    element.elem.each(function () {
      $(this).text(element.value);
    });
  });
}

function setSelectStates(country) {
  //emptying already added options
  Object.getOwnPropertyNames(statesList).forEach(function (prop) {
    delete statesList[prop];
  });
  $("#state").children("option").remove();

  //calling api
  atomic(get_states_api + country, {
    method: "GET",
  })
    .then(function (response) {
      statesList = response.data.data[0];

      for (index = 0; index < Object.keys(statesList.states).length; index++) {
        var state_name = statesList.states[index].name;
        var state_abb = statesList.states[index].abbreviation;

        option_element =
          '<option value="' + state_abb + '">' + state_name + "</option>";
        $("#state").append(option_element);
      }
    })
    .catch(function (error) {
      console.log(error.status);
      console.log(error.statusText);
      alert("Oops, There was an unexpected error.");
    });
}

//Activating shipping and continue button
$(".pmt-radio-field").click(function () {
  setSelectStates($(this).children("input").val());
  selectedCountry = $(this).children("input").val();
  selectedCountryName = $(this).children("input").attr("data-country-name");
  $(".disable-product").addClass("hide");
  if (planSelected.includes("Social Media")) {
    calculatePricing();
  }
});

// Not letting user enter bracelets number above 100
$("#number-of-bracelets").keyup(function () {
  if ($(this).val() > 100) {
    $(this).val(100);
  }
});

const fieldsToWatch = [
  $("#no-of-links"),
  $("#number-of-bracelets"),
  $("#Billing"),
];

fieldsToWatch[2].on("input change", () => {
  const val = fieldsToWatch[2].val();
  const plan = val.substring(0, val.lastIndexOf(" ") + 1).trim();
  const freq = val.substring(val.lastIndexOf(" ") + 1, val.length).trim();
  $("#biling_type").text(`/${freq.toLowerCase()}`);
  $("#plan-name").text(plan);
  $("#billing_freq").text(freq);
  stripeId = filterPlan(plan, freq).stripeId;
});

fieldsToWatch.forEach((element) => {
  element.on("input change", (e) => {
    if (!selectedCountry) {
      e.preventDefault();
      alert("Select a country first");
    }
    let allCount = 0;
    fieldsToWatch.forEach((field) => {
      if (field.val()) {
        allCount += 1;
      }
    });
    const val = $("#Billing").val();
    const plan = val.substring(0, val.lastIndexOf(" ") + 1).trim();
    if (allCount === fieldsToWatch.length && selectedCountry) {
      calculatePricing();
    } else if (plan === "Social Media") {
      calculatePricing();
    }
  });
});

//coupon add in field
$(".copy-code, .pmt-coupon-container").click(function () {
  var couponcode = $(".pmt-coupon-code").text();
  $("#coupon").val(couponcode);
  $("#coupon").attr(
    "data-discount",
    parseInt($(".pmt-discount-percentage").text().split("$")[1])
  );
});

$(".pmt-coupon-button").click(function () {
  if ($("#coupon").val() != "") {
    $(".coupon-message").addClass("active");

    var discount_percentage = $("#coupon").attr("data-discount");

    var discount_price =
      (parseFloat(price_array.braceletsTotal) / 100) * discount_percentage;

    console.log(parseFloat(price_array.braceletsTotal), discount_price);
    var discounted_price_on_bracelet =
      parseFloat(price_array.invoiceTotal) - parseFloat(discount_price);
    price_array.payblePrice = parseFloat(discounted_price_on_bracelet);

    $(".discount-amout")
      .children("strong")
      .text("$" + parseFloat(discount_price));
    $(".pmt-total-text.discount").text("- $" + parseFloat(discount_price));
    $(".pmt-total-text.discounted, #total-price").text(
      "$" + parseFloat(discounted_price_on_bracelet).toFixed(2)
    );
  } else {
    alert("Please enter a coupon code.");
  }
});

$("#go-t-2-dummy").click(() => {
  const links = $("#no-of-links").val();
  const bracelets = $("#number-of-bracelets").val();
  const val = $("#Billing").val();
  const plan = val.substring(0, val.lastIndexOf(" ") + 1).trim();
  if (!selectedCountry) {
    alert("Please select a country");
  } else if (plan === "Social Media") {
    $("#goToSecondStep").click();
  } else {
    if (!links || !bracelets) {
      if (!links) {
        alert("Please select a number of links");
      } else if (!bracelets) {
        alert("Please select a number of bracelets");
      }
    }
    if (links && bracelets) {
      $("#goToSecondStep").click();
    }
  }
});

$("#checkout_btn").click(function () {
  var email = $("#Business-Email").val();

  atomic(checkCompanyEmail, {
    method: "POST",
    data: {
      email,
    },
  })
    .then(function (response) {
      if (response.data.status == 200) {
        console.log(response.data);
        var checkout_name =
          $("#first-name").val() + " " + $("#last-name").val();
        var checkout_company = $("#business-name").val();
        $("#checkout_name").text(checkout_name);
        $("#checkout_company").text(checkout_company);
        $("#checkout_email").text(email.toString().toLowerCase());
        $("#checkout_price").text(
          "$" + parseFloat(price_array.payblePrice).toFixed(2)
        );
        openStripeModal();
      } else {
        alert("Email already exists");
        return false;
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log(error);
    });
});

$("#edit-btn").click(() => {
  $(".pmt-overview").toggleClass("hide");
  $("#to-hide").toggleClass("hide");
  $("#edit-btn").toggleClass("hide");
});

$("#showoverview").click(() => {
  const fieldsToCheck = [
    $("#first-name").val(),
    $("#last-name").val(),
    $("#Business-Email").val(),
    $("#business-name").val(),
    $("#business-phone").val(),
    $("#add_1").val(),
    $("#add_2").val(),
    $("#state").val(),
    $("#City").val(),
    $("#zip-code").val(),
  ];
  setTimeout(() => {
    let toShowError = false;
    for (let index = 0; index < fieldsToCheck.length; index++) {
      const element = fieldsToCheck[index];
      if (element === "") {
        toShowError = true;
        console.log(element, index);
        alert("Enter all fields");
        break;
      }
    }
    if (!toShowError) {
      $(".pmt-overview").toggleClass("hide");
      $("#to-hide").toggleClass("hide");
      $("#edit-btn").toggleClass("hide");
    }
  }, 50);
});

$("#goback-details").click(() => {
  $("#details-popup").css("display", "flex");
  $("#stripepopup").css("display", "none");
});

function autoFill() {
  $("#first-name").val("Vani");
  $("#last-name").val("Kashayp");
  $("#Business-Email").val("vaniii@yopmail.com");
  $("#business-name").val("Vaniiii");
  $("#business-phone").val(9582142914);
  $("#add_1").val("Moradabad");
  $("#add_2").val("Moradabad");
  $("#state").val("AL");
  $("#City").val("Moradabad");
  $("#zip-code").val("213123");
}

// autoFill();

const buttonsToListen = [
  $("#fin_sys"),
  $("#fin"),
  $("#social_media"),
  $("#fin_sys_trial"),
  $("#fin_trial"),
  $("#social_media_trial"),
];

function hideElemetsForSocialPlan(hide = true) {
  $(".social-only").each(function () {
    $(this).css("display", hide ? "flex" : "none");
  });
  $(".hide_social").each(function () {
    $(this).css("display", !hide ? "flex" : "none");
  });
}

function populatePlansInBillingFrequency(planName) {
  $("#plan-name").text(planName);
  $("#billing_freq").text("Monthly");
  $("#Billing option:nth-child(1)").attr("value", `${planName} Monthly`);
  $("#Billing option:nth-child(2)").attr("value", `${planName} Yearly`);
}

buttonsToListen.forEach((element) => {
  element.on("click", () => {
    const id = element.attr("id");
    switch (id) {
      case "fin_sys":
        hideElemetsForSocialPlan(false);
        planSelected = "The FIN System";
        $(".social-only").css("display", "none");
        populatePlansInBillingFrequency(planSelected);
        stripeId = filterPlan("The FIN System", "Monthly").stripeId;
        break;
      case "social_media":
        hideElemetsForSocialPlan();
        planSelected = "Social Media";
        populatePlansInBillingFrequency(planSelected);
        stripeId = filterPlan("Social Media", "Monthly").stripeId;
        break;
      case "fin":
        planSelected = "FIN";
        hideElemetsForSocialPlan(false);

        $(".social-only").css("display", "none");

        populatePlansInBillingFrequency(planSelected);
        stripeId = filterPlan("FIN", "Monthly").stripeId;
        break;
      case "fin_sys_trial":
        hideElemetsForSocialPlan(false);

        trailMode = true;
        $(".social-only").css("display", "none");

        planSelected = "Social Media";
        populatePlansInBillingFrequency(planSelected);
        stripeId = filterPlan("The FIN System", "Monthly").stripeId;
        break;
      case "fin_trial":
        hideElemetsForSocialPlan(false);

        trailMode = true;
        planSelected = "FIN";
        $(".social-only").css("display", "none");

        populatePlansInBillingFrequency(planSelected);
        stripeId = filterPlan("FIN", "Monthly").stripeId;
        break;
      case "social_media_trial":
        hideElemetsForSocialPlan(false);

        hideElemetsForSocialPlan();
        planSelected = "The FIN System";
        populatePlansInBillingFrequency(planSelected);
        trailMode = true;
        stripeId = filterPlan("Social Media", "Monthly").stripeId;
        break;
      default:
        break;
    }
  });
});
