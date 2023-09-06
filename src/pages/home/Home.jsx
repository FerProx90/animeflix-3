import React from "react";
import "./styles.css";
import Button from "./../../components/button/Button";

function Home() {
  return (
    <div className="home">
      <div className="home_background"></div>
      <div className="home_content" style={{ background: "none" }}>
        <h1>Los mejores animes al alcance de un click!</h1>
        <Button
          text={"Inicia la prueba gratuita"}
          linkRef={"/login"}
          customButton={"home"}
        />
      </div>
    </div>
  );
}

export default Home;
