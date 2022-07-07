import React, { useState, useEffect, useRef } from "react";
import "./photos.css";
import hamburgerMenu from "../homepage/hamburgerMenu.svg";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../navbar";

function Photos() {

  return (
    <>
      <Navbar></Navbar>
      <div>

        <div className="header">
          <h1>Photo Gallery</h1>
          <p>Can you spot your GL? Check in here for the latest camp photos!</p>
        </div>
        <div className="row">
          <div className="column">
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/1.jpeg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/2.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/3.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/4.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/5.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/6.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/9.jpg"}
              style={{ width: "100%" }}
            />
          </div>
          <div className="column">
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/11.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/SeniorCampPhotos/12.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m1.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m2.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m3.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m4.jpg"}
              style={{ width: "100%" }}
            />
          </div>
          <div className="column">
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m5.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m6.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m7.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m8.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m9.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m10.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m11.jpg"}
              style={{ width: "100%" }}
            />
          </div>
          <div className="column">
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m12.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/MockCamp1/m13.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc1.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc2.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc3.jpg"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc4.jpg"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
