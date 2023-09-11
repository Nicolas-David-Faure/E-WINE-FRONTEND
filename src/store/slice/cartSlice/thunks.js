import { updateCart } from "./cartSlice";
import axios from "axios";


export default function addToCartThunk({
  id,
  email,
  price ,
  incrementOrDecrement,
}) {
  return async (dispatch) => {
    const body = {
      email,
      price,
      operation: incrementOrDecrement,
    };

  
    const cart = await axios
      .post(`/api/cart/${id}`, body)
      .then((res) =>res)
      .catch((err) => console.error(err));
     dispatch(updateCart())
  };
}
