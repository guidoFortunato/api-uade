/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import clsx from "clsx";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserProvider";
import { getMoviesData, postMoviesData } from "../../helpers";

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
  const [like, setLike] = useState(
    listMovies?.find((listMovie) => listMovie.id === movie.id) ? true : false
  );
  const [favorite, setFavorite] = useState(
    favoritesMovies?.find((favorite) => favorite.id === movie.id) ? true : false
  );

  // console.log({like})

  // const handleLike = () => {
  //   setLike((prev) => !prev);
  //   // handleIconLike(!iconLike)
  //   if (like) {
  //     notifyError("Removido de tu lista");
  //   } else {
  //     notifySuccess("Agregado a tu lista");
  //   }
  //   handleListMovies(movie);
  // };

  const addFavorites = async () => {
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
          description: movie.overview,
          image: movie.backdrop_path,
          movieId: movie.id,
          // media_type: movie.title ? "movie" : "tv",
          // release_date: movie.release_date ? movie.release_date : "",
        }),
      });

      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        return;
      }

      setFavorite((prev) => !prev);

      notifySuccess("Agregado a tus favoritos");
      // handleFavoritesMovies(movie);
    } catch (error) {
      console.log({ error });
    }
  };
  const removeFavorites = async () => {
    console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch(
        `http://localhost:4000/api/user/favorites/${movie._id}`,
        {
          method: "DELETE",
          headers: myHeaders,
        }
      );
      console.log({res})
      const data = await res.json();
      // console.log({ data });

      if (!data.ok) {
        return;
      }

      setFavorite((prev) => !prev);

      notifyError("Removido de tus favoritos");
      // handleFavoritesMovies(movie);
    } catch (error) {
      console.log({ error });
    }
  };
  const addWatched = async () => {
    // console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch("http://localhost:4000/api/user/watched/", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          title: movie.title ? movie.title : movie.name,
          description: movie.overview,
          image: movie.backdrop_path,
          movieId: movie.id,
          // media_type: movie.title ? "movie" : "tv",
          // release_date: movie.release_date ? movie.release_date : "",
        }),
      });

      const data = await res.json();
      console.log({ data });

      if (!data.ok) {
        return;
      }

      setLike((prev) => !prev)

      notifySuccess("Agregado a tus vistas");
      // handleListMovies(movie);
    } catch (error) {
      console.log({ error });
    }
  };
  const removeWatched = async () => {
    // console.log({ movie });
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));

      const res = await fetch(
        `http://localhost:4000/api/user/watched/${movie._id}`,
        {
          method: "DELETE",
          headers: myHeaders,
        }
      );

      const data = await res.json();
      // console.log({ data });

      if (!data.ok) {
        return;
      }

      setLike((prev) => !prev)

      notifyError("Removido de tus vistas");
      // handleListMovies(movie);
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
