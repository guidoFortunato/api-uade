import { useContext } from "react";
import { MovieCard } from "../components"
import { UserContext } from "../context/UserProvider";
import { getEnvVariables } from "../helpers";

const { VITE_API_IMAGE } = getEnvVariables();

export const Favorites = () => {
  const { favoritesMovies } = useContext(UserContext);
  // console.log({favoritesMovies})
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      { favoritesMovies.length > 0 ? favoritesMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={ movie.backdrop_path ? `${VITE_API_IMAGE}${movie.backdrop_path}` : "https://placehold.co/300x170" }
          description={movie.overview}
          movie={movie}
        />
      )) : <p className="text-white">No hay películas favoritas por el momento</p>}
    </div>
  )
}