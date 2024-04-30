import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";

export const HomeLayout = () => {
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
