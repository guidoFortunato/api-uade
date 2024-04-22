import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export const SideBar = () => {
  const { handleAuth, handleSearchBar, searchBarOpen } =
    useContext(UserContext);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <Navbar fluid className="bg-transparent text-white">
      <Link to="/" className="flex items-center md:ml-7">
        <img src="/Logo.png" className="h-6 sm:h-9" alt="Frameland" />
        <span className="self-center whitespace-nowrap text-2xl ml-1 font-semibold italic">
          FrameLand
        </span>
      </Link>

      <div className="flex justify-center items-center md:order-2 md:mr-7">
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
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@test.com
            </span>
          </Dropdown.Header>
          <Link to="/">
            <Dropdown.Item>Home</Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle className="ml-1" />
      </div>
      <Navbar.Collapse>
      <img src="/house-solid.svg" className="h-4 sm:h-4" alt="Home" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-1 mb-1 md:mb-0 ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
          aria-current="page"
        >
        
          Home
        </NavLink>
        <img src="/heart-solid.svg" className="h-4 sm:h-4" alt="Mis favoritos" />

        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            `block px-1 mb-1 md:mb-0 ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
          
        >
          Mis Favoritos
        </NavLink>
        <img src="/star-solid.svg" className="h-4 sm:h-4" alt="Mi lista" />
        <NavLink
          to="/mi-lista"
          className={({ isActive }) =>
            `block px-3 ${
              isActive ? "bg-violet-light text-white md:text-violet-light" : ""
            }  rounded md:bg-transparent md:p-0`
          }
        >
          Mi lista
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
