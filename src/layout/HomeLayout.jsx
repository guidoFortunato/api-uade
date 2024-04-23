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
      </header>
      <main className="flex flex-col items-center justify-center px-4 sm:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
