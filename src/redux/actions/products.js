import {gotProduct} from "../../services/productsService";

export const getProductList=()=>{
    return async(dispatch)=>{
        const {data}=await gotProduct();
      dispatch({type:'GET_PRODUCTS',payload:[...data]})
    }
}