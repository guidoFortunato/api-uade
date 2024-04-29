import { useContext } from "react";
import { Outlet } from "react-router-dom";

import {
  Footer,
  Header,
  SearchBar,
  SearchBar2,
  SideBar,
  SideBar2,
  SideBar3,
} from "../components";
import { UserContext } from "../context/UserProvider";

export const HomeLayout = () => {
  const { searchBarOpen } = useContext(UserContext);

  return (
    <div className="background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
