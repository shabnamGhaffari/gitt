const {makeStyles} = require("@material-ui/styles");


const useStyle=makeStyles({
    paymentContainer:{
        width:'100%',
        backgroundColor:'#48dac2',

    },
    topBar:{
        backgroundColor:' #a6a6a6'
    },
    mainContent:{
        backgroundColor:'#e6e6e6',
        padding:'3rem 0'
    },
    title:{
        flex:'0 0 50% !important'
    },
    time:{
        flex:'0 0 50% !important'
    },
    titleContainer:{
        flexDirection:'row !important',
        padding:'1rem 2rem',
        flex:'0 0 65% '
    },
    information:{
        flex:'0 0 25%',
        padding:'1rem 2rem',
        // "border":"1px solid black",
        "height":"285px",
        "margin":"82px 0 !important",
        fontSize:'14px'
    },
    respbtn:{
      fontSize:'16px'
    },
    formContainer:{

        padding:'1rem 2rem',
    },
    submitBtn:{
        display:'inline-flex',
        flex:'0 0 48%',
        justifyContent:'center'
    },
    cancelBtn:{
        display:'inline-flex',
        flex:'0 0 48%',
        justifyContent:'center'
    },
    keyboardContainer:{
        "left":"0",
        "position":"absolute",
        "width":"109px",
        "zIndex":"1000",
        "border":"1px solid #ededed",
        "backgroundColor":"#ededed"
    },
    btnContainer:{
        display:'flex',
        justifyContent:"start"
    },
    keypad:{
        position:'absolute',
        zIndex:'1000',
        top:'11px',
        left:'20px'
    }



})

export default useStyle