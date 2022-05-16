const { isEmpty } = require("../utils");

const axios = require("axios");

class Service {
  constructor(endpoint) {
    if (endpoint.startsWith("/")) {
      endpoint = endpoint.replace("/", "");
    }
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

  async first() {
    return await this.axios.get(`${this.baseUrl}?${this.query}&limit=1`);
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
module.exports = Service;
