import { getUser } from "./fin/onboarding.service";
import Service from "./Service";

const submitForm = (data) => {
  console.table(data);
  const formService = new Service("email/send/getInTouch");
  formService.set(data);
  return new Promise((resolve, reject) => {
    formService
      .create()
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getCompany: getUser,
  submitForm,
};
