// import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductPhotos from "./ProductPhotos";

function App() {
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

  return (
    <>
      <Navbar />
      <div className="product-container">
        <ProductPhotos />
        <div className="product-info">
          <h6>sneaker company</h6>
          <h1>fall limited edition sneakers</h1>
          <div className="stars-container">
            {starFilled}
            {starFilled}
            {starFilled}
            {starFilled}
            {star}
            <h3>4.2 out of 5</h3>
          </div>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer.
          </p>
          <div className="price-container">
            <div>
              <h2>$125.00</h2>
              <h3>50%</h3>
            </div>
            <h4>$250.00</h4>
          </div>
          <div className="addtocart-container">
            <div>
              <button className="minus-btn"></button>
              <h4>0</h4>
              <button className="plus-btn"></button>
            </div>
            <button className="addtocart-btn">
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
      </div>
    </>
  );
}

export default App;
