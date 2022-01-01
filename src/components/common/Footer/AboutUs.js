import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import useStyle from "./style";
import {getAboutUs} from "../../../services/footer";

const AboutUs = () => {
    const classes=useStyle();
    const [about,setAbout]=useState([]);
    useEffect(async()=>{
        const {data}= await getAboutUs();
        if(data)
        setAbout(data);
    },[])
    return (
        <Grid container item className={classes.aboutContainer}>
            <h6>درباره ما</h6>
            <p style={{fontSize:'14px',lineHeight:'1.5rem'}} className={"text-justify rtl"}>{about}</p>
        </Grid>
    );
};

export default AboutUs;