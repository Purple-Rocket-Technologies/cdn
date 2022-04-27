class Service {
  constructor(endpoint) {
    this.axios = axios;
    this.baseUrl = `https://${api_url}/api/v1/users/${endpoint}`;
    this.query = ``;
    this.body = {};
  }

  equals(key, val) {
    this.query = `${this.query}&${key}=${val}`;
  }

  limit(val) {
    this.query = `${this.query}&limit=${val}`;
  }

  async find() {
    const url = !isEmpty(this.query)
      ? `${this.baseUrl}?${this.query}`
      : this.baseUrl;

    return await new Promise((resolve, reject) => {
      this.axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  parseResponse(response) {
    return response.data;
  }

  set(object) {
    this.body = object;
  }

  async create() {
    return await this.axios.post(this.baseUrl, this.body);
  }

  async update(id) {
    return await this.axios.put(`${this.baseUrl}/${id}`, this.body);
  }
}

function fetchProspect(ADVISOR_ID, COMPANY_ID, EMAIL) {
  return new Promise((resolve, reject) => {
    const prospect = new Service(`company/${COMPANY_ID}/prospects`);
    prospect.equals("userId", ADVISOR_ID);
    prospect.equals("email", EMAIL);
    prospect
      .find()
      .then(function (response) {
        if (response.count > 0) {
          resolve(response.data[0]);
        } else {
          reject(response);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function fetchAdvisor(COMPANY_URL, ADVISOR_URL) {
  return new Promise((resolve, reject) => {
    const advisorService = new Service(
      `${
        COMPANY_URL
          ? `getCompany/name/${COMPANY_URL}/${ADVISOR_URL}`
          : `getUserByUrl/${ADVISOR_URL}`
      }`
    );
    advisorService
      .find()
      .then(function (response) {
        if (response.error === true) {
          reject(response);
        } else if (response && response.data) {
          resolve(advisorService.parseResponse(response));
        } else {
          reject(response);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

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

function submitGetInTouchForm(formData) {
  return new Promise((resolve, reject) => {
    const formService = new Service(`email/send/getInTouch`);
    formService.set(formData);
    formService
      .create()
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

//
if (
  window.location.hostname === "dev.discoverfin.io" ||
  window.location.hostname === "qa.discoverfin.io"
) {
  function isEmpty(item) {
    return (
      item === undefined ||
      item === null ||
      item === "" ||
      item === "null" ||
      item === "undefined" ||
      item === "[]" ||
      item === "{}" ||
      (typeof item === "object" && Object.keys(item).length === 0) ||
      (typeof item === "string" && item.trim().length === 0)
    );
  }

  // utility
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}
