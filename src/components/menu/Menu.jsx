import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
const Menu = () => {
  const user = useContext(userContext);

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={"/criptomonedas"}>Lista de criptos</NavLink>
        </li>
        <li>
          <NavLink to={"/perfil"}>Perfil de {user.name}</NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Menu;
