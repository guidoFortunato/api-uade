import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout";
import { Login, Register } from "../auth";
import { Home } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
