import React from 'react';
import useStyle from "./style";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import clsx from "clsx";
const Social = () => {
    const classes=useStyle()
    return (
        <Grid container item className={classes.socialSubContainer}>
            <Link to={"/facebook"} className={clsx(classes.socialItem,"socialItem")}>
                <FacebookIcon style={{fontSize:'50px',color: '#fff'}}/>
            </Link>
            <Link to={"/twitter"} className={classes.socialItem}>
                < TwitterIcon style={{fontSize:'50px',color: '#fff'}}/>
            </Link>
            <Link to={"/instagram"} className={classes.socialItem}>
                <InstagramIcon style={{fontSize:'50px',color: '#fff'}}/>
            </Link>
            <Link to={"/LinkedIn"} className={classes.socialItem}>
                <LinkedInIcon style={{fontSize:'50px',color: '#fff'}}/>
            </Link>
            <Link to={"/YouTube"} className={classes.socialItem}>
                <YouTubeIcon style={{fontSize:'50px',color: '#fff'}}/>
            </Link>
        </Grid>
    );
};

export default Social;