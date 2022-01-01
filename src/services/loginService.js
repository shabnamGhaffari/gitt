import http from './httpServices';
import config from './config.json';

export const loginUser=user=>{
    return http.post(`${config.api}/login`,JSON.stringify(user));
}