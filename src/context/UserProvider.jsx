import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers/";

const { VITE_API_URL } = getEnvVariables();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")) || false);
  const [movies, setMovies] = useState([]);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState( JSON.parse(localStorage.getItem("favorites")) || [] );
  const [iconLike, setIconLike] = useState(false);
  const [iconFavorite, setIconFavorite] = useState(false);

  // const [searchKey, setSearchKey] = useState([]);

  useEffect(() => {

    const getMovies = async () => {
      const data = await getData( `${VITE_API_URL}movie/now_playing` );
      // console.log({ data });
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
    console.log({ movie });

    const isFavorite = favoritesMovies.some( (favoriteMovie) => favoriteMovie.id === movie.id );

    if (!isFavorite) {
      const updatedFavorites = [...favoritesMovies, movie];
      console.log({updatedFavorites})
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
    } else {
      const updatedFavorites = favoritesMovies.filter( favoriteMovie => favoriteMovie.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
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
