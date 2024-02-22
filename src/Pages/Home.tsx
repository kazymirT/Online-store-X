import Banner from '../Components/Banner/Banner';
import ProductSection from '../Components/Products_section/ProductSection';
import { Props, Props3, array } from '../utils/constants';

const Home = () => {
  return (
    <div style={{ background: '#fafafa' }}>
      <Banner />
      <ProductSection
        categoryName={Props.categoryName}
        products={Props.products}
        sliderSettings={{ rows: 1 }}
        isSlider={true}
      />
      {array.map((arr, index) => (
        <ProductSection
          key={index}
          categoryName={arr}
          products={Props3.products}
          sliderSettings={{ rows: 1 }}
          isSlider={false}
        />
      ))}
    </div>
  );
};

export default Home;
