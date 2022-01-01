import React, {useContext, useRef, useState} from 'react';
import clsx from "clsx";
import useStyles from "../style";
import SimpleReactValidator from "simple-react-validator";
import {withRouter} from "react-router";
import Products from "../../../pages/Products/Products";
import {useDispatch, useSelector} from "react-redux";
import {clearSearch, getSearch} from "../../../../redux/actions/search";
import TopNavContext from "../../../../context/TopNavContext";
import {context} from "../../../../context/context";

const SearchInput = ({history}) => {
    const search=useSelector(state=>state.search);
    const dispatch=useDispatch();
    const validator=useRef(new SimpleReactValidator({
        messages:{
            required:"لطفا نام محصول مورد نظر را وارد نمایید!",
        }
    }));
    const classes=useStyles();
    const handleInput=(e)=>{

        dispatch(getSearch(e));
    }
    const handleForm=(e)=>{
        e.preventDefault();
        history.push("/products");


    }
    return (
        <form action="" onSubmit={handleForm} style={{width:'100%'}}>
            <div className={clsx("input-group",classes.inputContainer)}>
                <input name="search" value={search} onChange={handleInput}
                       type="text" placeholder={"جستجو کنید..."}
                       className={clsx("input-control searchInputParent",classes.searchInputParent)}
                />
                {validator.current.message("search",search,"required")}
                <div type={"submit"} className={clsx("input-group-prepend",classes.submitBtn)} onClick={handleForm}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </form>
    );
};

export default withRouter(SearchInput);