import "./Roue.scss";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

export default function Roue() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "Préhension Réduite", style: { fontSize: 15 } },
    { option: "Déficience visuelle", style: { fontSize: 15 } },
    { option: "Audition reduite", style: { fontSize: 15 } },
    { option: "Préhension Réduite", style: { fontSize: 15 } },
    { option: "Déficience visuelle", style: { fontSize: 15 } },
    { option: "Préhension Réduite", style: { fontSize: 15 } },
  ];

  const bgs = ["#F5C75D", "#2B619D"];

  const handleSpinClick = () => {
    console.log("handleSpinClick");
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <div className="Roue" onClick={handleSpinClick}>
      <div style={{ transform: "rotate(45deg)" }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderWidth={1}
          outerBorderColor="black"
          pointerProps={{}}
          textSize="10px"
          textColors={["black"]}
          backgroundColors={bgs}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          interface="canvas"
        />
      </div>
    </div>
  );
}
