import { Link } from 'react-router-dom';

import styles from './ProductSection.module.scss';
import { Props } from './ProductsSection.types';
import ProductCard from '../Product_card/ProductCard';
import ProductSlider from '../ProductSlider/ProductSlider';

const ProductSection = ({
  categoryName,
  products,
  sliderSettings,
  isSlider,
}: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{categoryName}</h3>
      {isSlider ? (
        <ProductSlider products={products} sliderSettings={sliderSettings} />
      ) : (
        <div className={styles.cards}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}

      <Link to={'/catalog'} className={styles.link}>
        View all
      </Link>
    </div>
  );
};

export default ProductSection;
