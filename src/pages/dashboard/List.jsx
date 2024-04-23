import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { MovieCard } from "../../components";

export const List = () => {
  const { listMovies } = useContext(UserContext);
  // console.log({favoritesMovies})
  return (
    <div className="container px-10 py-10 mx-auto">
      <h3 className="text-white text-center text-xl md:text-3xl mb-10">
        Mi Lista
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {listMovies.length > 0 ? (
          listMovies.map((movie) => (
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
          <p className="text-white text-sm">Su lista se encuentra vacía</p>
        )}
      </div>
    </div>
  );
};
