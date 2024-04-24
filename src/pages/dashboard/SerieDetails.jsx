import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { Spinner } from "../../components/Spinner";

const obtenerNombreMes = (numeroMes) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return meses[numeroMes - 1];
};

export const SerieDetails = () => {
  const [serieDetail, setSerieDetail] = useState(null);
  const { id } = useParams();
  const splitDate = serieDetail?.first_air_date?.split("-");

  console.log({ serieDetail });

  useEffect(() => {
    const getSerieDetails = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/tv/${id}?language=es-ES`
      );
      console.log(data);
      setSerieDetail(data);
    };
    getSerieDetails();
  }, []);

  if (serieDetail === null) return <Spinner />;

  return (
   
    <div className="container grid grid-cols-1 lg:grid-cols-6 mx-auto mt-10 text-white">
      <div className="md:col-span-2 mx-auto">
        <img
          className="hidden lg:block "
          src={`https://image.tmdb.org/t/p/original/${serieDetail.poster_path}`}
          alt={serieDetail.name}
        />
        <img
          className="block lg:hidden"
          src={`https://image.tmdb.org/t/p/original/${serieDetail.backdrop_path}`}
          alt={serieDetail.name}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:col-span-4 bg-violet-dark">
        <div className="p-5 lg:col-span-2">
          <div className="mb-7 lg:mb-0">
            <h3 className="text-base md:text-lg mb-2 font-semibold capitalize text-center lg:text-left">
              {serieDetail.original_name}
            </h3>
          </div>
          {serieDetail.overview?.length > 0 && (
            <div className="flex flex-col h-[80%] justify-center">
              <h3 className="text-base md:text-lg mb-2 font-semibold">
                Descripción
              </h3>
              <span className="text-sm md:text-base">
                {serieDetail.overview?.length > 0
                  ? serieDetail.overview
                  : "Sin descripción"}
              </span>
            </div>
          )}
        </div>
        <div className="md:col-span-1 p-5 break-words w-full">
          <div className="mb-4 w-full">
            {serieDetail.genres?.length > 0 && (
              <h3 className="text-base md:text-lg font-semibold">
                Género<span>{serieDetail.genres.length > 1 ? "s:" : ":"}</span>
              </h3>
            )}
            {serieDetail.genres.length > 0 &&
              serieDetail.genres.map((item) => {
                if (
                  serieDetail.genres.indexOf(item) ===
                  serieDetail.genres.length - 1
                ) {
                  return (
                    <span
                      key={item.id}
                      className="text-sm md:text-base"
                    >
                      {" "}{item.name}
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={item.id}
                      className="text-sm md:text-base"
                    >
                      {item.name},{" "}
                    </span>
                  );
                }
              })}
          </div>
          <div className="mb-4">
            {serieDetail.spoken_languages.length > 0 && (
              <h3 className="text-base md:text-lg font-semibold">
                Idioma
                <span>
                  {serieDetail.spoken_languages.length > 1 ? "s:" : ":"}
                </span>
              </h3>
            )}
            {serieDetail.spoken_languages.length > 0 &&
              serieDetail.spoken_languages.map((item) => {
                if (
                  serieDetail.spoken_languages.indexOf(item) ===
                  serieDetail.spoken_languages.length - 1
                ) {
                  return (
                    <span
                      key={item.english_name}
                      className="text-sm md:text-base"
                    >
                      {" "}{item.english_name}
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={item.english_name}
                      className="text-sm md:text-base"
                    >
                      {" "}
                      {item.english_name},
                    </span>
                  );
                }
              })}
          </div>
          <div>
            {serieDetail.first_air_date && (
              <>
                <h3 className="text-base md:text-lg font-semibold">
                  Fecha de estreno:
                </h3>
                {/* <span className="ml-1 whitespace-nowrap text-sm md:text-base">{serieDetail.release_date}</span> */}
                <span className="whitespace-nowrap text-sm md:text-base">{`${
                  splitDate[2]
                } de ${obtenerNombreMes(splitDate[1])} de ${
                  splitDate[0]
                }`}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
