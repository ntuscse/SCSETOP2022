import React, { useEffect, useState } from 'react'
import './welcome.css';
import Waves from './Waves';
import Head from './Head';
import BodyPara from './BodyPara'
import welcomeText from "./welcome.json";
import Video from './Video';

import { ReactComponent as C10S } from './cards/10S.svg';

const Welcome = () => {
  const [offsetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.pageYOffset)
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const layer0 = 0;
  const layer1 = 0.2;
  const layer2 = 0.5;
  const layer3 = 0.8;

  //========== END SET UP =========

  let headText = welcomeText.head;
  let bodyTexts = welcomeText.body;

  return (
    <div class="allText" 
      style={{display:"flex", flexDirection:"column", alignItems:"center", zIndex:-1}}>

      <Head
        style={{transform: `translateY(${offsetY * 0.3}px)`}}
        text={headText}
      />
      

      { 
        bodyTexts.map(body=>{
          return <BodyPara
            style={{transform: `translateY(${offsetY * 0.3}px)`}}
            text={body}
          />
        })
      }

      {/*<img src="https://upload.wikimedia.org/wikipedia/commons/1/16/10S.svg"/>*/}

      {/* <div class="vidPlayer" style={{backgroundColor:"blue", transform: `translateY(${offsetY * 0.3}px)`}}></div> */}

      <C10S style={{transform:`rotate3d(1,1,1,${offsetY/5}deg)`}}/>

      <div style={{height:"400px"}}></div>
      
    </div>
  )
}

export default Welcome