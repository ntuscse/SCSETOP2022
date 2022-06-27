import React, { useState } from "react";
import card from "./card.png";
import { useMediaQuery } from "react-responsive";
import NewCard from "./NewCard";
import styled from "styled-components";

const slides = [
  { image: card, text: "president" },
  { image: card, text: "v. president" },
  { image: card, text: "fin conn" },
  { image: card, text: "hon gen sec" },
  { image: card, text: "cgl" },
];

// styles
const styles = {
  container: {
    backgroundColor: "black",
    margin: 0,
    color: "white",
    paddingTop: "10px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const Top5 = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 756px)",
  });

  return (
    <div style={styles.container}>
      <h1>Meet the top 5</h1>
      <p>
        Hover over a card, to reveal the honorary member from SCSE TOP 2022
        camp's main commitee!
      </p>
      <div
        style={{
          ...styles.cards,
          flexDirection: isDesktopOrLaptop ? "row" : "column",
        }}
      >
        {slides.map((slide, index) => (
          <NewCard image={slide.image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Top5;
