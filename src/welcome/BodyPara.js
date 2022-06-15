import React from "react";

const  BodyPara = (props) => {
    return (
        <div class="bodyPara" style={{minWidth:'300px', maxWidth:'600px'}}>
            <p>{props.text}</p>
        </div>
    )
    }
    
    export default BodyPara