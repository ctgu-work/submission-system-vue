import request from '../utils/request';

export function editUserInfo(data) {
    return request({
        // headers:{
        //     'Content-Type': 'multipart/form-data'
        // },
        url: 'http://172.25.1.98:8080/user/profileImg',
        method: 'post',
        params: data
    })
}

export function getUserDetailInfo(data){
    return request({
        url: 'http://172.25.1.98:8080/user/index',
        method: 'get',
        params: data
    })
}

export function getMyPaperStatus(data){
    return request({
        url: 'http://172.25.1.98:8080/user/profile/article',
        method: 'get',
        params: data
    })
}

export function toFixName(data){
    return request({
        url: 'http://172.25.1.98:8080/user/specialist/checkRealInfo',
        method: 'post',
        params: data
    })
}

