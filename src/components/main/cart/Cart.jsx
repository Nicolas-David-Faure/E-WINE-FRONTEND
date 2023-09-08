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
  const cartState = useSelector((store) => store.cartReducer);

  const handleBuy = () => {};

  /*
  {name: "marcos", image: "hola", cantidad: 15, id: 5, total: 1500}
  */

  useEffect(()=>{
    axios.get('/api/cart/')
    .then((res)=>console.log(res))
  },[])
  return (
    <div className="cart__main">
      <h1>Carrito de compras</h1>
      <div>
        <h2>Productos disponibles</h2>
        <ul>
          {cartState.cartItems.map((producto) => (
            <ItemsCart producto={producto} key={producto.id} />
          ))}
          <button onClick={handleBuy}>Pagar</button>
        </ul>
      </div>
    </div>
  );
};

export default Cart;

/*
<div>

      <div>
        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} - Precio: {item.precio} USD - Cantidad: {item.cantidad}
              <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      <p>Total a pagar: {total} USD</p>

      <button onClick={() => alert('Implementa tu lógica de pago aquí')}>Pagar</button>
    </div>
*/
