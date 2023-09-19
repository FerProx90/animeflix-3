import React, { useState, useEffect } from "react";
import useSerie from "../../hooks/UseSerie";
import useUser from "../../hooks/UseUser";

function Serie() {
  const { serieName } = useSerie();
  const { series } = useUser();
  const [serieData, setSerieData] = useState([]);

  useEffect(() => {
    const seriesFind = series?.filter((ser) => ser.id === serieName);

    setSerieData(seriesFind);
  }, [series]);

  return (
    <div>
      {serieData?.map((ser) => (
        <>
          <h2>{ser.name}</h2>
          <p>{ser.description}</p>
          <iframe
            width="560"
            height="315"
            src={ser.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2></h2>
        </>
      ))}
    </div>
  );
}

export default Serie;