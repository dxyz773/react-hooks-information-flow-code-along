import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, colorChange }) {
  function handleClick() {
    const newColor = getRandomColor();
    colorChange(newColor);
  }
  return (
    <div
      className="child"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
