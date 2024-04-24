import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { Spinner } from "../../components/Spinner";
import { Icons } from "../../components";

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

export const FilmDetails = () => {
  const [filmDetail, setFilmDetail] = useState(null);
  const { id } = useParams();
  const params = useLocation();
  const pathname = params.pathname.split("/")[1];
  const splitDate =
    pathname === "peliculas"
      ? filmDetail?.release_date?.split("-")
      : filmDetail?.first_air_date?.split("-");
  const date =
    pathname === "peliculas"
      ? filmDetail?.release_date
      : filmDetail?.first_air_date;
  // console.log({pathname})

  console.log({ filmDetail });

  useEffect(() => {
    const getfilmDetails = async () => {
      const apiTrend = pathname === "peliculas" ? "movie" : "tv";
      const data = await getData(
        `https://api.themoviedb.org/3/${apiTrend}/${id}?language=es-ES`
      );
      // console.log(data);
      setFilmDetail(data);
    };
    getfilmDetails();
  }, []);

  if (filmDetail === null) return <Spinner />;

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-6 mx-auto mt-10 text-white">
      <div className="md:col-span-2 mx-auto">
        <img
          className="hidden lg:block h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${filmDetail.poster_path}`}
          alt={pathname === "peliculas" ? filmDetail.title : filmDetail.name}
        />
        <img
          className="block lg:hidden"
          src={`https://image.tmdb.org/t/p/original/${filmDetail.backdrop_path}`}
          alt={pathname === "peliculas" ? filmDetail.title : filmDetail.name}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:col-span-4 bg-violet-dark">
        <div className="p-5 lg:col-span-2 flex flex-col justify-between">
          <div className="mb-7 lg:mb-10">
            <h3 className="text-lg md:text-xl mb-2 font-semibold capitalize text-center lg:text-left">
              {pathname === "peliculas" ? filmDetail.title : filmDetail.name}
            </h3>
          </div>
          {filmDetail.overview?.length > 0 && (
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg mb-2 font-semibold">
                Descripción
              </h3>
              <span className="text-sm md:text-base">
                {filmDetail.overview}
              </span>
            </div>
          )}
          <div className="hidden lg:block lg:pt-10 h-[50%]">
            <img
              className="block h-[70%] w-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${filmDetail.backdrop_path}`}
              alt={
                pathname === "peliculas" ? filmDetail.title : filmDetail.name
              }
            />
          </div>
        </div>
        <div className="md:col-span-1 p-5 break-words">
          <div className="mb-4">
            <h3 className="text-base md:text-lg font-semibold">Categoría:</h3>
            <span>{pathname === "peliculas" ? "Película" : "Serie"}</span>
          </div>
          <div className="mb-4">
            {filmDetail.genres?.length > 0 && (
              <h3 className="text-base md:text-lg font-semibold">
                Género<span>{filmDetail.genres.length > 1 ? "s:" : ":"}</span>
              </h3>
            )}
            {filmDetail.genres?.length > 0 &&
              filmDetail.genres.map((item) => {
                if (
                  filmDetail.genres.indexOf(item) ===
                  filmDetail.genres.length - 1
                ) {
                  return (
                    <span key={item.id} className="text-sm md:text-base">
                      {" "}
                      {item.name}
                    </span>
                  );
                } else {
                  return (
                    <span key={item.id} className="text-sm md:text-base">
                      {item.name},{" "}
                    </span>
                  );
                }
              })}
          </div>
          <div className="mb-4">
            {filmDetail.spoken_languages?.length > 0 && (
              <h3 className="text-base md:text-lg font-semibold">
                Idioma
                <span>
                  {filmDetail.spoken_languages.length > 1 ? "s:" : ":"}
                </span>
              </h3>
            )}
            {filmDetail.spoken_languages?.length > 0 &&
              filmDetail.spoken_languages.map((item) => {
                if (
                  filmDetail.spoken_languages.indexOf(item) ===
                  filmDetail.spoken_languages.length - 1
                ) {
                  return (
                    <span
                      key={item.english_name}
                      className="text-sm md:text-base"
                    >
                      {" "}
                      {item.english_name}
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
            {date && (
              <>
                <h3 className="text-base md:text-lg font-semibold">
                  Fecha de estreno:
                </h3>
                {/* <span className="ml-1 whitespace-nowrap text-sm md:text-base">{filmDetail.release_date}</span> */}
                <span className="whitespace-nowrap text-sm md:text-base">{`${
                  splitDate[2]
                } de ${obtenerNombreMes(splitDate[1])} de ${
                  splitDate[0]
                }`}</span>
              </>
            )}
          </div>
          <div className="py-5">
            <Icons movie={filmDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};
