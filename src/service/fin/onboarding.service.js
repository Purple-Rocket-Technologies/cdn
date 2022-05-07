const Service = require("../Service");
const { isEmpty } = require("../../utils");

const getUser = async (USER_URL, COMPANY_URL) => {
  const endpoint = !isEmpty(COMPANY_URL)
    ? `/getCompany/name/${COMPANY_URL}/${USER_URL}`
    : "/getUserByUrl/" + USER_URL;

  const user = new Service(endpoint);
  return await new Promise((resolve, reject) => {
    user.find().then(
      (response) => {
        resolve(user.parseResponse(response));
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const getProspect = async (ADVISOR_ID, COMPANY_ID, EMAIL) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const prospect = new Service(endpoint);
  prospect.equals("email", EMAIL);
  prospect.equals("userId", ADVISOR_ID);
  return await new Promise((resolve, reject) => {
    prospect.find().then(
      (response) => {
        response.count === 0 || response.error
          ? reject(response)
          : resolve(prospect.parseResponse(response).first());
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export { getUser, getProspect };
