import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import clsx from "clsx";

export const SideBar = () => {
  const { handleAuth, handleSearchBar, searchBarOpen } =
    useContext(UserContext);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <Navbar
      fluid
      className="bg-transparent w-full text-white sticky top-0 z-40 transition-all duration-300"
    >
      <Link to="/" className="flex items-center md:ml-7">
        {/* <img src="/Logo.png" className="h-7" alt="Frameland" /> */}
        <span className="self-center whitespace-nowrap text-xl md:text-3xl ml-1 font-semibold italic">
          FrameLand
        </span>
      </Link>
    

      <div className="flex justify-center items-center md:order-2 md:mr-7 p-3 rounded-lg">
        <FaSearch
          className="mr-3 cursor-pointer"
          onClick={() => handleSearchBar(!searchBarOpen)}
        />
        <Dropdown
          arrowIcon={false}
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
            <span className="block text-base font-bold">Bonnie Green</span>
            <span className="block italic truncate text-xs font-medium">
              name@test.com
            </span>
          </Dropdown.Header>

          <Link to="/">
            <Dropdown.Item className="transition-colors">Home</Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
        </Dropdown>

        <Navbar.Toggle className="ml-1" />
      </div>

      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex mb-1 md:mb-0 ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
          aria-current="page"
        >
          <IoMdHome className="text-xl" />
          <span className="ml-1">Home</span>
        </NavLink>

        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            `flex items-center mb-1 md:mb-0 ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
        >
          <FaHeart className="text-base" />
          <span className="ml-1">Mis Favoritos</span>
        </NavLink>
        <NavLink
          to="/mi-lista"
          className={({ isActive }) =>
            `flex  ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
        >
          <FaStar className="text-lg" />
          <span className="ml-1">Mi Lista</span>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
