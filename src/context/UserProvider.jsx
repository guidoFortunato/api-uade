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
  const [upcomingMovies, setUpcomingMoviesg] = useState([]);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState( JSON.parse(localStorage.getItem("favorites")) || [] );

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/now_playing`
      );
      // console.log({ data });
      setNowPlayingMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(`https://api.themoviedb.org/3/movie/popular`);
      // console.log({ data });
      setPopularMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/top_rated`
      );
      // console.log({ data });
      setTopRatedMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(`https://api.themoviedb.org/3/movie/upcoming`);
      // console.log({ data });
      setUpcomingMoviesg(data.results);
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

  return (
    <UserContext.Provider
      value={{
        auth,
        favoritesMovies,
        handleAuth,
        handleFavoritesMovies,
        handleSearchBar,
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
