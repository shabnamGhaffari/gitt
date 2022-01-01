import axios from 'axios';
import {toast} from "react-toastify";

axios.defaults.headers.post["content-type"]="application/json";

const token=localStorage.getItem("token");
if(token){
    axios.defaults.headers.common["Authorization"]=`Bearer${token}`;
}
axios.interceptors.response.use(null,error=>{
    const expectedError=error.response && error.response.status>=400 && error.response.status<500;
    if(!expectedError){
        toast.error("مشکلی از سمت سرور رخ داده است");
    }
    else{
        return Promise.reject(error);
    }
})


export default {
    post:axios.post,
    get:axios.get,
    delete:axios.delete,
    put:axios.put
}
