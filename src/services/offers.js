import config from './config.json';
import http from './httpServices';

export const getOffers=()=>{
    return http.get(`${config.api}/offers`);
}