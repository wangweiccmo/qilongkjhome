import axios from 'axios';
import {getLocal} from './local'
// host
export const HOST = "http://localhost:8090/jx";
// 静态资源服务器
export const STATIC_HOST = "http://localhost:8090";
// 请求中心
export const $http = {
    post:(url,params,context)=>{
        params = createParams(params);
        context.isLoading = true;
        return new Promise((resolve) => {
            axios({
                method: 'post',
                url:url,
                data: params
            }).then((res)=>{
                context.isLoading = false;
                if(res.data.code == 0){
                    resolve(res.data);
                }else{
                    onSeverError(res.data,context);
                }
            }).catch((error) => {
                context.isLoading = false;
                onError(error,context);
            })
        })

    },
    get:(url,params,context)=>{
        params = createParams(params);
        return axios({
            method: 'get',
            url:url,
            params: params
        }).catch((error) => {
            onError(error,context);
        })
    },
};

// params 参数处理
const createParams = (params)=>{
    let token = getLocal("token");
    if(!params){
        params = {};
    }
    if(token){
        params.token = token;
    }
    return params;
};

// onError 错误处理
const onSeverError = (rep,context)=>{
    let showMsg = `[${rep.code}]:${rep.msg}`;
    if(context){
        context.$message.error(showMsg)
    }else{
        alert(showMsg);
    }
};

// onError 错误处理
const onError = (error,context)=>{
    if(context){
        context.$message.error('服务器错误，请稍后再试!')
    }else{
        alert('服务器错误，请稍后再试!');
    }
};

