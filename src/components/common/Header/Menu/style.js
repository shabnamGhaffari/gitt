import {makeStyles} from "@material-ui/styles";

const useStyles=makeStyles({
    subMenu:{
        listStyle:'none',
        textAlign:'center',
        padding:'0.2rem 1rem',
        border:'unset'
    },
    menuLink:{
        color:'unset',
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
        padding:'0.2rem 0',
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