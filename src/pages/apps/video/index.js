const { BasePage, finBaseUrl } = require("../../../utils");
const { getUser } = require("../../../service/fin/onboarding.service");
const { onBoarding } = require("../../../utils/onboarding.utils");
const { getVideoProspect } = require("../../../service/video");

class videoPage extends BasePage {
  constructor(_object) {
    super(_object);
  }
}

async function fetchAdvisor(page) {
  const { USER_URL, COMPANY_URL, IS_OLD_LINK } = page;
  const advisor = await getUser(USER_URL, COMPANY_URL);
  page.COMPANY_ID = advisor.company_id;
  onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
  page.ADVISOR = advisor;
  return page;
}

async function redirectContinuer(page) {
  if (url.query.get("prospectEmail")) {
    const videoProspect = await getVideoProspect(
      page.COMPANY_ID,
      url.query.get("prospectEmail")
    );
    videoProspect
  }
}

async function init() {
  const USER_URL = url.query.get("id") || url.query.get("user");
  let page = new videoPage({
    ...videoUtils.initialState,
    USER_URL,
    IS_OLD_LINK: url.query.get("company"),
    APPOINTMENT_LINK: `${finBaseUrl(
      USER_URL,
      url.query.get("company"),
      "getBaseUrl",
      "appointment"
    )}&video=true`,
  });
  try {
    page = await fetchAdvisor(page);
    page.track("Prospect Visited Appointment page", {
      rep: page.advisor.firstName,
    });
  } catch (e) {
    $(".fourofour").addClass("show");
    console.log(e);
  }

  redirectContinuer(page);
}
module.exports = {
  init,
};
