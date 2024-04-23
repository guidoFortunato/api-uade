import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { Spinner } from "../../components/Spinner";

const obtenerNombreMes = (numeroMes) => {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  return meses[numeroMes - 1];
}

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();
  const splitDate = movieDetail?.release_date?.split("-")

  console.log({ movieDetail });

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES`
      );
      // console.log(data);
      setMovieDetail(data);
    };
    getMovieDetails();
  }, []);

  if (movieDetail === null) return <Spinner />;
  

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto mt-10 text-white">
      <div className="md:col-span-2">
        <img
          className="hidden lg:block "
          src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <img
          className="block lg:hidden"
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-4 bg-violet-dark">
        <div className="p-5 md:col-span-2 flex flex-col md:justify-center">
          <h3 className="text-base md:text-lg mb-2 font-semibold">
            Descripción
          </h3>
          <span className="text-sm md:text-base">
            {movieDetail.overview.length > 0
              ? movieDetail.overview
              : "Sin descripción"}
          </span>
        </div>
        <div className="md:col-span-1 p-5 break-words">
          <div className="mb-4">
          {movieDetail.genres.length > 0 && (
            <h3 className="text-base md:text-lg font-semibold">
              Género<span>{movieDetail.genres.length > 1 ? "s:" : ":"}</span>
            </h3>
          )}
          {movieDetail.genres.length > 0 &&
            movieDetail.genres.map((item) => {
              if (
                movieDetail.genres.indexOf(item) ===
                movieDetail.genres.length - 1
              ) {
                return (
                  <span key={item.id} className="whitespace-nowrap text-sm md:text-base">
                    {item.name}
                  </span>
                );
              } else {
                return (
                  <span key={item.id} className="whitespace-nowrap text-sm md:text-base">
                    {item.name},
                  </span>
                );
              }
            })}

          </div>
          <div className="mb-4">
          {movieDetail.spoken_languages.length > 0 && (
            <h3 className="text-base md:text-lg font-semibold">
              Idioma
              <span>
                {movieDetail.spoken_languages.length > 1 ? "s:" : ":"}
              </span>
            </h3>
          )}
          {movieDetail.spoken_languages.length > 0 &&
            movieDetail.spoken_languages.map((item) => {
              if (
                movieDetail.spoken_languages.indexOf(item) ===
                movieDetail.spoken_languages.length - 1
              ) {
                return (
                  <span key={item.english_name} className="whitespace-nowrap text-sm md:text-base">
                    {item.english_name}
                  </span>
                );
              } else {
                return (
                  <span key={item.english_name} className="whitespace-nowrap text-sm md:text-base">
                    {item.english_name},
                  </span>
                );
              }
            })}

          </div>
          <div>
         {
          movieDetail.release_date && (
            <>
              <h3 className="text-base md:text-lg font-semibold">Fecha de estreno:</h3>
              {/* <span className="ml-1 whitespace-nowrap text-sm md:text-base">{movieDetail.release_date}</span> */}
              <span className="whitespace-nowrap text-sm md:text-base">{`${splitDate[2]} de ${obtenerNombreMes(splitDate[1])} de ${splitDate[0]}`}</span>
            </>
          )
         }

          </div>
        </div>
      </div>
    </div>
  );
};
