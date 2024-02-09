import ProductSection from '../Components/Product_section/ProductSection';
import Banner from '../components/Banner/Banner';
import { Props } from '../utils/constants';

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductSection
        categoryName={Props.categoryName}
        products={Props.products}
        sliderSettings={Props.sliderSetting}
      />
    </div>
  );
};

export default Home;
