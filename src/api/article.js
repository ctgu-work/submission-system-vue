import request from '../utils/request';

//获取分类
export function getClasstify(){
    return request({
        url: 'http://172.25.1.98:8080/user/',
        method: 'get'
    })
}

//提交文章
export function submitArtile(data){
    return request({
        url: 'http://172.25.1.98:8080/user/',
        method: 'post',
        params: data
    })
}
