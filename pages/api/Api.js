import axios from 'axios';

const API_URL =  "http://localhost:5000/api";

const API_URL_LIVE =  "https://blue-halo-health-backend.vercel.app/api/"

function getToken() {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('token');
        return data;
    }
    return null;
}
// console.log("window.location.host",window.location.host)

let Api = axios.create({
    // baseURL:  API_URL,
     baseURL: window.location.host == 'localhost:3000' ?  API_URL  : API_URL_LIVE,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});

Api.interceptors.request.use(
    async (config) => {
        const token = getToken();
        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { Api };