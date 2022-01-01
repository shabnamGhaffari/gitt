import React, {useContext, useRef, useState} from 'react';
import {DialogOverlay,DialogContent} from "@reach/dialog";
import {useDispatch, useSelector} from "react-redux";
import {hideDialog} from "../../../../redux/actions/loginDialog";
import {Link} from 'react-router-dom';
import useStyles from "../style";
import {context} from "../../../../context/context";
import clsx from "clsx";
const LoginDialog = () => {
    const loginContext=useContext(context);
    const{email,setEmail,password,setPassword,validator,handleLogin}=loginContext;
    const classes=useStyles();
    const[remember,setRemember]=useState();
    const showDialog=useSelector(state=>state.login);
    const dispatch=useDispatch();
    const close=()=>{
        dispatch(hideDialog());
    }
    return (
      <DialogOverlay isOpen={showDialog} onDismiss={close} className={clsx(classes.loginDialog,"loginDialog")}>
          <DialogContent>
              <div className={"d-flex justify-content-between bg-light px-3 py-2"}>
                  <div style={{cursor:'pointer'}} onClick={close}>x</div>
                  <h4>ورود به حساب کاربری</h4>
              </div>
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
                  <button className={"btn btn-block btn-danger"}>
                      <Link to={"/register"} style={{color:'unset',textDecoration:'none'}} onClick={close}>اگر هنوز ثبت نام نکرده اید ثبت نام کنید</Link>
                  </button>
              </form>
          </DialogContent>
      </DialogOverlay>
    );
};

export default LoginDialog;