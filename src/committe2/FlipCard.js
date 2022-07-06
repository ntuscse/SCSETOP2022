import React from "react";
import "./FlipCard.css";

function FlipCard({ path, text }) {
  return (
    <div className="f-container">
      <img src={process.env.PUBLIC_URL + path} className="f-image" />
      <div className="f-overlay">
        <div className="f-text">{text}</div>
      </div>
    </div>
  );
}

export default FlipCard;
