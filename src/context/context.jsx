import { useState } from "react";
import { UserContext } from "../hooks/UseUser";
import { v4 } from "uuid";
import seriesData from "../utils/utils-series";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [series, setSeries] = useState(seriesData);
  const [categories, setCategories] = useState([
    {
      id: v4(),
      name: "Accion",
      color: "#ff5733",
      description:
        "Por lo general, presentan escenas de lucha, persecuciones, explosiones y tiroteos.",
    },
    {
      id: v4(),
      name: "Horror",
      color: "#800080",
      description: "se enfoca en crear una atmósfera de miedo y tensión.",
    },
    {
      id: v4(),
      name: "Drama",
      color: "#ff00ff",
      description: "se enfoca en crear una atmósfera de miedo y tensión.",
    },
    {
      id: v4(),
      name: "Comedia",
      color: "#00bfff",
      description:
        " Género televisivo que se caracteriza por su tono humorístico y ligero.",
    },
  ]);

  return (
    <UserContext.Provider
      value={{ user, setUser, categories, setCategories, series, setSeries }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
