import axios from "axios";

axios.defaults.baseURL = process.env.APP_API;

axios.defaults.withCredentials = true;
axios.defaults.headers.post["Accespt"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    get: axios.get,
    post: axios.post,
};
