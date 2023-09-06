import React from "react";

const Card = ({ producto }) => {
  return (
    <div className="card__main">
      <img src={producto.image} alt={producto.name} />
      <h2>{producto.name}</h2>
      <h3>{"$" + producto.price}</h3>
      <p>{producto.description}</p>
    </div>
  );
};

export default Card;
