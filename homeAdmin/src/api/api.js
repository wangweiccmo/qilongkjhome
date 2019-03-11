import axios from 'axios';
import {getLocal} from './local'
// host
export const HOST = "";
// 请求中心
export const $http = {
    post:(url,params,context)=>{
        context.isLoading = true;
        return new Promise((resolve) => {
            axios({
                method: 'post',
                headers:{
                    'Authorization': 'Bearer ' + getLocal("token"),
                },
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
        return axios({
            method: 'get',
            url:url,
            params: params
        }).catch((error) => {
            onError(error,context);
        })
    },
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

