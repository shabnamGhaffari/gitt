import React, {useEffect} from 'react';
import PublicLayout from "../Layouts/PublicLayout";
import {Switch} from 'react-router-dom';
import {Route} from "react-router";
import Products from "../pages/Products/Products";
import jwt from 'jsonwebtoken';
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../redux/actions/loginUser";
import Register from "../pages/register/Register";
import TopNavContext from "../../context/TopNavContext";
import Home from "../Home/Home";
import Basket from "../pages/Basket/Basket";
import Payment from "../pages/payment/Payment";
import Login from "../pages/Login/Login";
const MainContainer = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        // const token=localStorage.getItem("token");
        // if(token){
        //     const decodedToken=jwt.decode(token,{complete:true});
        //     const dateNow=Date.now()/1000;
        //     if(decodedToken.payload){
        //     if(decodedToken.payload.exp <dateNow){
        //         localStorage.removeItem("token")
        //     }
        //     else{
        //         dispatch(addUser(decodedToken.payload.user));
        //
        //     }
        //     }
        // }
    })
    return (
        <Switch>
            <Route exact  path={["/products","/register","/basket","/login","/"]}>
                <PublicLayout>
                    <Switch>
                        <Route exact path={"/products"} component={Products}/>
                        <Route exact path={"/register"} render={()=><TopNavContext><Register/></TopNavContext>}/>
                        <Route exact path={"/login"} render={()=><TopNavContext><Login/></TopNavContext>}/>
                        <Route exact path={"/basket"} component={Basket}/>
                        <Route exact path={"/"} component={Home}/>
                    </Switch>
                </PublicLayout>
            </Route>
            <Route  path={["/payment"]}>
                <Switch>
                    <Route path={"/payment"} component={Payment}/>
                </Switch>
            </Route>
        </Switch>
    );
};

export default MainContainer;