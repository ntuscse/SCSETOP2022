import React from "react";

const  BodyPara = (props) => {
    return (
        <div class="bodyPara" style={{...props.style, minWidth:'300px', maxWidth:'600px'}}>
            <p id={props.id} class="text">{props.text}</p>
        </div>
    )
    }
    
    export default BodyPara