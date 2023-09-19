import "./styles.css";
import CarrouselCard from "../carrouselCards/CarrouselCards";
import { useEffect, useState } from "react";
import useUser from "../../hooks/UseUser";

function Category({ categoryName, categoryColor }) {
  const { series } = useUser();
  const [hasSeries, setHasSeries] = useState();
  const [seriesCategory, setSeriesCategory] = useState();

  useEffect(() => {
    const seriesFind = series?.find(
      (ser) => ser.category.toLowerCase() === categoryName.toLowerCase()
    );

    const seiresFilter = series?.filter(
      (el) => categoryName?.toLowerCase() === el?.category.toLowerCase()
    );

    setHasSeries(seriesFind);
    setSeriesCategory(seiresFilter);
  }, [series]);

  return (
    <>
      {hasSeries && (
        <div className="category_container">
          <h2
            className="category_title"
            style={{ borderBottom: `2px solid ${categoryColor}` }}
          >
            {categoryName}
          </h2>
          <CarrouselCard seriesCategory={seriesCategory} />
        </div>
      )}
    </>
  );
}

export default Category;
