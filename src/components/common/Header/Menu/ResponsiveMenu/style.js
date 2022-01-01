import {makeStyles} from "@material-ui/styles";

const useStyles=makeStyles({
    subMenu:{
        listStyle:'none',
        padding:'0.2rem 1rem',
        border:'unset',
        backgroundColor:'#d9d9d9',
        width:'170px',
        margin:'0 auto'
    },
    menuLink:{
        color:'#ededed',
        margin:'0.5rem 0',
        fontSize:'14px',
        cursor:'pointer',
        "&:hover":{
            color:'#037C70'
        },
        "&:after":{
            borderRight:'unset',
            borderLeft:'unset'
        }
    },
    subMenuItem:{
        padding:'0.4rem 0',
        textAlign:'center'
    },
    subMenuLink:{
        color:'unset',
        textDecoration:'none',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    }
})

export default useStyles;