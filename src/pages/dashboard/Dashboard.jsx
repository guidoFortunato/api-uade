/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { DashboardRow, Icons, Spinner } from "../../components";
import { UserContext } from "../../context/UserProvider";

import { getNameMonth } from "../../helpers";
import { Link } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const Dashboard = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    topRatedSeries,
    dataMovieDashboard,
  } = useContext(UserContext);
  const [totalMovies, setTotalMovies] = useState([]);

  // console.log({ dataMovieDashboard });

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      setTotalMovies([
        { id: 1, title: "Continuar viendo", movies: nowPlayingMovies },
        { id: 2, title: "Populares", movies: popularMovies },
        { id: 3, title: "Mas valoradas", movies: topRatedMovies },
        { id: 4, title: "Series mas premiadas", movies: topRatedSeries },
        { id: 5, title: "Próximamente", movies: upcomingMovies },
      ]);
    }
  }, [
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    topRatedSeries,
  ]);

  if (nowPlayingMovies.length === 0) return <Spinner />;

  return (
    <>
      <div className="w-full h-[650px] text-white">
        <div className="w-full h-full relative">
          {dataMovieDashboard ? (
            <>
              <div className="absolute w-full h-[650px] bg-black opacity-70" />
              {/* <div className="absolute w-full h-[500px] bg-gradient-to-r from-black" /> */}
              <img
                src={`https://image.tmdb.org/t/p/original${dataMovieDashboard.backdrop_path}`}
                alt={
                  dataMovieDashboard.title
                    ? dataMovieDashboard.title
                    : dataMovieDashboard.name
                }
                className="object-cover h-full w-full"
              />

              <div className="absolute w-full top-[30%] p-4 md:p-8">
                <div className="relative">
                  <h1 className="text-3xl md:text-5xl font-bold capitalize">
                    {dataMovieDashboard?.title
                      ? dataMovieDashboard?.title
                      : dataMovieDashboard?.name}
                  </h1>
                  <Icons movie={dataMovieDashboard} />
                </div>
                <div className="mt-10 mb-2 flex items-center">
                  <Link
                    className="mr-3"
                    to={
                      dataMovieDashboard.media_type === "movie"
                        ? `/peliculas/${dataMovieDashboard.title
                            .split(" ")
                            .join("-")
                            .toLowerCase()}/${dataMovieDashboard.id}`
                        : dataMovieDashboard.media_type === "tv"
                        ? `/series/${
                            dataMovieDashboard.title
                              ? dataMovieDashboard.title
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()
                              : dataMovieDashboard.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()
                          }/${dataMovieDashboard.id}`
                        : null
                    }
                  >
                    <button className="flex items-center rounded bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-black py-2 px-5 transition-all">
                      <IoMdInformationCircleOutline className="mr-1 text-3xl text-white" />
                      <span className="font-semibold text-white">
                        Ver Detalle
                      </span>
                    </button>
                  </Link>

                  {/* <button className="rounded border text-white border-gray-300 hover:bg-gray-300 hover:text-black py-2 px-5 ml-4 transition-all">
                    <span className="font-semibold">Agregar a mi lista</span>
                  </button> */}
                </div>
                <p className="text-gray-400 text-sm">
                  Estreno:{" "}
                  {`${
                    dataMovieDashboard?.release_date?.split("-")[2]
                  } de ${getNameMonth(
                    dataMovieDashboard?.release_date?.split("-")[1]
                  )} de ${dataMovieDashboard?.release_date?.split("-")[0]}`}
                </p>

                <p className="w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-1">
                  <span className="inline md:hidden">
                    {dataMovieDashboard.overview?.slice(0, 198) + "..."}
                    
                  </span>
                  <span className="hidden md:inline">
                    {/* {dataMovieDashboard.overview?.slice(0, 200)} */}
                    {dataMovieDashboard.overview}
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              <img
                src={"/Banner7.png"}
                alt="Godfather"
                className="hidden lg:block w-full h-full  object-cover"
              />
              <img
                src={"/Banner6.png"}
                alt="Godfather"
                className="block lg:hidden w-full h-full  object-cover"
              />
            </>
          )}
        </div>
      </div>
      <div className="container px-10 py-10 mx-auto">
        {totalMovies.map((movie) => (
          <DashboardRow key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
