import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

export default function ProductCard({ id, images, price, name, sizes, gender, category }) {
  const [activeSize, setActiveSize] = React.useState(0);
  const productCount = useSelector((state) =>
    state.cart.items.find((item) => item.id === id && item.size === sizes[activeSize]),
  );
  const productImgRef = useRef();
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = {
      id,
      name,
      price,
      count: productCount,
      image: images[0],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const numImages = images.length;
    const imageWidth = rect.width / numImages;
    const currentIndex = Math.floor(x / imageWidth);
    productImgRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const handleMouseLeave = () => {
    productImgRef.current.style.transform = 'translateX(0)';
  };
  return (

      <div className="col-md-4 col-sm-6">
        <Link to={`/products/${id}`}>
        <div className="item_card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="product_img_wrapper" key={id}>
            <div className="product_img" ref={productImgRef}>
              {images.map((img, i) => (
                <img key={i} loading="lazy" src={img} alt={`Product Image ${i + 1}`} />
              ))}
            </div>
          </div>
          <div className="item_card_text">
            <p className="item_name">{name}</p>
            <p className="item_price">{price} ₽</p>
          </div>

          <div className="sizes product_preview_sizes mb-3">
            {sizes.map((size, i) => (
              <label className="size_label" key={i} onClick={() => setActiveSize(i)}>
                <input type="radio" name="size" className="size_radio" />
                <span className="size_btn">{size}</span>
              </label>
            ))}
          </div>
          <button className="a_btn w-100" onClick={addToCart}>
            {productCount && <span className="product_count">{productCount.count}</span>}
            Добавить
          </button>
        </div>
        </Link>
      </div>
   
  );
}
