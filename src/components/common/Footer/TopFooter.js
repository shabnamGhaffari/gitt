import React, {useEffect, useState} from 'react';
import useStyle from "./style";
import {Grid} from "@mui/material";
import {getLinks} from "../../../services/footer";
import {Link} from "react-router-dom";
import clsx from "clsx";
import AboutUs from "./AboutUs";
import Social from "./Social";
import BottomFooter from "./BottomFooter";

const TopFooter = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const [links,setLinks]=useState([]);
    useEffect(async()=>{
        const {data}=await getLinks();
        setLinks(data);
    },[])
    const classes=useStyle();
    return (
        <div className={classes.footerContainer}>
            <div className={"container"}>
                <Grid container className={classes.topBarContainer}>
                    <Grid container item className={clsx(classes.linkContainer,"linkContainer")}>
                        {links.map(link=>
                        <Link to={"/"} className={clsx(classes.linkItem,"linkItem")}>{link}</Link>
                        )}
                    </Grid>
                    <Grid container item className={clsx(classes.newsContainer,"newsContainer")}>
                        <p style={{flex:1,color:'#fff',textAlign:'center'}}>با عضویت در خبرنامه از جدیدترین اخبار مطلع شوید</p>
                        <form action="" onSubmit={handleSubmit} style={{flex:1,justifyContent:'space-between'}}>
                            <div className={clsx("input-group",classes.footerInput)} >
                                <input type="email" placeholder={"ایمیل خود را وارد نمایید"} className={clsx("form-control",classes.email)}/>
                                <button type={"submit"} className={clsx("btn",classes.submitBtn)}>ثبت نام</button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
                <AboutUs/>
                <Social/>
            </div>
            <BottomFooter/>
        </div>
    );
};

export default TopFooter;