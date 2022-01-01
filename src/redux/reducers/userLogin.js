export const loginUserReducer=(state={},action)=>{
    switch(action.payload){
        case'ADD_USER':
            return {...action.payload}
        default:
            return state;
    }
}