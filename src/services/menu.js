import config from './config.json';
import http from './httpServices';


export const getMenuItem=()=>{
    return http.get(`${config.api}/menu`);
}