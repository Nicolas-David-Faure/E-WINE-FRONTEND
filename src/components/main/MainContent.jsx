import React from "react";
//router
import { Route, Routes } from "react-router-dom";
//styles
import "./scss/mainContent.scss";
//commons
import Auth from "../../commons/auth/Auth";
import SingleProduct from "./singleProduct/SingleProduct";
//components
import Grid from "../grid/Grid";

const MainContent = () => {
  return (

    <main className="mainContent__main">
      
      <Routes>
        <Route path="/singleProduct/*" element={<SingleProduct />}/>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/" element={<Grid />} />
      </Routes>

    </main>
  
  );
}

export default MainContent;
