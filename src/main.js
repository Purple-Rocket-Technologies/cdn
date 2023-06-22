import fin from "./pages/apps/fin";
import route from "./pages/apps/fin/route.pages";
import resultInit from "./pages/apps/fin/result.pages";
import questionsPageInit from "./pages/apps/fin/questions";
import InitRouteQuestions from "./pages/apps/fin/routeQuestions.pages";
import initFinalStep from "./pages/apps/fin/finalStep";
import {
  isOnBoardingPage,
  isRouteQuestionPage,
  isResultPage,
  isRouteSelectedPage,
  isQuestionPage,
  isAppointmentPage,
  cookies,
} from "./utils";
import initAppointment from "./pages/apps/appointment";
import { init } from "./pages/apps/videomessages/index";
import "./styles/main.css";

(async () => {
  if (isOnBoardingPage()) {
    await fin.init().then((r) => {
      console.log(r);
    });
  } else if (isRouteSelectedPage()) {
    route.init();
  } else if (isResultPage()) {
    resultInit();
  } else if (isQuestionPage()) {
    questionsPageInit();
  } else if (isRouteQuestionPage(false)) {
    InitRouteQuestions();
  } else if (isRouteQuestionPage(true)) {
    initFinalStep();
    init();
  } else if (isAppointmentPage()) {
    await initAppointment().then((r) => {
      console.log("");
    });
  }

  if (cookies.get("isRyanSemons") === "true") {
    const primaryColor = "#2A4246";
    const secondaryColor = "#84C0B8";

    [
      {
        color: primaryColor,
        selectors: [
          $(".body"),
          $(".header"),
          $(".bottom_container"),
          $(".options_container"),
          $(".guess_container"),
          $(".email_container"),
          $(".calculating_loader"),
          $(".headsup_container"),
          $(".question"),
          $(".headsup_1"),
          $(".buttons_headsup"),
          $(".navbar.result"),
          $(".language-section"),
        ],
      },
      {
        color: secondaryColor,
        selectors: [
          $(".cta_btn"),
          $(".button_active"),
          $(".guess_option.active"),
          $(".help_text"),
          $(".green"),
          $(".button"),
        ],
      },
    ].forEach((obj) => {
      obj.selectors.forEach((el) => {
        el.css("background-color", obj.color);
      });
    });
    [
      $(".options_popup.step_3, .options_popup.step_5"),
      $(".guess_game"),
      $(".email_form"),
    ].forEach((el) => {
      el.css("background-color", "rgb(132 192 184 / 90%)");
    });
    $(".bottom_container").css("background-image", "none");
    $(".route > .bottom").css(
      "background-image",
      "url(https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/64932caf87fa9e07937db8c7_bg_routes.svg)"
    );
    $(".image-11").attr("src", "https://finpath.ai/assets/anna.70ddd921.gif");
    $(".image_3").attr("src", "https://finpath.ai/assets/anna.70ddd921.gif");
    $(".cake > .image_3").attr(
      "src",
      "https://discoverfin.s3.amazonaws.com/assets/output-onlinegiftools.gif"
    );
    // set .text-field::placeholder color
    // $(".text-field").css("");
    $(".button_arrow").css("background-color", "rgba(255, 255, 255, .1)");
    $(".show-btn > a").attr("href", "https://myapp.wealthio.com/finrya20gq");
    $(".main_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/6493400b63c62651c3ba9ae5_clear_financial_vision.png"
    );
    $(".main_logo").css("width", "150px");
    $("#logo-container").html(
      "<img width='180px' src='https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/6493400b63c62651c3ba9ae5_clear_financial_vision.png' />"
    );

    $(".text-block-9").css("color", "#ffffff50");

    $(".arrow > .image-5:nth-child(2)").attr(
      "src",
      "https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/5f2b119ee036c022ae3c3c72_Vector%2022.svg"
    );

    $(".header").css("background-color", "transparent");

    // append to head style tag
    $("head").append(`
      <style>
      .text-field::placeholder {
        color: #ffffff50;
        opacity: 1;
      }
      </style>
      `);

    $(".email_form").css("background-color", "rgb(132 192 184 / 90%)");
  }
})();
