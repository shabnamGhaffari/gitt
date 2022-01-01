import React, {useContext, useRef, useState} from 'react';
import {context} from "./context";
import SimpleReactValidator from "simple-react-validator";
import {registerUser} from "../services/register";
import {toast} from "react-toastify";
import {loginUser} from "../services/loginService";
import jwt from "jsonwebtoken";
import {addUser} from "../redux/actions/loginUser";
import {useDispatch} from "react-redux";
import {withRouter} from "react-router";
const TopNavContext = ({children,history}) => {
    const dispatch=useDispatch();
    const validator=useRef(new SimpleReactValidator({
        messages:{
            required:"لطفا فیلد مورد نظر را پر نمایید!",
            min:'حداقل 5 کاراکتر لازم است',
            in:"پسوردها مشابه نیستند",
            email:"ایمیل وارد شده صحیح نیست",
        }
        ,
        element:message=><div style={{position:'absolute',color:'red',fontSize:'11px',bottom:0,direction:'rtl'}}>{message}</div>
    }));
    const[fullname,setFullname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confPassword,setConfPassword]=useState('');
    const[,setForceUpdate]=useState();
    const reset=()=>{
        setFullname("");
        setPassword("");
        setEmail("");
        setConfPassword("");
    }
    const handleLogin= async (e)=>{
        e.preventDefault();
        const user={
            email,
            password

        }

        try{
            if(validator.current.allValid())
            {
                const{data,status}= await loginUser(user);
                if(status===201){
                    toast.success("شما با موفقیت وارد شدید");
                    localStorage.setItem("token",data.token);
                    const decodedToken=jwt.decode("token,{complete:true}");
                    dispatch(addUser(decodedToken.payload.user));
                    history.replace("/");
                    reset();
                }
                else{
                    toast.warn("مشکلی در ورود پیش آمده است");
                }

            }
            else
            {

                validator.current.showMessages();
                setForceUpdate(1);
            }

        }
        catch(ex){
            console.log(ex);
        }


    }
    const handleRegister=async(e)=>{
        e.preventDefault();
        const user={
            fullname,
            email,
            password
        }
        try{
            if(validator.current.allValid()){
                const{status} = await registerUser(user);
                if(status===201){
                    toast.success("ثبت نام با موفقیت انجام شد");
                    history.push("/login");

                }
            }
            else{

                validator.current.showMessages();
                setForceUpdate(1);
            }
        }

        catch(ex){
            console.log(ex);
            toast.error("مشکلی در ثبت نام رخ داده است");
        }


    }
    return (
        <context.Provider value={{
            validator,
            fullname,
            setFullname,
            email,
            setEmail,
            password,
            confPassword,
            setConfPassword,
            setPassword,
            handleRegister,
            handleLogin

        }}>
            {children}
        </context.Provider>
    );
};

export default withRouter(TopNavContext);