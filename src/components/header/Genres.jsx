/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { UserContext } from "../../context/UserProvider";

export const Genres = ({ totalGenres, isResponsive = false }) => {
  const { handleSelected } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log({item})
    handleSelected(item.usedBy)
    navigate(`/generos/${item.name.toLowerCase().split(" ").join("-")}/${item.id}`)
  };

  return (
    <div className="flex items-center ml-1 md:ml-0">
      <Dropdown
        label=""
        renderTrigger={() => (
          <div
            className={clsx("flex items-center cursor-pointer", {
              "text-sm": isResponsive,
              "text-xs": !isResponsive,
            })}
          >
            <BiSolidCameraMovie className="text-white text-sm mr-1" />
            <span className="mr-1">Géneros</span> <IoIosArrowDown />{" "}
          </div>
        )}
        dismissOnClick={false}
        inline
        className="bg-violet-dark opacity-95 text-sm border-violet-dark"
      >
        <div className="grid grid-cols-2 md:grid-cols-3">
          {totalGenres.map((item, index) => (
            <Dropdown.Item
              key={index}
              className="text-start block px-5 md:px-4 py-3 text-white hover:bg-transparent cursor-default focus:outline-none focus:bg-inherit"
            >
              <span className="hover:underline cursor-pointer" onClick={()=>handleClick(item)}>
                {item.name}
              </span>
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};
