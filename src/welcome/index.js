import React from 'react'
import './welcome.css';
import Waves from './Waves';
import Head from './Head';
import Body from './BodyPara'
import welcomeText from "./welcome.json";

const Welcome = () => {
  let headText = welcomeText.head;
  let bodyTexts = welcomeText.body;

  return (
    <div class="allText" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Head
        text={headText}
      />
      
      <div class="bodyText">
        {
          bodyTexts.map(body=>{
            return <Body
              text={body}
            />
          })
        }
      </div>

    </div>
  )
}

export default Welcome