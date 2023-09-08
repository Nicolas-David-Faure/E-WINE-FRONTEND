import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { removeCart } from "../../../store/slice/cartSlice";
import deleteIcon from "../../../assets/icons/delete.svg";
import axios from "axios";

const ItemsCart = ({ producto }) => {
  const userInfo = useSelector(store => store.userReducer.user);

  const dispatch = useDispatch();
  const handleClickRemove = () => {
    dispatch(removeCart(2));
  };

  console.log(userInfo.email)

  //email , id : producto , amount , boolean
  const incremetOrDecrement = {
    increment : true,
    decrement: false
  }

  const handleOperation =(event)=>{
    const btnValue = event.target.value
    console.log(incremetOrDecrement[ btnValue ])
  }
  

  return (
    <li>
      <p>{producto.name}</p>
      <p>Cantidad: {producto.cantidad} </p>
      <p>
        Precio:
        {" $" + producto.total}
      </p>
      <button onClick={handleClickRemove}>
        <img src={deleteIcon} alt="delete" />
      </button>

      <button onClick={handleOperation} value='increment'>+</button>
       
      <button onClick={handleOperation} value='decrement'>-</button>

      
    </li>
  );
};

export default ItemsCart;
