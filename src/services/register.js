import config from './config.json';
import http from './httpServices';

export const registerUser=user=>{
    return http.post(`${config.api}/register`,JSON.stringify(user));
}
