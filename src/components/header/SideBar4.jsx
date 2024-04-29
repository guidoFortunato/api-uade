import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaSearch, FaHeart, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { UserContext } from "../../context/UserProvider";

export const SideBar4 = () => {
  const { handleAuth, handleSearchBar, searchBarOpen } =
    useContext(UserContext);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <>
      <nav className="flex justify-between items-start md:items-center bg-transparent text-white max-w-screen-3xl px-5 pt-5 pb-2">
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="mb-2 md:mb-0 md:mr-8">
            <Link to="/">
              <h3 className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold italic">
                FrameLand
              </h3>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center mt-2 sm:mt-0 ">
            <ul className="flex flex-row justify-center font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center mb-1 md:mb-0 py-1 lg:py-0 ${
                      isActive ? "text-violet-light" : ""
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
                      isActive ? "text-violet-light" : ""
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
                      isActive ? "text-violet-light" : ""
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
        <div className="flex">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-gray-500 md:mr-3 hover:text-gray-400 rounded-lg text-sm p-2.5"
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
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="mr-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@test.com
              </span>
            </Dropdown.Header>
            <Link to="/">
              <Dropdown.Item>Home</Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
      <nav className="flex md:hidden justify-between items-start md:items-center bg-transparent text-white max-w-screen-3xl p-5">
        <div className="flex md:hidden md:items-center mt-2 sm:mt-0 w-full">
          <ul className="flex flex-col md:flex-row justify-center font-medium mt-0 w-full text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center mb-2 py-1 ${
                    isActive ? "bg-violet-light text-white w-full" : ""
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
                  `flex items-center mb-2 py-1 ${
                    isActive ? "bg-violet-light text-white w-full" : ""
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
                    isActive ? "bg-violet-light text-white w-full" : ""
                  }  rounded md:bg-transparent md:p-0`
                }
              >
                <FaStar className="text-lg" />
                <span className="ml-1 text-sm">Mi Lista</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
