const { appointmentUtils } = require("../../../utils/appointment.utils");
const { getCompany } = require("../../../service/appointment.service");
const { url, BasePage } = require("../../../utils");
const { submitForm } = require("../../../service/appointment.service");

class AppointmentPage extends BasePage {
  constructor(_object) {
    super(_object);
  }
}

async function initAppointment() {
  let page = new AppointmentPage({
    ...appointmentUtils.initialState,
    USER_URL: url.query.get("id") || url.query.get("user"),
    COMPANY_URL: url.query.get("company"),
    IS_OLD_LINK: url.query.get("company") || false,
  });

  // read for url and set state
  if (url.query.get("video")) {
    page.IS_VIDEO_APP = true;
    page.IS_DASHBOARD_LINK = true;
  } else {
    page.IS_VIDEO_APP = false;
    page.IS_DASHBOARD_LINK = true;
  }

  try {
    const advisor = await getCompany(page.USER_URL, page.COMPANY_URL);

    page = appointmentUtils.populatePageData(page, advisor);

    console.table(page);

    page.track("Prospect visited Appointment Page", {
      rep_name: page.REP_NAME,
      page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App",
    });
    page = appointmentUtils.setupTrackAppointmentButtonClick(page);

    appointmentUtils.mapDataToPage(page);
  } catch (e) {
    window.location.href = "/404";
  }

  appointmentUtils.handleScrollEvent();

  page.on("submit", "#getintouch", function () {
    const { REP_ID, COMPANY_ID, REP_NAME, REP_EMAIL } = page;
    const prospectFirstName = $("#first_name").val();
    const prospectLastName = $("#last_name").val();
    try {
      submitForm({
        prospectFirstName,
        prospectLastName,
        prospectName: prospectFirstName + " " + prospectLastName,
        prospectEmail: $("#email").val(),
        prospectPhone: $("#phone_no").val(),
        prospectMessage: $("#message").val(),
        userId: REP_ID,
        companyId: COMPANY_ID,
      }).then((r) => {
        page.track("Prospect filled getInTouch form", {
          rep_name: REP_NAME,
          rep_email: REP_EMAIL,
          page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App",
          prospectName: prospectFirstName + " " + prospectLastName,
          prospectEmail: $("#email").val(),
        });
        $(".getintouch").addClass("hide");
        $(".successmessage").addClass("displayshow");
      });
    } catch (e) {
      alert("Oops! Something went wrong. Please try again.");
      console.log(e);
    }
  });
}

module.exports = initAppointment;
