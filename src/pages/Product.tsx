import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart/slice';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { selectCartItems } from '../redux/cart/selectors';

const Product: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const [product, setProduct] = React.useState<{
    id: string;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
    article:string;
    count: number;
    availability:boolean;
    color: string;
    gender:string;
    description: string;
    category: string;
  }>();
  
  const [currentImage, setCurrentImage] =  React.useState<string>();
  const [activeSize, setActiveSize] = React.useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://673b4d7c339a4ce4451b996a.mockapi.io/products/' + id,
        );
        setProduct(data);
        setCurrentImage(data.images[0]);
      } catch (error) {
        navigate("*");
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <>Loading...</>;
  } 

  const productCount = cartItems.find(item => item.id === id && item.size === product.sizes[activeSize]);

  const addToCart = () => {
      const item = {
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.images[0], 
        size: product.sizes[activeSize],
        count: 1, //count ?
      };
      dispatch(addItem(item));
    };
  
  return (
      <main>
        <div className="container">
          <div className="product">
            <div className="row">
              <div className="col-md-6">
                <div className="photo_view_block">
                  <div className="other_photos_block">
                    <div className="photos_preview">
                      {product.images.map((img, i) => (
                        <div className="photo_preview_block" key={`${img}-${product.id}-${i}`}>
                          <img
                            loading="lazy"
                            src={img}
                            alt={`Product Image ${i + 1}`}
                            onClick={() => setCurrentImage(img)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="current_photo">
                    <div className="current_photo_wrapper">
                      <img src={currentImage} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item_info_block">
                  <div className="interactive_part">
                    <p className="small_heading">{product.name}</p>
                    <div className="buying">
                      <p>{product.price} ₽</p>
                      <button className="a_btn" id="addToCartBtn" onClick={addToCart}>
                        <img src="/assets/img/cart.svg" />В КОРЗИНУ {productCount && <span className="product_count">{productCount.count}</span>}
                      </button>
                    </div>
                    <p className="product_article">Артикул: {product.article}</p>
                    <p>
                      Наличие:
                      {product.availability ? (
                        <span className="green"> в наличии</span>
                      ) : (
                        <span className="red"> нет в наличии</span>
                      )}
                    </p>
                    <form action="">
                      <div className="sizes">
                        <div className="sizes product_preview_sizes mb-3">
                          {product.sizes.map((size, i) => (
                            <label className="size_label" key={i} onClick={() => setActiveSize(i)}>
                              <input type="radio" name="size" className="size_radio" />
                              <span className="size_btn">{size}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="description_part">
                    <p>Тип товара: {product.category}</p>
                    <p>Цвет: {product.color}</p>
                    <p>Пол: {product.gender}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Product;
