import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components"

export const HomeLayout = () => {
  return (
    <>
    <Navbar />
    <main className="flex justify-center items-center min-h-screen px-4 sm:px-0">
      {/* <div className="w-full sm:w-[500px] px-10"> */}
      <div className="w-full sm:w-[600px]">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
  )
}