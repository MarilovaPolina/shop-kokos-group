import React from 'react';
import ProductCard from '../ProductCard';
import Skeleton from './Skeleton';
import Pagination from '../Pagination';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from 'axios';
import qs from 'qs';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectProductData } from '../../redux/product/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { fetchProducts } from '../../redux/product/asyncActions';
import { setCurrentPage } from '../../redux/filter/slice';


 const ProductBlock: React.FC = () => {
  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useSearchParams();

  const { items, status } = useSelector(selectProductData);
  const currentPage = useSelector(selectFilter);
  
  const dispatch = useAppDispatch();

    // Получение заданной категории из url
    const categoryFilter = filterParams.get('category') || '';
    
  // Получение данных из мокапи
  const getProducts = async () => {
    dispatch(fetchProducts({ categoryFilter, currentPage }));
    window.scrollTo(0, 0);
  };

  // Оставить только карточки с подходящими категориями
  const filteredProductsData = items.filter((product: any) =>
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
  }, [categoryFilter, currentPage]);

  return (
    <div className="products_block">
      {status === 'error' ? (
        <div>
          <div className="no_media">
            <DotLottieReact
              src="https://lottie.host/8476df42-7ef8-48b2-893f-c03f70f2d29a/ojpfNf37L1.json"
              speed={1}
              style={{ width: '150px', height: '150px' }}
              loop
              autoplay
            />
            <p>Не удалось получить товары.<br /><small>Попробуйте зайти позже</small></p>
          </div>
        </div>
      ) : (
        <div className="row">
          {status === 'loading'
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : filteredProductsData.map((productItem: any) => (
                <ProductCard key={productItem.id} {...productItem} />
              ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        onChangePage={(page: number) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
}
export default ProductBlock;