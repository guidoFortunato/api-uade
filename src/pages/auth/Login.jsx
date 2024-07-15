import clsx from "clsx";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { alertInfo } from "../../helpers";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleAuth, handleToken } = useContext(UserContext);
  const [seePassword, setSeePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    // console.log({ email, password });

    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:4000/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      // console.log({ res });
      const data = await res.json();
      // console.log({ data });

      if (!data.ok) {
        alertInfo(data.message);
        setIsLoading(false);
        return;
      }

      Cookies.set("ai_to", data.token, { expires: 365 });
      // localStorage.setItem("token", JSON.stringify(data.token));
      handleAuth(true);
      handleToken(data.token)
    } catch (error) {
      console.log({ error });
    }

    setIsLoading(false);
    return;
  });

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65 relative">
      <Link to="/">
        <IoMdClose className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-gray-400" />
      </Link>

      <form className="mx-auto flex flex-col gap-5 " onSubmit={onSubmit}>
        <h3 className="text-[#ffffff] text-center text-2xl sm:text-3xl">
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
              "bg-violet-light border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5 pr-10",
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

          {errors.email && (
            <span className="text-red-500 font-normal text-xs block mt-1">
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
          <div className="relative">
            <input
              type={seePassword ? "text" : "password"}
              id="password"
              className={clsx(
                "bg-violet-light border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5 pr-10",
                {
                  "border-red-500 focus:ring-red-600 focus:border-red-500":
                    errors.email,
                  "focus:ring-violet-500 focus:border-violet-600":
                    !errors.email,
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
            {seePassword ? (
              <FaEye
                className="absolute right-4 top-3 text-white cursor-pointer"
                onClick={() => setSeePassword((prev) => !prev)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-4 top-3 text-white cursor-pointer"
                onClick={() => setSeePassword((prev) => !prev)}
              />
            )}
          </div>
          {errors.password && (
            <span className="text-red-500 font-normal text-xs block mt-1">
              {errors.password.message}
            </span>
          )}
          <Link to="/auth/pass-recover">
            <p className="mt-2 text-xs text-violet-light hover:text-violet-500">
              Olvidé mi contraseña
            </p>
          </Link>
        </div>
        <div className="flex justify-center w-full">
          {isLoading ? (
            <button type="button" className="btn-disabled w-[200px]" disabled>
              Cargando...
            </button>
          ) : (
            <button type="submit" className="btn-primary w-[200px]">
              Ingresar
            </button>
          )}
        </div>
        <div className="flex flex-col items-center sm:flex-row  sm:justify-end text-white text-sm">
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
