import { useState } from "react";
import { product } from "../project-files/data.js";

const ProductPhotos = () => {
  const [activePhoto, setActivePhoto] = useState(
    `../project-files/assets/${product.images.originals[0]}`
  );

  return (
    <div className="product-photos">
      <img src={activePhoto} className="main-img" />
      <div className="img-container">
        {product.images.originals.map((photo, index) => {
          const photoSrc = `../project-files/assets/${photo}`;
          const isActivePhoto = activePhoto === photoSrc;
          return (
            <div key={index} className={isActivePhoto ? "active-div" : ""}>
              <img
                src={photoSrc}
                key={index}
                onClick={() => {
                  setActivePhoto(photoSrc);
                }}
                className={isActivePhoto ? "active-img" : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPhotos;
