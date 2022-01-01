import React from 'react';
import Slider from "./Slider";
import Brands from "./Brands";
import Services from "./Services";
import Offers from "./offers";
import Banner from "./Banner";
import Article from "./Article";

const Home = () => {
    return (
        <>
          <Slider/>
            <Brands/>
            <Services/>
            <Offers/>
            <Banner/>
            <Article/>
        </>
    );
};

export default Home;