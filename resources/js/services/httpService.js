import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

axios.defaults.baseURL = baseUrl + "/api/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Accespt"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

async function sanctum() {
    return await axios.get(baseUrl + "/sanctum/csrf-cookie");
}

export function get(url) {
    return sanctum()
        .then(() => axios.get(url))
        .catch((error) => console.log(error));
}

export function post(url, data) {
    sanctum()
        .then(() => axios.post(url, data))
        .catch((error) => console.log(error));
}

export default {
    get: get,
    post: post,
};
