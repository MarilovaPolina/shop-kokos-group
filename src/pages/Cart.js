import CartContent from '../components/CartContent';

export default function Cart() {
  return (
    <main>
      <div className="intro_img profile_background_img">
        <div className="intro_news_block">
          <img src="assets/img/background_profile.png" className="intro_img_photo" />
        </div>
      </div>

      <div className="container">
        <div className="profile_head cart_title">
          <div className="heading">Корзина</div>
        </div>
      </div>

      <div className="container">
        <div className="margin_content">
          <div className="tabs">
            <div className="tab_profile active">Товары</div>
            <div className="tab_profile">Доставка</div>
            <div className="tab_profile">Оплата</div>
          </div>
        </div>
      </div>

      <CartContent />

    </main>
  );
}
