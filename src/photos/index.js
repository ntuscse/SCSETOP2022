import React, { useState, useEffect, useRef } from "react";
import "./photos.css";
import hamburgerMenu from "../homepage/hamburgerMenu.svg";
import { Link } from "react-router-dom";

function Photos() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // detect click outside dropdown menu functionality
  const dropdownRef = useRef();
  useEffect(() => {
    console.log("useffect running");
    const checkIfClickedOutside = (e) => {
      console.log("check if clicked outside running", e.target);
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        navbarOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarOpen]);
  const openMenu = () => {
    console.log(navbarOpen);
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <div
        class="dropdown"
        ref={dropdownRef}
        style={{ display: navbarOpen ? "block" : "none" }}
      >
        <p>
          <Link to="/" class="link">
            Register
          </Link>
        </p>
        <p>
          <Link to="/" class="link">
            About
          </Link>
        </p>
        <p>
          <Link to="/" class="link">
            Gallery
          </Link>
        </p>
        <p>
          <Link to="/" class="link">
            Committee
          </Link>
        </p>
      </div>
      <div>
        <div class="navbar-center">
          <div class="navbar">
            <a onClick={openMenu} class="hamburger-menu">
              <img src={hamburgerMenu} />
            </a>
            <div
              class="navbar-links"
              style={{ display: navbarOpen ? "none" : "block" }}
            >
              <Link to="/#register" class="link">
                Register
              </Link>
              <Link to="/#about" class="link">
                About
              </Link>
              <Link to="/#gallery" class="link">
                Gallery
              </Link>
              <Link to="/#committee" class="link">
                Committee
              </Link>
            </div>
          </div>
        </div>
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
              src={process.env.PUBLIC_URL + "/OldCamp/oc1.JPG"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc2.JPG"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc3.JPG"}
              style={{ width: "100%" }}
            />
            <img
              alt="pompu"
              src={process.env.PUBLIC_URL + "/OldCamp/oc4.JPG"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
