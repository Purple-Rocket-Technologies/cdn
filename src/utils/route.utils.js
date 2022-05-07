import { toDollar } from ".";

const { updateRoute } = require("../service/fin/route.service");

const routeUtils = {
  setPath: function ({ user_name, fin_number }) {
    $("#user_name").html("" + user_name);
    $("#fin_num").html(toDollar(fin_number));
  },
  handlePathSelection: function ({ company_id, PROSPECT_ID, route_selection }) {
    const paths = [
      {
        selector: "#route_1",
        path: "Manage Money Better",
        route: "manage-money-better",
      },
      {
        selector: "#route_2",
        path: "Make More Money",
        route: "make-more-money",
      },
      {
        selector: "#route_3",
        path: "Both",
        route: "both",
      },
    ];

    paths.forEach((path) => {
      $(path.selector).click(function () {
        updateRoute(company_id, PROSPECT_ID, route_selection)
          .then((r) => {
            window.location.href = "/route/" + path.route;
          })
          .catch((e) => {
            console.log(e);
          });
      });
    });
  },
};

export { routeUtils };
