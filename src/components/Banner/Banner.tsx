import React from 'react';
import Slider from 'react-slick';

import styles from './Banner.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className={styles['btn-next']} onClick={onClick}>
      <img src="/src/assets/icons/arrow-right.png" alt="next" />
    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className={styles['btn-prev']} onClick={onClick}>
      <img src="/src/assets/icons/arrow-left.png" alt="prev" />
    </div>
  );
}

const Banner = () => {
  const settings = {
    customPaging: function () {
      return <span></span>;
    },
    dots: true,
    dotsClass: `${styles.dots} slick-dots`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/public/banner.png" />
        </div>
        <div>
          <img src="/public/banner.png" />
        </div>
        <div>
          <img src="/public/banner.png" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
