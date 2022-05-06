import fin from "./pages/apps/fin";
import route from "./pages/apps/fin/route.pages";
import resultInit from "./pages/apps/fin/result.pages";
import Questionsinit from "./pages/apps/fin/questions";
import InitRouteQuestions from "./pages/apps/fin/routeQuestions.pages";
import initFinalStep from "./pages/apps/fin/finalStep";
import {
  isOnBoardingPage,
  isRouteQuestionPage,
  isResultPage,
  isRouteSelectedPage,
  isQuestionPage,
} from "./utils";

if (isOnBoardingPage()) {
  fin.init().then((r) => {
    console.log(r);
  });
} else if (isRouteSelectedPage()) {
  console.log("true");
  route.init();
} else if (isResultPage()) {
  resultInit();
} else if (isQuestionPage()) {
  Questionsinit();
} else if (isRouteQuestionPage(false)) {
  InitRouteQuestions();
} else if (isRouteQuestionPage(true)) {
  initFinalStep();
}
console.log(isRouteQuestionPage(true), "true");
console.log(isRouteQuestionPage(false), "dalse");
