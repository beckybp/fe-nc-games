import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  console.log(props);
  const [user, setUser] = useState({ username: "jessjelly" });
  return <UserContext.Provider></UserContext.Provider>;
};
