// import { useState } from "react"

import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { MovieCard } from "../components/";
import { getEnvVariables } from "../helpers";

const { VITE_API_IMAGE } = getEnvVariables();

export const Dashboard = () => {
  const { movies } = useContext(UserContext);
  // console.log({ movies });

  // const [movies, setMovies] = useState([]);
  // const [searchKey, setSearchKey] = useState([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={ movie.backdrop_path ? `${VITE_API_IMAGE}${movie.backdrop_path}` : "https://placehold.co/300x150" }
            description={movie.overview}
            movie={movie}
          />
        ))
      ) : (
        <p className="text-white">Error, intente nuevamente mas tarde</p>
      )}
    </div>
  );
};
