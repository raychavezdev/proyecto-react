/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const userContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      name: "Raymundo Chavez",
      registered: "22/Agosto/2023",
    });
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { userContext, UserContextProvider };
