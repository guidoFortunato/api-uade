import { Outlet } from "react-router-dom";
import { Footer, SideBar } from "../components";

export const HomeLayout = () => {
  return (
    <>
      <SideBar />
      <main className="flex justify-center items-center min-h-screen px-4 sm:px-0">
        {/* <div className="w-full sm:w-[500px] px-10"> */}
        <div className="w-full sm:w-[600px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
