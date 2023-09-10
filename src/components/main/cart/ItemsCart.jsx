import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateCart} from "../../../store/slice/cartSlice";
//
import deleteIcon from "../../../assets/icons/delete.svg";
import axios from "axios";
import addToCartThunk from "../../../store/slice/cartSlice/thunks";
import './scss/itemsCart.scss'
const ItemsCart = ({ wines }) => {

  const userInfo = useSelector((store) => store.userReducer.user);
 

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
    <li className="itemsCart__main">
      <figure>
      <img style={{ width: 50, height: 75 }} src={wines.image} />
      <figcaption>
     
        <p className="itemsCart__name">{wines.name}</p>
        <p>Cantidad: {wines.count} </p>
        <p className="itemsCart__price">${wines.price} c/u</p>

      </figcaption>
      </figure>


      <div className="itemsCart__cont_btn">
        <button onClick={handleOperation} value="increment">+</button>

        <button  onClick={handleOperation} value="decrement">-</button>
      </div>
        <p className="itemsCart__amount">{" $" + wines.amount}</p>
  
      <img onClick={handleRemove} src={deleteIcon} alt="delete" />
    
    </li>
  );
};

export default ItemsCart;
