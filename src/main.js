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
    $(".body").css("background-color", primaryColor);
    $(".header").css("background-color", primaryColor);
    $(".cta_btn").css("background-color", secondaryColor);
    $(".bottom_container").css("background-image", primaryColor);
    $(".button_active").css("background-color", secondaryColor);
    $(".options_container").css("background-color", primaryColor);
    [$(".options_popup.step_3, .options_popup.step_5"), $(".guess_game")].css(
      "background-color",
      "rgb(132 192 184 / 30%)"
    );
    $(".guess_container").css("background-color", primaryColor);
    $(".guess_option.active").css("background-color", secondaryColor);
    $(".email_container").css("background-color", primaryColor);
    $(".calculating_loader").css("background-color", primaryColor);
    $(".help_text").css("background-color", secondaryColor);
    $(".route > .bottom").css(
      "background-image",
      "url(https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/64932caf87fa9e07937db8c7_bg_routes.svg)"
    );
    $(".image-11").attr("src", "https://finpath.ai/assets/anna.70ddd921.gif");
    $(".image_3").attr("src", "https://finpath.ai/assets/anna.70ddd921.gif");
    $(".cake > .image_3").attr(
      "src",
      "https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/6493318e39d75038c4a47bea_output-onlinegiftools.gif"
    );
  }
})();
