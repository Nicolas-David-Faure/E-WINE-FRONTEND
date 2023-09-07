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
        <img className="img" src={producto.image} alt={producto.name} />
        <figcaption>
          <p>{producto.price}</p>

   
          <p>{producto.description}</p>

          <h2 onClick={handleClick}>{producto.name}</h2>

        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
