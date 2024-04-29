import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaSearch, FaHeart, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { UserContext } from "../../context/UserProvider";

export const SideBar3 = () => {
  const { handleAuth, handleSearchBar, searchBarOpen } =
    useContext(UserContext);

  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <>
      <nav className="bg-transparent text-white">
        <div className="flex flex-wrap justify-between mx-auto max-w-screen-3xl p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 md:mb-0 md:mr-8">
              <Link to="/" className="flex items-center">
                <img src="/Logo.png" className="h-8 md:h-9" alt="Frameland" />
                <span className="self-center whitespace-nowrap text-base md:text-3xl  font-semibold italic">
                  FrameLand
                </span>
              </Link>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
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
          <div className="flex items-end ">
        {/* <FaSearch
          className="mr-3 cursor-pointer"
          onClick={() => handleSearchBar(!searchBarOpen)}
        /> */}
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
        </div>
      </nav>
      <nav className="bg-transparent text-white">
        <div className="max-w-screen-2xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
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
    </>
  );
};
