import config from './config.json';
import http from './httpServices';
export const gotProduct=()=>{
    return http.get(`${config.api}/products`);
}

//for add to basket

export const sendToBasket=(product)=>{
    return http.post(`${config.api}/basket`,JSON.stringify(product));
}

//get data from basket(db.json)

export const getDataFromBasket=()=>{
    return http.get(`${config.api}/basket`);
}