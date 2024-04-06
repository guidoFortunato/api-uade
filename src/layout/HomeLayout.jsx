import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components"

export const HomeLayout = () => {
  return (
    <>
    <Navbar />
    <div className="w-[100%] lg:w-[95%] mx-auto">
      <Outlet />
    </div>
    <Footer />
  </>
  )
}