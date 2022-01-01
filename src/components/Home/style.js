import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    allBrands:{
        display:'flex',
        marginTop:'2rem',
        justifyContent:'center',
        color:'unset',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    serviceContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flex:'0 0 12%'

    },
    serviceTitle:{
        cursor:'pointer',
        textAlign:'center',
        marginTop:'5px',
        "&:hover":{
            color:'#037C70'
        }
    },
    serviceText:{
        fontSize:'13px',
        textAlign:'justify',
        display:'-webkit-box',
        overflow:'hidden',
        '-webkit-box-orient':'vertical',
        '-webkit-line-clamp':3,
        direction:'rtl',
        cursor:'pointer',
        "&:hover":{
            color:'#037C70'
        }
    },
    offerContainer:{
        display:'flex !important',
        backgroundColor:'#F2F2F2',
        marginTop:'3rem',
        padding:'3rem 0'
    },
    offerSubContainer:{
    },
    offerTextContainer:{
        flexDirection:'column !important',
        justifyContent:'center',
        alignItems:'center',
        // flex:'0 0 20% !important'
    },
    offerParentContainer:{
        // flexWrap:'nowrap',
        display:'flex !important',
        flexDirection:'row-reverse !important'
    },
    offerSliderContainer:{
        // flex:'0 0 80% !important',
        justifyContent:'space-between',

    },
    offerItemContainer:{
        flex:'0 0 24%',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:'10px'
    },
    offerPriceContainer:{
        flexDirection:'column !important',
        flex:'0 0 50%',
        alignItems:'center'
    },
    offerDiscountContainer:{
        flexDirection:'column !important',
        flex:'0 0 40%',
        justifyContent:"space-evenly !important",
        alignItems:'center'
    },
    offerOldPrice:{
        textDecoration:'line-through',
        fontSize:'12px',
        color:'#8F8F8F',
        direction:'rtl'
    },
    offerNewPrice:{
        direction:'rtl',
        fontSize:'14px'
    },
    offerMoreBtn:{
        color:'unset',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    offerTitle:{
        color:'unset',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    articleHeaderContainer:{
        flexDirection:'row-reverse !important',
    },
    articleMoreBtn:{
        color:'unset',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    articleItemContainer:{
      justifyContent:'space-between'
    },
    articleItem:{
        flexDirection:'column',
        flex:'0 0 24%',
        alignItems:'center',
        justifyContent:'center',
        boxShadow:'2px 2px 2px #ededed',
        borderRadius:'7px'
    },
    articleText:{
        color:'unset',
        fontSize:'14px',
        padding:'1rem',
        textAlign:'justify',
        display:'-webkit-box',
        overflow:'hidden',
        '-webkit-box-orient':'vertical',
        '-webkit-line-clamp':3,
        direction:'rtl',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    articleReadMore:{
        margin:'1rem 0',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize:'13px',
        "&:hover":{
            backgroundColor:'#037C70',
            color:'#fff'
        }
    }
})

export default useStyle;