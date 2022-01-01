import {loginUser} from "../../services/loginService";

export const addUser=(user)=>{
return async (dispatch)=>{
   const{data}= await loginUser(user);

    dispatch({type:'ADD_USER',payload:data.payload.user})
}
}