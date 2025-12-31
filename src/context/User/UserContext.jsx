import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [servicelist, setServiceList] = useState();
  const [requsetedId, setRequestedId] = useState("");
  return (
    <UserContext.Provider
      value={{
        expand,
        setExpand,
        servicelist,
        setServiceList,
        requsetedId,
        setRequestedId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);
