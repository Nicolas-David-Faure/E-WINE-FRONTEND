import React from "react";
//styles
import './panelAdmin.scss'
//redux
import { useSelector } from "react-redux";
//components
import AddYDelAdmin from "./addYdeleteAdmin/AddYDelAdmin";
import AddYRemProduct from "./addYdelProduc/AddYRemProduct";

const PanelAdmin = () => {
  const user = useSelector((store) => store.userReducer.user);
  

  return (
    <section className="panelAdmin__main" >
      <AddYRemProduct />
      {user?.superAdminUser && <AddYDelAdmin />}
    </section>
  );
};

export default PanelAdmin;
