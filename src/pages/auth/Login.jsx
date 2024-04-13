import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleAuth } = useContext(UserContext);

  const onSubmit = handleSubmit((data) => {
    // console.log({ data });
    handleAuth(true);
    localStorage.setItem("auth", JSON.stringify(true));
  });

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65">
      <form className="mx-auto flex flex-col gap-5" onSubmit={onSubmit}>
        <h3 className="text-white text-center text-3xl sm:text-4xl">
          Iniciar sesión
        </h3>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Correo electrónico
          </label>
          <input
            type="text"
            id="email"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.email,
                "focus:ring-violet-500 focus:border-violet-600": !errors.email,
              }
            )}
            {...register("email", {
              required: {
                value: true,
                message: "El correo electrónico es obligatorio",
              },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Ingrese un correo electrónico válido",
              },
            })}
          />
          <div
            className={clsx("text-red-600 font-semibold block mt-1", {
              hidden: errors.email,
            })}
          >
            {" "}
          </div>
          {errors.email && (
            <span className="text-red-600 font-semibold text-xs block mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.email,
                "focus:ring-violet-500 focus:border-violet-600": !errors.email,
              }
            )}
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es obligatoria",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener como mínimo 6 caracteres",
              },
              maxLength: {
                value: 20,
                message: "La contraseña debe tener como máximo 20 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600 font-semibold text-xs block mt-1">
              {errors.password.message}
            </span>
          )}
          <Link to="/auth/recover">
            <p className="mt-2 text-sm text-violet-light hover:text-violet-500">
              Olvidé mi contraseña
            </p>
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <button type="submit" className="btn-primary w-[200px]">
            Ingresar
          </button>
        </div>
        <div className="flex flex-col items-center sm:flex-row  sm:justify-end text-white">
          <div>
            <span>No tenés cuenta?</span>
          </div>
          <div>
            <Link
              to="/auth/register"
              className="text-violet-light cursor-pointer hover:text-violet-500 ml-1"
            >
              <span>Registrate acá</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
