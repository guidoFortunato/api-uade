/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import { DashboardRow } from "./";
import { Spinner } from "../../components";

export const Dashboard = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useContext(UserContext);
  const [totalMovies, setTotalMovies] = useState([]);

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      setTotalMovies([
        { id: 1, title: "Continuar viendo", movies: nowPlayingMovies },
        { id: 2, title: "Populares", movies: popularMovies },
        { id: 3, title: "Mas valoradas", movies: topRatedMovies },
        { id: 4, title: "Próximamente", movies: upcomingMovies },
      ]);
    }
  }, [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies]);

  if (nowPlayingMovies.length === 0) return <Spinner />;

  return (
    <>
        <div className="w-full h-[550px]">
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg`}
              alt="GodFather"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      <div className="container px-10 py-10">
     
          {totalMovies.map((movie) => (
            <DashboardRow key={movie.id} {...movie} />
          ))}
        
      </div>
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
