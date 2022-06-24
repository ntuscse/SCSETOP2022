import React from 'react';
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import MobileFrontBg from './MobileFrontBg';
import MobileBackBg from './MobileBackBg';
import Logo from './Logo.js';
import './homepage.css';

const aheight = window.innerHeight - 50.67;

const HomePage = () => {
  return (
    <div class="container" id="gradient">
      <div class="navbar-center">
        <div class="navbar">
          <a href="#register">Register</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#committee">Committee</a>
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
        <MobileFrontBg></MobileFrontBg>
        <MobileBackBg></MobileBackBg>
      </div>
    </div>
  )
}

export default HomePage