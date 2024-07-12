import { useContext } from "react";
import { MovieCard } from "../../components";
import { UserContext } from "../../context/UserProvider";

export const List = () => {
  const { listMovies } = useContext(UserContext);
  // console.log({listMovies})
  return (
    <>
      <div className="w-full h-[200px] md:h-[250px] relative">
        <img
          src="/FondoFAV3.jpeg"
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="w-full h-full absolute top-0 bg-black bg-opacity-85" />
        <h3 className="text-white text-center text-xl md:text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute whitespace-nowrap capitalize">
          Vistas
        </h3>
      </div>
      <div className="container px-10 py-10 mx-auto">
        {listMovies?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {listMovies.map((movie,index) => (
              <MovieCard
              key={index}
              title={movie.title}
              image={
                movie.image
                  ? `https://image.tmdb.org/t/p/original${movie.image}`
                  : "https://placehold.co/3840x2160"
              }
              movieId={movie.movieId}
              movie={movie}
              mediaType={ movie.media_type ? movie.media_type : movie.known_for ? "person" : movie.name ? "tv" : "movie"}
            />
            ))}
          </div>
        ) : (
          <p className="text-white text-center text-sm">
            Su lista se encuentra vacía
          </p>
        )}
      </div>
    </>
  );
};
