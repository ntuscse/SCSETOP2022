import React from "react";
import "./FlipCard.css";

function FlipCard({ path, text }) {

  const imageClick = (event) => {
    var target = event.currentTarget.id;
    if (target == "Tech") {
      alert("Tech: hello wassup! Hope you have a great time during camp! :)\n\nF3");
    } 
  } 

  return (
    <div className="f-container" onClick={imageClick} id={text}>
      <img  src={process.env.PUBLIC_URL + path} className="f-image" />
      <div className="f-overlay">
        <div className="f-text">{text}</div>
      </div>
    </div>
  );
}

export default FlipCard;
