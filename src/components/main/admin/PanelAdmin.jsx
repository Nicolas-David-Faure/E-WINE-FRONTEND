import React from "react";

import { useSelector } from "react-redux";
import AddYDelAdmin from "./addYdeleteAdmin/AddYDelAdmin";
import AddYRemProduct from "./addYdelProduc/AddYRemProduct";

const PanelAdmin = () => {
  const userInfo = useSelector((store) => store.userReducer);
  console.log(userInfo);

  return (
    <section>
      {userInfo.isSuperAdmin && <AddYDelAdmin />}
      <AddYRemProduct />
    </section>
  );
};

export default PanelAdmin;
