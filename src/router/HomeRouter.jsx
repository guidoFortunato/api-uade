import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout";
import { Favorites, SeeLater, Dashboard } from "../pages";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="ver-mas-tarde" element={<SeeLater />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
