import React, {useEffect, useState} from 'react';
import useStyle from "./style";
import {Grid} from "@mui/material";
import {Link} from 'react-router-dom'
import clsx from "clsx";
import {getOffers} from "../../services/offers";
import OwlCarousel from "react-owl-carousel";
import Countdown from "react-countdown";



const Offers = () => {

const renderer=({hours,minutes,seconds,completed})=>{
if(completed){
    return <span className={"badge badge-warning"} style={{fontSize:'11px',padding:'4px'}}>اتمام زمان تخفیف</span>
}
else{
    return <span>{hours}:{minutes}:{seconds}</span>;
}

}


const [offers,setOffers]=useState([]);
useEffect(async()=>{
    const {data}=await getOffers();
    setOffers(data);

},[])
    const classes=useStyle();
    return (
        <Grid container className={classes.offerContainer}>
            <div className={clsx("container",classes.offerSubContainer)}>
                <Grid container item className={classes.offerParentContainer}>
                    <Grid container item className={classes.offerTextContainer}>
                        <h5>پیشنهادات ویژه</h5>
                        <Link to={"/"} className={classes.offerMoreBtn}><i className="fa fa-plus-circle"
                                                                           aria-hidden="true"></i>مشاهده بیشتر
                        </Link>
                    </Grid>
                    <Grid container item className={classes.offerSliderContainer}>
                        {offers.length>0 &&
                        <OwlCarousel dots={false} autoplay={true} className="owl-theme"  loop
                                     margin={8}
                                     responsive={{
                                         0:{
                                             items: 1
                                         },
                                         768: {
                                             items: 3
                                         },
                                         992: {
                                             items: 4
                                         }
                                     }}>
                            {offers.map(offer=>
                                <Grid container item className={classes.offerItemContainer}>
                                    <Link to={"/"}><img src={offer.image} style={{width:'100%'}} /></Link>
                                    <Link to={"/"} className={classes.offerTitle}>
                                        <p style={{fontSize:'15px'}} className={"pt-2 "}>{offer.title}</p>
                                    </Link>
                                    <Grid container item className={"flex-row justify-content-between "}>
                                        <Grid container item className={classes.offerPriceContainer}>
                                            <p className={classes.offerOldPrice}>{`${offer.oldPrice}تومان`}</p>
                                            <p className={classes.offerNewPrice}>{`${offer.newPrice}تومان`}</p>
                                        </Grid>
                                        <Grid container item className={classes.offerDiscountContainer}>
                                        <span className="badge badge-danger" style={{width:'40px',fontSize:'15px'}}>
                                            {
                                                `${ Math.floor((parseInt(offer.oldPrice)-parseInt(offer.newPrice))*100/parseInt(offer.oldPrice))}%`
                                            }</span>

                                            <Countdown date={Date.now()+8640000} renderer={renderer}/>
                                        </Grid>
                                    </Grid>
                                </Grid>)}
                        </OwlCarousel>
                        }
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
};

export default Offers;