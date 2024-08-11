import axios from "axios";

let devIp = "3451-174-68-14-17.ngrok-free.app";

let serverAdd = "";
if (typeof window !== "undefined") {
    serverAdd = window.location.origin;
}

export const getUrl = () => {
    let url = `https://${devIp}/`;
    if (process.env.NODE_ENV === "production") {
        //     url = `https://${process.env.NEXT_PUBLIC_API_URI}/api`
        // url = `https://${prodUrl}/api`;
        url = `${serverAdd}/api/admin`;
    }
    return url;
};

const get_headers = () => {
    let headers = {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",

        "Content-Type": "application/json",
    };
    return headers;
};
const get_headerss = () => {
    let headers = {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    };
    return headers;
};
axios.interceptors.request.use(
    function (config) {
        config.baseURL = getUrl();
        config.withCredentials = true;

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const { status, data, config } = error.response;
        if (status === 401) {
            // alert("detail: " + data.detail);
            // return status
        }

        if (status === 400) {
            var keys = Object.keys(data);
            var values = Object.values(data);
            // alert("erro1111r");
            var message = "";
        }

        if (status === 502) {
            // alert("errro");
        }
        return Promise.reject(error);
    }
);

export const GET = (url) => {
    return axios.get(url, {
        headers: get_headers(),
        withCredentials: true,
    });
};

export const POSTMultipart = (url, data) => {
    return axios.post(url, data, { headers: get_headerss() });
};
export const POST = (url, data) => {
    return axios.post(url, data, { headers: get_headers() });
};

export const PUT = (url, data) => {
    return axios.put(url, data);
};
export const PATCH = (url, data) => {
    return axios.patch(url, data, { headers: get_headers() });
};

export const DELETE = (url) => {
    return axios.delete(url);
};