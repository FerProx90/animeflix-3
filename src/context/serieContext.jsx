import { useState } from "react";
import { SerieContext } from "../hooks/UseSerie";

export const SerieContextProvider = ({ children }) => {
  const [serieName, setSerieName] = useState();

  return (
    <SerieContext.Provider value={{ serieName, setSerieName }}>
      {children}
    </SerieContext.Provider>
  );
};

export default SerieContextProvider;
