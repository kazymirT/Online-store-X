import styles from './Pagination.module.scss';
import arrow from '../../Assets/svg/pagination-arrow.svg';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.prev}>
        <img src={arrow} alt="prev" />
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button className={styles.next}>
        <img src={arrow} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
