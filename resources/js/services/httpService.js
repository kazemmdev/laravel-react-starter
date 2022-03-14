import axios from "axios";
import constants from "./constants";

axios.defaults.baseURL = constants.HOST_URL;

axios.defaults.withCredentials = true;
axios.defaults.headers.post["Accespt"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    get: axios.get,
    post: axios.post,
};
