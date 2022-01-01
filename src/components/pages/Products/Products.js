import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useStyles from './style';
import {Grid} from "@mui/material";
import {addToBasket, getBasket} from "../../../redux/actions/Basket";
import {toast} from "react-toastify";
import {getProductList} from "../../../redux/actions/products";
import clsx from "clsx";


const Products = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const search=useSelector(state=>state.search);
    const products=useSelector(state=>state.products);
    const[searchedItem,setSetSearchedItem]=useState([]);
    const [newSearch,setNewSearch]=useState("");
    const handleBasket=(e)=>{
        dispatch(addToBasket());
       toast.success(`${e.target.previousElementSibling.innerHTML} به سبد خرید شما اضافه شد`)
        // dispatch(getBasket(item.id))
    }
    useEffect(async()=>{

        try
        {

        await dispatch(getProductList());


         // const newData=data.map(item=>item.name);
         //  console.log(data);
            setSetSearchedItem([...products]);
            setNewSearch(search);

        }
        catch(e){
            console.log(e);
        }
    },[search]);
        return(
           <div className={"text-center"}>
               <h4 className={"py-4"}>لیست محصولات</h4>
               <br/>
               <div className={"container"}>
                   <Grid style={{display:'flex',flexDirection:'row-reverse !important',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
               {
                   newSearch.length===0?(
                       searchedItem.map(item=>
                           <Grid className={clsx(classes.productItem,"productItem")}>
                               <img src={item.image} alt="" style={{width:'100%'}}/>
                               <h6>{item.name}</h6>
                                <p style={{ cursor:'pointer'}} onClick={(e)=>{
                                    dispatch(addToBasket());
                                    //send selected product to server
                                    toast.success(`${item.name} به سبد خرید شما اضافه شد`);
                                    dispatch(getBasket(item.id));

                                }}>افزودن به سبد خرید</p>
                           </Grid>


                       )
               ): (searchedItem.filter(item=>item.name.includes(newSearch)).length===0?(<div className={classes.noMatches}>هیچ محصولی با مشخصات مورد نظر یافت نشد</div>):(searchedItem.filter(item=>item.name.includes(newSearch)).map(item=> <Grid className={clsx(classes.productItem,"productItem")}>
                       <img src={item.image} alt="" style={{width:'100%'}}/>
                       <h6>{item.name}</h6>
                       <div style={{ cursor:'pointer'}} onClick={e=>
                       {dispatch(addToBasket());
                           toast.success(`${item.name} به سبد خرید شما اضافه شد`);
                            dispatch(getBasket(item.id));
                       }}>افزودن به سبد خرید</div>
                   </Grid>) ))

               }
                   </Grid>
               </div>

           </div>
        )

};

export default Products;