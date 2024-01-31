import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header
      className="flex flex-col items-center py-2 px-6 justify-between fixed w-full z-10 shadow-lg shadow-black/[0.1]  sm:h-12 sm:flex-row
    "
    >
      <nav className="w-full flex justify-between items-center py-2 border-b-2 border-[#f3f3f2] sm:justify-start gap-3 sm:border-none">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" className="font-semibold">
          DÚNIA RODON
        </Link>
      </nav>

      <nav className="w-full flex justify-between items-center py-2  sm:justify-end gap-3 sm:gap-6 ">
        <Link to="/about" className="hover:font-semibold">
          Sobre mi
        </Link>
        <Link to="/" className="hover:font-semibold">
          Proyectos
        </Link>
        <Link to="/contact" className="hover:font-semibold">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
