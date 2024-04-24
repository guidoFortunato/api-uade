/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Icons } from "./Icons";

// import { getEnvVariables } from "../../helpers";
// const { VITE_API_IMAGE } = getEnvVariables();

export const MovieCard = ({ title, image, description, movie, isMovie }) => {
  const newTitle = title?.charAt().toUpperCase() + title?.substring(1).toLowerCase();
  const pathTitle = title
    ?.replace(/[^\w\s]/g, "") // Reemplazar puntos y dos puntos por espacios
    .replace(/\s+/g, " ") // Reemplazar múltiples espacios consecutivos por un espacio
    .replace(/-+/g, "-") // Reemplazar secuencias de guiones duplicados con un solo guion
    .trim() // Eliminar espacios al inicio y al final
    .split(" ")
    .join("-")
    .toLowerCase();

  console.log({ movieCard: movie });

  return (
    <div className="rounded-lg relative hover:cursor-pointer mx-1">
      <img className="rounded-lg" src={image} alt={newTitle} />
      <div className="absolute rounded-lg inset-0 hover:-inset-auto bg-gradient-to-b from-[rgba(0,0,0,0.19)] to-[rgba(30,16,3,0.13)]" />
      <Link
        to={
          isMovie
            ? `/peliculas/${pathTitle}/${movie.id}`
            : `/series/${pathTitle}/${movie.id}`
        }
      >
        <div className="rounded-lg text-white opacity-100 transition duration-500 ease-in-out h-full from-[rgb(0,0,0)] to-[rgba(30,16,3,0.13)] hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0)] bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
          <span className="whitespace-normal text-xs font-semibold flex justify-center items-end h-full text-center pb-2 capitalize">
            {newTitle}
          </span>
        </div>
      </Link>
      <Icons movie={movie} isCard={true} />
    </div>
  );
};
