import config from './config.json';
import http from './httpServices';

export const getBrands=()=>{
    return http.get(`${config.api}/brandImages`);
}