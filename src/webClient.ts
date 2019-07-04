const host = "http://localhost:8080/";

export const getMaxes = (): Promise<Response> => {
    return fetch(host + "maxes", {method: "GET"});
};
