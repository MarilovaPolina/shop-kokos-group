import { Link } from "react-router-dom";
import { useSelector } from "react-redux"


export default function Header() {
  const items = useSelector(state => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <>
      <header>
        <div className="container">
          <div className="header_content">
            <Link to="/" className="logo">
              <img loadinging="lazy" src="../assets/img/logo_transperent.png" className="logo_img" />
              <div className="logo_text">
                <p className="name">Кокос GROUP</p>
              </div>
            </Link>
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/cart">
                    <img loadinging="lazy" src="/assets/img/cart.svg" />
                    <span> {totalCount} </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">Магазин</Link>
                </li>
                <li>
                  <a href="competitions.html">Матчи</a>
                </li>
                <li>
                  <a href="news.html">Новости</a>
                </li>
                <li>
                  <a href="team.html">Команда</a>
                </li>
                <li>
                  <a href="">История</a>
                </li>
                <li>
                  <a href="">Медиа</a>
                </li>
                <li>
                  <a href="for_partners.html">Партнерам</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
                <li className="networks">
                  <a href="#">
                    <img loadinging="lazy" src="/assets/img/tg.svg" />
                  </a>
                  <a href="#">
                    <img loadinging="lazy" src="/assets/img/youtube.svg" />
                  </a>
                  <a href="#">
                    <img loadinging="lazy" src="/assets/img/vk.svg" />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header_side_buttons">
              <a href="search.html" className="search_btn">
                <img loadinging="lazy" src="/assets/img/search.svg" width="42px" />
              </a>
              <a href="profile.html" className="log_in">
                <img loadinging="lazy" src="/assets/img/login.svg" width="42px" />
              </a>

              <button className="menu_btn">
                <img src="assets/img/menu_btn.svg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="menu_overlay"></div>
      <div className="menu_container">
        <button className="close_btn clear_btn">
          <img src="assets/img/close.svg" />
        </button>
        <nav className="menu_navigation">
          <ul>
            <li>
              <a href="">Магазин</a>
            </li>
            <li>
              <a href="">Матчи</a>
            </li>
            <li>
              <a href="">Новости</a>
            </li>
            <li>
              <a href="">Команда</a>
            </li>
            <li>
              <a href="">История</a>
            </li>
            <li>
              <a href="">Медиа</a>
            </li>
            <li>
              <a href="">Партнерам</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
