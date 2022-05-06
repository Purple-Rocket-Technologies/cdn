const Service = require("../Service");

const updateRoute = async (COMPANY_ID, PROSPECT_ID, route_choice) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const route = new Service(endpoint);
  route.set({
    route_choice,
  });
  return await new Promise((resolve, reject) => {
    route
      .update(PROSPECT_ID)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  updateRoute,
};
