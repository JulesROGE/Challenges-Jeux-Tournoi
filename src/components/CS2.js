import "./Roue.scss";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@mui/material";

export default function Roue() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "Doigts liés entre eux", style: { fontSize: 15} },
    { option: "Absence de son", style: { fontSize: 15} },
    { option: "Défi de concentration", style: { fontSize: 15} },
    { option: "Réticule visée désactivée", style: { fontSize: 14} },
    { option: "Champ de vision réduit", style: { fontSize: 15} },
    { option: "On relance", style: { fontSize: 15} },
  ];
  
  

  const bgs = [
    "#F5C75D",
    "#2B619D",
  ];

  const handleSpinClick = () => {
    console.log("handleSpinClick");
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  // style={{ transform: "scale(1.5)"}}
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
