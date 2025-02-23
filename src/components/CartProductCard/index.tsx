import { addItem, clickMinusCount, removeItem } from '../../redux/cart/slice';
import styles from './CartProductCard.module.scss';
import { useDispatch } from 'react-redux';



type CartProductCardProps = {
  id: string;
  name: string;
  price: number;
  count: number;
  image: string;
  size: string;
}

const CartProductCard: React.FC<CartProductCardProps> = ({id, name, price, count, image, size}) => {
  const dispatch = useDispatch();

  const clickPlus = () => {
    dispatch(addItem({id, name, price, count, image, size}));
  }

  const clickMinus = () => {
    dispatch(clickMinusCount({id, name, price, count, image, size}));
  }

  const clickRemoveItem = () => {
    if(window.confirm("Вы действительно хотите удалить этот товар?")){
      dispatch(removeItem({id, name, price, count, image, size}));
    }
  }

  return (
    <>
      <div className={styles.order_cart_profile}>
        <div className="row">
          <div className="col-md-3">
            <div className={styles.item_img_wrapper}>
              <img src={image} className={styles.item_img} />
            </div>
          </div>
          <div className={`col-md-9 ${styles.order_item_name}`}>
            <div className={styles.item_info}>
              <p>{name}</p>
              <p className={styles.price}>{price * count} ₽</p>
              <p>Размер: {size}</p>
              <div className={styles.input_number}>
                <button onClick={clickMinus} disabled={count === 1} className={styles.decrement} type="button"> - </button>
                  <span>{count}</span>
                  <button onClick={clickPlus} className={styles.increment} type="button"> + </button>
              </div>
            </div>
            <div className={styles.order_date}>
              <button onClick={clickRemoveItem} className={styles.deleteBtn}>
                <img src="assets/img/delete.png" width="25px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartProductCard;