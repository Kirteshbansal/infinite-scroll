import axios from "axios";

const BASE_PATH = "https://api.unsplash.com/";
const API_TIMEOUT = 20000;
const HEADERS = { "content-type": "application/json" };

const api = axios.create({
    baseURL: BASE_PATH,
    timeout: API_TIMEOUT,
    headers: { ...HEADERS },
});

export default api;
