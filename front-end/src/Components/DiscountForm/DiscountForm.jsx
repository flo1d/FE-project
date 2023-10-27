import React, { useEffect, useState } from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { discountRequest } from '../../asyncActions/request';

const DiscountForm = () => {
  const [discountComplete, setDiscountComplete] = useState(
    localStorage.getItem('discountComplete') === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem('discountComplete', discountComplete);
  }, [discountComplete]);

  const handleKeyDown = event => {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      '+',
    ];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const getDiscount = event => {
    event.preventDefault();
    const { phone_num } = event.target;

    const discount = {
      phone_num: phone_num.value,
    };
    discountRequest(discount);
    event.target.reset();
    setDiscountComplete(true);
  };

  return (
    <div>
      {discountComplete && (
        <p className={s.discount__complete}>
          Congratulations! You've Got a Discount!
        </p>
      )}
      <form onSubmit={getDiscount} className={s.discount__form}>
        <Input
          placeholder='+49'
          className='discount__input'
          name='phone_num'
          type='text'
          onKeyDown={handleKeyDown}
          required
        />
        <Button
          text='Get a discount'
          className='discount__btn'
          disabled={discountComplete}
          style={
            discountComplete
              ? { opacity: 0.5, cursor: 'not-allowed', hover: null }
              : null
          }
        />
      </form>
    </div>
  );
};

export default DiscountForm;
