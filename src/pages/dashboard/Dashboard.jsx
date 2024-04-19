// import { useState } from "react"

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { MovieCard, Spinner } from "../../components";
import { getEnvVariables } from "../../helpers";
import { DashboardRow } from "./";

const { VITE_API_IMAGE } = getEnvVariables();

export const Dashboard = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useContext(UserContext);
  const [totalMovies, setTotalMovies] = useState([]);
  console.log({ nowPlayingMovies });

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      console.log("éntra");
      setTotalMovies([
        { id: 1, title: "Continuar viendo", movies: nowPlayingMovies },
        { id: 2, title: "Populares", movies: popularMovies },
        { id: 3, title: "Mas valoradas", movies: topRatedMovies },
        { id: 4, title: "Próximamente", movies: upcomingMovies },
      ]);
    }
  }, [nowPlayingMovies]);

  if (nowPlayingMovies.length === 0) return <Spinner />;

  return (
    <>
      {totalMovies.map((movie) => (
        <DashboardRow
          key={movie.id}
          {...movie}
        />
      ))}
    </>
  );
};

// <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
// {movies.length > 0 ? (
//   movies.map((movie) => (
//     <MovieCard
//       key={movie.id}
//       title={movie.title}
//       image={ movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://placehold.co/300x150" }
//       description={movie.overview}
//       movie={movie}
//     />
//   ))
// ) : (
//   <p className="text-white">Error, intente nuevamente mas tarde</p>
// )}
// </div>
