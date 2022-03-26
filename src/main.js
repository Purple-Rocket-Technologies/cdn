import fin from "./pages/apps/fin";
import route from "./pages/apps/fin/route.pages";
import result from "./pages/apps/fin/result.pages";
import {
  isOnBoardingPage,
  isRouteQuestionPage,
  isResultPage,
  isRouteSelectedPage,
} from "./utils";

if (isOnBoardingPage()) {
  fin.init().then((r) => {
    console.log(r);
  });
} else if (isRouteSelectedPage()) {
  route.init();
} else if (isResultPage()) {
  result.init();
}
// else if (isRouteQuestionPage()) {
//   route.init();
// }
