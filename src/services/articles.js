import config from './config.json';
import http from './httpServices';

export const getArticles=()=>{
    return http.get(`${config.api}/articles`);
}