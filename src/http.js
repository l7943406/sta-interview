import Axios from 'axios'
import {Loading} from 'element-ui'


// 超时时间
Axios.defaults.timeout = 5000

// 请求数量
let requestCount = 0;
//loading对象
let loadingInstance = null;


// 多个请求没结束，只开启一个loading
const loadingShow = () => {
    if (requestCount === 0) {
        if (loadingInstance === null) {
            loadingInstance = Loading.service({fullscreen: true, text: '努力加载中...'})
        }
    }
    requestCount++;
}


// 等最后一个请求结束，再关闭loading
const loadingHide = () => {
    requestCount = requestCount <= 0 ? 0 : requestCount - 1;
    if (requestCount === 0) {
        if (loadingInstance !== null) {
            loadingInstance.close();
            loadingInstance = null;
        }
    }
}


let filterUrls = [
    "/student/selectNumbers"
];

// 请求拦截
Axios.interceptors.request.use(config => {
    if (filterUrls.indexOf(config.url) > -1) {
        return config
    }
    loadingShow();
    return config
}, error => {
    loadingHide();
    return Promise.reject(error)
})


// //响应拦截
Axios.interceptors.response.use(data => {
    loadingHide();
    return data
}, error => {
    loadingHide();
    return Promise.reject(error)
})