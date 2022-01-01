import React, {useRef, useState} from 'react';
import useStyles from "./style"
import clsx from "clsx";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import Countdown from "react-countdown";
import {Redirect, withRouter} from "react-router";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import 'react-touch-screen-keyboard/lib/Keyboard.css';
import PaymentForm from "./paymentForm/PaymentForm";
const Payment = () => {
    const classes=useStyles();
    const counter=useSelector(state=>state.counter);

    const Completionist = () => {<span>زمان این خرید به اتمام رسیده است!</span>
    // history.replace("/basket")
    };
    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };

    return (
        <>

        <div className={clsx(classes.topBar,)}>
            <p className={"text-center py-2 my-0 text-light"}>درگاه پرداخت الکترونیکی شرکت پرداخت الکترونیک سداد</p>
        </div>
            <div className={classes.mainContent}>
                <div className={"container rtl"}>
                    <Grid container item className={clsx(classes.paymentContainer,"mx-auto flex-column")}>
                        <Grid container item>
                             <Grid container item className={classes.titleContainer}>
                                 <Grid className={classes.title}>اطلاعات کارت شما</Grid>
                                 <Grid className={classes.time}>
                                     زمان باقیمانده:

                                         <Countdown date={Date.now() + 900000 } renderer={renderer}/>

                                 </Grid>
                                 <Grid container item className={clsx("my-4",classes.formContainer)}>

                                    <PaymentForm/>
                                 </Grid>
                             </Grid>
                            <Grid container item className={clsx(classes.information,"flex-column information")}>
                                <p>مبلغ تراکنش(ریال)</p>
                                <p>شماره پذیرنده</p>
                                <p>َشماره ترمینال</p>
                                <p>آدرس وبسایت پذیرنده</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <h5 className={"py-4"}>راهنمای درگاه پرداخت</h5>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </div>
        </>
    );
};

export default Payment;