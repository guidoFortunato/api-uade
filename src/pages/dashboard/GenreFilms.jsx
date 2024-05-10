/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { MovieCard, Spinner } from "../../components";
import { UserContext } from "../../context/UserProvider";

// const { VITE_API_URL, VITE_API_IMAGE } = getEnvVariables();

export const GenreFilms = () => {
  const { selected, topRatedMovies, topRatedSeries } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [films, setFilms] = useState(null);
  const navigate = useNavigate();
  // const { pathname, search } = useLocation();
  const { name, id } = useParams();
  console.log({ selected });
  console.log({films})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      let newFilms;
      if (selected === "movie") {
        newFilms = topRatedMovies.filter((item) =>
          item.genre_ids.includes(Number(id))
        );
        // console.log({ selectedPeliculas: newFilms });
      }
      if (selected === "tv") {
        newFilms = topRatedSeries.filter((item) =>
          item.genre_ids.includes(Number(id))
        );
        // console.log({ selectedSeries: newFilms });
      }
      if (selected === "both") {
        const movieFilms = topRatedMovies.filter(item =>
          item.genre_ids.includes(Number(id))
        );
        const tvFilms = topRatedSeries.filter(item =>
          item.genre_ids.includes(Number(id))
        );
        newFilms = movieFilms.concat(tvFilms);
        // console.log({ selectedSeries: newFilms });
      }
      console.log({newFilms})
      setFilms(newFilms);

      setStatus(true);
    } catch (error) {
      console.log({ error });
      setStatus(false);
    } finally {
      setIsLoading(false);
    }
  }, [name, id, topRatedMovies, topRatedSeries, selected]);

  if (isLoading) return <Spinner />;
  if (status === null) return <Spinner />;
  if (films === null) return <Spinner />;
  if (status === false) {
    navigate("/");
    return;
  }

  return (
    <>
      <div className="w-full h-[200px] md:h-[250px] relative">
        <img
          src="/FondoFAV4.jpeg"
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="w-full h-full absolute top-0 bg-black bg-opacity-85" />
        <h3 className="text-white text-center text-xl md:text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute whitespace-nowrap capitalize">
          Género: "{name.split("-").join(" ")}"
        </h3>
      </div>
      <div className="container px-10 py-10 mx-auto">
        {films?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {films.map((movie) => (
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
                description={movie.overview}
                movie={movie}
                mediaType={movie.title ? "movie" : "tv"}
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
              <span className="font-base text-lg text-center text-white flex justify-center items-center flex-col">
                <img
                  className="w-60 lg:w-1/2"
                  src="https://www.tuentrada.com/teatro/gran-rex/imagenes/error.png"
                  alt="no hay películas"
                />
                No hay resultados por el momento
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
