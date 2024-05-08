/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icons } from "./Icons";

import "react-lazy-load-image-component/src/effects/blur.css";
import clsx from "clsx";

// import { getEnvVariables } from "../../helpers";
// const { VITE_API_IMAGE } = getEnvVariables();

export const MovieCard = ({
  title,
  image,
  isProfile = false,
  movie,
  mediaType = "movie",
}) => {
  const newTitle =
    title?.charAt().toUpperCase() + title?.substring(1).toLowerCase();
  // console.log({ mediaType });
  // console.log({image})
  const pathTitle = title
    ?.replace(/[^\w\sáéíóú]/gi, "") // Reemplazar puntos, dos puntos y letras sin tilde por espacios
    .replace(/\s+/g, " ") // Reemplazar múltiples espacios consecutivos por un espacio
    .replace(/-+/g, "-") // Reemplazar secuencias de guiones duplicados con un solo guion
    .trim() // Eliminar espacios al inicio y al final
    .split(" ")
    .join("-")
    .toLowerCase();

  // console.log({ movieCard: movie });

  return (
    <div className={clsx(
      "rounded relative hover:cursor-pointer mx-1 h-[200px]",
      {
        "w-full" : isProfile
      }
    )}>
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
            ? `/peliculas/${pathTitle}/${movie.id}`
            : mediaType === "tv"
            ? `/series/${pathTitle}/${movie.id}`
            : mediaType === "person"
            ? `/actores/${pathTitle}/${movie.id}`
            : null
        }
      >
        <div className="rounded text-white opacity-100 transition duration-500 ease-in-out h-full from-[rgb(0,0,0)] to-[rgba(30,16,3,0.13)] hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0)] bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
          <span className="whitespace-normal text-xs font-semibold flex justify-center items-end h-full text-center pb-2 capitalize px-1">
            {newTitle}
          </span>
        </div>
      </Link>
      <Icons movie={movie} isCard={true} />
    </div>
  );
};
