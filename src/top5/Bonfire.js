import React from "react";
import "./Bonfire.css";

// colors
const colors = {
  black: "#111217",
  brownl: "#70392F",
  brownd: "#612E25",
  yellow: "#FFDC01",
  orange: "#FDAC01",
  red: "#F73B01",
};

const Bonfire = () => {
  return (
    <div class="fire">
      <div class="flames">
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
      </div>
      <div class="logs"></div>
    </div>
  );
};

export default Bonfire;
