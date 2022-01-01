export const counterReducer=(state=false,action)=>{
    switch(action.type) {
        case 'START':
            return state = true;
        default:
            return state;

}  }
