
export const PassRecover = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click enviar");
  };

  return (
    <div className="bg-violet-dark p-7 rounded-lg bg-opacity-65">
      <form className="mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
        <h3 className="text-white text-center text-3xl sm:text-4xl">
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
            type="email"
            id="email"
            className="bg-violet-light font-semibold border border-[violet-light] text-white text-sm rounded-lg focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 "
          />
          <p className="mt-2 text-sm text-violet-light hover:text-violet-500">
           
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
