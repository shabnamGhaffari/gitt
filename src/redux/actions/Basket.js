
export const addToBasket=()=>{
    return async (dispatch)=>{
        await dispatch({type:'ADD_BASKET'})
    }
}
export const reduceFromBasket=()=>{
    return async (dispatch)=>{
        await dispatch({type:'RED_BASKET'})
    }
}
export const getBasket=productId=>{
    return async(dispatch,getState)=>{
    const newProduct=[...getState().products];
    const founded=newProduct.findIndex(item=>item.id===productId);
    const myProduct=newProduct[founded];
    const basketArray=[...getState().basketPage];
    basketArray.push(myProduct);

        await dispatch({type:'SHOW_BASKET',payload:[...basketArray]})

    }
}

export const deleteFromBasket=(productId)=>{
    return async(dispatch,getState)=>{
        const newBasket=getState().basketPage
         const foundedIndex=newBasket.findIndex(item=>item.id===productId);
        newBasket.splice(foundedIndex,1);
         await dispatch({type:'DELETE_BASKET',payload:[...getState().basketPage]})

    }
}