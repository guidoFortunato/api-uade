import { useContext } from "react";
import { MovieCard } from "../components"
import { UserContext } from "../context/UserProvider";

export const Favorites = () => {
  const { favoritesMovies } = useContext(UserContext);
  // console.log({favoritesMovies})
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      { favoritesMovies.length > 0 ? favoritesMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.backdrop_path}
          description={movie.overview}
          movie={movie}
        />
      )) : <p className="text-white">No hay películas favoritas por el momento</p>}
    </div>
  )
}