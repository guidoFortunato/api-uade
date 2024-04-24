/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { UserContext } from "../../context/UserProvider";

export const Icons = ({movie, isCard}) => {
  const { handleFavoritesMovies, handleListMovies } = useContext(UserContext);
  // console.log({movie})
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
    handleListMovies(movie);
  };

  const handleFavorites = () => {
    setFavorite((prev) => !prev);
    // handleIconFavorites(!iconFavorite);
    handleFavoritesMovies(movie);
  };
  return (
    <span className={isCard ? "" : "relative"}>
      {favorite ? (
        <FaHeart
          onClick={handleFavorites}
          className={`absolute text-red-500 top-1 ${ isCard ? "left-1" : "left-0 text-xl" } cursor-pointer`}
        />
      ) : (
        <FaRegHeart
          onClick={handleFavorites}
          className={`absolute top-1 ${ isCard ? "left-1" : "left-0 text-xl" } text-gray-300 text-lg cursor-pointer`}
        />
      )}
      {like ? (
        <FaStar
          onClick={handleLike}
          className={`absolute text-yellow-300 top-1 left-7 ${ isCard ? "text-lg" : "text-xl" } cursor-pointer`}
        />
      ) : (
        <FaRegStar
          onClick={handleLike}
          className={`absolute top-1 left-7 text-gray-300 ${ isCard ? "text-lg" : "text-xl" } cursor-pointer`}
        />
      )}
    </span>
  );
};
