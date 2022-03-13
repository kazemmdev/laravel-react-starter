import http from "./httpService";

export async function login(data) {
    return await http.post("login", data);
}

export async function register(data) {
    return await http.post("register", data);
}

export async function user() {
    return await http.get("user");
}
