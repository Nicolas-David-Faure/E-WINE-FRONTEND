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

const Cart = () => {
  const { update } = useSelector((store) => store.cartReducer);
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);

  const handleBuy = () => {navigate('/')};

  /*
  {name: "marcos", image: "hola", cantidad: 15, id: 5, total: 1500}
  */

  useEffect(() => {
    axios
      .get("/api/cart/")
      .then(({ data }) => setCart(data))
      .catch((err) => console.error(err));
  }, [update]);

  return (
    <div className="cart__main">
      <h1 className="cart__title">Carrito de compras</h1>
      <div>
        <h2>Productos disponibles</h2>
        <ul className="cart__cont_list">
          {cart &&
            cart.map((producto) => (
              <ItemsCart wines={producto} key={producto.id} />
            ))}
          <button onClick={handleBuy}>Comprar</button>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
