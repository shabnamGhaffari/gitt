import config from './config.json';
import http from './httpServices';

export const getLinks=()=> {
    return http.get(`${config.api}/links`);


}
export const getAboutUs=()=>{
        return http.get(`${config.api}/aboutUs`);
    }