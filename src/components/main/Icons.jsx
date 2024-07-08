/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import clsx from "clsx";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserProvider";
import { Spinner } from "../Spinner";

const notifySuccess = (text) => {
  toast.success(text, {
    duration: 2000,
  });
};
const notifyError = (text) => {
  toast.error(text, {
    duration: 2000,
  });
};

export const Icons = ({ movie, isCard = false }) => {
  const {
    handleFavoritesMovies,
    handleListMovies,
    favoritesMovies,
    listMovies,
  } = useContext(UserContext);
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // console.log({favoritesMovies})

  useEffect(() => {
    setLike(
      listMovies?.find((listMovie) => movie.movieId ? listMovie.movieId === movie.movieId : listMovie.movieId === movie.id.toString())
    );
    setFavorite(
      favoritesMovies?.find((favorite) => movie.movieId ? favorite.movieId === movie.movieId : favorite.movieId === movie.id.toString())
    );
  }, [favoritesMovies, listMovies]);

  const { pathname } = useLocation();

  // if (movie.id  === 467244) {
  //   console.log({movie})
  //   console.log({favoritesMovies})
    
  // }

  const addFavorites = async () => {
    console.log("entra a addFavorites");
    console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch("http://localhost:4000/api/user/favorites/", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          title: movie.title ? movie.title : movie.name,
          image: movie.image
            ? movie.image
            : movie.backdrop_path
            ? movie.backdrop_path
            : movie.poster_path,
          movieId: movie.movieId ? movie.movieId : movie.id.toString(),
        }),
      });

      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        return;
      }

      setFavorite((prev) => !prev);

      notifySuccess("Agregado a tus favoritos");
      handleFavoritesMovies(data.movie);
    } catch (error) {
      console.log({ error });
    }
  };

  const removeFavorites = async () => {
    console.log("entra a removeFavorites");
    console.log({ movie });
    // const pathUrl = pathname === "/vistas" ? "watched" : "favorites";
    // console.log({pathUrl})

    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch(
        `http://localhost:4000/api/user/favorites/${
          movie.movieId ? movie.movieId : movie.id
        }`,
        {
          method: "DELETE",
          headers: myHeaders,
          // body: JSON.stringify({ isIdDb: movie._id ? true : false }),
        }
      );
      // console.log({res})
      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        console.log({ data });
        return;
      }

      setFavorite((prev) => !prev);

      notifyError("Removido de tus favoritos");
      handleFavoritesMovies(movie);
    } catch (error) {
      console.log({ error });
    }
  };

  const addWatched = async () => {
    console.log("entra a addWatched");
    console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch("http://localhost:4000/api/user/watched/", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          title: movie.title ? movie.title : movie.name,
          image: movie.image
            ? movie.image
            : movie.backdrop_path
            ? movie.backdrop_path
            : movie.poster_path,
          movieId: movie.movieId ? movie.movieId : movie.id.toString(),
        }),
      });

      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        return;
      }

      setLike((prev) => !prev);

      notifySuccess("Agregado a tus vistas");
      handleListMovies(data.movie);
    } catch (error) {
      console.log({ error });
    }
  };

  const removeWatched = async () => {
    console.log("entra a removeWatched");
    // const pathUrl = pathname === "/favoritos" ? "favorites" : "watched";
    console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch(
        `http://localhost:4000/api/user/watched/${
          movie._id ? movie._id : movie.id.toString()
        }`,
        {
          method: "DELETE",
          headers: myHeaders,
        }
      );

      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        return;
      }

      setLike((prev) => !prev);

      notifyError("Removido de tus vistas");
      handleListMovies(movie);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <span className={isCard ? "" : "relative"}>
      {favorite ? (
        <>
          <FaHeart
            onClick={removeFavorites}
            className={clsx("absolute text-red-500 top-1 cursor-pointer", {
              "left-1 text-lg": isCard,
              "left-0 text-xl": !isCard,
            })}
          />
        </>
      ) : (
        <>
          <FaRegHeart
            onClick={addFavorites}
            className={clsx("absolute text-gray-300 top-1 cursor-pointer", {
              "left-1 text-lg": isCard,
              "left-0 text-xl": !isCard,
            })}
          />
        </>
      )}
      {like ? (
        <FaStar
          onClick={removeWatched}
          // className={`absolute text-yellow-300 top-1 left-7 ${ isCard ? "text-lg" : "text-xl" } cursor-pointer`}
          className={clsx(
            "absolute text-yellow-300 top-1 left-7 cursor-pointer",
            {
              "text-lg": isCard,
              "text-xl": !isCard,
            }
          )}
        />
      ) : (
        <FaRegStar
          onClick={addWatched}
          // className={`absolute top-1 left-7 text-gray-300 ${ isCard ? "text-lg" : "text-xl" } cursor-pointer`}
          className={clsx(
            "absolute top-1 left-7 text-gray-300 cursor-pointer",
            {
              "text-lg": isCard,
              "text-xl": !isCard,
            }
          )}
        />
      )}
    </span>
  );
};
