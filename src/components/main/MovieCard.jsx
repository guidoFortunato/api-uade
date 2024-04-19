import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

import { getEnvVariables } from "../../helpers";
import { UserContext } from "../../context/UserProvider";

const { VITE_API_IMAGE } = getEnvVariables();

export const MovieCard = ({ title, image, description, movie }) => {
  const {
    handleFavoritesMovies,
    iconLike,
    iconFavorite,
    handleIconLike,
    handleIconFavorites,
  } = useContext(UserContext);

  const [like, setLike] = useState(false);
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
    // handleFavoritesMovies(movie)
  };

  const handleFavorites = () => {
    setFavorite((prev) => !prev);
    // handleIconFavorites(!iconFavorite);
    handleFavoritesMovies(movie);
  };

  return (
    <div className="rounded-lg w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <Link to="/" className="w-full h-full block">
        <img className="rounded-lg " src={image} alt={title} />
      </Link>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-lg transition-all">
        <span className="whitespace-normal text-xs md:text-sm font-semibold flex justify-center items-center h-full text-center">
          {title}
        </span>
        <span>
          {like ? (
            <FaHeart
              onClick={handleLike}
              className="absolute text-red-500 top-3 left-4 "
            />
          ) : (
            <FaRegHeart
              onClick={handleLike}
              className="absolute top-3 left-4 text-gray-300"
            />
          )}
          {favorite ? (
            <FaStar
              onClick={handleFavorites}
              className="absolute text-yellow-300 top-3 left-10 "
            />
          ) : (
            <FaRegStar
              onClick={handleFavorites}
              className="absolute top-3 left-10  text-gray-300"
            />
          )}
        </span>
      </div>
    </div>
  );
};
