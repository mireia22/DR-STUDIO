import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/"> DÚNIA RODON</Link>
      </nav>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
