import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeRoute from "./components/HomeRoute";
import KeyChainRoute from "./components/KeyChainRoute";
import BadgeRoute from "./components/BadgeRoute";
import MobileStandRoute from "./components/MobileStandRoute";
import CartRoute from "./components/CartRoute";
import CartContext from "./context/CartContext";
import LoginRoute from "./components/LoginRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterRoute from "./components/RegisterRoute";

import "./App.css";

class App extends Component {
  state = { cartItems: [] };

  removeAllCartItems = () => {
    this.setState({ cartItems: [] });
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProductIndex) {
        return {
          cartItems: prevState.cartItems.map((eachItem) =>
            eachItem.id === product.id
              ? { ...eachItem, quantity: eachItem.quantity + product.quantity }
              : eachItem
          ),
        };
      }
      return { cartItems: [...prevState.cartItems, product] };
    });
  };

  removeCartItem = (id) => {
    const { cartItems } = this.state;

    this.setState({ cartItems: cartItems.filter((each) => each.id !== id) });
  };

  incrementCartItemQuantity = (id) => {
    this.setState((prev) => ({
      cartItems: prev.cartItems.map((each) =>
        each.id === id ? { ...each, quantity: each.quantity + 1 } : each
      ),
    }));
  };

  decrementCartItemQuantity = (id) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((eachItem) =>
        eachItem.id === id
          ? {
              ...eachItem,
              quantity: eachItem.quantity > 1 ? eachItem.quantity - 1 : 1,
            }
          : eachItem
      ),
    }));
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          removeAllCartItems: this.removeAllCartItems,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<LoginRoute />} />
              <Route path="/users" element={<RegisterRoute />} />
              <Route element={<ProtectedRoute />}>
                <Route exact path="/" element={<HomeRoute />} />
                <Route exact path="/keychains" element={<KeyChainRoute />} />
                <Route exact path="/magneticbadge" element={<BadgeRoute />} />
                <Route
                  exact
                  path="/mobilestand"
                  element={<MobileStandRoute />}
                />
                <Route exact path="/cart" element={<CartRoute />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </CartContext.Provider>
    );
  }
}

export default App;
