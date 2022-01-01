import React, {useContext, useRef, useState} from 'react';

import {Grid} from "@mui/material";

import {context} from "../../../context/context";
const Register = () => {
  const registerContext=useContext(context);

const {fullname,setFullname,email,setEmail,password,setPassword,confPassword,setConfPassword,validator,handleRegister}=registerContext;


    return (
        <Grid container className={"justify-content-center"}>
            <form action="" onSubmit={handleRegister}>
                <div className={"input-group"}>
                    <input type="text" className={"form-control rtl"} placeholder={"نام خود را وارد نمایید"}
                           name="fullname"
                           value={fullname}
                           onChange={e=>{
                               setFullname(e.target.value);
                               validator.current.showMessageFor("fullname")
                           }}/>
                    {validator.current.message("fullname",fullname,"required")}
                    <div className={"input-group-prepend"}>
                         <span className={"input-group-text"}>
                             <i className="fa fa-user" ></i>
                         </span>
                    </div>
                </div>
                <div className={"input-group"}>
                    <input type="text" className={"form-control rtl"} placeholder={ "ایمیل"}
                           name="email"
                           value={email}
                           onChange={e=>{
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
                <div className={"input-group"}>
                    <input type="password" className={"form-control rtl"} placeholder={"تکرار رمز عبور"}
                           name={"confPassword"} value={confPassword} onChange={e=>{
                        setConfPassword(e.target.value);
                        validator.current.showMessageFor("confPassword")
                    }}/>
                    {validator.current.message("confPassword",confPassword,`required|in:${password}`)}
                    <div className={"input-group-prepend"}>
                         <span className={"input-group-text"}>
                             <i className="fa fa-lock" aria-hidden="true"></i></span>
                    </div>
                </div>
                <button onClick={handleRegister} className={"btn btn-success btn-block"}>ثبت نام</button>
            </form>
        </Grid>
    );
};

export default Register;