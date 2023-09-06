import React from "react";
import { PiPlayFill, PiInfoBold } from "react-icons/pi";
import "./styles.css";

function ButtonSeries() {
  return (
    <div className="buttons-series_container">
      <button className="button-play">
        <PiPlayFill />
        Play
      </button>
      <button className="button-info">
        <PiInfoBold />
        Mas info
      </button>
    </div>
  );
}

export default ButtonSeries;
