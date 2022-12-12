const {
  createProspect,
  updateProspectById,
} = require("../../../service/fin/questions.service");
const { cookies, isEmail, isMobile, url, toDollar } = require("../../../utils");
const { getProspect } = require("../../../service/fin/onboarding.service");
const { _FetchAdvisor } = require("../../../pages/apps/fin/index.js");

function handleUserFromFinPath() {
  if (url.query.get("id")) {
    const USER_URL = url.query.get("id") || url.query.get("user");
    const START_OVER_URL = `${window.location.hostname}/en?id=${USER_URL}`;
    cookies.set("isOldUrl", false);
    cookies.set("START_OVER_URL", START_OVER_URL);
    cookies.set("INITIAL_LINK", START_OVER_URL);
    $("#start_over").attr("href", START_OVER_URL);
    _FetchAdvisor(USER_URL, null);
  }
}

function questionsPageInit() {
  handleUserFromFinPath();
  $("body").on("scroll mousewheel touchmove", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  let avg_retirement_age = 0;
  let default_death_age = 0;

  const guessedFinEl = $("#guessed_fin");

  $(".button_blocker.email").click(function () {
    alert("Please enter a correct email");
  });

  $(".button_blocker.check").click(function () {
    alert("Please accept the terms and conditions");
  });

  $(".text-field.email").keyup(function () {
    if (isEmail($(this).val())) {
      $(".button_blocker.email").addClass("hide");
    } else {
      $(".button_blocker.email").removeClass("hide");
    }
  });

  guessedFinEl.val("skipped");

  const userNameEl = $("#user_name");
  const ques1Btn = $("#ques_1_btn");
  const ques1Active = $("#ques_1_active");
  const userAgeEl = $("#user_age");
  const ques2Btn = $("#ques_2_btn");
  const userIncomeEl = $("#user_income");
  const emailEl = $("#email");
  const step3Selector = $("#step_3_selector");
  const step5Selector = $("#step_5_selector");

  userNameEl.keyup(function () {
    let var_name = $(this).val();
    if (var_name.length > 1) {
      ques1Active.addClass("active");
      ques1Btn.addClass("go_ahead");
      $(".body").addClass("ques");
    } else {
      ques1Active.removeClass("active");
      ques1Btn.removeClass("go_ahead");
      $(".body").removeClass("ques");
    }
    var_name = var_name.charAt(0).toUpperCase() + var_name.slice(1);
    $(".var_name").html("" + var_name);
  });

  userNameEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if (ques1Btn.hasClass("go_ahead")) {
        ques1Btn[0].click();
      }
    }
  });

  ques1Btn.on("click", function () {
    trackMixPanelEvent("FIN Prospect Started Journey", {
      first_name: userNameEl.val(),
    });
  });
  userAgeEl.keyup(function () {
    var var_age = $(this).val();
    if (var_age.length > 1) {
      if (var_age > 17 && var_age < 71) {
        $("#ques_2_active").addClass("active");
        ques2Btn.addClass("go_ahead");
        $(".age_alert").removeClass("alert");
      } else {
        $(".age_alert").addClass("alert");
        ques1Btn.removeClass("go_ahead");
      }
    } else {
      $("#ques_2_active").removeClass("active");
      ques1Btn.removeClass("go_ahead");
    }
  });

  //question two desktop 1
  userAgeEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if (ques2Btn.hasClass("go_ahead")) {
        ques2Btn[0].click();
      }
    }
  });
  //avg retirement age
  $(".options_popup.step_3 .options_container .option").click(function () {
    valueee = $(this).attr("data-age");
    valueee2 = $(this).attr("data-default");
    //alert(valueee);
    avg_retirement_age = parseInt(valueee);
    default_death_age = parseInt(valueee2);
  });

  //Question 4 Validation
  userIncomeEl.keyup(function () {
    var var_income = $(this).val().replace(/,/g, "").replace(/[^\d]/g, "");
    if (var_income > 999) {
      $("#ques_four_active").addClass("active");
      $("#ques_4_btn").addClass("go_ahead");
    } else {
      $("#ques_four_active").removeClass("active");
      $("#ques_4_btn").removeClass("go_ahead");
    }
    if (var_income > 0) {
      $(".dollar").addClass("show");
    } else {
      $(".dollar").removeClass("show");
    }
  });

  const formatter = {
    format: (str) => toDollar(str),
  };

  // Live Comma
  userIncomeEl.keyup(function () {
    if ($(this).val() !== "") {
      if (parseInt($(this).val()) > 0) {
        $(this).val(formatter.format($(this).val()));
      } else {
        $(this).val("");
      }
    } else {
      $(this).val("");
    }
  });

  //question four desktop 1
  userIncomeEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if ($("#ques_4_btn").hasClass("go_ahead")) {
        $("#ques_4_btn")[0].click();
      }
    }
  });

  //inflation calculation ques_4_btn

  var year_left_in_retirement;
  var fin_factor;

  $("#ques_4_btn").click(function () {
    const incomebi = userIncomeEl.val().replace(/,/g, "");
    const userage = parseInt(userAgeEl.val());
    year_left_in_retirement = avg_retirement_age - userage;
    let inflation_factor = Math.pow(1.025, year_left_in_retirement);
    inflation_factor = Math.round((inflation_factor + 0.00001) * 100) / 100;
    const income_after_inflation = parseInt(incomebi) * inflation_factor;
    $("#ibi").html(formatter.format(incomebi));
    $(".income_after_inflation").html(formatter.format(income_after_inflation));
    $("#iai").html(formatter.format(income_after_inflation));
    $("#income_after_inflation").val(parseInt(income_after_inflation));
    $("#at_age").html(avg_retirement_age);
  });
  $(".options_popup.step_3 .option").click(function () {
    $(".options_popup.step_3 .option").removeClass("active");
    $(this).addClass("active");
    var ans = $(this).children().html();
    step3Selector.addClass("lightup");
    $("#light_arrow_3").addClass("show");
    step3Selector.html(ans);
    $("#retirement_age").val(ans);
    $("#ques_3_active").addClass("active");
    $("#ques_3_btn").addClass("go_ahead");
  });
  $(".options_popup.step_5 .option").click(function () {
    $(".options_popup.step_5 .option").removeClass("active");
    $(this).addClass("active");
    const ans1 = $(this).children().html();
    step5Selector.addClass("lightup");
    $("#light_arrow_5").addClass("show");
    step5Selector.html(ans1);
    $("#ques_5_active").addClass("active");
    $("#ques_5_btn").addClass("go_ahead");
    $("#pension_choice").val(ans1);
    const fin_array = [
      4.7, 5.5, 6.2, 6.9, 7.7, 8.5, 9.18, 9.86, 10.54, 11.22, 11.9, 12.48,
      13.06, 13.64, 14.22, 14.8, 15.3, 15.8, 16.3, 16.8, 17.3, 17.74, 18.18,
      18.62, 19.06, 19.5, 19.85, 20.2, 20.55, 20.9, 21.25, 21.6, 21.95, 22.3,
      22.65, 23, 23.35, 23.7, 24.05, 24.4, 24.75,
    ];
    fin_factor = fin_array[default_death_age - 5];
    let fin_num =
      $(".income_after_inflation").html().replace(/,/g, "") * fin_factor;
    let selected_ans = parseInt($(this).attr("data-ans"));
    let user_age = parseInt(userAgeEl.val());
    if (
      (user_age > 30 && user_age < 40 && selected_ans === 1) ||
      (user_age > 30 && user_age < 40 && selected_ans === 3)
    ) {
      fin_num = fin_num - (fin_num / 100) * 20;
    } else if (
      (user_age > 40 && selected_ans === 1) ||
      (user_age > 40 && selected_ans === 3)
    ) {
      fin_num = fin_num - (fin_num / 100) * 30;
    } else if (user_age > 30 && selected_ans === 2) {
      fin_num = fin_num - (fin_num / 100) * 50;
    }
    $("#fin_number").val(fin_num);
  });
  const guessOptionEl = $(".guess_option");
  const guessBtnEl = $("#guess_btn");
  const skipperEl = $("#skipper");
  const guessbutton1El = $("#guess_1_btn");
  guessOptionEl.click(function () {
    guessOptionEl.removeClass("active");
    $(this).addClass("active");
    guessBtnEl.addClass("active");
    skipperEl.addClass("hidden");
    guessbutton1El.addClass("go_ahead");
    guessedFinEl.val($(this).children().html());
  });

  $("#guess_back").click(function () {
    guessOptionEl.removeClass("active");
    guessBtnEl.removeClass("active");
    skipperEl.removeClass("hidden");
    guessbutton1El.removeClass("go_ahead");
    guessedFinEl.val("skipped");
  });

  const country_val = cookies.get("country");

  const getTranslatedData = async () => {
    let retirement_age = $("#retirement_age").val();
    let pension_choice = $("#pension_choice").val();
    let guessed_fin = guessedFinEl.val();
    if (Weglot.getCurrentLang() === "es") {
      [retirement_age, pension_choice, guessed_fin] = await translateToLanguage(
        [retirement_age, pension_choice, guessed_fin]
      );
    }
    return [retirement_age, pension_choice, guessed_fin];
  };

  async function createNewProspect() {
    let [retirement_age, pension_choice, guessed_fin] =
      await getTranslatedData();

    const data = {
      companyId: cookies.get("COMPANY_ID"),
      userId: cookies.get("USER_ID"),
      first_name: userNameEl.val(),
      age: userAgeEl.val(),
      annual_income_after_inflation: parseInt(
        $("#income_after_inflation").val()
      ),
      annual_income_before_inflation: parseInt(
        userIncomeEl.val().replace(/,/g, "")
      ),
      retirement_age,
      pension_choice,
      guessed_fin,
      email: emailEl.val(),
      fin_number: parseInt($("#fin_number").val()),
      country: country_val,
    };

    if (cookies.get("isAffiliateUrl") === "true") {
      data.affiliateId = cookies.get("affiliateId");
    }

    createProspect(cookies.get("COMPANY_ID"), data)
      .then((res) => {
        cookies.set("PROSPECT_ID", res._id);
        cookies.set("FIN Number", res.fin_number);
        cookies.set("Name", res.first_name);
        cookies.set("Country", res.country);
        window.location.href = "/result";
        trackMixPanelEvent("FIN Prospect created.");
      })
      .catch((error) => {
        alert(
          error.response && error.response.data && error.response.data.message
        );
        throw new SentryError(
          `Error while creating a prospect email: ${emailEl.val()}`,
          error
        );
      });
  }

  async function updateProspect(prospectID) {
    let [retirement_age, pension_choice, guessed_fin] =
      await getTranslatedData();

    updateProspectById(cookies.get("COMPANY_ID"), prospectID, {
      age: userAgeEl.val(),
      retirement_age,
      annual_income_after_inflation: parseInt(
        $("#income_after_inflation").val()
      ),
      annual_income_before_inflation: parseInt(
        userIncomeEl.val().replace(/,/g, "")
      ),
      pension_choice,
      guessed_fin,
      fin_number: parseInt($("#fin_number").val()),
    })
      .then(function (response) {
        cookies.set("PROSPECT_ID", response._id);
        cookies.set("FIN Number", "" + response.fin_number);
        cookies.set("Name", response.first_name);
        cookies.set("Country", response.country);
        window.location.href = "/result";
      })
      .catch(function (error) {
        alert(
          error.response && error.response.data && error.response.data.message
        );
        throw new SentryError(
          `Error while updating prospect: ${prospectID}`,
          error
        );
      });
  }

  $("#submit_btn").click(function () {
    const terms = $("#terms").is(":checked");
    const email_address = isEmail(emailEl.val());
    if (email_address) {
      if (!terms) {
        alert("Please accept the terms and conditions");
      } else {
        getProspect(
          cookies.get("USER_ID"),
          cookies.get("COMPANY_ID"),
          emailEl.val()
        )
          .then(function (response) {
            updateProspect(response._id);
          })
          .catch(function (error) {
            if (error.success && error.count === 0) {
              createNewProspect();
            } else {
              throw new SentryError(
                `Error While submitting results: ${emailEl.val()}`,
                error
              );
              alert(error.message);
            }
          });
      }
    } else {
      alert("Please enter your email address");
    }
  });

  if (isMobile()) {
    $("*").animate({ scrollTop: 0 }, "fast");

    $(".step_btn").click(function () {
      $("*").scrollTop(0);
    });
    const inputEl = $("input");
    inputEl.blur(function () {
      $("*").scrollTop(0);
    });
    inputEl.focusout(function () {
      $("*").scrollTop(0);
    });
  }
}

module.exports = questionsPageInit;
