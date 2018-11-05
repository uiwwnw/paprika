import axios from 'axios';

export function put(url, data) {
    return axios({
        method: 'put',
        url: 'http://localhost:3000/' + url,
        data
    })
};
 