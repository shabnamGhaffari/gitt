import {combineReducers} from "redux";
import {searchReducer} from "./searchReducer";
import {loginDialogReducer} from "./loginDialog";
import {loginUserReducer} from "./userLogin";
import {basketReducer} from "./basket";
import {productsReducer} from "./products";
import {basketPageReducer} from "./basketPage";
import {counterReducer} from "./CounterReducer";

export const reducers=combineReducers({
    search:searchReducer,
    login:loginDialogReducer,
    user:loginUserReducer,
    basket:basketReducer,
    products:productsReducer,
    basketPage:basketPageReducer,
    counter:counterReducer

})





