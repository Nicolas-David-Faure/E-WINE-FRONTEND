import React from "react";
//router

//styles
import "./scss/userButtons.scss";
import { Link } from "react-router-dom";
const UserButtons = () => {

  return (
    <div className="userButtons__main">
      <Link to="/auth?type=register">
        <button>Registrate</button>
      </Link>
      <Link to="/auth?type=login">
        <button>Ingresá</button>
      </Link>
    </div>
  );
};

export default UserButtons;

/*
<NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pendingNav" : isActive ? "activeNav" : ""}
              to={'/auth_panel?type=register'}>
                <button>Registrate</button>
            </NavLink>
            <NavLink 
              className={( { isActive, isPending } ) =>
              isPending ? "pendingNav" : isActive ? "activeNav" : ""}
              to={'/auth_panel?type=login'}>
                <button>Ingresar</button>
            </NavLink>
*/
