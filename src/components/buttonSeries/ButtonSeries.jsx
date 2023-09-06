import React from "react";
import { PiPlayFill, PiInfoBold } from "react-icons/pi";

function ButtonSeries() {
  return (
    <div>
      <button>
        <PiPlayFill />
        Play
      </button>
      <button>
        <PiInfoBold />
        Info
      </button>
    </div>
  );
}

export default ButtonSeries;
