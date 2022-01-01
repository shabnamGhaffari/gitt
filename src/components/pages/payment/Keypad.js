import React from 'react';


let keyboard=[0,1,2,3,4,5,6,7,8,9];
keyboard.sort(()=>0.5-Math.random());
const Keypad = ({handleButtons}) => {
    return(
        <>
        { keyboard.map(item=><button className={"btn btn-light btn-sm"} onClick={handleButtons}>{item}</button> )}
        </>
    )


};

export default Keypad;