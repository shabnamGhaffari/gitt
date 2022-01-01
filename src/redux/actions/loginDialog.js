export const showLogin=()=>{
    return async (dispatch,getState)=>{
    dispatch({type:'SHOW_DIALOG',payload:true});


    }
}

export const hideDialog=()=>{
    return async (dispatch)=>{
        dispatch({type:'HIDE_DIALOG',payload:false})

    }
}