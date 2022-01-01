import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, deleteFromBasket, getBasket, reduceFromBasket} from "../../../redux/actions/Basket";
import useStyles from "../Products/style";
import {getDataFromBasket} from "../../../services/productsService";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {startCounter} from "../../../redux/actions/CounterReducer";


const Basket = () => {
    const priceRef=useRef();
    const basketPage=useSelector(state=>state.basketPage);
    const dispatch=useDispatch();
    const[basketData,setBasketData]=useState([]);
    const classes=useStyles();

    useEffect(async()=>{

        const {data,status}=await getDataFromBasket();
        if(status===201) setBasketData(data);
    },[])
    return (

            basketPage.length===0 ?
                (<div className={"text-center py-5"}>سبد خرید شما خالی می باشد</div> ):
                ( <div className={"container text-center"}>
                    <table className={"table rtl text-center table-striped table-bordered mt-5"}>
                        <thead>
                        <tr className={"text-center justify-content-center"}>
                            <th className={"text-center"} scope="col" colSpan={1}>ردیف</th>
                            <th className={"text-center"} scope="col" colSpan={2}>شرح کالا</th>
                            <th className={"text-center"} scope="col" colSpan={2}>قیمت (تومان)</th>
                            <th className={"text-center"} scope="col" colSpan={1}></th>
                        </tr>
                        </thead>
                        <tbody>

                        {/*instead of basketPage, basketData which comes from server should be used.*/}
                        {basketPage.map(item =>
                            <tr className={"text-center"}>
                                <td scope="row" colSpan={1}>1</td>
                                <td scope="row" colSpan={2}>{item.name}</td>
                                <td scope="row"  colSpan={2} ref={priceRef}>{`${item.price}`}</td>
                                <td scope="row" colSpan={1} style={{cursor:'pointer'}} onClick={()=>{dispatch(deleteFromBasket(item.id));
                                dispatch(reduceFromBasket())
                                }}><i className="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>)
                        }
                         </tbody>
                        <tr>
                            <td scope="row" colSpan={3}>
                                جمع کل صورتحساب (تومان)
                            </td>
                            <td scope="row" colSpan={3}>
                                {
                                   basketPage.reduce((sum,item)=> sum+ parseInt(item.price),0)
                                }
                            </td>
                        </tr>
                    </table>
                    <Link to={"/payment"}>
                      <button  className={clsx("btn mt-5",classes.submitBasket)}>تکمیل خرید و پرداخت نهایی</button>
                    </Link>

            </div>)


    );
};

export default Basket;