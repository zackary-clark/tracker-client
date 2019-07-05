const host = "http://localhost:8080";
// TODO: take this from env variable or otherwise make configurable

const contentHeader = {"Content-Type": "application/json"};

export const getMaxes = (): Promise<Response> => {
    return fetch(host + "/maxes", {method: "GET", headers: contentHeader});
};
