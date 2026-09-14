import { NavLink } from "react-router-dom";
import logo from "./assets/logointegrador.png";
import "./Header.css";


function Header() {
  return (
    <div className="topo">
      <img src={logo} alt="Logo" width="400px" height="120px" />

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/equipamentos"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Equipamentos
        </NavLink>

        <NavLink
          to="/guia"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Guias & ergonomia
        </NavLink>

        <NavLink
          to="/setup"
          className={({ isActive }) => (isActive ? "nav-ativo" : "nav-link")}
        >
          Monte seu setup
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;