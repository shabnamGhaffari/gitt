export const loginDialogReducer=(state=false,action)=>{
    switch(action.type){
        case 'SHOW_DIALOG':
            return state=action.payload;
        case 'HIDE_DIALOG':
            return state=action.payload;
        default:
            return state;
    }
}