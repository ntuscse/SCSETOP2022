import React from 'react'
import './committee.css';
import UpsideDownWaves from './UpsideDownWaves';
import CardFront from './CardFront';
import CardBack from './CardBack';
import ProggiePicture from './Picture.png';
import GLPicture from './Picture.png';
import TechPicture from './Picture.png';
import PnpPicture from './Picture.png';
import LogisticsPicture from './Picture.png';
import PicCard from './PicCard';

const proggieStyling = {
  grpName: "Proggies",
  picSrc: ProggiePicture,
  picSide: "pic-card-left",
  style: "pic-card-overlap-tr",
}

const GLStyling = {
  grpName: "GLs",
  picSrc: GLPicture,
  picSide: "pic-card-right",
  style: "pic-card-overlap-bl",
  overallStyle: "gl-card-shifting"
}

const techStyling = {
  grpName: "Tech",
  picSrc: TechPicture,
  picSide: "pic-card-left",
  style: "pic-card-overlap-bl",
  overallStyle: "tech-card-shifting"
}

const PNPStyling = {
  grpName: "PNP",
  picSrc: PnpPicture,
  picSide: "pic-card-right",
  style: "pic-card-overlap-tr",
  overallStyle: "pnp-card-shifting"
}

const logisticsStyling = {
  grpName: "Logistics",
  picSrc: LogisticsPicture,
  picSide: "pic-card-left",
  style: "pic-card-overlap-tl",
  overallStyle: "logistics-card-shifting"
}

const Committee = () => {
  return (
    <div class="committee-div">
        <UpsideDownWaves></UpsideDownWaves>
        <div class="text-wrapper">
          <div class="texts">
            <h3 class="section-header">THE</h3>
            <h3 class="section-header rotated">COMMITEE</h3>
          </div>
        </div>
        <div class="card-container-wrapper">
          <div class="card-container">
            <PicCard {...proggieStyling}></PicCard>
            <PicCard {...GLStyling}></PicCard>
            <PicCard {...techStyling}></PicCard>
            <PicCard {...PNPStyling}></PicCard>
            <PicCard {...logisticsStyling}></PicCard>
          </div>
        </div>
    </div>
  )
}

export default Committee