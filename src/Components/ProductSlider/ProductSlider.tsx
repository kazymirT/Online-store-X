import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductSlider.module.scss';
import { PropsArrow, PropsSlider } from './ProductSlider.types';
import ProductCard from '../Product_card/ProductCard';

const PrevArrow = ({ onClick, className }: PropsArrow) => {
  const disabled = className?.includes('slick-disabled');

  return (
    <div
      className={`${disabled ? styles.disabled : ''} ${styles['arrow-prev']}`}
      onClick={onClick}
    />
  );
};

const NextArrow = ({ onClick, className }: PropsArrow) => {
  const disabled = className?.includes('slick-disabled');

  return (
    <div
      className={`${disabled ? styles.disabled : ''} ${styles['arrow-next']}`}
      onClick={onClick}
    />
  );
};

const ProductSlider = ({ products, sliderSettings }: PropsSlider) => {
  const settings = {
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: sliderSettings.rows,
    initialSlide: 0,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
