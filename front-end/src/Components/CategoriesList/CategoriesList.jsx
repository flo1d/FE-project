import React, { useEffect } from 'react';
import s from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem/CategoryItem';
import { fetchCategoriesList } from '../../asyncActions/request';

const CategoriesList = ({ numCategories }) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(store => store.categoriesList);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);

  return (
    <div className={s.categories__container}>
      {categoriesList.slice(0, numCategories).map((elem, index) => (
        <CategoryItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default CategoriesList;
