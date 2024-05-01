/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Icons, Spinner } from "../../components";
import { UserContext } from "../../context/UserProvider";
import { DashboardRow } from "./";
import { getNameMonth } from "../../helpers";
import { Link } from "react-router-dom";

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
      <div className="w-full h-[500px] text-white">
        <div className="w-full h-full relative">
          {dataMovieDashboard ? (
            <>
              {/* <div className="absolute w-full h-[500px] bg-black opacity-70 md:bg-gradient-to-r md:from-black" /> */}
              <div className="absolute w-full h-[500px] bg-gradient-to-r from-black" />
              <img
                src={`https://image.tmdb.org/t/p/original${dataMovieDashboard[0].backdrop_path}`}
                alt={
                  dataMovieDashboard[0].title
                    ? dataMovieDashboard[0].title
                    : dataMovieDashboard[0].name
                }
                className="object-cover h-full w-full"
              />

              <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold capitalize">
                  {dataMovieDashboard[0]?.title
                    ? dataMovieDashboard[0]?.title
                    : dataMovieDashboard[0]?.name}
                </h1>
                <div className="my-4">
                  <Link
                  className="mr-3"
                    to={
                      dataMovieDashboard[0].media_type === "movie"
                        ? `/peliculas/${dataMovieDashboard[0].title
                            .split(" ")
                            .join("-")
                            .toLowerCase()}/${dataMovieDashboard[0].id}`
                        : dataMovieDashboard[0].media_type === "tv"
                        ? `/series/${
                            dataMovieDashboard[0].title
                              ? dataMovieDashboard[0].title
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()
                              : dataMovieDashboard[0].name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()
                          }/${dataMovieDashboard[0].id}`
                        : null
                    }
                  >
                    <button className="rounded border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-transparent hover:text-white hover:border-gray-400 transition-all">
                      <span className="font-semibold">Ver Detalle</span>
                    </button>
                  </Link>
                  {/* <button className="rounded border text-white border-gray-300 hover:bg-gray-300 hover:text-black py-2 px-5 ml-4 transition-all">
                    <span className="font-semibold">Agregar a mi lista</span>
                  </button> */}
                  <Icons movie={dataMovieDashboard[0]} />
                </div>
                <p className="text-gray-400 text-sm">
                  Estreno:{" "}
                  {`${
                    dataMovieDashboard[0]?.release_date?.split("-")[2]
                  } de ${getNameMonth(
                    dataMovieDashboard[0]?.release_date?.split("-")[1]
                  )} de ${dataMovieDashboard[0]?.release_date?.split("-")[0]}`}
                </p>

                <p className="w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-1">
                  <span className="inline md:hidden">
                    {dataMovieDashboard[0].overview?.slice(0, 200)}
                  </span>
                  <span className="hidden md:inline">
                    {dataMovieDashboard[0].overview?.slice(0, 200)}
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
