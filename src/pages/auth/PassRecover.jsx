import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { alertSuccess } from "../../helpers";

export const PassRecover = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log("click enviar");
    alertSuccess()
    navigate('/auth/login')
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("click enviar");
  // };

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65 relative">
      <Link to="/auth/login">
        <IoMdClose className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-gray-400" />
      </Link>
      <form className="mx-auto flex flex-col gap-6" onSubmit={onSubmit}>
        <h3 className="text-white text-center text-2xl sm:text-3xl">
          Recuperar contraseña
        </h3>
        <div className="my-4">
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
              "bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg block w-full p-2.5 pr-10",
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
          <p className="mt-2 text-xs text-violet-light">
            Se le enviará un código al mail indicando los pasos a seguir
          </p>
        </div>

        <div className="flex justify-center w-full mb-5">
          <button type="submit" className="btn-primary w-[200px]">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
