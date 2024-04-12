import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout";

import { Home, PassRecover } from "../pages";
import { Login, Register } from "../pages/auth";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/recover" element={<PassRecover />} />

        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
