import { toDollar } from ".";

const { updateRoute } = require("../service/fin/route.service");

const routeUtils = {
  setPath: function ({ user_name, fin_number }) {
    $("#user_name").html("" + user_name);
    $("#fin_num").html(toDollar(fin_number));
  },
  handlePathSelection: function ({ company_id, PROSPECT_ID }) {
    const paths = [
      {
        selector: "#route_1",
        path: "I am just starting, or want to start over",
        route: "manage-money-better",
      },
      {
        selector: "#route_2",
        path: "I want to make sure I am on the best route",
        route: "make-more-money",
      },
      {
        selector: "#route_3",
        path: "I am getting close to my destination",
        route: "both",
      },
    ];

    paths.forEach((path) => {
      $(path.selector).click(function () {
        updateRoute(company_id, PROSPECT_ID, path.path)
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
