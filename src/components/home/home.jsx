import { Slider } from "@mui/material";
import "./home.css";
import React, { useState } from "react";

export const Home = () => {
  const [value, setValue] = useState(55);

  function onSliderChange(event) {
    const newValue = event.target.value;
    console.log(newValue);
    setValue(newValue);
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <Slider className="slider" value={value} onChange={onSliderChange} />
    </div>
  );
};
