import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App1 from "./app1.tsx";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App1,
    domElementGetter,
});

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
}

export function mount(props) {
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    return reactLifecycles.unmount(props);
}

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById("app1");
    if (!el) {
        el = document.createElement("div");
        el.id = "app1";
        document.body.appendChild(el);
    }

    return el;
}
