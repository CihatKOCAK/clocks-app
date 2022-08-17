import React, { useEffect } from "react";
import "./style.scss";

function AnalogClock() {
 

  return (
    <div className="analog-clock-body">
      <div className="hours"></div>
      <div className="disc disc-top"></div>
      <div className="disc disc-bottom"></div>
      <div className="hand second"></div>
      <div className="hand minute"></div>
      <div className="hand hour"></div>
    </div>
  );
}

export default AnalogClock;
