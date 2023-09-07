import React from "react";
//styles
import "./scss/navBar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navBar__main">
      <Link to="/">Home</Link>
      <Link to="/categorias">Categorias</Link>
      <Link to="/sobreNosotros">Sobre nosotros</Link>
    </nav>
  );
};

export default NavBar;
