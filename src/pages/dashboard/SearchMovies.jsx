import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { MovieCard, Spinner } from "../../components";
import { getData } from "../../helpers";

export const SearchMovies = () => {
  const { selectedOption } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState([]);
  const { pathname, search } = useLocation();
  const query = search.split("=")[1];
  const paramSearch = (pathname.split("/")[2] + search).split("=")[0] + "=";

  const option = selectedOption === "Películas" ? "movie" : selectedOption === "Series" ? "tv" : "person"
  // console.log({option})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  // TODO: dependencia de selectedOption

  useEffect(() => {
    try {
      setIsLoading(true);
      const getFullData = async () => {
        const data = await getData(
          `https://api.themoviedb.org/3/search/${option}?query=${query}&language=es-ES`
        );
        // console.log({data})
        const { results } = data
        // console.log({results})
        if (results.length === 0) {
          setStatus(false);
          return;
        }
        // const newResults = results.filter( item => item.media_type !== "person" )
        setMovies(results);
        setStatus(true);
      };

      getFullData();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [query, search, selectedOption]);

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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
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
                mediaType={ movie.media_type ? movie.media_type : movie.known_for ? "person" : movie.name ? "tv" : "movie"}
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
