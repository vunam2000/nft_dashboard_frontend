import Cookies from 'js-cookie';
const axios = require('axios');

export function sendRequestToServer(req) {
    try {
        const { method, url, data, params } = req;

        return axios({
            method: method,
            url: url,
            data: data,
            withCredentials: true,
            headers: {
                'jwt': Cookies.get('token')
            },
            params: params
        })
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(err => {
            console.log("error", err.response)
        });
    } catch (error) {
        return Promise.reject(error);
    }
}