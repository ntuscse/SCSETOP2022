import React from 'react'
import './committee.css';
import UpsideDownWaves from './UpsideDownWaves';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Picture from './Picture.png';

const Committee = () => {
  return (
    <div>index
        <UpsideDownWaves></UpsideDownWaves>
        <CardFront></CardFront>
        <CardBack></CardBack>
        <img src={Picture}></img>
    </div>
  )
}

export default Committee