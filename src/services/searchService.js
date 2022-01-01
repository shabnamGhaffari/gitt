import config from './config.json';
import http from './httpServices';

export const searchProduct=(searchItem)=>{
    return http.post(`${config.api}/products`,JSON.stringify(searchItem));
}