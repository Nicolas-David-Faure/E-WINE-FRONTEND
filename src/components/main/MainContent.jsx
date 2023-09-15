import React from "react";
//router
import { Navigate, Route, Routes } from "react-router-dom";
//styles
import "./scss/mainContent.scss";
//components
import ContinueShopping from "../continueShopping/ContinueShopping";
import SingleProduct from "./singleProduct/SingleProduct";
import History from "./history/History";
import Auth from "../auth/Auth";
import Cart from "./cart/Cart";
import Grid from "./grid/Grid";
import PanelAdmin from "./admin/PanelAdmin";
import NotFound from "./notFound/NotFound";

const MainContent = () => {
  return (
    <main className="mainContent__main">
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/singleProduct/*" element={<SingleProduct />}/>
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/panelAdmin" element={<PanelAdmin />} />
        <Route path="/user/cart/continuebuy" element={<ContinueShopping />}/>
        <Route path="/user/history" element={<History />}/>
        <Route path="404" element={<NotFound />} />
        <Route path="/*" element={<Grid />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </main>
  );
};

export default MainContent;
