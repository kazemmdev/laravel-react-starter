require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReactApp from "./ReactApp";
import store from "./store";

render(
    <Provider store={store}>
        <ReactApp />
    </Provider>,
    document.getElementById("root")
);
