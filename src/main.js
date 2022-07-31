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
} else if (isAppointmentPage()) {
  initAppointment();
}
