import axios from 'axios'
import qs from 'qs'

const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    headers:{
        'Content-type': 'application/x-www-form-urlencoded '
    },
    timeout:5000
})

export default request