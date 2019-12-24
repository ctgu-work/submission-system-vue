import request from '../utils/request';

//提交评语
export function submitComment(data){
    return request({
        url: 'http://172.25.1.98:8080/user/',
        method: 'post',
        params: data
    })
}

//进入审稿界面
export function getInfo(data){
    return request({
        url: 'http://172.25.1.98:8080/specialist/findPaper',
        method: 'get',
        params: data
    })
}

//查看未审稿稿件
export function searchUnchecked(data){
    return request({
        url: 'http://172.25.1.98:8080/specialist/paperlist',
        method: 'get',
        params: data
    })
}