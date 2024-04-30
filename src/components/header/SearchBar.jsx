import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertWarning, getEnvVariables } from "../../helpers";

// const { VITE_API_URL } = getEnvVariables();

export const SearchBar = ({ myStyle = "", width = "" }) => {
  let navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    if (!e.target.value.trim()) {
      setValue("");
      return;
    }
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      alertWarning("La búsqueda no puede estar vacía");
      return;
    }
    navigate(`/busqueda/search?q=${value}`);
    setValue("");
  };

  return (
    <form
      className={myStyle.length > 0 ? `${myStyle} w-1/2 mx-auto` : "mx-auto p-4"}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 pr-24 text-sm text-[#c2c2c2] border border-[#662d94] rounded-lg bg-[#9d4edd79] focus:ring-[#9757ca] focus:border-[#9757ca]"
          placeholder="Buscar..."
          value={value}
          onChange={handleValue}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#9D4EDD] hover:bg-violet-900  focus:outline-none  font-medium rounded-lg text-sm px-3 py-1.5"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
