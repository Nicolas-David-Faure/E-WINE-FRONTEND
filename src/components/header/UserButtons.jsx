import React from "react";
//redux
import { useSelector } from "react-redux";
//router
import { Link } from "react-router-dom";
//styles
import "./scss/userButtons.scss";
//icons
import cartIcon from "../../assets/icons/cart.svg";
import userIcon from "../../assets/icons/user.svg";
import panelAdminIcon from "../../assets/icons/panelAdmin.svg"
import Logout from "../auth/Logout";
const UserButtons = () => {
  const userInfo = useSelector((store) => store.userReducer);

  return (
    <div className="userButtons__main">
      {!userInfo.isLoggin ? (
        <>
          <Link to="/auth?type=register">
            <button>Registrate</button>
          </Link>
          <Link to="/auth?type=login">
            <button>Ingresá</button>
          </Link>
        </>
      ) : (
        <UserButtonsIsLoggin user={userInfo} />
      )}
    </div>
  );
};

const UserButtonsIsLoggin = ({ user }) => {

  return (
    <>
      <div className="userButtons__panel">
        <img src={userIcon} alt="alt" />
      </div>
      {(user.isSuperAdmin || user.isAdmin) && (
        <>
          <Link to="/user/panelAdmin">
            <div className="userButtons__panel">
              <img src={panelAdminIcon} alt="panelAdmin"/>
            </div>
          </Link>
        </>
      )} {!user.isSuperAdmin && (
        <>
          <Link to="/user/cart">
            <div className="userButtons__panel">
              <img src={cartIcon} alt="cart" />
            </div>
          </Link>
        </>
      )}
      <Logout />
    </>
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
