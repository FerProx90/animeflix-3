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
          La serie narra las desventuras de Tanjiro, un joven de un Japón feudal
          fantástico que se ve abocado a la venganza después de que un demonio
          acabe con toda su familia, a excepción de su hermana, Nezuko, también
          demoníaca y sedienta de sangre.
        </p>
        <ButtonSeries idSerie={"kimetsu"} />
        <div className="banner_content-buttons"></div>
      </div>
    </div>
  );
}

export default Banner;
