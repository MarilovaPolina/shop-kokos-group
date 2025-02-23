import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectCartItems } from '../redux/cart/selectors';

 const Header: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const isMounted = React.useRef(false);

  React.useEffect(() =>{
    if(isMounted.current){
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <>
      <header>
        <div className="container">
          <div className="header_content">
            <Link to="/" className="logo">
              <img loading="lazy" src="../assets/img/logo_transperent.png" className="logo_img" />
              <div className="logo_text">
                <p className="name">Кокос GROUP</p>
              </div>
            </Link>
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/cart">
                    <img loading="lazy" src="/assets/img/cart.svg" />
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
                    <img loading="lazy" src="/assets/img/tg.svg" />
                  </a>
                  <a href="#">
                    <img loading="lazy" src="/assets/img/youtube.svg" />
                  </a>
                  <a href="#">
                    <img loading="lazy" src="/assets/img/vk.svg" />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header_side_buttons">
              <a href="search.html" className="search_btn">
                <img loading="lazy" src="/assets/img/search.svg" width="42px" />
              </a>
              <a href="profile.html" className="log_in">
                <img loading="lazy" src="/assets/img/login.svg" width="42px" />
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
export default Header;