import React from "react";

const Card = ({ producto }) => {
  console.log(producto);
  return (
    <div className="card">
      <figure>
        <img className="img" src={producto.imageUrl} alt={producto.name} />
        <figcaption>
          <p>{producto.price}</p>
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
