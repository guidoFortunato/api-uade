import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { UserContext } from "../../context/UserProvider";

export const SideBar = () => {
  const { handleAuth } = useContext(UserContext);

  return (
    <Navbar fluid>
      <Link to="/" className="flex items-center">
        <img
          src="/Logo.png"
          className="h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FrameLand
        </span>
      </Link>

      <div className="flex md:order-2">
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleAuth(false)}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 mb-1 md:mb-0 ${
              isActive ? "bg-blue-500 text-white md:text-blue-700" : ""
            }  rounded md:bg-transparent md:p-0`
          }
          aria-current="page"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            `block px-3 mb-1 md:mb-0 ${
              isActive ? "bg-blue-500 text-white md:text-blue-700" : ""
            }  rounded md:bg-transparent md:p-0`
          }
        >
          Mis Favoritos
        </NavLink>
        <NavLink
          to="/ver-mas-tarde"
          className={({ isActive }) =>
            `block px-3 ${
              isActive ? "bg-blue-500 text-white md:text-blue-700" : ""
            }  rounded md:bg-transparent md:p-0`
          }
        >
          Ver más tarde
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
