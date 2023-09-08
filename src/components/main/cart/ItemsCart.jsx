import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart} from "../../../store/slice/cartSlice";
import deleteIcon from "../../../assets/icons/delete.svg";
import axios from "axios";
import addToCartThunk from "../../../store/slice/cartSlice/thunks";

const ItemsCart = ({ wines }) => {

  const userInfo = useSelector((store) => store.userReducer.user);
  console.log(wines);

  const dispatch = useDispatch();
 
  //console.log(userInfo.email);

  //email , id : wines , amount , boolean
  const incremetOrDecrement = {
    increment: true,
    decrement: false,
  };

  const handleOperation = (event) => {
    const btnValue = event.target.value;

      const body = {
        id: wines.id,
        email: userInfo.email,
        price: wines.price,
        incrementOrDecrement: incremetOrDecrement[btnValue],
      };
      if(wines.count >=1 && incremetOrDecrement[btnValue] == true){
        dispatch(addToCartThunk(body));
      }else if(wines.count === 1 && incremetOrDecrement[btnValue] == false){
        return
      }else{
        dispatch(addToCartThunk(body));
      }
  };
  
  const handleRemove = () => {
 
   axios.delete('/api/cart/'+wines.id+'/'+ userInfo.email)
   .then((res)=>{
    dispatch(updateCart())
   })
   .catch(err=>console.err(err))
  };


  return (
    <li>
      <img style={{ width: 50, height: 75 }} src={wines.image} />
      <p className="name_list">{wines.name}</p>
      <p>Cantidad: {wines.count} </p>
      <p className="price_list">
        Precio:
        {" $" + wines.amount}
      </p>
      <button  onClick={handleRemove}>
        <img src={deleteIcon} alt="delete" />
      </button>

      <button onClick={handleOperation} value="increment">
        +
      </button>

      <button  onClick={handleOperation} value="decrement">
        -
      </button>
    </li>
  );
};

export default ItemsCart;
