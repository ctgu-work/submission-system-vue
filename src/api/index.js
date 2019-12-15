import request from '../utils/request';

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
export function fetchHotArticleList(list){
    return request({
        url: './json/index/rank.json',
        method: 'get',
        params: list
    })
}