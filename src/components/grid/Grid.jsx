import React from "react";
import Card from "../../commons/card/Card";

const Grid = () => {
  const fakeDate = [];

  return (
    <div className="grid-container">
      {fakeDate.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Grid;
