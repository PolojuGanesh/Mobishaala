import { Component } from "react";
import NavbarRoute from "../NavbarRoute";
import CartContext from "../../context/CartContext";
import Magnifier from "react-magnifier";
import FooterRoute from "../FooterRoute";
import Cookies from "js-cookie";

import "./index.css";

class KeyChainRoute extends Component {
  state = { keyChainData: [], cartCounts: {}, productRating: "" };

  componentDidMount() {
    this.getKeyChainData();
  }

  selectRating = (event) => {
    this.setState({ productRating: event.target.value }, this.getKeyChainData);
  };

  getKeyChainData = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const { productRating } = this.state;
    let url = "http://localhost:3000/keychains";
    if (productRating) {
      url += `?rating=${productRating}`;
    }
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${jwtToken}` },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.setState({ keyChainData: data });
    }
  };

  clickOnPlus = (id) => {
    this.setState((prevState) => ({
      cartCounts: {
        ...prevState.cartCounts,
        [id]: (prevState.cartCounts[id] || 0) + 1,
      },
    }));
  };

  clickOnMinus = (id) => {
    this.setState((prevState) => ({
      cartCounts: {
        ...prevState.cartCounts,
        [id]: Math.max((prevState.cartCounts[id] || 0) - 1, 0),
      },
    }));
  };

  render() {
    const { keyChainData, cartCounts, productRating } = this.state;

    return (
      <CartContext.Consumer>
        {({ addToCart }) => (
          <>
            <NavbarRoute />
            <div className="keychains-main-container">
              <div className="drop-down-container">
                <label htmlFor="rating">Select Rating</label>
                <select
                  value={productRating}
                  id="rating"
                  className="drop-down-option"
                  onChange={this.selectRating}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <ul className="keychains-ul-list">
                {keyChainData.map((each) => (
                  <li className="each-keychain-list" key={each.id}>
                    <div className="keychain-container">
                      <div className="image-container">
                        <Magnifier
                          width={400}
                          mgShape={"square"}
                          zoomFactor={1}
                          src={each.image}
                          alt={each.text}
                        />
                      </div>
                      <div className="product-info-container">
                        <h1 className="product-title">{each.text}</h1>
                        <p className="product-description-info">
                          {each.description}
                        </p>
                        <div className="rating-and-price-container">
                          <p className="rating">
                            Rating:
                            <span className="span-tag"> {each.rating} </span>
                          </p>
                          <p className="rating">
                            Price:
                            <span className="span-tag"> {each.price} </span>
                          </p>
                        </div>
                        <div className="buttons-container">
                          <button
                            onClick={() => this.clickOnPlus(each.id)}
                            type="button"
                            className="plus-button"
                          >
                            +
                          </button>
                          <p className="product-count">
                            {cartCounts[each.id] || 1}
                          </p>
                          <button
                            onClick={() => this.clickOnMinus(each.id)}
                            type="button"
                            className="plus-button"
                          >
                            -
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="add-to-cart-button"
                            onClick={() =>
                              addToCart({
                                ...each,
                                quantity: cartCounts[each.id] || 1,
                              })
                            }
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <FooterRoute />
            </div>
          </>
        )}
      </CartContext.Consumer>
    );
  }
}

export default KeyChainRoute;
