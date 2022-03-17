import store from "../store";
import http from "./httpService";
import { login as loginAction } from "../store/userSlice";

export async function register(data) {
    return await http.post("register", data).then(() => login(data));
}

export async function login(data) {
    return await http.post("login", data).then(({ data }) => {
        dispatchUser(data?.user);
    });
}

export async function fetchUser() {
    return await http.get("user").then(({ data }) => {
        dispatchUser(data.data);
    });
}

function dispatchUser(user) {
    if (user) {
        store.dispatch(
            loginAction({
                name: user.name,
                email: user.email,
            })
        );
    }
}
