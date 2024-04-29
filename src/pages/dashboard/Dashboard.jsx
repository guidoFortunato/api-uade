/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Spinner } from "../../components";
import { UserContext } from "../../context/UserProvider";
import { DashboardRow } from "./";

export const Dashboard = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, topRatedSeries } = useContext(UserContext);
  const [totalMovies, setTotalMovies] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  }, [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, topRatedSeries]);

  if (nowPlayingMovies.length === 0) return <Spinner />;

  return (
    <>
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="w-full h-full">
          {/* <img
            src={windowSize.width >= 500 && windowSize.height >= 500 ? "/Banner5.jpg" : "/Banner6.png"}
            alt="GodFather"
            className="w-full h-full object-cover"
          /> */}
          <img
            src={"/Banner5.jpg"}
            alt="Godfather"
            className="hidden lg:block w-full h-full  object-cover"
          />
          <img
            src={"/Banner6.png"}
            alt="Godfather"
            className="block lg:hidden w-full h-full  object-cover"
          />
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