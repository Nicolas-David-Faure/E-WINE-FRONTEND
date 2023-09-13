import React, { useEffect } from "react";
//styles
import './scss/itemsCart.scss'
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../store/slice/cartSlice";
import addToCartThunk from "../../../store/slice/cartSlice/thunks";
//axios
import axios from "axios";
//icons
import arrowUpIcon from "../../../assets/icons/arrowUp.svg";
import arrowDownIcon from "../../../assets/icons/arrowDown.svg";
//utils
import numberFormater from "../../../utils/numberFormater";
const ItemsCart = ({ wines }) => {

  const userInfo = useSelector((store) => store.userReducer.user);

  const dispatch = useDispatch();

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
   .then(()=>{
    dispatch(updateCart())
   })
   .catch(err=>console.error(err))
  };

  return (
    <li className="itemsCart__main">
      <figure>
        <img style={{ width: 50, height: 75 }} src={wines.image} />
      <figcaption>
     
        <p className="itemsCart__name">{wines.name}</p>
        <p className="itemCart__delete" onClick={handleRemove}>Eliminar</p>
      </figcaption>
      </figure>
      <div className="itemCart__cont_price">
             <p>Cantidad: {wines.count} </p>
            <p className="itemsCart__price">${numberFormater(wines.price)},00 c/u</p>
      </div>

      <div className="itemsCart__cont_btn">
        <button onClick={handleOperation} value="increment">
          <img src={arrowUpIcon} alt="incremet products" />
        </button>

        <button  onClick={handleOperation} value="decrement">
          <img src={arrowDownIcon} alt="decrement products" />
        </button>
      </div>

      <div className="itemCart__cont_total">
        <p>Total</p>
        <p className="itemsCart__amount">{" $" + numberFormater(parseInt(wines.amount))},00</p>
      </div>
  
     
    
    </li>
  );
};

export default ItemsCart;
