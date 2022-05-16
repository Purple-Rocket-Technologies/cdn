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
          resolve(service.parseResponse(res));
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
        if (res.data && res.data.data && res.data.success) {
          resolve(createNewVideoProspect.parseResponse(res.data));
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

async function fetchVideoService(params) {
  const validateVideo = new Service("videoProspects/leadCapturingVideos");
  params.forEach((element) => {
    validateVideo.equals(element.key, element.value);
  });
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
  const patchContentAPI = new Service("videoProspects/paths");
  patchContentAPI.equals("type", videoType);
  return new Promise((resolve, reject) => {
    patchContentAPI
      .find()
      .then((res) => {
        if (res.count > 0) {
          resolve(patchContentAPI.parseResponse(res));
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const updateVideoProspect = async (COMPANY_ID, PROSPECT_ID, BODY) => {
  const updateVideoProspect = new Service(
    `company/${COMPANY_ID}/videoProspects`
  );
  updateVideoProspect.set(BODY);
  return new Promise((resolve, reject) => {
    updateVideoProspect
      .update(PROSPECT_ID)
      .then((res) => {
        console.log(res.data.success, "myres");
        if (res.data.success) {
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
        console.log(res, "this is my res");
        console.log(res.count, "this is my res couunnt");
        if (res.count > 0) {
          resolve(service.parseResponse(res));
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export {
  fetchVideoService,
  getVideoProspect,
  getPathsContentAPI,
  createVideoProspectService,
  updateVideoProspect,
  getPathOptions,
};
