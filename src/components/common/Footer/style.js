import {makeStyles} from "@material-ui/styles";


const useStyles=makeStyles({
    footerContainer:{
        backgroundColor:'#363538',
        marginTop:'3rem'
    },
    topBarContainer:{
        paddingTop:'4rem',
        flexDirection:'row-reverse !important',
        justifyContent:'space-between'
    },
    linkContainer:{
        flex:'0 0 25%',
        flexDirection:'row-reverse !important',
        justifyContent:'space-between'
    },
    linkItem:{
        fontSize:'14px',
        padding:'0.3rem 0',
        flex:'0 0 50%',
        color:'#fff',
        "&:hover":{
            textDecoration:'none',
            color:'#037C70'
        }
    },
    newsContainer:{
        flexDirection:'column !important',
        flex:'0 0 60%',
        justifyContent:'space-between'
    },
    footerInput:{
        direction:'rtl'
    },
    submitBtn:{
        backgroundColor:'#52F4E4',
        borderRadius:'10px !important',
        fontSize:'14px'
    },
    email:{
        borderRadius:'10px !important',
        fontSize:'14px',
        
    },
    aboutContainer:{
        paddingTop:'3rem',
        flexDirection:'row-reverse !important',
        color:'#fff'
    },
    socialSubContainer:{
        paddingTop:'1rem',
       justifyContent:'center'
    },
    socialItem:{
        margin:'0 0.5rem',
        border:'1px solid #fff',
        borderRadius:'10px'
    },
    bottomContainer:{
        backgroundColor:'#52F4E4',
        height:'50px',
        marginTop:'2rem'
    }
});
export default useStyles