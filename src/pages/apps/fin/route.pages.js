const { cookies } = require("../../../utils");
const { routeUtils } = require("../../../utils/route.utils");
console.log(routeUtils, "utils");
class RoutePage {
  constructor(
    COMPANY_ID,
    PROSPECT_ID,
    USER_NAME,
    FIN_NUMBER,
    ROUTE_SELECTION = ""
  ) {
    this.route_selection = ROUTE_SELECTION;
    this.user_name = USER_NAME;
    this.fin_number = FIN_NUMBER;
    this.company_id = COMPANY_ID;
    this.PROSPECT_ID = PROSPECT_ID;
  }

  set route_selection(route_selection) {
    this._route_selection = route_selection;
  }

  setPath() {
    routeUtils.setPath(this);
  }

  handlePathSelection() {
    routeUtils.handlePathSelection(this);
  }
}

function init() {
  const page = new RoutePage(
    cookies.get("COMPANY_ID"),
    cookies.get("PROSPECT_ID"),
    cookies.get("Name"),
    cookies.get("FIN Number")
  );
  page.setPath();
  page.handlePathSelection();
}

module.exports = {
  init,
};
