import React from "react";
import "./scss/mainContent.scss";
//commons
import Auth from "../../commons/auth/Auth";
import Grid from "../grid/Grid";
import { Route, Routes } from "react-router-dom";
//components

const MainContent = () => {
  return (

    <main className="mainContent__main">
      
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Grid />} />
      </Routes>

    </main>
  
  );
}

export default MainContent;
