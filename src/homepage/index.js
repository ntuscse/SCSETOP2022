import React from 'react';
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import Logo from './Logo.js';
import './homepage.css';

const HomePage = () => {
  return (
    <div>
        <FrontBg></FrontBg>
        <BackBg></BackBg>
        <Logo></Logo>
    </div>
  )
}

export default HomePage