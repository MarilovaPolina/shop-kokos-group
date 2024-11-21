import React from 'react';
import ProductCard from './ProductCard';
import Skeleton from './ProductBlock//Skeleton';
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';

export default function ProductsBlock() {
  const [productsData, setProductsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filterParams, setFilterParams] = useSearchParams();
  //const [filteredProductsData, setFilteredProductsData] = React.useState([]);

  
  React.useEffect(() => {
    fetch(`https://673b4d7c339a4ce4451b996a.mockapi.io/products?page=${currentPage}&limit=9`)
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setIsLoading(false);
      });
  }, [currentPage]);

  const categoryFilter = filterParams.get('category');
  console.log("FILTER "+categoryFilter);



  const filteredProductsData = productsData.filter((product) => 
    categoryFilter ? (categoryFilter.includes(product.category.toLowerCase())) : product
  )


 
  return (
    <div className="products_block">
      <div className="row">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : filteredProductsData.map((productItem) => <ProductCard {...productItem} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
