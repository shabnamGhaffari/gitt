import React from 'react';
import useStyles from "../style";
import {Link} from "react-router-dom";
import clsx from "clsx";

const Logo = () => {
    const classes=useStyles();
    return (
       <Link to={"/"}> <img src="/images/logo.png" alt="" className={clsx(classes.logoImage,"d-none d-lg-block")}/></Link>
    );
};

export default Logo;