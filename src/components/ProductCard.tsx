import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cart/selectors';
import { CartItem } from '../redux/cart/types';
import { addItem } from '../redux/cart/slice';


type ProductCardProps = {
  id: string;
  images: string[];
  price: number;
  name: string;
  sizes: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ id, images, price, name, sizes}) => {
  const [activeSize, setActiveSize] = React.useState(0);

  const cartItems = useSelector(selectCartItems);
  const existingItem  = cartItems.find(item => item.id === id && item.size === sizes[activeSize]);
  const productCount = existingItem ? existingItem.count : 0; 
  
  const productImgRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const addToCart = () => {
    const item: CartItem = {
      id,
      name,
      price,
      count: productCount,
      image: images[0],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if(productImgRef.current){
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const numImages = images.length;
      const imageWidth = rect.width / numImages;
      const currentIndex = Math.floor(x / imageWidth);
      productImgRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handleMouseLeave = () => {
    if(productImgRef.current){
      productImgRef.current.style.transform = 'translateX(0)';
    }
  };
  return (
      <div className="col-md-4 col-sm-6">
        <div className="item_card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Link to={`/products/${id}`}>
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
        </Link>
          <div className="sizes product_preview_sizes mb-3">
            {sizes.map((size, i) => (
              <label className="size_label" key={i} onClick={() => setActiveSize(i)}>
                <input type="radio" name="size" className="size_radio" />
                <span className="size_btn">{size}</span>
              </label>
            ))}
          </div>
          <button className="a_btn w-100" onClick={addToCart}>
            <img className="cart_icon_btn" loading="lazy" src="/assets/img/cart.svg" />
            Добавить
            {productCount > 0 && <span className="product_count">{productCount}</span>}
          </button>
        </div>
        
      </div>
   
  );
}

export default ProductCard;