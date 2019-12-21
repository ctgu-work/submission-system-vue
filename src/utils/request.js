import axios from 'axios'

const service = axios.create({
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        config.withCredentials = true
        let token = window.localStorage.getItem('user_token');
        console.log('interceptors.request: '+ token)
        if (token) {//每次请求都把token带上
            console.log('插入...')
            config.headers = {
                'token': token
            }
        }
        return config;
    },
    error => {
        console.log("interceptors.request: "+ error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            console.log('fuck u')
            Promise.reject();
        }
    },
    error => {
        console.log('interceptors.response: '+ error);
        return Promise.reject();
    }
);
export default service;