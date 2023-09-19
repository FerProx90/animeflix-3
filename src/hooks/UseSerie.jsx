import { createContext, useContext } from "react";

export const SerieContext = createContext();

export const useSerie = () => {
  const context = useContext(SerieContext);
  return context;
};

export default useSerie;
