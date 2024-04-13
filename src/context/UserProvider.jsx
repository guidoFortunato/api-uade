import { createContext, useEffect, useState } from "react";
import { getEnvVariables } from "../helpers/";

const { VITE_API_URL, VITE_API_KEY } = getEnvVariables()

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const [movies, setMovies] = useState([]);
  // const [searchKey, setSearchKey] = useState([]);

  useEffect(() => {
    
    const getMovies = async() =>{
      const res = await fetch(`${VITE_API_URL}/discover/movie?api_key=${VITE_API_KEY}`)
      const data = await res.json();
      // console.log({data})
      setMovies(data.results)

    }
    getMovies()
  }, [])
  



  const handleAuth = (user) => {
    setAuth(user);
  };

  return (
    <UserContext.Provider value={{ auth, handleAuth, movies }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
