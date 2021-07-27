import axios from 'axios'
// import qs from 'qs'
import { Toast } from 'vant'

// 设置弹窗默认持续时间
Toast.setDefaultOptions({ duration: 1000 });

// var loadingInstance;// 显示loading
var reqCount = 0;//请求数
let loadFlag = false;
axios.interceptors.request.use(function (config) {
    reqCount++;
    if (config.loading) {
        loadFlag = true
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
        });
    }
    let token = sessionStorage.getItem('token');
    if (token && typeof token !== 'undefined') {
        config.headers.authorization = 'Bearer ' + token;
    }
    config.headers.timeStamp = new Date().getTime()
    return config;
}, function (err) {
    return Promise.reject(err);
})

// 添加响应拦截器(对接口响应返回数据做点什么)----------------------------------------------------------------
axios.interceptors.response.use(function (res) {
    reqCount--;
    if (reqCount <= 0 && loadFlag) {
        Toast.clear()
    }
    if (res.data.data && typeof res.data.data.token !== 'undefined') {
        sessionStorage.setItem('token', res.data.data.token);
    }
    // 生成文件
    // if (res.headers['content-type'].indexOf('application/octet-stream') == -1 && !res.data.error) {
    //     let reader = new FileReader();
    //     reader.readAsText(res.data);
    //     return new Promise((resolve) => {
    //         reader.onload = function () {
    //             let result = JSON.parse(reader.result);
    //             resolve(result);
    //         };
    //     });
    // }
    return res.data
}, function (err) {
    reqCount--;
    if (reqCount <= 0) {
    }
    return Promise.reject(err);
})

//需要重新登录--------------------------------------------------------------------------------------
function goLogin() {
    sessionStorage.clear();
    Toast.fail("登录失效！请重新登录！");
    setTimeout(() => {
        window.location.href = '/login';
    }, 800);
}
// 封装axios--------------------------------------------------------------------------------------
/**
 * @params method  String POST
 * @params url     String 地址
 * @params params  String 传参
 * @params loading Boolen 接口请求是否需要遮挡层
 * */
function req(method, url, params, loading = true) {
    params = params || {};
    //处理pageNo参数
    if (params.pageNo && params.pageNo > 0) {
        params.pageNo -= 1;
    }
    let baseURL = process.env.NODE_ENV === 'development' ? 'https://localhost:3000' : 'https://xiongxiong.site:3000'
    let httpDefault = {
        method: method,
        baseURL,
        url: url,
        params: method === 'get' || method === 'delete' ? params : null,
        // data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        data: method === 'post' || method === 'put' ? params : null,
        timeout: 20000,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        loading
    };
    //上传文件
    // if (params.file && params.catalog) {
    //     let fileData = new FormData();
    //     fileData.append('file', params.file);
    //     fileData.append('catalog', params.catalog);
    //     // fileData.append('loginKey', loginKey);
    //     if (params.is_public_read) {
    //         fileData.append('is_public_read', params.is_public_read);
    //     }
    //     httpDefault.data = fileData;
    // }
    //如果设置了响应数据类型
    if (params.responseType) {
        httpDefault.responseType = params.responseType;
    }

    return new Promise((resolve, reject) => {
        axios(httpDefault)
            .then((res) => {
                //1代表正常,0代表异常,2代表登录失效
                if (res.code === 0) {
                    Toast.fail(res.msg);
                    resolve(res);
                } else if (res.code === -1) {
                    // 登录失效重新登录
                    goLogin();
                    resolve(res);
                }
                else {
                    resolve(res);
                }

            }).catch((err) => {
                console.log(err)
                Toast.fail('系统错误!');
            })
    })
}


export default req