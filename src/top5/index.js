import React from "react";
import boonyen from "./images/Card front (boonyen).png";
import bryan from "./images/Card front (bryan).png";
import lingyin from "./images/Card front (lingyin).png";
import sean from "./images/Card front (sean).png";
import teresa from "./images/Card front (teresa).png";
import { useMediaQuery } from "react-responsive";
import NewCard from "./NewCard";

const slides = [
  { image: boonyen, text: "president" },
  { image: bryan, text: "v. president" },
  { image: teresa, text: "cgl" },
  { image: lingyin, text: "hon gen sec" },
  { image: sean, text: "fin conn" },

];

// styles
const styles = {
  container: {
    backgroundColor: "black",
    margin: 0,
    color: "white",
    padding: "30px 0px 70px 0px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#778D87",
    fontSize: "3em",
  },
};

const Top5 = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 756px)",
  });

  return (
    <div  id="committee" style={styles.container}>
      <h1 style={styles.title}>Meet the TOP 5</h1>
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
