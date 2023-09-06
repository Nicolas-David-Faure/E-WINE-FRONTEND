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
      imageUrl:
        "https://www.gustoargentino.com/cdn/shop/products/estancia-mendoza-vino-tinto-merlot-malbec-1.jpg?v=1598603578&width=840",
    },
    {
      id: 2,
      title: "Vino Blanco",
      description: "Un vino blanco refrescante.",
      price: "$18.00",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Vino Rosado",
      description: "Un vino rosado dulce.",
      price: "$18.00",
      imageUrl:
        "https://ardiaprod.vtexassets.com/arquivos/ids/255792-800-auto?v=638237408914700000&width=800&height=auto&aspect=true",
    },
    {
      id: 4,
      title: "Vino espumante",
      description: "Un vino espumante fuerte.",
      price: "$18.00",
      imageUrl:
        "https://masonlineprod.vtexassets.com/arquivos/ids/266574-800-auto?v=638065534186800000&width=800&height=auto&aspect=true",
    },
  ];

  return (
    <div className="grid__container">
      {fakeDate.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Grid;
