import React from "react";

import { useSelector } from "react-redux";
import AddYDelAdmin from "./addYdeleteAdmin/AddYDelAdmin";
import AddYRemProduct from "./addYdelProduc/AddYRemProduct";

const PanelAdmin = () => {
  const user = useSelector((store) => store.userReducer.user);
  

  return (
    <section>
      {user?.superAdminUser && <AddYDelAdmin />}
      <AddYRemProduct />
    </section>
  );
};

export default PanelAdmin;
