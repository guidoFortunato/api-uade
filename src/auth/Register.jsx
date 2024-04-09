import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { UserContext } from "../context/UserProvider";

export const Register = () => {
  const { handleAuth } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
    handleAuth(true);
  });

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65 my-10">
      <form className="mx-auto flex flex-col gap-4" onSubmit={onSubmit}>
        <h3 className="text-white text-center text-3xl sm:text-4xl">
          Registrarse
        </h3>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.name,
                "focus:ring-violet-500 focus:border-violet-600": !errors.name,
              }
            )}
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-600 text-xs block mt-1 font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Correo electrónico
          </label>
          <input
<<<<<<< HEAD
            id="emailConfirm"
            type="text"
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 "
=======
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
>>>>>>> dev
          />
          {errors.email && (
            <span className="text-red-600 text-xs block mt-1 font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmEmail"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirmar correo electrónico
          </label>
          <input
            type="text"
            id="confirmEmail"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.confirmEmail,
                "focus:ring-violet-500 focus:border-violet-600":
                  !errors.confirmEmail,
              }
            )}
            {...register("confirmEmail", {
              required: {
                value: true,
                message: "Debe confirmar el correo electrónico",
              },
              validate: (value) => {
                return (
                  value === watch("email") ||
                  "Los correo electrónicos deben ser iguales"
                );
              },
            })}
          />
          {errors.confirmEmail && (
            <span className="text-red-600 text-xs block mt-1 font-semibold">
              {errors.confirmEmail.message}
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
            type="text"
            id="password"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.password,
                "focus:ring-violet-500 focus:border-violet-600":
                  !errors.password,
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
            <span className="text-red-600 text-xs block mt-1 font-semibold">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirmar contraseña
          </label>
          <input
            type="text"
            id="confirmPassword"
            className={clsx(
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.confirmPassword,
                "focus:ring-violet-500 focus:border-violet-600":
                  !errors.confirmPassword,
              }
            )}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Debe confirmar la contraseña",
              },
              validate: (value) => {
                return (
                  value === watch("password") ||
                  "Las contraseñas deben ser iguales"
                );
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-600 text-xs block mt-1 font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="flex justify-center w-full">
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
