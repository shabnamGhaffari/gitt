import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom';
const Slider = () => {
    return (
        <OwlCarousel items={1} dots={false} autoplay={true} className="owl-theme"
            loop
            margin={8} >
            <Link to={"/"} ><img  className="img" src= {"/images/slider.png"}/></Link>

            <Link to={"/"}><img  className="img" src= {"/images/slider.png"}/></Link>
        </OwlCarousel>
    )
};

export default Slider;