import { Component } from "react";
import NavbarRoute from "../NavbarRoute";
import CartContext from "../../context/CartContext";
import FooterRoute from "../FooterRoute";

import "./index.css";

class CartRoute extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const {
            cartItems,
            removeAllCartItems,
            removeCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
          } = value;

          const clickOnRemoveAllCartItems = () => {
            removeAllCartItems();
          };

          return (
            <>
              <NavbarRoute />
              <div className="cart-container">
                <h1 className="cart-product-title-heading">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                  <p className="empty-cart-para">Your cart is empty.</p>
                ) : (
                  <>
                    <div className="remove-all-cart-items-container">
                      <button
                        type="button"
                        onClick={clickOnRemoveAllCartItems}
                        className="remove-all-cart-items"
                      >
                        Remove All
                      </button>
                    </div>
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
                          <div className="cart-quantity-container">
                            <button
                              type="button"
                              className="quantity-controller-button"
                              onClick={() => decrementCartItemQuantity(each.id)}
                            >
                              -
                            </button>
                            <p className="cart-quantity">{each.quantity}</p>
                            <button
                              type="button"
                              className="quantity-controller-button"
                              onClick={() => incrementCartItemQuantity(each.id)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeCartItem(each.id)}
                            className="remove-one-cart-item"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <FooterRoute />
              </div>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartRoute;
