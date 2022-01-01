import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getMenuItem} from "../../../../services/menu";
import {Grid} from "@mui/material";
import useStyles from "./style";
import clsx from "clsx";


const Menu = () => {
    const classes=useStyles();
    const [menus,setMenus]=useState([]);
    const [display,setDisplay]=useState('none');


useEffect(async()=>{
    const {data}= await getMenuItem();
   setMenus(data);
},[])
    return (
        <Grid className={"justify-content-center d-none d-lg-flex"}>
           <nav className={"navbar navbar-expand-md rtl "}>
               <ul className={"nav navbar-nav mx-auto"} >
                   {menus.map(menuItem=>
                       <li className={"nav-item text-center dropdown"}>
                           <div   data-toggle="dropdown" className={clsx("nav-link dropdown-toggle",classes.menuLink)}
                                >{menuItem.menu}</div>
                           <ul className={clsx("dropdown-menu",classes.subMenu) }>
                               {menuItem.subMenu.map(item =>
                                   <li className={classes.subMenuItem}>
                                       <Link to={"/"}className={classes.subMenuLink}>{item}</Link>
                                   </li>)
                               }
                           </ul>
                       </li>)}
               </ul>
           </nav>
        </Grid>
    );
};

export default Menu;