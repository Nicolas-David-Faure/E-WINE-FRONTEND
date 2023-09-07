import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../../store/slice/cartSlice";
import deleteIcon from "../../../assets/icons/delete.svg";

const ItemsCart = ({ producto }) => {
  const dispatch = useDispatch();


  const handleClickRemove = () => {
    dispatch(removeCart(2));
  };

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
    </li>
  );
};

export default ItemsCart;
