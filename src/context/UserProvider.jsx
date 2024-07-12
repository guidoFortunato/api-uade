import { createContext, useEffect, useState } from "react";
import { getData, getGenres, getMoviesData } from "../helpers/";
import Cookie from "js-cookie";

// const { VITE_API_URL } = getEnvVariables();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token")) ? true : false
  );
  const [dataUser, setDataUser] = useState("");
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [totalGenres, setTotalGenres] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [seriesGenres, setSeriesGenres] = useState([]);
  const [imageHome, setImageHome] = useState("");
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    Cookie.get("selected") || "Películas"
  );
  const [dataMovieDashboard, setDataMovieDashboard] = useState();

  // console.log({favoritesMovies})

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=4`
      );
      // console.log({ data });
      setNowPlayingMovies(data.results);
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append(
            "x-token",
            JSON.parse(localStorage.getItem("token"))
          );
          const res = await fetch("http://localhost:4000/api/auth/datauser", {
            method: "GET",
            headers: myHeaders,
          });
          // console.log({ res });
          const data = await res.json();
          // console.log({ data });
          setDataUser(data);
        } catch (error) {
          console.log({ error });
        }
      };

      getUser();
    }
  }, [token]);

  useEffect(() => {
    if (dataUser !== "") {
      const getFavoritesMovies = async () => {
        // console.log({dataUser})
        const data = await getMoviesData(`/user/favorites/${dataUser.uid}`);
        setFavoritesMovies(data.favoriteMovies);
      };
      getFavoritesMovies();
    }
  }, [dataUser]);

  useEffect(() => {
    if (dataUser !== "") {
      const getVistasMovies = async () => {
        const data = await getMoviesData(`/user/watched/${dataUser.uid}`);
        setListMovies(data.watchedMovies);
      };
      getVistasMovies();
    }
  }, [dataUser]);

  useEffect(() => {
    if (dataUser !== "") {
      const getToWatchMovies = async () => {
        const data = await getMoviesData(`/user/to-watch/${dataUser.uid}`);
        // console.log({data})
        setToWatchMovies(data.toWatchMovies);
      };
      getToWatchMovies();
    }
  }, [dataUser]);

  useEffect(() => {
    const getDataGenres = async () => {
      const dataGenresMovies = await getData(
        `https://api.themoviedb.org/3/genre/movie/list?language=es`
      );
      setMoviesGenres(dataGenresMovies.genres);
      const dataGenresSeries = await getData(
        `https://api.themoviedb.org/3/genre/tv/list?language=es`
      );
      setSeriesGenres(dataGenresSeries.genres);
      // console.log({ dataGenresMovies, dataGenresSeries });
      const dataGenres = getGenres(
        dataGenresMovies.genres,
        dataGenresSeries.genres
      );
      // console.log({dataGenres})

      setTotalGenres(dataGenres);
    };
    getDataGenres();
  }, []);

  useEffect(() => {
    const getDataMovieDashboard = async () => {
      const data = await getData(
        "https://api.themoviedb.org/3/find/thegodfather?external_source=facebook_id&language=es-ES"
      );
      // console.log({ data });
      setDataMovieDashboard(data.movie_results[1]);
    };
    getDataMovieDashboard();
  }, []);

  useEffect(() => {
    const getImageMovie = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/238/images`
      );
      // console.log({ data });
      setImageHome(data.backdrops[1].file_path);
    };
    getImageMovie();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=2`
      );
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
      const data = await getData(
        `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=3`
      );
      // console.log({ data });
      setUpcomingMovies(data.results);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getSeries = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=1'`
      );
      // console.log({ data });
      setTopRatedSeries(data.results);
    };
    getSeries();
  }, []);

  const handleAuth = (user) => {
    setAuth(user);
  };

  const handleToken = (value) => {
    setToken(value);
  };

  const handleSearchBar = (boolean) => {
    setSearchBarOpen(boolean);
  };

  const handleSelected = (value) => {
    setSelectedOption(value);
  };

  const handleFavoritesMovies = (movie) => {
    console.log({ handleFavoritesMovie: movie });
    let media_type_person = "person";

    if (movie.known_for) {
      const { title: name, image: profile_path, movieId: id } = movie;

      
      const existInFavorite = favoritesMovies.some(
        (favoriteMovie) =>
          favoriteMovie.id.toString() === id.toString() &&
          favoriteMovie.name.toLowerCase() === name.toLowerCase()
      );
  
      if (!existInFavorite) {
        const updatedFavorites = [
          ...favoritesMovies,
          { title, image, movieId: id, media_type: media_type_person },
        ];
        setFavoritesMovies(updatedFavorites);
      } else {
        const updatedFavorites = favoritesMovies.filter(
          (favoriteMovie) =>
            favoriteMovie.id.toString() !== id.toString() ||
            favoriteMovie.name.toLowerCase() !== name.toLowerCase()
        );
        setFavoritesMovies(updatedFavorites);
      }






    } else {
      const { title, _id, image, movieId, media_type } = movie;
      const existInFavorite = favoritesMovies.some(
        (favoriteMovie) =>
          favoriteMovie.movieId.toString() === movieId.toString() &&
          favoriteMovie.media_type === media_type &&
          favoriteMovie.title.toLowerCase() === title.toLowerCase()
      );
  
      if (!existInFavorite) {
        const updatedFavorites = [
          ...favoritesMovies,
          { title, _id, image, movieId, media_type },
        ];
        setFavoritesMovies(updatedFavorites);
      } else {
        const updatedFavorites = favoritesMovies.filter(
          (favoriteMovie) =>
            favoriteMovie.movieId.toString() !== movieId.toString() ||
            favoriteMovie.media_type !== media_type ||
            favoriteMovie.title.toLowerCase() !== title.toLowerCase()
        );
        setFavoritesMovies(updatedFavorites);
      }
    }

    
  };

  const handleListMovies = async (movie) => {
    // console.log({handleListMovie: movie})

    // TODO: falta si es actor

    const { title, _id, image, movieId, media_type } = movie;

    const isList = listMovies.some(
      (listMovie) =>
        listMovie.movieId.toString() === movieId.toString() &&
        listMovie.media_type === media_type &&
        listMovie.title.toLowerCase() === title.toLowerCase()
    );

    if (!isList) {
      const updatedList = [
        ...listMovies,
        { title, _id, image, movieId, media_type },
      ];
      setListMovies(updatedList);
    } else {
      const updatedList = listMovies.filter(
        (listMovie) =>
          listMovie.movieId.toString() !== movieId.toString() ||
          listMovie.media_type !== media_type ||
          listMovie.title.toLowerCase() !== title.toLowerCase()
      );
      setListMovies(updatedList);
    }
  };

  const handleToWatchMovies = async (movie) => {
    // console.log({handleToWatchMovie: movie})

    // TODO: falta si es actor

    const { title, _id, image, movieId, media_type } = movie;

    const isinToWatch = toWatchMovies.some(
      (movie) =>
        movie.movieId.toString() === movieId.toString() &&
        movie.media_type === media_type &&
        movie.title.toLowerCase() === title.toLowerCase()
    );

    if (!isinToWatch) {
      const updatedList = [
        ...toWatchMovies,
        { title, _id, image, movieId, media_type },
      ];
      setToWatchMovies(updatedList);
    } else {
      const updatedList = toWatchMovies.filter(
        (movie) =>
          movie.movieId.toString() !== movieId.toString() ||
          movie.media_type !== media_type ||
          movie.title.toLowerCase() !== title.toLowerCase()
      );
      setToWatchMovies(updatedList);
    }
  };

  return (
    <UserContext.Provider
      value={{
        auth,
        dataMovieDashboard,
        dataUser,
        favoritesMovies,
        handleAuth,
        handleFavoritesMovies,
        handleListMovies,
        handleSearchBar,
        handleSelected,
        handleToken,
        handleToWatchMovies,
        imageHome,
        listMovies,
        moviesGenres,
        nowPlayingMovies,
        popularMovies,
        searchBarOpen,
        selectedOption,
        seriesGenres,
        topRatedMovies,
        topRatedSeries,
        totalGenres,
        toWatchMovies,
        upcomingMovies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
