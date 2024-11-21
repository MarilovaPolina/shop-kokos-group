import React from 'react';
import { useSearchParams } from 'react-router-dom';
export default function Categories({}) {
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

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filterChecked = checkedList.filter((item) => item != value);
      setCheckedList(filterChecked);
    }
  };

  React.useEffect(() => {
    setFilterParams(checkedList.length > 0 && 'category=' + checkedList.join('-').toLowerCase());
  }, [checkedList]);

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
              onChange={(event) => handleSelect(event)}
            />
            {category}
          </label>
        ))}
      </form>
    </div>
  );
}
