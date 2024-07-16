/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icons } from "./Icons";
import clsx from "clsx";

import "react-lazy-load-image-component/src/effects/blur.css";


export const MovieCard = ({
  title,
  image,
  movie,
  movieId,
  isInDashboard = false,
  mediaType = "movie",
}) => {
  const newTitle =
    title?.charAt().toUpperCase() + title?.substring(1).toLowerCase();
  // console.log({ movie });

  const pathTitle = title
    ?.replace(/[^\w\sáéíóú]/gi, "") // Reemplazar puntos, dos puntos y letras sin tilde por espacios
    .replace(/\s+/g, " ") // Reemplazar múltiples espacios consecutivos por un espacio
    .replace(/-+/g, "-") // Reemplazar secuencias de guiones duplicados con un solo guion
    .trim() // Eliminar espacios al inicio y al final
    .split(" ")
    .join("-")
    .toLowerCase();

  const isActor = movie.known_for ? true : false;

  return (
    <div
      className={clsx("rounded relative hover:cursor-pointer mx-1 h-[200px]", {
        "w-full": !isInDashboard,
      })}
    >
      <LazyLoadImage
        alt={newTitle}
        className="rounded object-cover w-full h-full"
        src={image}
      />
      {/* <div className="rounded absolute inset-0 hover:-inset-auto bg-gradient-to-b from-[rgba(0,0,0,0.19)] to-[rgba(30,16,3,0.13)]" /> */}
      <div className="rounded absolute top-0 left-0 w-full h-full bg-black opacity-30 " />
      <Link
        to={
          mediaType === "movie"
            ? `/peliculas/${pathTitle}/${movieId ? movieId : movie.id}`
            : mediaType === "tv"
            ? `/series/${pathTitle}/${movieId ? movieId : movie.id}`
            : mediaType === "person"
            ? `/actores/${pathTitle}/${movieId ? movieId : movie.id}`
            : null
        }
      >
        <div className="rounded text-white opacity-100 transition duration-500 ease-in-out h-full from-[rgb(0,0,0)] to-[rgba(30,16,3,0.13)] hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0)] bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
          <span className="whitespace-normal text-xs font-semibold flex justify-center items-end h-full text-center pb-2 capitalize px-1">
            {newTitle}
          </span>
        </div>
      </Link>
      {!isActor && <Icons movie={movie} isCard={true} />}
    </div>
  );
};
