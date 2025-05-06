import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  removeAllCartItems: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export default CartContext;
