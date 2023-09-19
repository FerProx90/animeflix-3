import "./styles.css";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ButtonSeries from "./../buttonSeries/ButtonSeries";

function CarrouselCard({ seriesCategory }) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [carouselRef]);

  return (
    <div>
      <motion.div className="slider_container" ref={carouselRef}>
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {seriesCategory.map((el, i) => {
            return (
              <motion.div
                key={i}
                className="slider-item"
                whileHover={{ scale: 1.08, zIndex: 2 }}
                whileTap={{ scale: 1 }}
              >
                <img src={el.imagen} alt="Nombre serie" />
                <motion.div
                  className="item-data"
                  whileHover={{
                    opacity: 1,
                    backgroundColor: "var(--background-primary-opacity)",
                  }}
                >
                  <h2 style={{ paddingLeft: "15px" }}>{el.name}</h2>
                  <div style={{ paddingLeft: "15px" }}>
                    <ButtonSeries idSerie={el.id} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CarrouselCard;
