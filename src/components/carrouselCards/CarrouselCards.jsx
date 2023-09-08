import { useState } from "react";
import "./styles.css";

const carrousels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function CarrouselCard() {
  return (
    <div className="wrapper">
      <div className="carrousel_container">
        {carrousels.map((el, i) => {
          return (
            <figure key={i} className="carrousel_card">
              <img src="" alt="Nombre serie" />
              <div></div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default CarrouselCard;
