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

const createVideoProspectService = async (COMPANY_ID, BODY) => {
  const createNewVideoProspect = new Service(
    `company/${COMPANY_ID}/videoProspects`
  );
  createNewVideoProspect.set(BODY);
  return new Promise((resolve, reject) => {
    createNewVideoProspect
      .create()
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

async function fetchValidateVideoType(type) {
  debugger;
  const validateVideo = new Service("videoProspects/leadCapturingVideos");
  validateVideo.equals("type", type);
  return new Promise((resolve, reject) => {
    validateVideo
      .find()
      .then((res) => {
        if (res.count > 0) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getPathsContentAPI(videoType) {
  const patchContentAPI_URL = new Service("videoProspects/paths");
  patchContentAPI_URL.equals("type", videoType);
  return new Promise((resolve, reject) => {
    patchContentAPI_URL
      .find()
      .then((res) => {
        if (res.count > 0) {
          resolve(patchContentAPI_URL);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
async function updateWatchTimeAPI(COMPANY_ID, PROSPECT_ID, UPDATE_DATA) {
  return new Promise((resolve, reject) => {
    const watchTime = new Service(
      `company/${COMPANY_ID}/videoProspects/${PROSPECT_ID}`
    );
    watchTime.set(UPDATE_DATA);
    watchTime
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

const updateVideoProspect = async (COMPANY_ID, PROSPECT_ID, BODY) => {
  const updateVideoProspect = new Service(
    `company/${COMPANY_ID}/videoProspects/${PROSPECT_ID}`
  );
  updateVideoProspect.set(BODY);
  return new Promise((resolve, reject) => {
    updateVideoProspect
      .update()
      .then((res) => {
        if (res.count > 0) {
          resolve(updateVideoProspect.parseResponse(res.data));
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getPathOptions = async (path_name) => {
  const service = new Service(`videoProspects/paths?name=${path_name}`);
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

const setPathOptionsAPI = async (
  COMPANY_ID,
  VIDEO_PROSPECT_ID,
  UPDATE_DATA
) => {
  return new Promise((resolve, reject) => {
    const setpathAPI = new Service(`company/${COMPANY_ID}/videoProspects`);
    setpathAPI.set(UPDATE_DATA);
    setpathAPI
      .update(VIDEO_PROSPECT_ID)
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
};

export {
  fetchVideoService,
  getVideoProspect,
  fetchValidateVideoType,
  getPathsContentAPI,
  createVideoProspectService,
  updateWatchTimeAPI,
  updateVideoProspect,
  getPathOptions,
  setPathOptionsAPI,
};
