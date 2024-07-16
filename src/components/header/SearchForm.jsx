import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const itemsSelected = [
  {
    id: 1,
    title: "Películas",
  },
  {
    id: 2,
    title: "Series",
  },
  {
    id: 3,
    title: "Actores",
  },
];

const FilterDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState( Cookie.get("selected") || "Películas" );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setOptionSelected(option);
    onSelect(option);
    Cookie.set("selected", option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute h-full" ref={dropdownRef}>
      {/* <span>{value}</span> */}
      <button
        type="button"
        className="flex justify-center items-center ps-3 pe-2 h-full"
        onClick={toggleDropdown}
      >
        <span className="mr-1 text-sm">{optionSelected === "Películas" ? "Películas" : optionSelected === "Series" ? "Series" : "Actores" }</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}

        <span className="sr-only">Filter options</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48  border  rounded shadow-lg z-10 bg-violet-dark opacity-95 text-sm border-violet-dark">
          <ul>
            {itemsSelected.map((item) => (
              <li key={item.id}>
                <button
                  className="block px-4 py-2 text-sm hover:underline"
                  onClick={() => handleOptionClick(item.title)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SearchForm = () => {
  const { handleSelected } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState( Cookie.get("selected") || "Película" );
  let navigate = useNavigate();

  const handleValue = (e) => setValue(e.target.value);
 
  const handleFilterSelect = (option) => {
    setSelected(option);
    handleSelected(option)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      alertWarning("Debe ingresar al menos un caracter");
      return;
    }

    navigate(`/busqueda/search?q=${value.split(" ").join("-")}`);
    setValue("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <FilterDropdown onSelect={handleFilterSelect} />
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-28 text-sm text-white border bg-transparent border-[#9e55fd] rounded focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
          placeholder={`Buscar ${selected.toLowerCase()}...`}
          value={value}
          onChange={handleValue}
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchForm;
