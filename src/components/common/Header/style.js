import {makeStyles} from "@material-ui/styles";

const useStyles=makeStyles({
    root:{
        backgroundColor:'#52F4E4',
        width:'100%',
        height:'55px',
        display:'flex',
        alignItems:'center'
    },
    rootContainer:{
      alignItems:'center',
        justifyContent:'space-between'
    },
    container:{
        alignItems:'center',
        justifyContent:'space-between'
    },
    loginBtn:{
        cursor:'pointer',
        color:'#037C70',
        "&:hover":{
            color:'#13413b'
        }
    },
    shopIcon:{
        color:'#037C70',
        fontSize:'1.3rem',
        "&:hover":{
            color:'#13413b'
        }
    },
    searchIcon:{
        color:'#037C70',
        cursor:'pointer',
        fontSize:'1.1rem',
        "&:hover":{
            color:'#13413b'
        }
    },
    contactUs:{
        backgroundColor:'#037C70',
        width:'95px',
        outline:'none',
        border:'none',
        fontSize:'14px',
        "&:hover":{
            backgroundColor:'#13413b'
        }
    },
    callContainer:{
        flexDirection:'row-reverse',
        justifyContent:"space-between",
        alignItems:'center',
        cursor:'pointer',
        color:'#037C70',
        "&:hover":{
            color:'#13413b'
        }
    },
    searchInput:{
        position:'absolute',
        top:'-7px',
        width:'400px',
        display:'flex',
        alignItems:'center',
        right:'31px',


    },
    searchInputParent:{
        width:'100%',
        borderRadius:'5px',
        borderColor:'#037C70',
        outline:'unset',
        fontSize:'14px',
        height:'40px',
        paddingRight:'1rem'

    },
    basketLink:{
      "&:hover":{
          textDecoration:'none'
      }
    },
    submitBtn:{
        position:'absolute',
        left:'5px',
        color:'#037C70',
        top:'10px'
    },
    inputContainer:{
        alignItems:'center'
    },
    logoImage:{
        display:'flex',
       margin:'0 auto',
        width:'180px'
    },

    loginDialog:{
        width:'400px',
        marginLeft:'-200px',
        boxShadow:'2px 2px 5px #ededed',
        backgroundColor:'white',
        position:'absolute',
        left:'50%',
        top:'55px',
        zIndex:1000,

      
    },
    forget:{
        display:'flex',
        direction:'rtl',
        color:'unset',
        textDecoration:'none',
        margin:'0.5rem 0',
        paddingRight:'4px',
        "&:hover":{
            textDecoration:'none',
        }
    }

})


export default useStyles;