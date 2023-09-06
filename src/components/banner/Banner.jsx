import React from "react";
import "./styles.css";
import { PiMonitorPlayBold } from "react-icons/pi";
import ButtonSeries from "./../buttonSeries/ButtonSeries";

function Banner() {
  return (
    <div className="banner container">
      <div className="banner_background"></div>
      <div className="banner_content">
        <h2>Kimetsu no Yaiba</h2>
        <span>
          {" "}
          <PiMonitorPlayBold color="red" /> #1 en Animes hoy
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum
          itaque sed magnam velit quisquam accusantium laudantium in? Quasi
          sint, maiores sed vitae ad facere odio cupiditate laudantium sit
          fugit!
        </p>
        <ButtonSeries />
        <div className="banner_content-buttons"></div>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3LhGxK36vyA?si=o6SElfjuKTCwnD7k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
}

export default Banner;
