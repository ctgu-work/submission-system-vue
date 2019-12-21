import request from '../utils/request';

export function editUserInfo(data) {
    return request({
        url: 'http://172.25.1.98:8080/user/profile',
        method: 'post',
        params: data
    })
}

