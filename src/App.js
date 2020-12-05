import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <canvas
        id="myCanvas"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        Canvas Doesn't Work in Your Browser
      </canvas>
    </div>
  );
}
