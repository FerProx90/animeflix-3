import { PiPlayFill, PiInfoBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useSerie from "../../hooks/UseSerie";
import "./styles.css";

function ButtonSeries({ idSerie }) {
  const navigate = useNavigate();
  const { setSerieName } = useSerie();

  const handleClick = () => {
    setSerieName(idSerie);
    navigate("/serie");
  };

  return (
    <div className="buttons-series_container">
      <button className="button-play" onClick={handleClick}>
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
