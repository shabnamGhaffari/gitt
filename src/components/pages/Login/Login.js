import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {context} from "../../../context/context";
import useStyles from "./style";

const Login = () => {
    const loginContext=useContext(context);
    const{email,setEmail,password,setPassword,validator,handleLogin}=loginContext;
    const[remember,setRemember]=useState();
    const classes=useStyles();
    return (
        <div className={classes.loginDialog}>
            <form  onSubmit={handleLogin}>
                <div className={"input-group"}>
                    <input type="text" className={"form-control rtl"} placeholder={"شماره همراه یا ایمیل"}
                           name="email"
                           value={email}
                           onChange={(e)=>{
                               setEmail(e.target.value);
                               validator.current.showMessageFor("email")
                           }}/>
                    {validator.current.message("email",email,"required|email")}
                    <div className={"input-group-prepend"}>
                         <span className={"input-group-text"}>
                             <i className="fa fa-user" ></i>
                         </span>
                    </div>
                </div>
                <div className={"input-group"}>
                    <input type="password" className={"form-control rtl"} placeholder={"رمز عبور"}
                           name={"password"} value={password} onChange={e=>{
                        setPassword(e.target.value);
                        validator.current.showMessageFor("password")
                    }}/>
                    {validator.current.message("password",password,"required|min:5")}
                    <div className={"input-group-prepend"}>
                         <span className={"input-group-text"}>
                             <i className="fa fa-lock" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="form-check rtl py-1 ">

                    <input className="form-check-input mr-0 " type="checkbox" name="remember"
                           value={remember} onChange={e=>{
                        setRemember(e.currentTarget.checked)
                    }}
                           id="flexCheckDefault"/>
                    <label className="form-check-label " htmlFor="flexCheckDefault">
                        مرا به خاطر بسپار
                    </label>

                </div>
                <Link to={"/"} className={classes.forget}>رمز عبور خود را فراموش کرده ام</Link>
                <div  className={"btn btn-block btn-success"}
                      onClick={handleLogin}
                >ورود</div>
            </form>
        </div>
    );
};

export default Login;