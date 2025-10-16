import axios from 'axios';

const API_URL =  "http://localhost:5000/api"

function getToken() {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('token');
        return data;
    }
    return null;
}
// console.log("window.location.host",window.location.host)

let Api = axios.create({
    baseURL:  API_URL,
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