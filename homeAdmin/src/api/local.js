// 取得
export const getLocal = (key,type)=>{
    if(!window.localStorage){
        alert("浏览器不支持localstorage！");
        return false;
    }
    if(key){
        const locStr = localStorage.getItem(key);
        if(!locStr)return locStr;
        switch (type) {
            case "object":
                return JSON.parse(locStr);
            default:
                return locStr;
        }

    }
}
// 设置
export const setLocal = (key,data)=>{
    if(!window.localStorage){
        alert("浏览器不支持localstorage！");
        return false;
    }
    if(key){
        let type = typeof data;
        switch (type) {
            case "object":
                localStorage.setItem(key,JSON.stringify(data));
                break;
            default:
                localStorage.setItem(key,data);
        }
    }
}

// 清空
export const clear = ()=>{
    if(!window.localStorage){
        alert("浏览器不支持localstorage！");
        return false;
    }
    localStorage.clear();
}


export const rmLocal = (key)=>{
    if(!window.localStorage){
        alert("浏览器不支持localstorage！");
        return false;
    }
    if(key){
        localStorage.removeItem(key);
    }
}