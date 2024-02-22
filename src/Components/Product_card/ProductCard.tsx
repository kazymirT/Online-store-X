import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { Props } from './ProductCard.types';

const ProductCard = ({
  product: { name, price, images, like },
  className,
}: Props) => {
  const [isLikeProduct, setIsLikeProduct] = useState<boolean>(like);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handlerLike = () => {
    setIsLikeProduct(!isLikeProduct);
  };
  const classes = classNames(styles.card, { [styles['is-slider']]: className });
  return (
    <div
      className={classes}
      onMouseEnter={() => setImageIndex(1)}
      onMouseLeave={() => setImageIndex(0)}
    >
      <Link className={styles.link} to={'/catalog'}>
        <div className={styles['img-box']}>
          <img src={images[imageIndex]} alt="shoes adidas" />
        </div>
        <p className={styles.title}>{name}</p>
        <div className={styles.price}>
          {price.salePrice ? (
            <>
              <p className={styles['sale-price']}>
                {price.salePrice && price.salePrice}
              </p>
              <p className={styles['discount-price']}>{price.normalPrice}</p>
            </>
          ) : (
            <p>{price.normalPrice}</p>
          )}
        </div>

        {price.salePrice && (
          <div className={styles['tag-sale']}>
            <span>8</span>
          </div>
        )}
      </Link>
      <button onClick={handlerLike} className={styles.like}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill={isLikeProduct ? '#262626' : 'none'}
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

export default ProductCard;
