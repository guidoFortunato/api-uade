import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout";
import { Home, Favorites, SeeLater } from "../pages";

export const HomeRouter = () => {
  return (
    <Routes>
      {/* Rutas con el layout */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="ver-mas-tarde" element={<SeeLater />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      {/* Ruta sin el layout */}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
