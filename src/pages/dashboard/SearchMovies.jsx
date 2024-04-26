import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MovieCard, Spinner } from "../../components";
import { getData, getEnvVariables } from "../../helpers";

const { VITE_API_URL, VITE_API_IMAGE } = getEnvVariables();

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
      const getMovie = async () => {
        const data = await getData(
          `https://api.themoviedb.org/3/search/movie?query=${query}`
        );
        console.log({ data });
        setMovies(data.results);
        if (data.results.length === 0) {
          setStatus(false);
          return;
        }
        setStatus(true);
      };
      getMovie();
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
      {status ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title ? movie.title : movie.name}
              image={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original//${movie.backdrop_path}`
                  : "https://placehold.co/3840x2160"
              }
              description={movie.overview}
              movie={movie}
              isMovie={movie.title ? true : false}
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
            <span className="font-semibold text-xl text-center text-white flex justify-center items-center flex-col">
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
    </>
  );
};
