import fin from "./pages/apps/fin";
import route from "./pages/apps/fin/route.pages";
import {
  isOnBoardingPage,
  isRouteQuestionPage,
  isRouteSelectedPage,
} from "./utils";

if (isOnBoardingPage()) {
  fin.init().then((r) => {
    console.log(r);
  });
} else if (isRouteSelectedPage()) {
  route.init();
} else if (isRouteQuestionPage()) {
  route.init();
}
