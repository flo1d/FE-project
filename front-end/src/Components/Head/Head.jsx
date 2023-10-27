import s from './Head.module.css';
import Button from '../UI/Button/Button';
import banner_img from './media/banner_img.png';
import { Link } from 'react-scroll';

const Head = () => {

  const  background = '#A1E2EB'
// #A1E2EB

  return (
    <div className={s.head__container} style={{ background }}>
      <div className={s.banner__container}>
        <div className={s.head__content}>
          <div className={s.head__texts__btn}>
            <h1 className={s.head__title}>Sale</h1>
            <h2 className={s.head__subtitle}>New season</h2>
            <div className={s.head__btn__wrapper}>
              <Link to='sale' smooth={true} duration={700}>
                <Button text='Sale' className='head__btn' />
              </Link>
            </div>
          </div>
          <img className={s.head__img} src={banner_img} alt='banner_img' />
        </div>
      </div>
    </div>
  );
};

export default Head;
