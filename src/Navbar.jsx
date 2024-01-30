import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = ({ cart, setCart }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-items">
          <img src="../project-files/assets/logo.svg" />
          <li>collections</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className="cart-pfp">
          <img
            src="../project-files/assets/icon-cart.svg"
            className="cart-icon"
            onClick={() => {
              setCartIsOpen(!cartIsOpen);
            }}
          />
          <img src="../project-files/assets/image-avatar.png" className="pfp" />
          {cartIsOpen && (
            <div
              className={`cart-container ${
                cart.length > 0 ? "" : "cart-container-empty"
              }`}
            >
              <h3>cart</h3>
              {cart.length > 0 ? (
                <div className="cart-items-container">
                  {cart.map((item, index) => {
                    return (
                      <div key={index} className="cart-items">
                        <img
                          className="cart-product-img"
                          src={`../project-files/assets/${item.productImg}`}
                        />
                        <div className="item-name-price">
                          <h5>{item.productName}</h5>
                          <h6>{`${item.productPrice} x ${item.productAmount} $${
                            parseInt(item.productPrice.slice(1, -3), 10) *
                            item.productAmount
                          }.00`}</h6>
                        </div>
                        <img
                          className="cart-delete"
                          src="../project-files/assets/icon-delete.svg"
                          onClick={() => {
                            setCart(cart.splice(cart.indexOf(item), 1));
                            setCart([...cart]);
                          }}
                        />
                      </div>
                    );
                  })}

                  <button className="checkout-btn">checkout</button>
                </div>
              ) : (
                <h4>Your cart is empty.</h4>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = { cart: PropTypes.any, setCart: PropTypes.any };

export default Navbar;
