import React from "react";
//router
import { Route, Routes } from "react-router-dom";
//styles
import "./scss/mainContent.scss";
//components
import SingleProduct from "./singleProduct/SingleProduct";
import Auth from "../auth/Auth";
import Cart from "./cart/Cart";
import Grid from "./grid/Grid";
import PanelAdmin from "./admin/PanelAdmin";
import ContinueShopping from "../continueShopping/ContinueShopping";


const MainContent = () => {
  return (
    <main className="mainContent__main">
      <Routes>
        <Route path="/*" element={<Grid />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/singleProduct/*" element={<SingleProduct />}/>
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/panelAdmin" element={<PanelAdmin />} />
        <Route path="/user/cart/continuebuy" element={<ContinueShopping />}/>
      </Routes>
    </main>
  );
};

export default MainContent;
