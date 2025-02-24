import React from 'react';
import CartProductCard from '../components/CartProductCard';
import { useDispatch, useSelector } from 'react-redux';
import CartEmpty from '../components/CartEmpty';
import { cartItems } from '../redux/cart/selectors';
import { clearItems } from '../redux/cart/slice';


const CartContent = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(cartItems);

  const clickClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <>
      <div className="container">
        <button onClick={clickClearCart} className="cart_clear">
          <img src="assets/img/delete.png" width="25px" />
          <span>Очистить корзину</span>
        </button>
        <div className="one_competition_media_section">
          {items.map((item) => (
            <CartProductCard key={item.id} {...item} />
          ))}
        </div>
        <p className="total_price">Итого: {totalPrice} ₽ </p>
      </div>

      <div className="container">
        <div className="one_competition_media_section"></div>
        <button className="a_btn">Оформить заказ →</button>
      </div>
    </>
  );
}

export default CartContent;