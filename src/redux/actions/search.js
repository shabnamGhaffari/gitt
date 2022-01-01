
export const getSearch=(e)=>{
    return async(dispatch)=>{
       dispatch({type:'SET_SEARCH',payload:e.target.value})
    }
}
export const clearSearch=()=>{
    return async (dispatch)=>{

        dispatch({type:'CLEAR_SEARCH',payload:""})
    }
}