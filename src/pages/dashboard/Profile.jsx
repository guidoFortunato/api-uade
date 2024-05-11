import { useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    contrasena: "",
    repetirContrasena: "",
    foto: null,
  });

  const handlePhotoChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFormData({ ...formData, foto: file });
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="w-full h-[200px] md:h-[250px] relative">
        <img
          src="/FondoFAV6.jpeg"
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="w-full h-full absolute top-0 bg-black bg-opacity-85" />
        <h3 className="text-white text-center text-xl md:text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute whitespace-nowrap capitalize">
          Editar Perfil
        </h3>
      </div>
      <div className="shadow-md  py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-40">
          <div className="flex items-center flex-col mb-4 col-span-1">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              {/* {formData.foto && ( */}
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Foto de perfil"
                className="object-cover w-full h-full"
              />

              {/* )} */}
            </div>
            <div className="">
              <label className="block mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="text-white text-xs"
                />
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="col-span-2">
            <div className="mb-4 ">
              <label className="block text-white text-sm mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="bg-[#5A189A] border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
                id="nombre"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                //placeholder="Ingrese su nombre"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
                id="apellido"
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                //placeholder="Ingrese su apellido"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="correoElectronico"
              >
                Correo electrónico
              </label>
              <input
                className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
                id="correoElectronico"
                type="email"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleChange}
                //placeholder="Ingrese su correo electronico"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="contrasena"
              >
                Contraseña
              </label>
              <input
                className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
                id="contrasena"
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                //placeholder="Ingrese su contraseña"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="repetirContrasena"
              >
                Repetir contraseña
              </label>
              <input
                className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#9757ca] focus:border-[#9757ca] focus:outline-none"
                id="repetirContrasena"
                type="password"
                name="repetirContrasena"
                value={formData.repetirContrasena}
                onChange={handleChange}
                //placeholder="Repita su contraseña"
              />
            </div>
            <div className="flex justify-between md:justify-end mt-4">
              <Link to="/">
                <button
                  type="button"
                  className="bg-transparent border-2 border-violet-600 hover:bg-violet-800 hover:border-violet-800 text-white hover:text-white py-2 px-2 rounded-lg transition-all font-semibold md:mr-2"
                >
                  CANCELAR
                </button>
              </Link>

              <button
                type="submit"
                className="btn-primary text-white py-2 px-4 rounded font-semibold "
              >
                CONFIRMAR
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="bg-transparent shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-white text-center mb-4">Editar Perfil</h2>

        <div className="flex items-center mb-4">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-[#9D4EDD]">
            {formData.foto && (
              <img
                src={URL.createObjectURL(formData.foto)}
                alt="Foto de perfil"
              />
            )}
          </div>
          <div className="ml-4">
            <label className="block mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="block text-white text-sm mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5"
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              //placeholder="Ingrese su nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input
              className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5"
              id="apellido"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              //placeholder="Ingrese su apellido"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="correoElectronico"
            >
              Correo electronico
            </label>
            <input
              className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5"
              id="correoElectronico"
              type="email"
              name="correoElectronico"
              value={formData.correoElectronico}
              onChange={handleChange}
              //placeholder="Ingrese su correo electronico"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="contrasena"
            >
              Contraseña
            </label>
            <input
              className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5"
              id="contrasena"
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              //placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="repetirContrasena"
            >
              Repetir contraseña
            </label>
            <input
              className="bg-[#5A189A]  border border-[#9D4EDD] text-white text-sm rounded-lg block w-full p-2.5"
              id="repetirContrasena"
              type="password"
              name="repetirContrasena"
              value={formData.repetirContrasena}
              onChange={handleChange}
              //placeholder="Repita su contraseña"
            />
          </div>
          <div className="flex justify-end mt-4">
            <Link to="/">
              <button
                type="button"
                className="bg-transparent border-2 border-violet-600 hover:bg-violet-800 hover:border-violet-800 text-white hover:text-white py-2 px-4 rounded-lg transition-all font-semibold mr-2"
              >
                CANCELAR
              </button>
            </Link>

            <button
              type="submit"
              className="btn-primary text-white py-2 px-4 rounded font-semibold "
            >
              CONFIRMAR
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};
