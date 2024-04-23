import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Footer, SearchBar, SideBar } from "../components";
import { UserContext } from "../context/UserProvider";

export const HomeLayout = () => {
  const { searchBarOpen, imageHome } = useContext(UserContext);

  return (
    <>
      <header>
        <SideBar />
        {searchBarOpen && <SearchBar />}
        <div className="w-full h-[550px]">
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg`}
              alt="GodFather"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="flex justify-center  px-4 sm:px-0">
        {/* <div className="w-full sm:w-[500px] px-10"> */}
        <div className="container px-10 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
