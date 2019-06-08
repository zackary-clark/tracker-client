export const getMaxes = (): Promise<Response> => {
    return fetch("http://localhost:8080/maxes", {method: "GET"});
};
