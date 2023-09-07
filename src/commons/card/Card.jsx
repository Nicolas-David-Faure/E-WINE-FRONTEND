import React from "react";

const Card = ({ producto }) => {
  return (
    <div className="card">
      <figure>
        <img className="img" src={producto.image} alt={producto.name} />
        <figcaption>
          <p>{producto.price}</p>
          <h2>{producto.name}</h2>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
