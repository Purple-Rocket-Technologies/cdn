let USER_URL = "",
  IS_CANADIAN_LINK = false,
  COMPANY_URL = null,
  COMPANY_ID = null,
  IS_OLD_LINK = false;

const { cookies, url, initiateAdvisorLogo } = require("../../../utils");
const {
  getUser,
  getProspect,
  getPublicFeatures,
} = require("../../../service/fin/onboarding.service");
const { onBoarding } = require("../../../utils/onboarding.utils");

async function redirectContinuer() {
  try {
    const prospect = await getProspect();
    $(".main_start_div").addClass("show");
    if (prospect) {
      onBoarding.prospect.setCookies(prospect);
      onBoarding.prospect.handleRedirect();
    } else {
      window.location.href = "/404";
    }
  } catch (e) {
    console.log(e);
  }
}

function initFINVideo() {
  onBoarding.videos.handlePlayer(IS_CANADIAN_LINK);
}

async function fetchAdvisor() {
  try {
    const advisor = await getUser(USER_URL, COMPANY_URL);
    COMPANY_ID = advisor.company_id;
    IS_CANADIAN_LINK = advisor.address && advisor.address.country === "Canada";
    try {
      const publicFeatures = await getPublicFeatures(advisor.userId);
      cookies.set("publicFeatures", JSON.stringify(publicFeatures));
    } catch (e) {
      console.log(e);
    }
    onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
    if (
      cookies.get("isRyanSemons") !== "true" ||
      cookies.get("EMAIL") !== "info@fintell.ai"
    ) {
      initiateAdvisorLogo(
        `${advisor.firstName.trim()} ${advisor.lastName.trim()}`
      );
    }

    initFINVideo();
  } catch (e) {
    window.location.href = "/404";
    console.log(e);
  }
}

function _FetchAdvisor(user, company = null) {
  USER_URL = user;
  COMPANY_URL = company;
  fetchAdvisor().then(() => {
    console.log("fetchAdvisor");
  });
}

async function init() {
  // read query string from url
  USER_URL = url.query.get("id") || url.query.get("user");
  COMPANY_URL = url.query.get("company");
  IS_OLD_LINK = COMPANY_URL || false;

  // set is old url or not in cookies to support old fin links
  cookies.set("isOldUrl", IS_OLD_LINK);

  // set start over url
  cookies.set("START_OVER_URL", window.location.href);
  cookies.set("INITIAL_LINK", window.location.href);
  $("#start_over").attr("href", window.location.href);

  await fetchAdvisor();

  // check for continue url
  if (USER_URL && url.query.get("prospectEmail")) {
    await redirectContinuer();
  }
}

module.exports = {
  init,
  _FetchAdvisor,
};
