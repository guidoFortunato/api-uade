import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { alertWarning } from "../../helpers";

// const { VITE_API_URL } = getEnvVariables();

export const SearchBar3 = ({myStyle}) => {
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

  const handleContentSelected = (e) => {
    handleSelected(e.target.textContent);
  };

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
    <form onSubmit={handleSubmit} className={myStyle}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-400"
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
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-white border bg-[#19063A] border-[#9e55fd] rounded-lg focus:bg-[#13052F]"
          placeholder="Buscar..."
          value={value}
          onChange={handleValue}
        />
      </div>
    </form>
  );
};
