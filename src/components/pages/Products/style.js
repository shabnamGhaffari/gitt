import {makeStyles} from "@material-ui/styles";

const useStyles=makeStyles({
    productItem:{
        display:'flex',
        flex:'0 0 24%',
        flexDirection:'column !important',
        border:'1px solid #ededed',
        borderRadius:'10px',
        boxShadow:'2px 2px 2px #ededed'
    },
    noMatches:{
        margin:'0 auto'
    },
    submitBasket:{
        backgroundColor:'#037C70',
        color:'#fff'
    }

})

export default useStyles;