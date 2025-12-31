import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [requests, setRequests] = useState(false);
  const [service, setService] = useState(false);
  const [allservice, setAllService] = useState(false);

  // create services

  const [servicename, setServicename] = useState("");
  const [providername, setProvidername] = useState("");
  const [status, setStatus] = useState(true);

  // fetched service

  const [servicelist, setServiceList] = useState();
  return (
    <AdminContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        requests,
        setRequests,
        service,
        setService,
        allservice,
        setAllService,
        servicename,
        setServicename,
        providername,
        setProvidername,
        status,
        setStatus,
        servicelist,
        setServiceList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const UseAdmin = () => useContext(AdminContext);
