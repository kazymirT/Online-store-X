import { Link } from 'react-router-dom';

import styles from './ProductSection.module.scss';
import SliderResponsive from './SliderResponsive';

type Props = {
  categoryName: string;
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

const ProductSection = ({ categoryName, products, sliderSettings }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{categoryName}</h3>
      <SliderResponsive products={products} sliderSettings={sliderSettings} />
      <Link to={'/catalog'} className={styles.link}>
        View all
      </Link>
    </div>
  );
};

export default ProductSection;
