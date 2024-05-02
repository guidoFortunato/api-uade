import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { SideBar } from "./SideBar";
import { SearchBar } from "./SearchBar";
import { SideBar2 } from "./SideBar2";
import { SideBar3 } from "./SideBar3";
import { SideBar4 } from "./SideBar4";
import { UserContext } from "../../context/UserProvider";

export const Header = () => {
  const { searchBarOpen } = useContext(UserContext);

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

  return (
    <header
    
      className={clsx(
        "bg-transparent w-full text-white sticky top-0 z-40 transition-all duration-300",
        {
          "navbar-active": navbar,
        }
      )}
    >
      {/* <SideBar /> */}
      {/* <SideBar2 /> */}
      {/* <SideBar3 /> */}
      <SideBar4 />
      {/* {searchBarOpen && <SearchBar />} */}
      {/* <SearchBar2 /> */}
    </header>
  );
};
