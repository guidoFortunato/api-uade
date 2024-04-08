import { Link } from "react-router-dom";

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click crear cuenta");
  };

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <h3 className="text-white text-center text-3xl sm:text-4xl">
          Registrarse
        </h3>
        <div className="my-8">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="my-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="emailConfirm"
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="my-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirmar correo electrónico
          </label>
          <input
            type="email"
            id="emailConfirm"
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
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="passwordRepeat"
            className="block mb-2 text-sm font-medium text-white"
          >
            Repetí la contraseña
          </label>
          <input
            type="text"
            id="passwordRepeat"
            className="bg-violet-light border border-[violet-light] font-semibold text-white text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 "
          />
        </div>
        <div className="flex justify-center w-full mb-5">
          <button type="submit" className="btn-primary w-[200px]">
            Crear cuenta
          </button>
        </div>
        <div className="flex flex-col items-center sm:flex-row  sm:justify-end text-white">
          <div>
            <span>Ya tenés cuenta?</span>
          </div>
          <div>
            <Link
              to="/auth/login"
              className="text-violet-light cursor-pointer hover:text-violet-500 ml-1"
            >
              <span>Ingresá acá</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
