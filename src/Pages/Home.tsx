import Banner from '../Components/Banner/Banner';
import ProductSection from '../Components/Products_section/ProductSection';
import { Props, Props2, array } from '../utils/constants';

const Home = () => {
  return (
    <div style={{ background: '#fafafa' }}>
      <Banner />
      <ProductSection
        categoryName={Props.categoryName}
        products={Props.products}
        sliderSettings={{ rows: 1 }}
      />
      {array.map((arr, index) => (
        <ProductSection
          key={index}
          categoryName={arr}
          products={Props2.products}
          sliderSettings={{ rows: 2 }}
        />
      ))}
    </div>
  );
};

export default Home;
