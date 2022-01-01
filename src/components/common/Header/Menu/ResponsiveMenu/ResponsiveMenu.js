import React, {useEffect, useState} from 'react';
import { slide as Menu } from 'react-burger-menu'
import {getMenuItem} from "../../../../../services/menu";
import clsx from "clsx";
import {Link} from "react-router-dom";
import useStyles from "./style";

const ResponsiveMenu = ({menuOpen}) => {
    const classes=useStyles();
    const [menus,setMenus]=useState([]);
    useEffect(async()=>{
        const {data}= await getMenuItem();
        setMenus(data);
    },[])
    const styles={
        bmOverlay:{
            right:0,
            background: 'rgba(0, 0, 0, 0.7)',
            top:'3.4rem'
    },
        bmMenuWrap:{
            top:'3.6rem'
        }
    }
    return (
        <Menu right styles={styles} customBurgerIcon={ false } isOpen={menuOpen} disableAutoFocus>
            {menus.map(menuItem=>
                <div className={"nav-item text-center dropdown"}>
                    <div   data-toggle="dropdown" className={clsx("nav-link dropdown-toggle",classes.menuLink)}
                    >{menuItem.menu}</div>
                    <ul className={clsx("dropdown-menu",classes.subMenu) }>
                        {menuItem.subMenu.map(item =>
                            <li className={classes.subMenuItem}>
                                <Link to={"/"}className={classes.subMenuLink}>{item}</Link>
                            </li>)
                        }
                    </ul>
                </div>)}

        </Menu>
    );
};

export default ResponsiveMenu;