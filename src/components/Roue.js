import "./Roue.scss";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@mui/material";

export default function Roue() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "100" },
    { option: "5" },
    { option: "90" },
    { option: "25" },
    { option: "70" },
    { option: "45" },
    { option: "10" },
    { option: "65" },
    { option: "30" },
    { option: "85" },
    { option: "55" },
    { option: "95" },
    { option: "50" },
    { option: "75" },
    { option: "40" },
    { option: "20" },
    { option: "60" },
    { option: "35" },
    { option: "80" },
    { option: "15" },
  ];

  const bgs = [
    "#FF0000",
    "#4166E9",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#A6A6A6",
    "#4166E9",
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
          pointerProps={
            {
              // src: "https://m3tkbw.csb.app/blazzio-sign.png",
              // style: { transform: "rotate(-100deg)" }
            }
          }
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
