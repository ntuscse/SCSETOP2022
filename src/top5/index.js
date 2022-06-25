import React, { useState } from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";
import fire from "./fire.gif";

const ALL = ["president", "v. president", "fin conn", "hon gen sec", "cgl"];

const Top5 = () => {
  const [topArea, setTopArea] = useState([]);
  const [bottomArea, setBottomArea] = useState(ALL);

  // drop for top area
  const [{ isOver }, dropRef1] = useDrop(() => ({
    accept: "card",
    drop: (item) => replaceCard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // drop for bottom area
  const [obj, dropRef2] = useDrop(() => ({
    accept: "card",
    drop: (item) => addCard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // update Card in top area
  const replaceCard = (id) => {
    const newArr = [...bottomArea];
    const index = bottomArea.indexOf(id);
    if (index > -1) {
      newArr.splice(index, 1);
    }
    setTopArea(() => [id]);
    setBottomArea(() => newArr);
  };

  // update card in bottom area
  const addCard = () => {
    setBottomArea(() => ALL);
    setTopArea(() => []);
  };

  return (
    <div style={{ backgroundColor: "#263147" }}>
      <p>Top 5 Section</p>
      {/* drop zone */}
      <div ref={dropRef1} style={{ height: "400px", backgroundColor: "black" }}>
        {topArea.map((item) => (
          <Card id={item} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={fire}
          style={{
            height: "100px",
            objectPosition: "70% 70%",
            width: "200px",
            objectFit: "cover",
          }}
        />
      </div>
      {/*image container*/}
      <div
        ref={dropRef2}
        style={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {bottomArea.map((item) => {
          return <Card id={item} />;
        })}
      </div>
    </div>
  );
};

export default Top5;
