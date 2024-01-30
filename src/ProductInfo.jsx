import { useState } from "react";
import PropTypes from "prop-types";
import { product } from "../project-files/data";

const ProductInfo = ({ cart, setCart }) => {
  const starFilled = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star-filled"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const [amount, setAmount] = useState(0);

  const addToCart = () => {
    const newItem = {
      productName: product.info.productName,
      productImg: product.images.originals[0],
      productPrice: product.info.productPrice.new,
      productAmount: amount,
    };

    let itemAdded = false;

    cart.map((item) => {
      if (item.productName === product.info.productName) {
        setCart(cart.splice(cart.indexOf(item), 1));
        setCart([
          ...cart,
          { ...item, productAmount: item.productAmount + amount },
        ]);
        itemAdded = true;
      }
    });

    itemAdded || setCart([...cart, newItem]);
  };

  return (
    <div className="product-info">
      <h6>{product.info.companyName}</h6>
      <h1>{product.info.productName}</h1>
      <div className="stars-container">
        {starFilled}
        {starFilled}
        {starFilled}
        {starFilled}
        {star}
        <h3>{`${product.info.productRating} out of 5`}</h3>
      </div>
      <p>{product.info.productDescription}</p>
      <div className="price-container">
        <div>
          <h2>{product.info.productPrice.new}</h2>
          <h3>{product.info.productPrice.discount}</h3>
        </div>
        <h4>{product.info.productPrice.old}</h4>
      </div>
      <div className="addtocart-container">
        <div>
          <button
            className="minus-btn"
            onClick={() => {
              amount > 0 && setAmount(amount - 1);
            }}
          ></button>
          <h4>{amount}</h4>
          <button
            className="plus-btn"
            onClick={() => {
              setAmount(amount + 1);
            }}
          ></button>
        </div>
        <button
          className="addtocart-btn"
          onClick={() => {
            if (amount > 0) {
              addToCart();
            }
          }}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>{" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = { cart: PropTypes.any, setCart: PropTypes.any };

export default ProductInfo;
