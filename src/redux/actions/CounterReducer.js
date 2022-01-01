export const startCounter=()=>{
    return async (dispatch)=>{
        await dispatch({type:'START'})
    }
}