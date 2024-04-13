import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Footer, SearchBar, SideBar } from "../components";
import { UserContext } from "../context/UserProvider";

export const HomeLayout = () => {
  const { searchBarOpen } = useContext(UserContext);
  return (
    <>
      <header className="background-home">
        <SideBar />
        {searchBarOpen && <SearchBar />}
        <main className="flex justify-center min-h-screen px-4 sm:px-0">
          {/* <div className="w-full sm:w-[500px] px-10"> */}
          <div className="container px-10 py-10">
            <Outlet />
          </div>
        </main>
      </header>
      <Footer />
    </>
  );
};
