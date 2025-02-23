import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { handleSelect, selectedCategories } from '../redux/filter/slice';

type CategoriesProps = {
  value: string;
  isChecked: boolean;
}

const productCategories = [
  'Футболки',
  'Штаны',
  'Шорты',
  'Куртки',
  'Носки',
  'Головные уборы',
  'Сумки',
  'Толстовки',
  'Аксессуары',
  'Другое',
];

const Categories: React.FC = ({}) => {
  const selectedCategoriesList = useSelector(selectedCategories);
  const dispatch = useDispatch();
  
  const onChangeCategories = ({value, isChecked}: CategoriesProps) =>{
    dispatch(handleSelect({value, isChecked}));
  }

  const [filterParams, setFilterParams] = useSearchParams();
  const [checkedList, setCheckedList] = React.useState([]);
  
  // Все элементы массива через тире передаем в url
  React.useEffect(() => {
    if(selectedCategoriesList.length > 0){
      setFilterParams('category=' + selectedCategoriesList.join('-').toLowerCase());
    }   
  }, [selectedCategoriesList]);

  return (
    <div className="sidebar">
      <p className="small_heading">Категория:</p>
      <form action="" className="signup_form shop_filter_checks">
        {productCategories.map((category) => (
          <label className="white" key={category}>
            <input
              type="checkbox"
              name="categories"
              className="checkbox"
              value={category}
              onChange={(event)=>onChangeCategories({value: event.target.value, isChecked: event.target.checked})}
            />
            {category}
          </label>
        ))}
      </form>
    </div>
  );
}

export default Categories;