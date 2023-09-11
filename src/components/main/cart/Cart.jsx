import React, { useEffect, useState } from "react";
//routes
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//styles
import "./scss/cart.scss";
//axios
import axios from "axios";
//component
import ItemsCart from "./ItemsCart";
//utils
import numberFormater from "../../../utils/numberFormater";
const Cart = () => {
  const { update } = useSelector((store) => store.cartReducer);
  const user = useSelector((store) => store.userReducer.user);
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);

  const handleBuy = () => {navigate('/user/cart/continuebuy')};

  let totalAmount = cart.reduce((acumulator , item)=>{
    return acumulator + parseInt(item.amount)
  },0)
  
  useEffect(() => {
    axios
      .get(`/api/cart/${user?.email}`)
      .then(({ data }) => setCart(data))
      .catch((err) => console.error(err));
  }, [update]);

  return (
    <div className="cart__main">
      <h1 className="cart__title">Carrito de compras</h1>
        <h2>Productos disponibles</h2>
      <div className="cart__cont_products">
        <ul className="cart__cont_list">
          {cart &&
            cart.map((producto) => (
              <ItemsCart wines={producto} key={producto.id} />
            ))}
        </ul>


        <div className="cart__cont_amount">
          <div className="cart__btn_continue">
            <button onClick={handleBuy} >Continuar compra</button>
          </div>
          <div className="cart__totalAmount">
            <p>Total a pagar</p>
            <p>${numberFormater(totalAmount)},00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
