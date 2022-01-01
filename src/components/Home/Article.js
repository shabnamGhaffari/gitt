import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import useStyle from "./style";
import {Link} from 'react-router-dom';
import {getArticles} from "../../services/articles";
import clsx from "clsx";
const Article = () => {
    const [articles,setArticles]=useState([]);
    useEffect(async()=>{
        const {data}=await getArticles();
        console.log(data);
        setArticles(data);

    },[])
    const classes=useStyle();
    return (
        <div className={"container"}>
            <Grid container >
               <Grid container item className={classes.articleHeaderContainer}>
                    <p>مطالب وبلاگ</p>
                   <hr style={{flex:'0 0 70%'}}/>
                   <Link to={"/"} className={classes.articleMoreBtn}><i className="fa fa-plus-circle"
                                     aria-hidden="true"></i>مشاهده بیشتر</Link>
               </Grid>
                <Grid container item className={clsx(classes.articleItemContainer,"articleItemContainer")}>
                    { articles.map (article=>
                    <Grid container item className={clsx(classes.articleItem,"articleItem")}>
                        <Link to={"/"}><img src={article.image} alt="" style={{width:'100%'}}/></Link>
                        <h6 className={"pt-3"}>{article.title}</h6>
                        <Link to={"/"} className={classes.articleText}>{article.text}</Link>
                        <button className={clsx("btn",classes.articleReadMore)} >بخوانید</button>
                    </Grid>
                    )
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default Article;