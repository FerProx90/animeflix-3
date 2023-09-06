import { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export default useUser;
