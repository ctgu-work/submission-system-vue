import request from '../utils/request';


export function getUserinfo(){
    return request({
        url: 'http://172.25.1.98:8080/user/',
        method: 'get'
    })
}

//登出
export function logout(){
    let res = request({
        url: 'http://172.25.1.98:8080/user/logout',
        method: 'get'
    });
    window.localStorage.removeItem('user_token')
    
    location.reload;
}

//用户登录
export function login(data) {
    return request({
        url: 'http://172.25.1.98:8080/user/login',
        method: 'post',
        params: data
    })
}

//用户注册获取验证码
export function getVerifyCode(data){
    return request({
        url: 'http://172.25.1.98:8080/user/register/getVerify',
        method: 'get',
        params: data
    })
}

//用户注册
export function register(data){
    return request({
        url: 'http://172.25.1.98:8080/user/register',
        method: 'post',
        params: data
    })
}

//专家登录
export function specialistLogin(data){
    return request({
        url: 'http://172.25.1.98:8080/specialist/login',
        method: 'post',
        params: data
    })
}

export function fetchTab(list) {
    return request({
        url: './json/index/tab.json',
        method: 'get',
        params: list
    })
}
//路径一般为/science
export function fetchArticleList(list) {
    return request({
        url: './json/index/list_sc.json',
        method: 'get',
        params: list
    })
}

//请求右侧最热文章栏
export function fetchHotArticleList(list) {
    return request({
        url: './json/index/rank.json',
        method: 'get',
        params: list
    })
}

