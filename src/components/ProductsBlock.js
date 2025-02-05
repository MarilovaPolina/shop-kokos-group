import React from 'react';
import ProductCard from './ProductCard';
import Skeleton from './ProductBlock//Skeleton';
import Pagination from '../components/Pagination';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from 'axios';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/filterCategorySlice';
import { fetchProducts } from '../redux/slices/productsSlice';

export default function ProductsBlock() {
  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useSearchParams();

  const productsData = useSelector((state) => state.product.items);
  const loadingStatus = useSelector((state) => state.product.status);

  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  // Получение данных из мокапи
  const getProducts = async () => {
    dispatch(fetchProducts({ categoryFilter, currentPage }));
    window.scrollTo(0, 0);
  };

  // Получение заданной категории из url
  const categoryFilter = filterParams.get('category');
  console.log('FILTER ' + categoryFilter);

  // Оставить только карточки с подходящими категориями
  const filteredProductsData = productsData.filter((product) =>
    categoryFilter ? categoryFilter.includes(product.category.toLowerCase()) : product,
  );

  // Получение данных товаров при изменениях
  React.useEffect(() => {
    getProducts();
  }, [currentPage, categoryFilter]);

  // Обновление URL
  React.useEffect(() => {
    const queryString = qs.stringify({
      category: categoryFilter,
      currentPage,
    });
    navigate(`?${queryString}`);
    console.log(`?${queryString}`);
  }, [categoryFilter, currentPage]);

  return (
    <div className="products_block">
      {loadingStatus === 'error' ? (
        <div>
          <div className="no_media">
            <DotLottieReact
              src="https://lottie.host/8476df42-7ef8-48b2-893f-c03f70f2d29a/ojpfNf37L1.json"
              speed="1"
              style={{ width: '150px', height: '150px' }}
              load="lazy"
              loop
              autoplay
            />
            <p>Не удалось получить товары.<br /><small>Попробуйте зайти позже</small></p>
          </div>
        </div>
      ) : (
        <div className="row">
          {loadingStatus === 'loading'
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : filteredProductsData.map((productItem) => (
                <ProductCard key={productItem.id} {...productItem} />
              ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => dispatch(setCurrentPage(number))}
      />
    </div>
  );
}
