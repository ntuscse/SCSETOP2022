import React from 'react';
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import MobileFrontBg from './MobileFrontBg';
import MobileBackBg from './MobileBackBg';
import Logo from './Logo.js';
import './homepage.css';

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
        <FrontBg></FrontBg>
        <BackBg></BackBg>
        <MobileFrontBg></MobileFrontBg>
        <MobileBackBg></MobileBackBg>
      </div>
    </div>
  )
}

export default HomePage