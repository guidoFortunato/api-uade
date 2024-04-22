/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

// import { getEnvVariables } from "../../helpers";
import { UserContext } from "../../context/UserProvider";

// const { VITE_API_IMAGE } = getEnvVariables();

export const MovieCard = ({ title, image, description, movie }) => {
  const { handleFavoritesMovies, handleListMovies } = useContext(UserContext);
  const newTitle = title.charAt().toUpperCase() + title.substring(1).toLowerCase()
  console.log({movie})

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
    handleListMovies(movie)
  };

  const handleFavorites = () => {
    setFavorite((prev) => !prev);
    // handleIconFavorites(!iconFavorite);
    handleFavoritesMovies(movie);
  };

  return (
    <div className="rounded-lg relative hover:cursor-pointer mx-1">
      <Link to="/hola">
        <img className="rounded-lg" src={image} alt={title} />
      </Link>
      {/* <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-lg transition-all"> */}
      <div className="absolute rounded-lg inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.19)] to-[rgba(30,16,3,0.13)]" />
      <div className="rounded-lg text-white opacity-100 transition duration-500 ease-in-out h-full from-[rgb(0,0,0)] to-[rgba(30,16,3,0.13)] bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
        <span className="whitespace-normal text-[0.65rem] md:text-xs font-semibold flex justify-center items-end h-full text-center pb-2 capitalize">
          {newTitle}
        </span>
        <span>
          {like ? (
            <FaHeart
              onClick={handleLike}
              className="absolute text-red-500 top-1 left-2"
            />
          ) : (
            <FaRegHeart
              onClick={handleLike}
              className="absolute top-1 left-2 text-gray-300"
            />
          )}
          {favorite ? (
            <FaStar
              onClick={handleFavorites}
              className="absolute text-yellow-300 top-1 left-7"
            />
          ) : (
            <FaRegStar
              onClick={handleFavorites}
              className="absolute top-1 left-7 text-gray-300"
            />
          )}
        </span>
      </div>
    </div>
  );
};
