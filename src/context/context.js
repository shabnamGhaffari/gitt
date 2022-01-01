import {createContext} from "react";


export const context=createContext({
    fullname:'',
    setFullname:()=>{},
    email:'',
    setEmail:()=>{},
    password:'',
    setPassword:()=>{},
    confPassword:'',
    setConfPassword:()=>{},
    handleRegister:()=>{},
    handleLogin:()=>{},
    validator:null,



})