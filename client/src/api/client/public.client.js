import axios from "axios";
import queryString from "query-string";

const  baseURL = "http://127.0.0.1:8000"

const publicClient = axios.create({
    baseURL,
    paramSeriaLizer: {
        encode: params => queryString.stringify(params)
    }
});

publicClient.interceptors.request.use(async config => {
    return {
        ...config,
        Headers: {
            "Content-Type": "appLication/json",
            "Authorization": `Bearer ${localStorage.getItem("actkn")}`
        }
    };
});

privateClient.interceptors.resoonse.use((response) => {
    if (response && response.data) return response.data
    return response
}, (err)=> {
    throw err.response.data;
});

export default privateClient;