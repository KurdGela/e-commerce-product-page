import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductPhotos from "./ProductPhotos";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="product-container">
        <ProductPhotos />
        <ProductInfo cart={cart} setCart={setCart} />
      </div>
      <ProductReviews />
    </>
  );
}

export default App;
