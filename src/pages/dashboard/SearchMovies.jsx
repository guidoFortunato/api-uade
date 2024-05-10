import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MovieCard, Spinner } from "../../components";
import { getData } from "../../helpers";

// const { VITE_API_URL, VITE_API_IMAGE } = getEnvVariables();

export const SearchMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState([]);
  const { pathname, search } = useLocation();
  const query = search.split("=")[1];
  const paramSearch = (pathname.split("/")[2] + search).split("=")[0] + "=";

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getFullData = async () => {
        const data = await getData(
          `https://api.themoviedb.org/3/search/multi?query=${query}&language=es-ES`
        );

        console.log({ data });
        setMovies(data.results);
        if (data.results.length === 0) {
          setStatus(false);
          return;
        }
        setStatus(true);
      };

      getFullData();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [query, search]);

  if (isLoading) return <Spinner />;
  if (status === null) return <Spinner />;
  if (paramSearch !== "search?q=") return <Navigate to="/" />;

  return (
    <>
      <div className="w-full h-[200px] md:h-[250px] relative">
        <img
          src="/FondoFAV5.jpeg"
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="w-full h-full absolute top-0 bg-black bg-opacity-85" />
        <h3 className="text-white text-center text-xl md:text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute whitespace-nowrap capitalize">
          Búsqueda: "{query.split("-").join(" ")}"
        </h3>
      </div>
      <div className="container px-10 py-10 mx-auto">
        {status ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title ? movie.title : movie.name}
                image={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : movie.profile_path
                    ? `https://image.tmdb.org/t/p/original${movie.profile_path}`
                    : movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : "https://placehold.co/3840x2160"
                }
                isProfile={true}
                description={movie.overview}
                movie={movie}
                mediaType={movie.media_type}
              />
            ))}
          </div>
        ) : (
          <div
            className="mt-10 flex justify-center mx-auto p-4 mb-4 text-sm"
            role="alert"
          >
            <span className="sr-only">Info</span>
            <div>
              <span className="text-lg text-center text-white flex justify-center items-center flex-col">
                <img
                  className="w-60 lg:w-1/2"
                  src="https://www.tuentrada.com/teatro/gran-rex/imagenes/error.png"
                  alt="no hay películas"
                />
                No se encontraron coincidencias
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
