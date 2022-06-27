import React, { useEffect, useState, useRef } from 'react';
import gsap, { random } from "gsap";
import FrontBg from './FrontBg.js';
import BackBg from './BackBg.js';
import MobileFrontBg from './MobileFrontBg';
import MobileBackBg from './MobileBackBg';
import Logo from './Logo.js';
import './homepage.css';
import hamburgerMenu from './hamburgerMenu.svg'
import Laser from './svgs/Laser.js';
import AirshipKOS from './svgs/AirshipKOS.js';
import AirshipKOD from './svgs/AirshipKOD.js';
import AirshipKOC from './svgs/AirshipKOC.js';
import AirshipQOH2 from './svgs/AirshipQOH2.js';


const aheight = window.innerHeight - 50.67;


function getRandomValue(x,y) {
  var x = Math.floor(Math.random() * x) + y
  return x;
}

const HomePage = () => {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const ASPECT = WIDTH / HEIGHT;

  const airshipRef1 = useRef();
  const airshipRef2 = useRef();
  const airshipRef3 = useRef();
  const airshipRef4 = useRef();
  const airshipRef5 = useRef();
  const airshipRef6 = useRef();
  const airshipRefs = [airshipRef1, airshipRef2, airshipRef3, airshipRef4];
  const airshipRefsMobile = [airshipRef5, airshipRef6];

  const AS_randomValsDelay = [getRandomValue(25,5), getRandomValue(25,5), getRandomValue(25,5), getRandomValue(25,5)];
  const AS_randomValsDelayMobile = [getRandomValue(8,2), getRandomValue(8,2), getRandomValue(8,2), getRandomValue(8,2)];

  const AS_randomValsDuration = [getRandomValue(45,20), getRandomValue(45,20), getRandomValue(45,20), getRandomValue(45,20)];
  const AS_randomValsDurationMobile = [getRandomValue(25,10), getRandomValue(25,10), getRandomValue(25,10), getRandomValue(25,10)];


  const laserRef1 = useRef();
  const laserRef2 = useRef();
  const laserRef3 = useRef();

  const laserRef4 = useRef();
  const laserRef5 = useRef();
  const laserRef6 = useRef();
  const laserRefs = [laserRef1, laserRef2, laserRef3, laserRef4,laserRef5, laserRef6];
  const LS_randomValsDelay = [getRandomValue(1,7), getRandomValue(1,5), getRandomValue(1,12), getRandomValue(1,8), getRandomValue(1,6), getRandomValue(1,12)];


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

  useEffect(() => {
    // lasers
    laserRefs.forEach((item, index) => {
      var total = laserRefs.length;
      var regionWidth = WIDTH / total;
      var laserTimeline = gsap.timeline({ repeat: -1, repeatRefresh: true });

      var setLaser = gsap.set(item.current, {
        x: `random(${index * regionWidth}, ${(index + 1) * regionWidth})`,
      });

      var fromtoLaser = gsap.fromTo(
        item.current,
        { height: 0, width: WIDTH> 700 ? 45 : 10 },
        {
          height: HEIGHT + 300,
          width: WIDTH > 700 ? 45 : 10,
          duration: 1,
        }
      );
      var delay = gsap.to({}, LS_randomValsDelay[index], {});
      var toLaser = gsap.to(item.current, { height: 0, width: 0 });

      laserTimeline.add(setLaser);
      laserTimeline.add(delay);
      laserTimeline.add(fromtoLaser);
      laserTimeline.add(toLaser);
    });

    // airship desktop
    airshipRefs.forEach((airship, index) => {
      console.log("here");
      const asTimelines = gsap.timeline({ repeat: -1 });
      var back = gsap.to(airship.current, {
        x: 0, 
        duration: AS_randomValsDuration[index],
        ease: "none",
      });
      var rotate = gsap.to(airship.current, {css: {scaleX: "-0.8"}})
      var rotate2 = gsap.to(airship.current,{})
      
      var go = gsap.to(airship.current, {
        x: WIDTH + 500,
        duration: AS_randomValsDuration[index],
        ease: "none",
        immediateRender: false
  
      });
      var delay = gsap.to({}, AS_randomValsDelay[index], {});
      asTimelines.add(delay);
      asTimelines.add(go);
      asTimelines.add(rotate);
      asTimelines.add(back);
      asTimelines.add(rotate2);

    });
    
    // airship mobile
    airshipRefsMobile.forEach((airship, index) => {
      console.log("here");
      const asTimelines = gsap.timeline({ repeat: -1 });
      var back = gsap.to(airship.current, {
        x: 0, 
        duration: AS_randomValsDurationMobile[index],
        ease: "none",
      });
      var rotate = gsap.to(airship.current, {css: {scaleX: "-0.8"}})
      var rotate2 = gsap.to(airship.current,{})
      
      var go = gsap.to(airship.current, {
        x: WIDTH + 300,
        duration: AS_randomValsDurationMobile[index],
        ease: "none",
        immediateRender: false
  
      });
      var delay = gsap.to({}, AS_randomValsDelayMobile[index], {});
      asTimelines.add(delay);
      asTimelines.add(go);
      asTimelines.add(rotate);
      asTimelines.add(back);
      asTimelines.add(rotate2);

    });

  });

  return (
    <>
    <div class="dropdown" ref={dropdownRef} style={{display:navbarOpen ? "block" : "none"}}>
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
          <svg
                width={WIDTH}
                height={HEIGHT}
                viewBox={`0 0 ${WIDTH + 250 * ASPECT} ${HEIGHT + 250}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Laser class="zzz" ref={laserRef1} x={500} height={0} />
                <Laser class="zzz" ref={laserRef2} x={500} height={0} />
                <Laser class="zzz" ref={laserRef3} x={500} height={0} />

                <AirshipKOS ref={airshipRef1} x="scale(0.8) translate(-400,10)" />
                <AirshipQOH2 ref={airshipRef2} x="scale(0.8) translate(-200,250)" />
                <AirshipKOC ref={airshipRef3} x="scale(0.8) translate(-100,350)" />
                <AirshipKOD ref={airshipRef4} x="scale(0.8) translate(-10,150)" />

              </svg>
          <FrontBg></FrontBg>
        </svg>

        <MobileBackBg></MobileBackBg>
        <svg style={{height:aheight, width:"100%"}} class="mobile-wrapper">
            <svg
                width={WIDTH}
                height={HEIGHT}
                viewBox={`0 0 ${WIDTH + 250 * ASPECT} ${HEIGHT + 250}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Laser class="zzz" ref={laserRef1} x={0} height={0} />
                <Laser class="zzz" ref={laserRef2} x={120} height={0} />
                <Laser class="zzz" ref={laserRef3} x={300} height={0} />

                <AirshipKOS ref={airshipRef5} x="scale(0.6) translate(-80,10)" />
                <AirshipQOH2 ref={airshipRef6} x="scale(0.6) translate(-50,250)" />

              </svg>
          <MobileFrontBg></MobileFrontBg>
        </svg>
        

        <div className="sect1">
              
          </div>

      </div>
    </div>
    </>
  )
}

export default HomePage