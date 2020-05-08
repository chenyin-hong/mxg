import request from "@/utils/request"
import qs from "qs"

export function login(telephone,password){
    // let postData = qs.stringify({
    //     telephone,　　　 
    //     password
    //   });
     
    let param = new URLSearchParams()
    param.append('telephone', telephone)
    param.append('password', password)

    console.log(telephone)
    return request({
        url:"api/login",
        method:"post",
        data:param,
    })
}