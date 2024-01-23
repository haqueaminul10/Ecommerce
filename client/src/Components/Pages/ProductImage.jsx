import React, { useContext, useState } from "react";
import "../Style/productDetails.css";

export default function ProductImage({ images }) {
  const [selected, setSelected] = useState(images[0]);
  const handleImageChange = (image) => {
    setSelected(image);
  };
  return (
    <section className="product_images">
      <div className="product_image">
        <img src={selected} alt="" />
      </div>
      <div className="all_images">
        {images.map((image, index) => {
          return (
            <div key={index} className="all_images_single">
              <img
                src={image}
                alt=""
                className="all_images_single_thumb"
                onClick={() => handleImageChange(image)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
