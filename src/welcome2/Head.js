import React from "react";



const Head = (props) => {
    return (
        <div class="headText" style={{...props.style, minWidth:'300px', maxWidth:'600px'}}>
            <h1>{props.text}</h1>
        </div>
    )
    }
    
    export default Head