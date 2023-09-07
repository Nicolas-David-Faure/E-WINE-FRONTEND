import { createSlice } from "@reduxjs/toolkit";

const fakeDate = [
  {
    id: 1,
    title: "Vino Tinto",
    description: "Un vino tinto delicioso.",
    price: "$20.00",
    imageUrl:
      "https://www.gustoargentino.com/cdn/shop/products/estancia-mendoza-vino-tinto-merlot-malbec-1.jpg?v=1598603578&width=840",
  },

  {
    id: 2,
    title: "Vino Rosado",
    description: "Un vino rosado dulce.",
    price: "$18.00",
    imageUrl:
      "https://ardiaprod.vtexassets.com/arquivos/ids/255792-800-auto?v=638237408914700000&width=800&height=auto&aspect=true",
  },
  {
    id: 3,
    title: "Vino espumante",
    description: "Un vino espumante fuerte.",
    price: "$18.00",
    imageUrl:
      "https://masonlineprod.vtexassets.com/arquivos/ids/266574-800-auto?v=638065534186800000&width=800&height=auto&aspect=true",
  },
];

const initialState = {
  cartItems: fakeDate,
  count: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCart: (state, { payload }) => {
      console.log(payload);
      //state.state = true
      state.count = payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { removeCart } = cartSlice.actions;
