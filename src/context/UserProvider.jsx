import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers/";

const { VITE_API_URL } = getEnvVariables();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState( JSON.parse(localStorage.getItem("favorites")) || [] );
  const [listMovies, setListMovies] = useState( JSON.parse(localStorage.getItem("list")) || [] );

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=10`
      );
      // console.log({ data });
      setNowPlayingMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=4`);
      // console.log({ data });
      setPopularMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/top_rated?language=es-ES`
      );
      // console.log({ data });
      setTopRatedMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(`https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=3`);
      // console.log({ data });
      setUpcomingMovies(data.results);
    };
    getMovies();
  }, []);

  const handleAuth = (user) => {
    setAuth(user);
  };

  const handleSearchBar = (boolean) => {
    setSearchBarOpen(boolean);
  };

  const handleFavoritesMovies = (movie) => {
    // console.log({ movie });

    const isFavorite = favoritesMovies.some(
      (favoriteMovie) => favoriteMovie.id === movie.id
    );

    if (!isFavorite) {
      const updatedFavorites = [...favoritesMovies, movie];
      // console.log({updatedFavorites})
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
    } else {
      const updatedFavorites = favoritesMovies.filter(
        (favoriteMovie) => favoriteMovie.id !== movie.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
    }
  };
  const handleListMovies = (movie) => {
    // console.log({ movie });

    const isList = listMovies.some(
      (listMovie) => listMovie.id === movie.id
    );

    if (!isList) {
      const updatedList = [...listMovies, movie];
      // console.log({updatedFavorites})
      localStorage.setItem("list", JSON.stringify(updatedList));
      setListMovies(updatedList);
    } else {
      const updatedList = listMovies.filter(
        (listMovie) => listMovie.id !== movie.id
      );
      localStorage.setItem("list", JSON.stringify(updatedList));
      setListMovies(updatedList);
    }
  };

  return (
    <UserContext.Provider
      value={{
        auth,
        favoritesMovies,
        handleAuth,
        handleFavoritesMovies,
        handleListMovies,
        handleSearchBar,
        listMovies,
        nowPlayingMovies,
        popularMovies,
        searchBarOpen,
        topRatedMovies,
        upcomingMovies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
