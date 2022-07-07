import React from 'react';
import hamburgerMenu from '../homepage/hamburgerMenu.svg';
import { useEffect, useState, useRef } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
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
      setNavbarOpen(prev => !prev);
    }
  
  
  return (
    <div>
        <div class="dropdown" ref={dropdownRef} style={{ display: navbarOpen ? "block" : "none" }}>
        <p><a href="https://wis.ntu.edu.sg/pls/webexe88/REGISTER_NTU.REGISTER?EVENT_ID=OA22052709333861" class="link" target="_blank">Register</a></p>
        <p><Link to="/#about" class="link" smooth>About</Link></p>
        <p><Link to="/#gallery" class="link" smooth>Gallery</Link></p>
        <p><Link to="/#committee" class="link" smooth>Committee</Link></p>
     </div>
    <div class="navbar-center">
        <div class="navbar">
        <a onClick={openMenu} class="hamburger-menu"><img src={hamburgerMenu} /></a>
        <div class="navbar-links" style={{ display: navbarOpen ? "none" : "block" }}>
        <a href="https://wis.ntu.edu.sg/pls/webexe88/REGISTER_NTU.REGISTER?EVENT_ID=OA22052709333861" class="link" target="_blank">Register</a>
            <Link to="/#about" class="link" smooth>About</Link>
            <Link to="/#gallery" class="link" smooth>Gallery</Link>
            <Link to="/#committee" class="link">Committee</Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar