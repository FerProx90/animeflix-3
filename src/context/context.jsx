import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../hooks/UseUser";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
