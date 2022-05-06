import fin from "./pages/apps/fin";
import route from "./pages/apps/fin/route.pages";
import resultInit from "./pages/apps/fin/result.pages";
import Questionsinit from "./pages/apps/fin/questions";
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
}
