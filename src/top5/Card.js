import React from "react";
import card from "./card.png";
import { useDrag } from "react-dnd";

const Card = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: {
      id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={card}
      style={{
        height: "300px",
        objectFit: "scale-down",
        border: isDragging ? "5px solid pink" : "0px",
      }}
    ></img>
  );
};

export default Card;
