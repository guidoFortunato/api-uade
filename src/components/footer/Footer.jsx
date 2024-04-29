import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#983feca6] p-4 absolute bottom-0 w-full">
      <div className="w-full max-w-screen-xl mx-auto  md:flex md:flex-col md:items-center font-normal md:justify-center">
        <Link to="/" className="flex items-center mb-1">
          {/*<img src="/Logo.png" className="h-6 md:h-8" alt="Frameland" /> */}
          <p className="text-sm md:text-lg text-white sm:text-center font-semibold italic ml-1 hover:text-slate-300 transition-all">
            FrameLand
          </p>
        </Link>

        <span className="text-sm text-white font-medium text-center ">
          {/* <p>Un espacio con especial atención al cliente latinoamericano </p> */}
          © {new Date().getFullYear()} - Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};
