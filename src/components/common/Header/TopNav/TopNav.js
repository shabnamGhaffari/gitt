import React, {useState} from 'react';
import clsx from "clsx";
import useStyles from "../style";
import { Link } from 'react-router-dom';
import {Grid} from "@mui/material";
import {Button} from "react-bootstrap";
import SearchInput from "./searchInput";
import {showLogin} from "../../../../redux/actions/loginDialog";
import {useDispatch, useSelector} from "react-redux";
import LoginDialog from "./loginDialog";
import TopNavContext from "../../../../context/TopNavContext";
import ResponsiveMenu from "../Menu/ResponsiveMenu/ResponsiveMenu";

const HeaderLayout = () => {
    const classes=useStyles();
    const[showSearchBar,setShowSearchBar]=useState(false);
    const[MenuOpen,setMenuOpen]=useState(false);
    const basket=useSelector(state=>state.basket);
    const dispatch=useDispatch();
    const handleShowSearchBar=()=>{
        setShowSearchBar(!showSearchBar);
    }
    const open=()=>{
        dispatch(showLogin());
    }
    const toggleMenu=()=>{
        setMenuOpen(!MenuOpen);
    }
    return (
        <div className={clsx("rtl",classes.root)}>
           <div className={"container"}>
               <div className={"row"}>
                   <Grid container className={classes.rootContainer}>
                        <div className={"col-lg-4 col-md-6 col-sm-8"}>
                            <Grid container className={classes.container}>
                                <i className={"fa fa-bars d-lg-none d-md-flex"} aria-hidden="true" id="outer-container" onClick={toggleMenu}>
                                    <ResponsiveMenu menuOpen={MenuOpen}/>
                                </i>
                                <Link className={classes.basketLink} to={"/basket"}><span style={{color:'#037C70'}}>{basket===0?(null):(basket)}</span><i className={clsx("fa fa-shopping-cart",classes.shopIcon)} aria-hidden="true"></i></Link>
                                <div style={{position:'relative'}}>
                                    <div  onClick={handleShowSearchBar}><i className={clsx("fa fa-search",classes.searchIcon)} aria-hidden="true"></i>
                                    </div>
                                    <div className={clsx(classes.searchInput,"searchInput")}>
                                        {showSearchBar?(<SearchInput/>):null}
                                    </div>
                                </div>
                                <div className={classes.loginBtn} onClick={open}>ورود/عضویت</div>
                               <TopNavContext> <LoginDialog /></TopNavContext>
                                <Link to={"/contactUs"}>
                                    <Button className={classes.contactUs}>تماس با ما</Button>
                                </Link>
                            </Grid>
                        </div>
                       <div className={"col-lg-2 col-md-3 d-none d-lg-flex"}>
                           <Grid container item className={classes.callContainer}>
                               <i style={{fontSize:'18px'}} className="fa fa-phone" aria-hidden="true"></i>
                               <div>02122222222</div>
                           </Grid>
                       </div>
                   </Grid>

               </div>
           </div>
        </div>
    );
};

export default HeaderLayout;