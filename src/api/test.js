// import request from "../utils/request.js"

const BASE_URL=""

// request.get(BASE_URL+"/db.json").then(resulf => {
//     console.log(resulf.data);
// }).catch(error => {
//     console.log(error);
// });

// @ 代表的是 /src
// import axios from '@/utils/request'
import request from "@/utils/request";
// 测试1 调用get方式发送get请求
request.get(BASE_URL + "/api/login").then(response => {
    console.log("get1", response.data);
    console.log(response)
    }).catch(error => {
    console.log(error);
});


request({
    url:BASE_URL+"/db.json",
    method:"get",
}).then(resulf => {
    console.log("get2",resulf.data)
}).catch(erro => {
    console.log(erro)
})

export default({
    getlist(){
        const req = request({
            url:BASE_URL+"/db.json",
            method:"get",
        })
        return req
    }
})