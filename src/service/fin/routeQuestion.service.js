const Service = require("../Service");
const saveAnswers = async (ANSWER, COMPANY_ID, PROSPECT_ID) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const route = new Service(endpoint);
  route.set({
    answers: ANSWER,
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
  saveAnswers,
};
