import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ producto }) => {

  const nagivate = useNavigate()

  const handleClick =()=>{
    nagivate('/singleProduct/'+ producto.id)
  }
  return (
    <div className="card">
      <figure>
        <img className="img" src={producto.imageUrl} alt={producto.name} />
        <figcaption>
          <p>{producto.price}</p>
          <h2 onClick={handleClick}>{producto.title}</h2>
          <p>{producto.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
