const Service = require("../Service");

function createProspect(COMPANY_ID, BODY) {
  return new Promise((resolve, reject) => {
    const prospectService = new Service(`company/${COMPANY_ID}/prospects`);
    prospectService.set(BODY);
    prospectService
      .create()
      .then(function (response) {
        if (response.error === true) {
          reject(response);
        } else if (response && response.data) {
          resolve(prospectService.parseResponse(response.data));
        } else {
          reject(response);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function updateProspectById(COMPANY_ID, PROSPECT_ID, UPDATE_DATA) {
  return new Promise((resolve, reject) => {
    const prospectService = new Service(`company/${COMPANY_ID}/prospects`);
    prospectService.set(UPDATE_DATA);
    prospectService
      .update(PROSPECT_ID)
      .then(function (response) {
        if (response && response.data && response.data.data) {
          resolve(prospectService.parseResponse(response.data));
        } else {
          reject(response);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export { updateProspectById, createProspect };
