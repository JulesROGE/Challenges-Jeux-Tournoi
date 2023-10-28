import "./Roue.css";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@mui/material";

export default function Roue() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "€5 Free bet" },
    { option: "50 Points" },
    { option: "Try again" },
    { option: "€1 Free bet" },
    { option: "20 points" },
    { option: "100 points" },
    { option: "€20 Free bet" },
    { option: "50 points" },
    { option: "20 points" }
  ];

  const bgs = [
    "#4166E9",
    "#27B1DD",
    "#DD5570",
    "#028C84",
    "#1DC25F",
    "#C96014",
    "#E3C216",
    "#BB83F4",
    "#6A32CB"
  ];

  const handleSpinClick = () => {
    console.log("handleSpinClick");
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <div className="App">
      <div style={{ transform: "rotate(45deg)" }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderWidth={1}
          outerBorderColor="black"
          pointerProps={{
            // src: "https://m3tkbw.csb.app/blazzio-sign.png",
            // style: { transform: "rotate(-100deg)" }
          }}
          textColors={["white"]}
          backgroundColors={bgs}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
      <Button
        variant="contained"
        color="error"
        style={{ width: "100px" }}
        onClick={handleSpinClick}
      >
        SPIN
      </Button>
    </div>
  );
}
