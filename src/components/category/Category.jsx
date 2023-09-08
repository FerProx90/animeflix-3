import "./styles.css";
import CarrouselCard from "../carrouselCards/CarrouselCards";
import { useState } from "react";

function Category() {
  // const dragging = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.scrollLeft);
  //   e.target.scrollLeft = e.pageX;
  // };

  return (
    <div className="category_container">
      <h2 className="category_title">Accion</h2>
      <CarrouselCard />
    </div>
  );
}

export default Category;
