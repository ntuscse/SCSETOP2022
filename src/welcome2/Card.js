import React from "react";
import cards from './cards/cardIndex';

//import { ReactComponent as C10S } from './cards/10S.svg';

var seedrandom = require('seedrandom');
//const rands = Array.from({length: 40}, () => Math.random());

const  Card = (props) => {
    //props needed are scroll, time lapse ,???

    

    var rng = new seedrandom(props.seed)
    let top = rng();
    let right = rng();
    let rotateOffset = rng()*360;

    let cardFace = Math.floor(rng()*52);

    let totalOffset = props.scrollOffset/20 + props.timeLapse;
    // the angle the card should be at
    let rotateDeg = (rng()<0.5? -1: 1) * totalOffset * (rng()**2+0.3) + rng()*360;

    //console.log(rotateDeg + ", "+ top + ", "+ right)

    let angle = (rotateDeg+7200)%720

    if(rng()<0.5){
        if(((120<angle && angle<240)||(480<angle && angle<600))){
            cardFace = 52;
        }
    } else {
        if((!(120<angle && angle<240)&&!(480<angle && angle<600))){
            cardFace = 52;
        }
    }
    

    // Distance card is away from screen
    // bigger is nearer
    let distance = rng()*0.35+0.08;

    let paraY = -distance * props.scrollOffset *2 + props.timeLapse*0.5 - 300;
    var cardStyle = {
        transform: `rotate3d(1,1,1,${rotateDeg}deg) scale(${distance*100}%)`,
    }

    var holderStyle = {
        top: top*100 + "%",
        right: right*100 + "%",
        transform: `translateY(${paraY}px) rotateZ(${rotateOffset}deg)`,
    }

    return (
        <div class="cardHolder" style={holderStyle} >
            <img style={cardStyle} class="card" src={cards[cardFace]}/>
        </div>
    )
}
export default Card