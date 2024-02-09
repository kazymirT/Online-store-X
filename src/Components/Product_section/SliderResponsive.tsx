import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductSection.module.scss';
import SliderItem from './SliderItem';

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return <div className={styles.prevArrow} onClick={onClick} />;
};
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return <div className={styles.nextArrow} onClick={onClick} />;
};

type Props = {
  products: {
    name: string;
    price: { normalPrice: string; salePrice?: string };
    images: string[];
    like: boolean;
  }[];
  sliderSettings: {
    rows: number;
  };
};

const SimpleSlider = ({ products, sliderSettings }: Props) => {
  const settings = {
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: sliderSettings.rows,
    // initialSlide: 0,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <SliderItem key={index} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
