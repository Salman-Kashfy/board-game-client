import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
    response => response,
    error => {
        console.error(error)
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
);
export const api = axios.create({
    timeout: 60 * 1000
});