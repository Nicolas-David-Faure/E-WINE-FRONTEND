import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { handleUser } from "../../store/slice/userSlice";
import userLogout from "../../services/userLogout";
import { Link, useNavigate } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const status = await userLogout();
    if (status === 204) {
      dispatch(handleUser(null));
      navigate("/auth?type=login");
    } else {
      alert("Error al intentar desloguear ", status);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Salir</button>
    </div>
  );
};

export default Logout;
