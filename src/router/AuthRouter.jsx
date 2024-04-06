import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout";
import { Login, Register } from "../auth";

export const AuthRouter = () => {
  return (
    <Routes>
      {/* Rutas con el layout */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      {/* Ruta sin el layout */}

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
