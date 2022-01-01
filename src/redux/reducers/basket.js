export const basketReducer=(state=0,action)=>{
    switch(action.type) {
        case 'ADD_BASKET':
            return state = state+1;
        case 'RED_BASKET':
            return state = state-1;
        default:
            return state;
    }
}