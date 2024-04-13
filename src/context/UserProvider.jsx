import { createContext, useEffect, useState } from "react";
import { getEnvVariables } from "../helpers/";

const { VITE_API_URL, VITE_API_KEY } = getEnvVariables();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [iconLike, setIconLike] = useState(false);
  const [iconFavorite, setIconFavorite] = useState(false);
  // const [searchKey, setSearchKey] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `${VITE_API_URL}/movie/now_playing?api_key=${VITE_API_KEY}`
      );
      const data = await res.json();
      console.log({ data });
      setMovies(data.results);
    };
    getMovies();
  }, []);

  const handleAuth = (user) => {
    setAuth(user);
  };

  const handleSearchBar = (boolean) => {
    setSearchBarOpen(boolean);
  };

  const handleIconLike = (boolean) => {
    setIconLike(boolean);
  };

  const handleIconFavorites = (boolean) => {
    setIconFavorite(boolean);
  };

  const handleFavoritesMovies = (movie) => {
    console.log({movie})
    
    const isFavorite = favoritesMovies.some( favoriteMovie => favoriteMovie.id === movie.id)
    if (!isFavorite) {
      setFavoritesMovies([...favoritesMovies, movie]);
    }


  };

  return (
    <UserContext.Provider
      value={{
        auth,
        favoritesMovies,
        handleAuth,
        handleFavoritesMovies,
        handleIconFavorites,
        handleIconLike,
        handleSearchBar,
        iconFavorite,
        iconLike,
        movies,
        searchBarOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
