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

async function fetchVideoService(type, country, lang) {
  const fetchVideoAPI = new Service("videoProspects/leadCapturingVideos");
  fetchVideoAPI.equals("type", type);
  fetchVideoAPI.equals("countryCode", country);
  fetchVideoAPI.equals("language", lang);
  return new Promise((resolve, reject) => {
    fetchVideoAPI
      .find()
      .then((res) => {
        if (res.count > 0) {
          resolve(fetchVideoAPI);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { fetchVideoService, getVideoProspect };
