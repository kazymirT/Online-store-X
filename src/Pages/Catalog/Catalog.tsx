import { useState } from 'react';

import styles from './Catalog.module.scss';
import Filter from '../../Components/Filter/Filter';
import Pagination from '../../Components/Pagination/Pagination';
import ProductCard from '../../Components/Product_card/ProductCard';
import { Props2 } from '../../utils/constants';

const Catalog = () => {
  const [select, setSelect] = useState<string>('test');

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h3>Shoes</h3>
        <div>
          <select
            value={select}
            onChange={(event) => setSelect(event.target.value)}
          >
            <option value="test">Sort by</option>
          </select>
        </div>
      </div>
      <aside className={styles.aside}>
        <h3>Filter</h3>
        <hr />
        <Filter
          name={'Brand'}
          options={[
            'Brandname',
            'Brandname',
            'Brandname',
            'Brandname',
            'Brandname',
            'Brandname',
          ]}
        />
        <Filter name={'Size'} options={['40', '40', '40', '40', '40', '40']} />
      </aside>
      <section>
        <div className={styles.cards}>
          {Props2.products.map((card, index) => (
            <ProductCard product={card} key={index} />
          ))}
        </div>
        <button className={styles['load-more']}>Load more</button>
        <Pagination />
      </section>
    </div>
  );
};

export default Catalog;
