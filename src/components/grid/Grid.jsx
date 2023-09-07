import React, { useEffect, useState } from "react";
import Card from "../../commons/card/Card";
import "./scss/grid.scss";
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
    <div className="grid__container">
      {wines.slice(0, 20).map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Grid;
