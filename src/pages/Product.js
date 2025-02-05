import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [product, setProduct] = React.useState();
  const [currentImage, setCurrentImage] =  React.useState();
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

  const [activeSize, setActiveSize] = React.useState(0);
const productCount = useSelector((state) => state.cart.items.find(item => item.id === id && item.size === product.sizes[activeSize]));

  const addToCart = () => {
      const item = {
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.images[0], 
        size: product.sizes[activeSize],
      };
      dispatch(addItem(item));
    };
  

  if (!product) {
    return 'Loading...';
  }
  return (
    <>
      <main>
        <div className="container">
          <div className="product">
            <div className="row">
              <div className="col-md-6">
                <div className="photo_view_block">
                  <div className="other_photos_block">
                    <div className="photos_preview">
                      {product.images.map((img, i) => (
                        <div className="photo_preview_block">
                          <img
                            key={i}
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

        <div className="container">
          <div className="products_offer">
            <p className="small_heading">Похожие товары</p>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="item_card">
                  <a href="">
                    <div className="product_img_wrapper">
                      <div className="product_img">
                        <img src="https://static.wikia.nocookie.net/the-granny-game/images/5/5d/%D0%9A%D0%BE%D0%BA%D0%BE%D1%81.png/revision/latest/thumbnail/width/360/height/450?cb=20210709045014&path-prefix=ru" />
                        <img src="https://siam-shop.ru/upload/resize_cache/iblock/a37/505_378_1/maslo-50-ml.png" />
                        <img src="https://reddragon-spb.ru/wa-data/public/shop/products/28/36/3628/images/10216/10216.750.png" />
                        <img src="https://barakaoil-images.website.yandexcloud.net/iblock/7f4/bc0mxiogbpuhovx3v2sh4sd2jawk9j1o.png" />
                        <img src="https://reddragon-spb.ru/wa-data/public/shop/products/28/36/3628/images/10216/10216.750.png" />
                      </div>
                    </div>
                    <div className="item_card_text">
                      <p className="item_name">Футболка Кокос Групп 2024</p>
                      <p className="item_price">3 990 ₽</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
