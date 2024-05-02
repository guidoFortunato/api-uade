/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import clsx from "clsx";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserProvider";

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
  const { handleFavoritesMovies, handleListMovies } = useContext(UserContext);
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("list"))?.find(
      (listMovie) => listMovie.id === movie.id
    )
      ? true
      : false
  );
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites"))?.find(
      (favorite) => favorite.id === movie.id
    )
      ? true
      : false
  );

  const handleLike = () => {
    setLike((prev) => !prev);
    // handleIconLike(!iconLike)
    if (like) {
      notifyError("Removido de tu lista");
    } else {
      notifySuccess("Agregado a tu lista");
    }
    handleListMovies(movie);
  };

  const handleFavorites = () => {
    setFavorite((prev) => !prev);
    // handleIconFavorites(!iconFavorite);
    if (favorite) {
      notifyError("Removido de tus favoritos");
    } else {
      notifySuccess("Agregado a tus favoritos");
    }
    handleFavoritesMovies(movie);
  };

  return (
    <span className={isCard ? "" : "relative"}>
      {favorite ? (
        <>
          <FaHeart
            onClick={handleFavorites}
            className={clsx("absolute text-red-500 top-1 cursor-pointer", {
              "left-1 text-lg": isCard,
              "left-0 text-xl": !isCard,
            })}
          />
        </>
      ) : (
        <>
          <FaRegHeart
            onClick={handleFavorites}
            className={clsx("absolute text-gray-300 top-1 cursor-pointer", {
              "left-1 text-lg": isCard,
              "left-0 text-xl": !isCard,
            })}
          />
        </>
      )}
      {like ? (
        <FaStar
          onClick={handleLike}
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
          onClick={handleLike}
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
