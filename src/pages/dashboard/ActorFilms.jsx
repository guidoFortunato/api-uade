import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { MovieCard, Spinner } from "../../components";
import { getData, getNameMonth } from "../../helpers";

// const { VITE_API_URL, VITE_API_IMAGE } = getEnvVariables();

export const ActorFilms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState([]);
  const [status, setStatus] = useState(null);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  // const { pathname, search } = useLocation();
  const { name, id } = useParams();
  // console.log({name,id})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getFullData = async () => {
        const dataActor = await getData(
          `https://api.themoviedb.org/3/person/${id}?language=es-ES`
        );
        const dataMoviesActor = await getData(
          `https://api.themoviedb.org/3/search/person?query=${name}&language=es-ES&page=1`
        );

        console.log({ dataActor });
        // console.log({ dataMoviesActor });
        if (dataMoviesActor.results.length === 0) {
          setStatus(false);
          return;
        }
        setActor(dataActor)
        setMovies(dataMoviesActor.results[0].known_for);
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
    <>
     <div className="container grid grid-cols-1 lg:grid-cols-6 mx-auto mt-10 text-white px-10">
      <div className="md:col-span-2 mx-auto">
        <img
          className="hidden lg:block h-full object-cover"
          src={ actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}` : actor.backdrop_path ? `https://image.tmdb.org/t/p/original/${actor.backdrop_path}` : "https://placehold.co/2000x3000" }
          alt={actor.name}
        />
        <img
          className="block lg:hidden"
          src={ actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}` : actor.poster_path ? `https://image.tmdb.org/t/p/original/${actor.poster_path}` : "https://placehold.co/3840x3000" }
          alt={actor.name}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:col-span-4 bg-violet-dark">
        <div className="p-5 lg:col-span-2">
          <div className="mb-7 lg:mb-10">
            <h3 className="text-lg md:text-xl mb-2 font-semibold capitalize text-center lg:text-left">
              {actor.name}
            </h3>
          </div>
          <div className="flex flex-col ">
            {actor.biography?.length > 0 && (
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg mb-2 font-semibold">
                  Descripción
                </h3>
                <span className="text-sm md:text-base">
                  {actor.biography.slice(0,1100) + "..."}
                </span>
              </div>
            )}
          
           
          </div>
        </div>
        <div className="md:col-span-1 p-5 break-words lg:bg-[#993fecdc]">
         
          <div className="mb-4">
            {actor.birthday && (
              <div>

              <p className="text-base md:text-lg font-semibold">
                Fecha de nacimiento
              </p>
              <p>{`${actor.birthday.split("-")[2]} de ${getNameMonth(actor.birthday.split("-")[1])} de ${actor.birthday.split("-")[0]}`}</p>
              </div>
            )}
           
          </div>
          <div className="mb-4">
            {actor.place_of_birth && (
              <div>

              <p className="text-base md:text-lg font-semibold">
                Lugar de nacimiento
              </p>
              <p>{actor.place_of_birth}</p>
              </div>
            )}
           
          </div>
          
         
        </div>
      </div>
    </div>
      
      <div className="container px-10 py-10 mx-auto">
        <h2 className="text-base md:text-lg font-semibold text-white mb-5">Películas/series de {actor.name}</h2>
        
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
    </>
  );
};
