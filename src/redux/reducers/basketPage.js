export const basketPageReducer=(state=[],action)=>{
switch(action.type){
case 'SHOW_BASKET':
    return state = [...action.payload];
    case 'DELETE_BASKET':
        return state = [...action.payload];
    default:
        return state;
}
}