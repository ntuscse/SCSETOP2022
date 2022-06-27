import React, { Fragment, useState } from 'react';
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import MobileFrontBg from './MobileFrontBg';
import MobileBackBg from './MobileBackBg';
import Logo from './Logo.js';
// import { openMenu } from './openMenu.js';
import './homepage.css';
import hamburgerMenu from './hamburgerMenu.svg'

const aheight = window.innerHeight - 50.67;

const HomePage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const openMenu = () => {
    console.log(navbarOpen);
    setNavbarOpen(prev => !prev);
  }
  return (
    <><div class="dropdown" style={{display:navbarOpen ? "block" : "none"}}>
    <p><a href="#register" class="link">Register</a></p>
    <p><a href="#about" class="link">About</a></p>
    <p><a href="#gallery" class="link">Gallery</a></p>
    <p><a href="#committee" class="link">Committee</a></p>
    </div>
    <div class="container" id="gradient">
      <div class="navbar-center">
        <div class="navbar">
          <a onClick={openMenu} class="hamburger-menu"><img src={hamburgerMenu} /></a>
          <div class="navbar-links" style={{display:navbarOpen ? "none" : "block"}}>
            <a href="#register" class="link">Register</a>
            <a href="#about" class="link">About</a>
            <a href="#gallery" class="link">Gallery</a>
            <a href="#committee" class="link">Committee</a>
          </div>
        </div>
      </div>
      <div class="bg-div">
        <div class="logo-div">
          <Logo></Logo>
          <div class="button">
            <button type="button" class="register-button">Register</button>
          </div>
        </div>
        <svg style={{height:aheight, width:"100%"}} class="wrapper" id="background-gradient">
          <BackBg></BackBg>
          <FrontBg></FrontBg>
        </svg>
        <MobileBackBg></MobileBackBg>
        <svg style={{height:aheight, width:"100%"}} class="mobile-wrapper">
          <MobileFrontBg></MobileFrontBg>
        </svg>
        
      </div>
    </div>
    </>
  )
}

export default HomePage