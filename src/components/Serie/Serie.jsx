import React, { useState, useEffect } from "react";
import useSerie from "../../hooks/UseSerie";
import useUser from "../../hooks/UseUser";
import { AiFillStar } from "react-icons/ai";
import "./styles.css";

function Serie() {
  const { serieName } = useSerie();
  const { series } = useUser();
  const [serieData, setSerieData] = useState([]);

  useEffect(() => {
    const seriesFind = series?.filter((ser) => ser.id === serieName);

    setSerieData(seriesFind);
  }, [series]);

  return (
    <div className="container serie_container">
      {serieData?.map((ser) => (
        <>
          <h2 className="serie-title">
            <AiFillStar color="yellow" />
            {ser.name}
          </h2>
          <div className="serie_container-item">
            <iframe
              width="560"
              height="315"
              src={ser.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>{ser.description}</p>
          </div>
          <h2></h2>
        </>
      ))}
    </div>
  );
}

export default Serie;
