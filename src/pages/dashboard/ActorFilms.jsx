import { useContext, useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { MovieCard, Spinner } from "../../components";
import { getData, getEnvVariables } from "../../helpers";

// const { VITE_API_URL, VITE_API_IMAGE } = getEnvVariables();

export const ActorFilms = () => {
  const { selected } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  // const { pathname, search } = useLocation();
  const { name } = useParams();
  // const paramSearch = (pathname.split("/")[2] + search).split("=")[0] + "=";
  // console.log({movies})

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
          `https://api.themoviedb.org/3/search/person?query=${name}&language=es-ES&page=1`
        );

        console.log({ data });
        if (data.results.length === 0) {
          setStatus(false);
          return;
        }
        setMovies(data.results[0].known_for);
        setStatus(true);
      };

      getFullData();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [name]);

  if (isLoading) return <Spinner />;
  if (status === null) return <Spinner />;
  if (status === false) {
    navigate("/");
    return;
  }

  return (
    <div className="container px-10 py-10 mx-auto">
      <h3 className="text-white text-center text-base md:text-xl whitespace-nowrap mb-8 capitalize">
        {name.split("-").join(" ")}
      </h3>
      {status ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title ? movie.title : movie.name}
              image={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : "https://placehold.co/3840x2160"
              }
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
            <span className="font-semibold text-lg text-center text-white flex justify-center items-center flex-col">
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
  );
};
