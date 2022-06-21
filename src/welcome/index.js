import React from 'react'
import './welcome.css';
import Waves from './Waves';
<<<<<<< Updated upstream
import Head from './Head';
import BodyPara from './BodyPara'
import welcomeText from "./welcome.json";

=======
>>>>>>> Stashed changes
const Welcome = () => {
  return (
<<<<<<< Updated upstream
    <div class="allText" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Head
        text={headText}
      />
      
      <div class="bodyText">
        {
          bodyTexts.map(body=>{
            return <BodyPara
              text={body}
            />
          })
        }
      </div>
=======
    <div>index
        <Waves></Waves>
>>>>>>> Stashed changes

    </div>
  )
}

export default Welcome