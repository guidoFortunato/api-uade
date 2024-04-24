import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Footer, SearchBar, SideBar } from "../components";
import { UserContext } from "../context/UserProvider";

export const HomeLayout = () => {
  const { searchBarOpen } = useContext(UserContext);

  return (
    <div className="background">
      <header>
        <SideBar />
        {searchBarOpen && <SearchBar />}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
