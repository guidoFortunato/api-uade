import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
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
        <img src="/Logo.png" className="h-8 md:h-9" alt="Frameland" />
        <span className="self-center whitespace-nowrap text-2xl md:text-3xl ml-1 font-semibold italic">
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
          <div className="bg-[#9f5ae0]">
          <div className="bg-white">
          <Dropdown.Header>
            <span className="block text-base font-bold text-[#9f5ae0]">Bonnie Green</span>
            <span className="block italic truncate text-xs font-medium">
              name@test.com
            </span>
          </Dropdown.Header>
          </div>
          <Link to="/">
          <Dropdown.Item className="text-white hover:text-[#9f5ae0] transition-colors">Home</Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Item className="text-white hover:text-[#9f5ae0] transition-colors" onClick={handleLogout}>Log out</Dropdown.Item>
          </div>
        </Dropdown>
        
        <Navbar.Toggle className="ml-1" />
      </div>
      
      <Navbar.Collapse>
       
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex mb-1 md:mb-0 ${
                isActive
                  ? "bg-violet-light text-white md:text-violet-light"
                  : ""
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
