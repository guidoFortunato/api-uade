import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);

  const handleAuth = (user) => {
    setAuth(user);
  };

  return (
    <UserContext.Provider value={{ auth, handleAuth }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
