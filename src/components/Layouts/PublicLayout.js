import React from 'react';
import HeaderLayout from "../common/Header/HeaderLayout";
import FooterLayout from "../common/Footer/FooterLayout";

const PublicLayout = ({children}) => {
    return (
       <>
            <HeaderLayout/>
           {children}
           <FooterLayout/>
       </>
    );
};

export default PublicLayout;