import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { handleSelect } from "../redux/slices/filterCategorySlice"

export default function Categories({}) {
  const selectedCategories = useSelector(state => state.filter.selectedCategories);
  const dispatch = useDispatch();
  
  const onChangeCategories = ({value, isChecked}) =>{
    dispatch(handleSelect({value, isChecked}));
  }

  const [filterParams, setFilterParams] = useSearchParams();
  const [checkedList, setCheckedList] = React.useState([]);
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

  // все элементы массива через тире передаем в url
  React.useEffect(() => {
    setFilterParams(selectedCategories.length > 0 && 'category=' + selectedCategories.join('-').toLowerCase());
  }, [selectedCategories]);

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
