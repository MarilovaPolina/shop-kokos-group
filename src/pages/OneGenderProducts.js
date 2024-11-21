import Sidebar from '../components/Sidebar';
import ProductsBlock from '../components/ProductsBlock';


export default function OneGenderProducts() {
  return (
    <main>
      <div className="intro_img profile_background_img">
        <div className="intro_news_block shop_bg">
          <img loadinging="lazy" src="../assets/img/shop_bg.png" className="intro_img_photo" />
        </div>
      </div>

      <div className="container">
        <div className="profile_head shop_head">
          <p className="heading">Мужчинам</p>
          <div className="shop_category">
            <Sidebar />
            <ProductsBlock />
          </div>
        </div>
      </div>
    </main>
  );
}
