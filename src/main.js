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
} from "./utils";
import initAppointment from "./pages/apps/appointment";
import { init } from "./pages/apps/videomessages/index";
import "./styles/main.css";
if (isOnBoardingPage()) {
  fin.init().then((r) => {
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
  initAppointment().then((r) => {
    console.log("");
  });
}
