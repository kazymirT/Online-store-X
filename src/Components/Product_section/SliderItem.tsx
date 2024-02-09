import { useState } from 'react';

import styles from './ProductSection.module.scss';

type Props = {
  product: {
    name: string;
    price: { normalPrice: string; salePrice?: string };
    images: string[];
    like: boolean;
  };
};

const SliderItem = ({ product: { name, price, images, like } }: Props) => {
  const [isLikeProduct, setIsLikeProduct] = useState<boolean>(like);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handlerLike = () => {
    setIsLikeProduct(!isLikeProduct);
  };
  return (
    <div
      className={styles.slider__item}
      onMouseEnter={() => setImageIndex(1)}
      onMouseLeave={() => setImageIndex(0)}
    >
      <img
        src={images[imageIndex]}
        alt="shoes adidas"
        width={318}
        height={397}
      />
      <p>{name}</p>
      <p>
        <span>{price.salePrice && price.salePrice}$</span>
        <span>{price.normalPrice}$</span>
      </p>
      {price.salePrice && (
        <div>
          <span>-N%</span>
        </div>
      )}

      <button onClick={handlerLike}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill={isLikeProduct ? 'black' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9932 5.2187C9.9938 2.88129 6.65975 2.25253 4.15469 4.3929C1.64964 6.53327 1.29697 10.1119 3.2642 12.6433C4.89982 14.748 9.84977 19.187 11.4721 20.6237C11.6536 20.7845 11.7444 20.8648 11.8502 20.8964C11.9426 20.924 12.0437 20.924 12.1361 20.8964C12.2419 20.8648 12.3327 20.7845 12.5142 20.6237C14.1365 19.187 19.0865 14.748 20.7221 12.6433C22.6893 10.1119 22.3797 6.51075 19.8316 4.3929C17.2835 2.27504 13.9925 2.88129 11.9932 5.2187Z"
            stroke="#262626"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderItem;
