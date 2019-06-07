const options = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa("user:password"),
    },
    method: "GET",
};

export const getMaxes = (): Promise<Response> => {
    return fetch("http://localhost:8080/maxes", options);
};
