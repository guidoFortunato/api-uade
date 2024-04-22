import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout";
import { Favorites, List, Dashboard, SearchMovies, MovieDetails } from "../pages/dashboard";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="mi-lista" element={<List />} />
        <Route path="busqueda/:name" element={<SearchMovies />} />
        <Route path=":name" element={<MovieDetails />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
