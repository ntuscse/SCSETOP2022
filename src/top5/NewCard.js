import React from "react";
import "./NewCard.css";
import cardback from "./images/cardback.svg";

function NewCard({ image }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={cardback}
            style={{ objectFit: "contain" }}
            alt="Avatar"
            className="cardPic"
          />
        </div>
        <div className="flip-card-back">
          <img
            src={image}
            style={{ objectFit: "contain" }}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default NewCard;
