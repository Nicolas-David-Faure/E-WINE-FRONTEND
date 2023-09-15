import React, { useState } from "react";
//redux
import { useSelector } from "react-redux";
//router
import { Link, useNavigate } from "react-router-dom";
//styles
import "./scss/userButtons.scss";
//icons
import cartIcon from "../../assets/icons/cart.svg";
import userIcon from "../../assets/icons/user.svg";
import panelAdminIcon from "../../assets/icons/panelAdmin.svg";
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
        <UserButtonsIsLoggin userInfo={userInfo} />
      )}
    </div>
  );
};


const UserButtonsIsLoggin = ({ userInfo }) => {
  const user = userInfo.user;
  const [ menuOpen , setMenuOpen ] = useState(false)
  const navigate = useNavigate()
 
  const handleOpenMenu =()=>{
    setMenuOpen(prev=>!prev)
  }
  const handleSelectList =(e)=>{
    const menuValue = e.target.innerText
    if(menuValue === 'Historial'){
      setMenuOpen(false)
      navigate('/user/history')
    }
   
  }
  const menuArr = ['Perfil', 'Historial', 'Configuraciones']
  return (
    <>
      <div onClick={handleOpenMenu} className="userButtons__panel">
        <img src={userIcon} alt="alt" />

        {menuOpen && 
        <ul onClick={(e)=>e.stopPropagation()} className="userButtons__menu">
          {menuArr.map((word, i)=>(
            <li key={i} onClick={handleSelectList}>{word}</li>
          ))}
           <Logout />
        </ul>
        }
      </div>
      {(user.superAdminUser || user.adminUser) && (
        <>
          <Link to="/user/panelAdmin">
            <div className="userButtons__panel">
              <img src={panelAdminIcon} alt="panelAdmin" />
            </div>
          </Link>
        </>
      )}{" "}
      {!user.superAdminUser && (
        <>
          <Link to="/user/cart">
            <div className="userButtons__panel">
              <img src={cartIcon} alt="cart" />
            </div>
          </Link>
        </>
      )}
     
    </>
  );
};

export default UserButtons;

