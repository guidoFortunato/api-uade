import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout";
import { Favorites, List, Dashboard, SearchMovies, FilmDetails } from "../pages/dashboard";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="mi-lista" element={<List />} />
        <Route path="busqueda/:name" element={<SearchMovies />} />
        <Route path="/peliculas/:name/:id" element={<FilmDetails />} />
        <Route path="/series/:name/:id" element={<FilmDetails />} />
        <Route path="/actores/:name/:id" element={<FilmDetails />} />
        // todo en vez de filmDetail tien que ir un commponente con las movieCards del actor
        <Route path="/generos/:name/:id" element={<FilmDetails />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
