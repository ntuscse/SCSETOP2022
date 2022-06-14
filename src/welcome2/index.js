import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import './welcome.css';
import Waves from './Waves';
import Head from './Head';
import BodyPara from './BodyPara'
import welcomeText from "./welcome.json";
//import Video from './Video';


import { ReactComponent as C10S } from './cards/10S.svg';
import Card from './Card';

const seeds = Array.from({length: 100}, () => Math.random());
const width = window.innerWidth;

const Welcome = () => {
  const [offsetY, setOffSetY] = useState(0)

  const handleScroll = () => {
    var elDistanceToTop = window.pageYOffset + document.getElementById("asdf").getBoundingClientRect().top
    setOffSetY(window.pageYOffset-elDistanceToTop)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [timeLapse, setTimeLapse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLapse((oldCount) => oldCount + 1)
  }, 50);

    return () => {
      clearInterval(id);
    };
  }, []);

  //let offsetY=0
  //let timeLapse=0

  let noCards = Math.min(Math.floor(20+width*0.04), 100);
  //console.log(noCards)

  //========== END SET UP =========

  let headText = welcomeText.head;
  let bodyTexts = welcomeText.body;

  return (
    <div class="welcomeMain"
      id="asdf"
      style={{display:"flex", flexDirection:"column", alignItems:"center", zIndex:0}}>
      
      <div class="allText">
        <Head
          style={{transform: `translateY(${offsetY * 0}px)`}}
          text={headText}
        />
        

        { 
          bodyTexts.map(body=>{
            return <BodyPara
              style={{transform: `translateY(${offsetY * 0}px)`}}
              text={body}
            />
          })
        }

        {/*<img src="https://upload.wikimedia.org/wikipedia/commons/1/16/10S.svg"/>*/}

        {/* <div class="vidPlayer" style={{backgroundColor:"blue", transform: `translateY(${offsetY * 0.3}px)`}}></div> */}
        

        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=erEgovG9WBs'
            width='100%'
            height='100%'
          />
        </div>
      
      </div>

      
      
      <div class="bgBorder">
        <div class="cardBG">
          {[...Array(noCards).keys()].map(i=>{
            return <Card 
              seed={seeds[i]} 
              scrollOffset={offsetY}
              timeLapse = {timeLapse}
              width = {width}
              />
          })}
        </div>
      </div>
    </div>
  )
}

export default Welcome