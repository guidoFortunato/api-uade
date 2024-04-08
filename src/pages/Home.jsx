import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid grid-cols-1 text-center gap-6">
      <h1 className="text-4xl sm:text-5xl font-semibold">FrameLand</h1>
      <p>Disfruta de las mejores películas y series acá</p>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <Link to="/auth/login" className="w-full">
          <button className="btn-primary mb-5 sm:mb-0 w-[90%]">Iniciar sesión</button>
        </Link>
        <Link to="/auth/register" className="w-full">
          <button className="btn-primary w-[90%]">Crear cuenta</button>
        </Link>
      </div>
    </div>
  );
};
