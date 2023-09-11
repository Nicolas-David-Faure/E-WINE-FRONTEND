import React, { useEffect, useState } from "react";

//commons
import Card from "../../../commons/card/Card"
import Banner from "../../../commons/banner/Banner";
//styles
import "./scss/grid.scss";
//axios
import axios from "axios";

const Grid = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    axios
      .get("/api/wines")
      .then((result) => result.data)
      .then((data) => setWines(data));
  }, []);

  return (
    <div className="grid__main">
      <Banner />
      {wines.slice(0, 20).map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Grid;
