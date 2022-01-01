import React from 'react';
import TopNav from "./TopNav/TopNav";
import Logo from '../Header/logo/Logo';
import Menu from "./Menu/Menu";

const HeaderLayout = () => {
    return (
        <>
                   <TopNav/>
                    <Logo/>
                     <Menu/>
        </>
    );
};

export default HeaderLayout;