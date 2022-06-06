import React from "react";

export default function PicCard({grpName, picSrc, picSide, style, overallStyle}) {
    return(
        <div className={"pic-card " + picSide + " " + overallStyle}>
            <div className={picSide}>
                <div class="img-container">
                <img src={picSrc}></img>
                <div class={"text-block " + style}>
                    <h3>{grpName}</h3>
                </div>
                </div>
            </div>
        </div>
        // <img src={picSrc}></img>
    )
}