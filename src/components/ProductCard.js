import React, { useRef, useState } from 'react';
import { Link} from "react-router-dom";

export default function ProductCard(props) {
  const [productCounter, setProductCounter] = useState(0);
  const productImgRef = useRef();

  const addToCart = () => {
    setProductCounter((prevCount) => prevCount + 1);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const numImages = props.images.length;
    const imageWidth = rect.width / numImages;
    const currentIndex = Math.floor(x / imageWidth);
    productImgRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const handleMouseLeave = () => {
    productImgRef.current.style.transform = 'translateX(0)';
  };
  return (
    <div className="col-md-4 col-sm-6">
      <div 
        className="item_card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/:id">
          <div className="product_img_wrapper">
            <div className="product_img" ref={productImgRef}>
              {props.images.map((img, i) => (
                <img key={i} loading="lazy" src={img} alt={`Product Image ${i + 1}`} />
              ))}
            </div>
          </div>
          <div className="item_card_text">
            <p className="item_name">{props.name}</p>
            <p className="item_price">{props.price} ₽</p>
          </div>
        </Link>
        <div className="sizes product_preview_sizes mb-3">
          {props.sizes.map((size, i) => (
            <label className="size_label" key={i}>
              <input type="radio" name="size" className="size_radio" />
              <span className="size_btn">{size}</span>
            </label>
          ))}
        </div>
        <button className="a_btn w-100" onClick={addToCart}>
          <span className="product_count">{productCounter}</span>Добавить +
        </button>
      </div>
    </div>
  );
}
