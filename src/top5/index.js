import React from "react";
import card from "./card.png";
import { useMediaQuery } from "react-responsive";
import NewCard from "./NewCard";

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
    padding: "30px 0px 70px 0px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: "3em",
  },
};

const Top5 = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 756px)",
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meet the top 5</h1>
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
