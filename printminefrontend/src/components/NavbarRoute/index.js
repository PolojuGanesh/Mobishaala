import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Cookies from "js-cookie";
import CartContext from "../../context/CartContext";

import "./index.css";

const NavbarRoute = () => {
  const navigate = useNavigate();

  const clickOnLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartItems } = value;
        return (
          <nav className="navbar-main-container">
            <Link className="link-tag" to="/">
              <h2 className="navbar-logo-heading">PrintMine.in</h2>
            </Link>
            <div className="navbar-ul-list-container">
              <Link className="link-tag" to="/keychains">
                <p className="navbar-buttons" type="button">
                  KeyChain
                </p>
              </Link>
              <Link className="link-tag" to="/magneticbadge">
                <p className="navbar-buttons" type="button">
                  MagneticBadge
                </p>
              </Link>
              <Link className="link-tag" to="/mobilestand">
                <p className="navbar-buttons" type="button">
                  MobileStand
                </p>
              </Link>
            </div>
            <div className="navbar-icons-container">
              <div>
                <Link className="link-tag" to="/cart">
                  <MdOutlineShoppingCart className="navbar-icons" />
                </Link>
                <span className="cart-items-length">{cartItems.length}</span>
              </div>
              <div>
                <button
                  onClick={clickOnLogout}
                  className="navbar-logout-button"
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        );
      }}
    </CartContext.Consumer>
  );
};

export default NavbarRoute;
