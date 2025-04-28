import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
});

export default CartContext;
