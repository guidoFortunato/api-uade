import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Footer, SearchBar, SearchBar2, SideBar } from "../components";
import { UserContext } from "../context/UserProvider";

export const HomeLayout = () => {
  const { searchBarOpen } = useContext(UserContext);

  return (
    <div className="background">
      {/* <header className="fixed w-full z-50"> */}
      <header className="">
        <SideBar />
        {/* {searchBarOpen && <SearchBar />} */}
        <SearchBar2 />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
