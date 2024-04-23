import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    //chequear que funcione el color del background 
    <footer className="rounded-lg shadow m-4 bg-[#993fecdc]"> 
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:flex-col md:items-center font-normal md:justify-center">
      <p className="text-sm text-white sm:text-center font-semibold italic sm:text-6x1 ">FrameLand</p>
        <span className="text-sm text-white font-medium sm:text-center ">
        <p>Un espacio con especial atención al cliente latinoamericano </p>
          <Link to="/" className=" ml-1 text-xs">
          © { new Date().getFullYear() } - Todos los derechos reservado
          </Link>
        </span>
      </div>
    </footer>
  );
   
}
