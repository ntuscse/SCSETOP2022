import React from "react";

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
          {col1Pics.map((item) => (
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + item}
              style={{ width: "100%" }}
            />
          ))}
        </div>
        <div className="column">
          {col2Pics.map((item) => (
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + item}
              style={{ width: "100%" }}
            />
          ))}
        </div>
        <div className="column">
          {col3Pics.map((item) => (
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + item}
              style={{ width: "100%" }}
            />
          ))}
        </div>
        <div className="column">
          {col4Pics.map((item) => (
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + item}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Committee;
