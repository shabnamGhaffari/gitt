import React, {useEffect, useState} from 'react';
import {getServices} from "../../services/services";
import {Grid} from "@mui/material";
import useStyle from "./style";
import clsx from "clsx";

const Services = () => {
    const classes=useStyle();
    const [services,setServices]=useState([]);
    useEffect(async()=>{
   const {data}=await getServices();
   setServices(data);
    },[])
    return (
        <div className={"container"} style={{marginTop:'5rem'}}>
            <Grid container className={ "justify-content-between align-items-center"}>
            {services.map(service=>
                <Grid container item className={clsx(classes.serviceContainer,"serviceContainer")}>
                    <img src={service.image} alt="" style={{width:'100%'}}/>
                    <h6 className={classes.serviceTitle}>{service.title}</h6>
                    <p className={classes.serviceText}>{service.text}</p>
                </Grid>
            )}
            </Grid>
        </div>
    );
};

export default Services;