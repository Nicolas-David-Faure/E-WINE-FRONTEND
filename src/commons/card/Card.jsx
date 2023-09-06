import React from "react";
import "./scss/card.scss";

const Card = ({ producto }) => {
  return (
    <div className="vino">
      <img className="img" src={producto.image} alt={producto.name} />
      <h2 className="h2">{producto.name}</h2>
      <h3 className="precio">{"$" + producto.price}</h3>
      <p>{producto.description}</p>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
};

export default Card;
