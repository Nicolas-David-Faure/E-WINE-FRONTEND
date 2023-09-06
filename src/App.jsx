import { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios.get("/api/me").then(user => {})
  // },[])

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
