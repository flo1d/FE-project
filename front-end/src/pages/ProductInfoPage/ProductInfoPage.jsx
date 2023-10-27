import React, { useEffect, useState } from 'react';
import s from './ProductInfoPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/UI/Button/Button';
import ProductPrice from '../../Components/ProductPrice/ProductPrice';
import product_not_found from './media/product_not_found.png';
import { addProductToCartAction } from '../../store/Reducers/cartReducer';
import { fetchProductInfo } from '../../asyncActions/request';

const ProductInfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productItem = useSelector(store => store.productInfo);
  const [buttonText, setButtonText] = useState('To cart');

  const rootUrl = 'http://localhost:3333';

  const handleAddToCartClick = event => {
    event.stopPropagation();
    dispatch(addProductToCartAction(productItem));
    setButtonText('Added to cart!');
    setTimeout(() => {
      setButtonText('To cart');
    }, 1000);
  };

  useEffect(() => {
    const defaultTitle = document.title;
    if (productItem.status) {
      document.title = 'Product not found';
    } else {
      document.title = `Garden - ${productItem.title}`;
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [productItem]);

  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [dispatch, id]);

  if (productItem.status) {
    return (
      <div className={s.product__not__found__wrapper}>
        <img src={product_not_found} alt='product_not_found' />
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className={s.product__info__wrapper}>
          <div className={s.title__img__wrapper}>
            <h2 className={s.product__title}>{productItem.title}</h2>
            <img
              className={s.product__img}
              src={`${rootUrl}${productItem.image}`}
              alt='product_img'
            />
          </div>
          <div className={s.price__btn__descr__wrapper}>
            <div className={s.price__btn__wrapper}>
              <ProductPrice
                price={productItem.price}
                discont_price={productItem.discont_price}
                page='info'
                showPercentage
              />
              <Button
                className='add__to__cart__btn'
                text={buttonText}
                onClick={handleAddToCartClick}
              />
            </div>
            <div className={s.descr__wrapper}>
              <h3 className={s.descr__title}>Description</h3>
              <p className={s.descr}>{productItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductInfoPage;
