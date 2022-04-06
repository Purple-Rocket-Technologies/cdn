import Service from "../Service";

const getVideoProspect = async (COMPANY_ID, EMAIL) => {
  const service = new Service(
    `company/${COMPANY_ID}/videoProspects?email=${EMAIL}`
  );
  return new Promise((resolve, reject) => {
    service
      .find()
      .then((res) => {
        if (res.count > 0) {
          resolve(service.parseResponse(res.data));
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getVideoProspect,
};
