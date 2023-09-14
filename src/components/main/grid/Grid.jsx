import React, { useEffect, useState } from "react";

//commons
import Card from "../../../commons/card/Card";
import Banner from "../../../commons/banner/Banner";
//styles
import "./scss/grid.scss";
//axios
import axios from "axios";
import { useSelector } from "react-redux";

const Grid = () => {
  const [wines, setWines] = useState([]);
  const wineFounded = useSelector((store) => store.searchReducer.searched);
  

  useEffect(() => {
    axios
      .get("/api/wines")
      .then((result) => result.data)
      .then((data) => setWines(data))
      .catch((err) => console.error("error", err));
  }, []);

  return (
    <div className="grid__main">

      {!wineFounded && <Banner />}
      
      {wineFounded
        ? wineFounded.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))
        : wines
            .slice(0, 20)
            .map((producto) => <Card key={producto.id} producto={producto} />)}
    </div>
  );
};

export default Grid;
