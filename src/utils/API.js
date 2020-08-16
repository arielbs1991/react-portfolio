const axios = require("axios");
const urlPrefix = "http://localhost:8080";

const API = {
    getAboutPage: function () {
        return axios.get(`${urlPrefix}/pages/about`)
    }
}

export default API;