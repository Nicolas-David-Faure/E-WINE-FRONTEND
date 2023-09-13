import React from "react";
//styles
import "./scss/header.scss";
//component
import NavBar from "./NavBar";
import Search from "./Search";
import UserButtons from "./UserButtons";
import { Link } from "react-router-dom";
//icons
import cupWine from '../../assets/icons/wine.svg'
import bottleWine from '../../assets/icons/wine-bottle.svg'

const Header = () => {
  return (
    <>
      <header className="header__main">
          <Link to="/">
            <div className="header__logo">
                <h1>E-WINE</h1>
                <img className="header__icon cup_wine" src={cupWine} />
                <img className="header__icon bottle_wine" src={bottleWine} />
            </div>
          </Link>
        <Search />
        <UserButtons />
      </header>

      <NavBar />
    </>
  );
};

export default Header;
