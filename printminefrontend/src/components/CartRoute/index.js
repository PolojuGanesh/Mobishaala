import { Component } from "react";
import NavbarRoute from "../NavbarRoute";
import CartContext from "../../context/CartContext";
import FooterRoute from "../FooterRoute";

import "./index.css";

class CartRoute extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cartItems }) => (
          <>
            <NavbarRoute />
            <div className="cart-container">
              <h1 className="cart-product-title-heading">Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <p className="empty-cart-para">Your cart is empty.</p>
              ) : (
                <ul className="cart-list-ul">
                  {cartItems.map((each) => (
                    <li key={each.id} className="cart-item">
                      <img
                        src={each.image}
                        alt={each.text}
                        className="cart-item-image"
                      />
                      <p className="cart-product-title">{each.text}</p>
                      <p className="cart-product-title">
                        Price: {each.price * each.quantity}
                      </p>
                      <p className="cart-product-title">
                        Quantity: {each.quantity}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <FooterRoute />
            </div>
          </>
        )}
      </CartContext.Consumer>
    );
  }
}

export default CartRoute;
