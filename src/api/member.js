import request from "@/utils/request"
import qs from 'qs'

export default({
    // getList(){
    //     return request({
    //         url:"/api/member",
    //         method:"get",
    //     })
    // },
    search(page,size,searchMap){
        return request({
            url:"/api/member",
            method:"post",
            data:qs.stringify({
                page,size,searchMap
            })
        })

    }
})