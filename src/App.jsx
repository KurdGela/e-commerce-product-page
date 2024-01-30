import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductPhotos from "./ProductPhotos";
import ProductInfo from "./ProductInfo";
import { product } from "../project-files/data";

function App() {
  const [cart, setCart] = useState([]);

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

  const renderStars = (starAmount) => {
    let stars = [];
    for (let index = 0; index < starAmount; index++) {
      stars.push(starFilled);
    }
    for (let index = 0; index < 5 - starAmount; index++) {
      stars.push(star);
    }
    return stars.map((star, index) => {
      return <span key={index}>{star}</span>;
    });
  };

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="product-container">
        <ProductPhotos />
        <ProductInfo cart={cart} setCart={setCart} />
      </div>
      <div className="reviews-container">
        <div className="reviews-header">
          <h1>Customer reviews</h1>
          <button>Write a review</button>
        </div>
        <div className="reviews">
          {product.reviews.map((review, index) => {
            return (
              <div className="review" key={index}>
                <img src="../project-files/assets/user-placeholder.png" />
                <div className="review-info">
                  <h3>{review.user}</h3>
                  <div className="stars">{renderStars(review.starRating)}</div>
                  <h4>{review.headline}</h4>
                  <p>{review.writtenReview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
