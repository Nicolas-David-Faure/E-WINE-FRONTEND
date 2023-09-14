import React from "react";
//router
import { Route, Routes } from "react-router-dom";
//styles
import "./scss/mainContent.scss";
//commons
import Auth from "../auth/Auth";
//components
import SingleProduct from "./singleProduct/SingleProduct";
import Cart from "./cart/Cart";
import Grid from "./grid/Grid";
import PanelAdmin from "./admin/PanelAdmin";

const MainContent = () => {
  return (
    <main className="mainContent__main">
      <Routes>
        <Route path="/singleProduct/*" element={<SingleProduct />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Grid />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/panelAdmin" element={<PanelAdmin />} />
      </Routes>
    </main>
  );
};

export default MainContent;
