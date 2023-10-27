import React, { useEffect } from 'react';
import s from './CategoriesListPage.module.css';
import CategoriesList from '../../Components/CategoriesList/CategoriesList';

const CategoriesListPage = ({ type }) => {
  useEffect(() => {
    const defaultTitle = document.title;
    if (type === 'categories') {
      document.title = 'Garden - Categories';
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [type]);
  return (
    <div>
      <div className='container'>
        <h2 className={s.categories__title}>Categories</h2>
      </div>
      <CategoriesList />
    </div>
  );
};

export default CategoriesListPage