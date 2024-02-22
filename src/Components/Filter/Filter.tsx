import { useState } from 'react';

import styles from './Filter.module.scss';
import { Props } from './Filter.types';
import arrow from '../../Assets/svg/filter-arrow.svg';

const Filter = ({ name, options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.title} onClick={handlerClick}>
        <h4>{name}</h4>
        <img
          src={arrow}
          className={isOpen ? styles.open : styles.close}
          alt=""
          width={6}
          height={12}
        />
      </div>
      <ul className={isOpen ? styles.open : styles.close}>
        {options.map((option, index) => (
          <li key={index}>
            <label htmlFor={`${option}-${index}`}>
              <input type="checkbox" id={`${option}-${index}`} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
