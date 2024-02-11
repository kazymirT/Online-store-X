import { Link } from 'react-router-dom';

import styles from './ProductSection.module.scss';
import { Props } from './ProductsSection.types';
import ProductSlider from '../ProductSlider/ProductSlider';

const ProductSection = ({ categoryName, products, sliderSettings }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{categoryName}</h3>
      <ProductSlider products={products} sliderSettings={sliderSettings} />
      <Link to={'/catalog'} className={styles.link}>
        View all
      </Link>
    </div>
  );
};

export default ProductSection;
