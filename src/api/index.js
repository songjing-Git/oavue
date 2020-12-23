/**
 * @author songjing@asiainfo
 */
import axios from 'axios'
//引入提示框
import {Modal} from 'view-design'
axios.defaults.timeout=10000
axios.defaults.baseURL="http://localhost:8084/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/**
 * 请求拦截
 */
axios.interceptors.request.use(
    config=>{
        return config;
    },
    error => {
        return Promise.error(error);
    }
)
/**
 * 响应拦截
 */
axios.interceptors.response.use(
    response=>{
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
error => {
        if (error.response.status){
            switch (error.response.status) {
                case 404:
                    Modal.caller({
                        message: '网络请求不存在',
                    })
                    break;

            }
            return Promise.reject(error.response);
        }
    }
)

/**
 * 封装get请求
 * songjing@asiainfo
 */
export function Get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params,
        }).then(res => {
            console.log(res.data);
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });
}

/**
 * 封装post请求
 *
 */
export function Post(url ,data) {
    return new Promise((resolve, reject) =>{
        axios.post(url, {
            data: data
        }).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    }  )
}

/**
 * 封装put请求
 */
export function Put(url ,data) {
    return new Promise((resolve, reject) =>{
        axios.put(url,{
            data:data
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    } )
}

/**
 * 封装Delete请求
 */
export function Delete(url ,data) {
    return new Promise((resolve, reject) =>{
        axios.put(url,{
            data:data
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    } )
}
