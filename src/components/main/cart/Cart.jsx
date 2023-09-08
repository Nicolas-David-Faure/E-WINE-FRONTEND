import React, { useEffect, useState } from "react";
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

  const [cart, setCart] = useState([]);

  const handleBuy = () => {};

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
      <h1 className="header">Carrito de compras</h1>
      <div>
        <h2>Productos disponibles</h2>
        <ul className="wine_list">
          {cart &&
            cart.map((producto) => (
              <ItemsCart wines={producto} key={producto.id} />
            ))}
          <button onClick={handleBuy}>Pagar</button>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
