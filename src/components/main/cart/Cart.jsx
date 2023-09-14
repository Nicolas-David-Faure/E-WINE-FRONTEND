import React, { useEffect, useState , useRef} from "react";
//routes
import { useNavigate } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
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
  const refBtnContinueShopping = useRef() 
  const navigate = useNavigate()

  
  const [cart, setCart] = useState([]);

  const handleBuy = () => {navigate('/user/cart/continuebuy')};

  let totalAmount = cart.reduce((acumulator , item)=>{
    return acumulator + parseInt(item.amount)
  },0)
 
    let btnContinue = document.getElementById('cart__btn_continue')
    if(btnContinue){
    if(cart.length === 0 ){
      btnContinue.disabled = true
    
    }else{
      btnContinue.disabled = false
    }  
  }
 
  useEffect(() => {
    axios
      .get(`/api/cart/${user?.email}`)
      .then(({ data }) => {
        setCart(data)})
      .catch((err) => console.error(err));
    
  }, [update]);
    
  return (
    <div className="cart__main">
      <h1 className="cart__title">Carrito de compras</h1>
        
      <div className="cart__cont_products">

        {cart.length === 0 ? <h4>Parece que todavía no añadiste productos al carrito..</h4>:
        <ul className="cart__cont_list">
          {cart &&
            cart.map((producto) => (
              <ItemsCart wines={producto} key={producto.id} />
            ))}
        </ul>
        }

        <div className="cart__cont_amount">
          <div className="cart__btn_continue">
            <button 
              
              id="cart__btn_continue"
              onClick={handleBuy} >Continuar compra</button>
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
