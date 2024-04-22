import { useContext } from "react";
import { MovieCard } from "../../components";
import { UserContext } from "../../context/UserProvider";
import { getEnvVariables } from "../../helpers";

const { VITE_API_IMAGE } = getEnvVariables();

export const Favorites = () => {
  const { favoritesMovies } = useContext(UserContext);
  // console.log({favoritesMovies})
  return (
    <>
      <h3 className="text-white text-center text-xl md:text-3xl mb-10">
        Mis películas/series favoritas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {favoritesMovies.length > 0 ? (
          favoritesMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : "https://placehold.co/300x170"
              }
              description={movie.overview}
              movie={movie}
            />
          ))
        ) : (
          <p className="text-white text-sm">
            No hay películas/series favoritas por el momento
          </p>
        )}
      </div>
    </>
  );
};
