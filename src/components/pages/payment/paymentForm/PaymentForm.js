import React, {useRef, useState} from 'react';
import clsx from "clsx";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {withRouter} from "react-router";
import  useStyles from '../style';
import Keypad from "../Keypad";
import ClientCaptcha from "react-client-captcha";
const PaymentForm = ({history}) => {
    const classes=useStyles();
    const validator=useRef(new SimpleReactValidator(
        {
            element:message=><div style={{position:'absolute',top:'50px',fontSize:'10px',color:'red'}}>{message}</div>,
            messages:{
                required:"لطفا فیلد مورد نظر را پر کنید",
                integer:"از اعداد برای پر کردن این فیلد استفاده کنید",
                numeric:"از اعداد برای پر کردن این فیلد استفاده کنید",
                card_num:"شماره کارت وارد شده معتبر نیست",
                card_exp:"تاریخ انقضا معتبر نیست",
                max:"حداکثر 4 کاراکتر می توانید وارد کنید",
                size:"تعداد نادرست است",
                in:"کد امنیتی را درست وارد کنید"


            }

        }
    ));
    const[,forceUpdate]=useState();
    const[cardNumber,setCardNumber]=useState("");
    const[credit,setCredit]=useState([]);
    const[exp,setExp]=useState("");
    const[captcha,setCaptcha]=useState('');
    const[password,setPassword]=useState("");
    const[getCaptcha,setGetCaptcha]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validator.current.allValid()){
            toast.success("پرداخت با موفقیت انجام شد");
            history.replace("/");

        }
        else{
            validator.current.showMessages();
            forceUpdate(1);
        }
    }
    const[display,setDisplay]=useState('none');
    const showKeyboard=()=>{
        setDisplay("block");
    };

    let keyboard=[0,1,2,3,4,5,6,7,8,9];
    keyboard.sort(()=>0.5-Math.random());

    const handleButtons=(e)=>{
        // setCredit([]);
        const data=e.target.outerText;
        console.log(data);
        credit.push(data);
        const m=credit.join("");
        setCredit([m]);
        console.log(credit);


    }
    const handleCaptcha=(e)=>{
            setGetCaptcha(e);

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className={"input-group pb-3"}>
                <label className={"col-lg-3 col-md-4"}> شماره کارت:</label>
                <div className={"col-lg-9 col-md-8"}>
                    <input type="text" className={"form-control col-12"} minLength={16} maxLength={16} name={"cardNumber"} value={cardNumber}
                           onChange={e=>{
                               setCardNumber(e.target.value);
                               validator.current.showMessageFor("cardNumber");
                           }}
                    />
                    {validator.current.message("cardNumber",cardNumber,"required|card_num")}
                </div>
            </div>
            <div className={"input-group mt-3 pb-3"}>
                <label className={"col-lg-3 col-md-4"}>کد CVV2: </label>
                <div className={" col-lg-9 col-md-8"}>
                    <input type="text"  className={"form-control"} name={"credit"} value={credit}  maxLength={4}
                           onChange={(e)=>{
                                    setCredit([e.target.value]);
                               validator.current.showMessageFor("credit")
                           }}
                    />
                    <img src="/images/keypad.png" alt="" className={classes.keypad} onClick={showKeyboard}/>
                    <div style={{display:`${display}`}} className={classes.keyboardContainer}>
                       <Keypad handleButtons={handleButtons}/>
                        <button className={"btn btn-success btn-sm"} onClick={e=>{setDisplay('none');e.preventDefault();}}><i className="fa fa-check" aria-hidden="true" style={{fontSize:'10px'}}></i></button>
                        <button className={"btn btn-sm btn-danger"} onClick={e=>{setDisplay('none');e.preventDefault();}}><i className="fa fa-times" aria-hidden="true"  style={{fontSize:'10px'}}></i></button>

                    </div>
                    {validator.current.message("credit",credit,"required|max:4")}
                </div>
            </div>
            <div className={"input-group mt-3 pb-3"}>
                <label className={"col-lg-3 col-md-4"}>انقضا کارت:</label>
                <div className={" col-lg-9 col-md-8 form-inline"}>
                    <input type="text" className={"form-control col-12"} placeholder={"ماه/سال"} name={"exp"} value={exp}
                           onChange={e=>{setExp(e.target.value);
                               validator.current.showMessageFor("exp");
                           }}/>
                    {validator.current.message("exp",exp,"required|card_exp")}
                </div>
            </div>
            <div className={"input-group mt-3 pb-3"}>
                <label className={"col-lg-3 col-md-4"}>کد امنیتی</label>
                <div className={"col-lg-9 col-md-8 form-inline"}>
                    <input type="text" pattern="\d*" className={"form-control col-lg-7 col-sm-3 col-md-4 col-5"} name={"captcha"} value={captcha}
                           onChange={e=>{
                               setCaptcha(e.target.value);
                               validator.current.showMessageFor("captcha");
                           }}
                    />
                    {validator.current.message("captcha",captcha,`required|in:${getCaptcha}`)}
                    <div className={"col-lg-5 col-sm-9 col-md-8 col-7"}>
                        <ClientCaptcha captchaCode={code => console.log(code)} captchaCode={handleCaptcha} retryIconSize={20}/>
                    </div>
                </div>
            </div>
            <div className={"input-group mt-3 pb-3"}>
                <label className={"col-lg-3 col-md-4 "}>رمز اینترنتی(دوم)</label>
                <div className={"col-lg-9 col-md-8 form-inline"}>
                    <input type="text" pattern="\d*" className={"form-control col-sm-6 col-6"}name={"password"}
                           value={password} onChange={e=>{
                        setPassword(e.target.value);
                        validator.current.showMessageFor("password");
                    }}
                    />
                    {validator.current.message("password",password,"required")}
                    <button className={clsx("btn btn-success col-sm-6 col-6 respbtn",classes.respbtn)}>دریافت رمز پویا</button>
                </div>
            </div>
            <div className={"input-group mt-3"}>
                <label className={"col-lg-3 col-md-4"}>ایمیل(اختیاری)</label>
                <div className={"col-lg-9 col-md-8"}>
                    <input type="email" className={"form-control "}/>
                </div>
            </div>
            <div  className={"mt-3 col-12 text-center"}>
                <button className={clsx("btn btn-success col-6 ",classes.submitBtn)} onClick={handleSubmit}>پرداخت</button>
                <button className={clsx("btn btn-danger col-6 " ,classes.cancelBtn)}>انصراف</button>
            </div>
        </form>
    );
};

export default withRouter(PaymentForm);