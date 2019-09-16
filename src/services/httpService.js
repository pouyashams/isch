import axios from 'axios';
import {toast} from 'react-toastify';

axios.interceptors.request.use(async function (config) {
    document.getElementById("loading").style.display = "";
    console.log(config)
    if (!config.url.includes("/api/auth/signin")) {
        const token = sessionStorage.getItem('token');
        console.log(token)
        axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    document.getElementById("loading").style.display = "none";
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log('Logging the error:', error);
        toast.error("خطایی در برقراری با سرور به وجود امده است");
    }

    return Promise.reject(error);
});


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
