import config from './config.json';
import http from './httpServices';

export const getServices=()=>{
    return http.get(`${config.api}/services`);
}