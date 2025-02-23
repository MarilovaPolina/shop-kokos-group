import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductBlock from '../components/ProductBlock';

const OneGenderProducts: React.FC = () => {
  return (
    <main>
      <div className="intro_img profile_background_img">
        <div className="intro_news_block shop_bg">
          <img loading="lazy" src="../assets/img/shop_bg.png" className="intro_img_photo" />
        </div>
      </div>

      <div className="container">
        <div className="profile_head shop_head">
          <p className="heading">Мужчинам</p>
          <div className="shop_category">
            <Sidebar />
            <ProductBlock />
          </div>
        </div>
      </div>
    </main>
  );
}
export default OneGenderProducts;