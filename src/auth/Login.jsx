import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click ingresar");
  };

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-85 ">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <h3 className="text-white text-center text-3xl sm:text-4xl">
          Iniciar sesión
        </h3>
        <div className="my-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Contraseña
          </label>
          <input
            type="text"
            id="password"
            className="bg-violet-light border border-[violet-light] font-semibold text-white text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="flex justify-center w-full mb-3">
          <button type="submit" className="btn-primary w-[200px]">
            Ingresar
          </button>
        </div>
        <div className="flex justify-end text-white">
          <p>
            No tenes cuenta?{" "}
            <Link to="/auth/register" className="text-violet-light cursor-pointer hover:text-violet-500">
              Registrate acá
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
