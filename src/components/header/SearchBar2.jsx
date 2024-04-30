import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { alertWarning, getEnvVariables } from "../../helpers";

// const { VITE_API_URL } = getEnvVariables();

export const SearchBar2 = () => {
  const { selected, handleSelected } = useContext(UserContext);
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isMovies, setIsMovies] = useState(true);
  const [series, setSeries] = useState([]);
  const [isSeries, setIsSeries] = useState(false);
  const [genres, setGenres] = useState([]);
  const [isGenres, setIsGenres] = useState(false);
  const [actors, setActores] = useState([]);
  const [isActors, setIsActors] = useState(false);

  const handleValue = (e) => {
    if (!e.target.value.trim()) {
      setValue("");
      return;
    }
    setValue(e.target.value);
  };

  const handleContentSelected = (e)=>{
    handleSelected(e.target.textContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      alertWarning("Debe ingresar al menos un caracter");
      return;
    }

    navigate(`/busqueda/search?q=${value}`);
    setValue("");
  };

  return (
    <form className="max-w-lg mx-auto px-5 mb-4 md:px-0" onSubmit={handleSubmit}>
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
         
        >
          { selected }
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={ handleContentSelected }
              >
                Películas
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={ handleContentSelected }
              >
                Series
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={ handleContentSelected }
              >
                Géneros
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={ handleContentSelected }
              >
                Actores
              </button>
            </li>
           
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder={ selected === "Películas" ? "Buscar peliculas..." : selected === "Series" ? "Buscar series..." : selected === "Géneros" ? "Buscar películas/series por géneros..." : selected === "Actores" ? "Buscar películas/series por actores..." : "" }
            value={value}
          onChange={handleValue}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};
