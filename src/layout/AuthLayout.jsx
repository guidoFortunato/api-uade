import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <div className="w-[100%] lg:w-[95%] mx-auto">
        <Outlet />
      </div>
    </>
  );
};
