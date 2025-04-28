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

  addToCart = (product) => {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cartItems.findIndex(
        (item) => item.id === product.id
      );
      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = [...prevState.cartItems];
        updatedCart[existingProductIndex].quantity = product.quantity;
      } else {
        updatedCart = [...prevState.cartItems, { ...product }];
      }
      return { cartItems: updatedCart };
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
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
