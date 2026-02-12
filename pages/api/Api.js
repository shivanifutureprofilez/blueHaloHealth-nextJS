import axios from "axios";

const API_URL = "http://localhost:5000/api";
const API_URL_LIVE = "https://blue-halo-health-backend.vercel.app/api/";

function getCookie() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("cookie_consent");
    return data;
  }
  return null;
}
function getToken() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("token");
    return data;
  }
  return null;
}

let baseURL = API_URL_LIVE; 

if (typeof window !== "undefined") {
  const host = window.location.host;
  console.log("window.location.host", host);
  baseURL = host === "localhost:3000" ? API_URL : API_URL_LIVE;
}

// ✅ Create axios instance
const Api = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-cookie-consent": getCookie() || "none"
  },
});

// ✅ Attach token before each request
Api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { Api };
