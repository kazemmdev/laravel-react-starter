import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

axios.defaults.baseURL = baseUrl + "/api/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Accespt"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    get: axios.get,
    post: axios.post,
};
