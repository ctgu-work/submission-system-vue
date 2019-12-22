import request from '../utils/request';

//提交评语
export function submitComment(data){
    return request({
        url: 'http://172.25.1.98:8080/user/',
        method: 'post',
        params: data
    })
}