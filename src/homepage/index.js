import React from 'react';
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import Logo from './Logo.js';
import './homepage.css';

const HomePage = () => {
  return (
    <div class="container" id="gradient">
      <div class="navbar">
        <a href="#register">Register</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#committee">Committee</a>
      </div>
      <div class="bg-div">
        <div class="logo-div"><Logo></Logo></div>
        <FrontBg></FrontBg>
        <BackBg></BackBg>
      </div>
    </div>
  )
}

export default HomePage