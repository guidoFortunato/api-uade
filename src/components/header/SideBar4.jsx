import { Avatar, Dropdown } from "flowbite-react";
import { useContext, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiPencilSimpleFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { SearchBar3 } from "./SearchBar3";
import { Spinner } from "../Spinner";
import { BiSolidCameraMovie } from "react-icons/bi";
import { HiLogout, HiViewGrid } from "react-icons/hi";
import { Genres } from "./Genres";
import clsx from "clsx";

export const SideBar4 = () => {
  const { handleAuth, totalGenres, username } = useContext(UserContext);
  const [isOpenSearchBar, setIsSearchOpenBar] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-[#19063A] text-white max-w-screen-3xl px-5 py-3 sticky top-0 z-50">
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
          <div className="mb-2 md:mb-0 mt-2 md:mr-8">
            <Link to="/">
              <h3 className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold italic">
                FrameLand
              </h3>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center mt-2">
            <ul className="flex flex-row justify-center items-center font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex  md:mb-0 lg:py-0 ${
                      isActive ? "text-violet-light" : ""
                    }  rounded md:bg-transparent md:p-0`
                  }
                  aria-current="page"
                >
                  <IoMdHome className="text-base" />
                  <span className="ml-[0.10rem] text-xs">Home</span>
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
                  <FaHeart className="text-xs" />
                  <span className="ml-1 text-xs">Mis Favoritos</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mi-lista"
                  className={({ isActive }) =>
                    `flex py-1 lg:py-0 ${
                      isActive ? "text-violet-light" : ""
                    }  rounded md:bg-transparent md:p-0`
                  }
                >
                  <FaStar className="text-sm" />
                  <span className="ml-1 text-xs">Mi Lista</span>
                </NavLink>
              </li>
              <Genres totalGenres={totalGenres} />
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={clsx(
              "p-0 m-0 transform transition-transform origin-right duration-500 hidden md:flex",
              {
                "scale-x-100": isOpenSearchBar,
                "scale-x-0": !isOpenSearchBar,
              }
            )}
          >
            <SearchBar3 />
          </div>
          <div>
            <button
              type="button"
              aria-expanded="false"
              className="block text-white md:mr-3 hover:text-gray-400 rounded-lg  text-sm p-2.5"
              onClick={() => setIsSearchOpenBar((prev) => !prev)}
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
          </div>
          <div>
            <button
              type="button"
              className="mr-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              aria-expanded="false"
              onClick={() => setIsOpenList((prev) => !prev)}
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
          </div>
          <div className="md:ml-1">
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
              <div className="bg-white">
                <Dropdown.Header>
                  <span className="block text-base text-[#693fb1] font-semibold">
                    {username}
                  </span>
                 
                </Dropdown.Header>
              </div>
              <div className="hover:bg-[#ffffff]">
                <Link to="/">
                  <Dropdown.Item
                    className="text-[#5A189A] hover:text-violet-light"
                    icon={HiViewGrid}
                  >
                    Home
                  </Dropdown.Item>
                </Link>
              </div>
              <Dropdown.Divider />
              <div className="hover:bg-[#ffffff]">
                <Link to="/perfil">
                  <Dropdown.Item className="text-[#5A189A] hover:text-violet-light">
                    <PiPencilSimpleFill className="mr-2" />
                    Editar Perfil
                  </Dropdown.Item>
                </Link>
              </div>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={handleLogout}
                className="text-[#5A189A] hover:text-violet-light"
                icon={HiLogout}
              >
                Cerrar sesión
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>
      <nav
        className={clsx(
          "flex flex-col bg-[#19063A] md:hidden justify-between items-center text-white max-w-screen-3xl pt-2 pb-3",
          {
            hidden: !isOpenList && !isOpenSearchBar,
          }
        )}
      >
        <div
          className={`transition-all duration-300 pb-2 ${
            isOpenSearchBar ? "flex" : "hidden"
          } md:hidden w-full sm:w-[60%]`}
        >
          <SearchBar3 myStyle={"px-5 w-[90%] mx-auto"} />
        </div>
        <div
          className={`flex flex-col md:hidden md:items-center mt-3 md:mt-0 w-full`}
        >
          <ul
            className={`${
              isOpenList ? "flex flex-col justify-center" : "hidden"
            } font-medium mt-0 w-full text-sm px-2`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center mb-2 py-2 px-1 ${
                    isActive ? "bg-violet-light text-white w-full" : ""
                  }  rounded md:bg-transparent md:p-0`
                }
                aria-current="page"
              >
                <IoMdHome className="text-xl" />
                <span className="ml-[0.10rem] text-sm">Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favoritos"
                className={({ isActive }) =>
                  `flex items-center mb-2 py-2 px-1 ${
                    isActive ? "bg-violet-light text-white w-full" : ""
                  }  rounded md:bg-transparent md:p-0`
                }
              >
                <FaHeart className="text-base" />
                <span className="ml-1 text-sm">Mis Favoritos</span>
              </NavLink>
            </li>
            <li className="pb-4">
              <NavLink
                to="/mi-lista"
                className={({ isActive }) =>
                  `flex items-center py-2 px-1 ${
                    isActive ? "bg-violet-light text-white w-full" : ""
                  }  rounded md:bg-transparent md:p-0`
                }
              >
                <FaStar className="text-lg" />
                <span className="ml-1 text-sm">Mi Lista</span>
              </NavLink>
            </li>
            <Genres totalGenres={totalGenres} isResponsive={true} />
          </ul>
        </div>
      </nav>
    </>
  );
};
