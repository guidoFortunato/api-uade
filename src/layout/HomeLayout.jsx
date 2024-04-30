import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";
import { Toaster } from "react-hot-toast";

export const HomeLayout = () => {
  return (
    <div className="background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};
