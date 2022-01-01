import {compose, createStore} from "redux";
import {reducers} from "../reducers/reducers";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getProductList} from "../actions/products";


export const store=createStore(reducers,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.dispatch(getProductList());
store.subscribe(()=>console.log(store.getState));
