import React from "react";
import FlipCard from "./FlipCard";

function Committee({
  name,
  description,
  col1Pics,
  col2Pics,
  col3Pics,
  col4Pics,
}) {
  return (
    <div>
      <div className="header">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="row">
        <div className="column">
          {col1Pics.map(({ path, text }) => (
            <FlipCard path={path} text={text} />
          ))}
        </div>
        <div className="column">
          {col2Pics.map(({ path, text }) => (
            <FlipCard path={path} text={text} />
          ))}
        </div>
        <div className="column">
          {col3Pics.map(({ path, text }) => (
            <FlipCard path={path} text={text} />
          ))}
        </div>
        <div className="column">
          {col4Pics.map(({ path, text }) => (
            <FlipCard path={path} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Committee;
