import React, {useEffect, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";
import {getBrands} from "../../services/brands";
import useStyle from "./style";
const Brands = () => {
    const [images,setImages]=useState([]);
    useEffect(async()=>{
    const {data}=await getBrands();
    setImages(data);
    },[]);
    const classes=useStyle();
    return (
        <div className={"container text-center mt-lg-5 mt-sm-3"} >
            {images.length>0 &&
            <OwlCarousel items={6} dots={false} autoplay={true} className="owl-theme"
                         loop
                         margin={8}
                         responsive={{
                             0:{
                                 items: 2
                             },
                             768: {
                                 items: 3
                             },
                             992: {
                                 items: 6
                             }
                         }}
            >
                {images.map(item=>
                    <Link to={"/"}>
                        <img src={item}  alt={"image"} height={"100px"}/>
                    </Link>
                )}
            </OwlCarousel>
            }

            <Link to={"/"} className={classes.allBrands}>مشاهده همه برندها</Link>
        </div>
    );
};

export default Brands;