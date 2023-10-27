import React, { useEffect } from 'react';
import s from './HomePage.module.css';
import Head from '../../Components/Head/Head';
import CategoriesList from '../../Components/CategoriesList/CategoriesList';
import DiscountContainer from '../../Components/DiscountContainer/DiscountContainer';
import Sale from '../../Components/Sale/Sale';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import {
  fetchAllProductList,
  fetchCategoriesList,
} from '../../asyncActions/request';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchAllProductList());
  }, [dispatch]);
  return (
    <div>
      <Head />
      <div className='container'>
        <div className={s.categories__texts__btn}>
          <h2 className={s.categories__section__title}>Catalog</h2>
          <NavLink to={'/categories'}>
            <Button text='All categories' className='categories__btn' />
          </NavLink>
        </div>
      </div>

      <CategoriesList numCategories={4} />
      <DiscountContainer />
      <Sale />
    </div>
  );
};

export default HomePage;
