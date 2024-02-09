import ProductSection from '../Components/Product_section/ProductSection';
import { Props } from '../utils/constants';

const Home = () => {
  return (
    <div>
      <ProductSection
        categoryName={Props.categoryName}
        products={Props.products}
        sliderSettings={Props.sliderSetting}
      />
    </div>
  );
};

export default Home;
