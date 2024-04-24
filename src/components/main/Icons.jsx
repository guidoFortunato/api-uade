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
      {like ? (
        <FaHeart
          onClick={handleLike}
          className="absolute text-red-500 top-1 left-1 cursor-pointer"
        />
      ) : (
        <FaRegHeart
          onClick={handleLike}
          className="absolute top-1 left-1 text-gray-300 cursor-pointer"
        />
      )}
      {favorite ? (
        <FaStar
          onClick={handleFavorites}
          className="absolute text-yellow-300 top-1 left-6 cursor-pointer"
        />
      ) : (
        <FaRegStar
          onClick={handleFavorites}
          className="absolute top-1 left-6 text-gray-300 cursor-pointer"
        />
      )}
    </span>
  );
};
