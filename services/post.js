import axios from 'axios';

export function post(url, data) {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/' + url,
        data
    })
};