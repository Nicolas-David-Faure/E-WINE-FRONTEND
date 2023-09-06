import React from "react";
import Card from "../../commons/card/Card";
import "./scss/grid.scss";

const Grid = () => {
  const fakeDate = [
    {
      id: 1,
      title: "Vino Tinto",
      description: "Un vino tinto delicioso.",
      price: "$20.00",
      imageUrl: "URL_de_la_imagen_1.jpg",
    },
    {
      id: 2,
      title: "Vino Blanco",
      description: "Un vino blanco refrescante.",
      price: "$18.00",
      imageUrl: "URL_de_la_imagen_2.jpg",
    },
  ];

  return (
    <div className="grid-container">
      {fakeDate.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Grid;
