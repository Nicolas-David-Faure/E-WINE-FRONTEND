import React from "react";
//router
import { useNavigate } from "react-router-dom";
//styles
import './scss/card.scss'
//framer-motion
import { motion } from "framer-motion"; 
//utils
import truncateString from '../../utils/truncateString'
import numberFormater from '../../utils/numberFormater'

const Card = ({ producto }) => {

  const nagivate = useNavigate()
  const handleClick =()=>{
    nagivate('/singleProduct/'+ producto.id)
  }
  const isMajorOf35 = producto.name.length > 35 ? true : false;
  
  return (
    <motion.div
    onClick={handleClick} 
    layout
    initial={{ opacity: 0 , y:100 , scale:0.5}}
    animate={
      {
      opacity:[1] ,
      y:0,
      transition: { type:'spring',
      duration:.5} ,
      scale:1}}
      className="card__main">
      <figure>
        <img className="img" src={producto.image} alt={producto.name} />
        <figcaption>
          <p>${numberFormater(producto.price)},00</p>
          <h2 >{truncateString(producto.name, 35,isMajorOf35)}</h2>
        </figcaption>
      </figure>
    </motion.div>
  );
};

export default Card;
