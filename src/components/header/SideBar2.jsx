import { Avatar } from "flowbite-react";
import { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export const SideBar2 = () => {
  const { handleAuth, handleSearchBar, searchBarOpen } =
    useContext(UserContext);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-screen-3xl flex flex-wrap justify-between md:justify-around mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="/Logo.png" className="h-8 md:h-9" alt="Frameland" />
          <span className="self-center whitespace-nowrap text-2xl md:text-3xl  font-semibold italic">
            FrameLand
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
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
          <div className="relative hidden md:block">
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 ml-2"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          </button>

          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>

              <li>
                <span
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={ handleLogout }
                >
                  Cerrar sesión
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
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
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row justify-start md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center mb-1 md:mb-0 py-1 lg:py-0 ${
                    isActive
                      ? "bg-violet-light text-white md:text-violet-light"
                      : ""
                  }  rounded md:bg-transparent md:p-0`
                }
                aria-current="page"
              >
                <IoMdHome className="text-xl" />
                <span className="ml-1 text-sm">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favoritos"
                className={({ isActive }) =>
                  `flex items-center mb-1 md:mb-0 py-1 lg:py-0 ${
                    isActive
                      ? "bg-violet-light text-white md:text-violet-light"
                      : ""
                  }  rounded md:bg-transparent md:p-0`
                }
              >
                <FaHeart className="text-base" />
                <span className="ml-1 text-sm">Mis Favoritos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mi-lista"
                className={({ isActive }) =>
                  `flex items-center py-1 lg:py-0 ${
                    isActive
                      ? "bg-violet-light text-white md:text-violet-light"
                      : ""
                  }  rounded md:bg-transparent md:p-0`
                }
              >
                <FaStar className="text-lg" />
                <span className="ml-1 text-sm">Mi Lista</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
