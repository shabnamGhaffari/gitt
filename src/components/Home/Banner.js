import React from 'react';
import {Link} from 'react-router-dom';
const Banner = () => {
    return (
        <div className={"container"}>
           <Link to={"/"}>
               <img src={"/images/banner.png"} alt={""} style={{width:'100%',padding:'2rem 0'}}/>
           </Link>
        </div>
    );
};

export default Banner;