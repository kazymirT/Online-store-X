import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import Input from '../../components/Input/Input';
import { ROUTE_PATH, pages } from '../../utils/constants';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="/src/assets/logo.png" width={105} height={28} alt="logo" />
      </div>
      <nav>
        <ul className={styles.navigation}>
          {pages.map((page) => (
            <li key={page}>
              <NavLink to={ROUTE_PATH[page]} key={page}>
                {page.toLocaleLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.btns}>
        <Input type="text" size="m" color="grey" placeholder="Search" />
        <button>
          <img
            src="/src/assets/icons/chosen.png"
            width={22}
            height={20}
            alt=""
          />
        </button>
        <button>
          <img src="/src/assets/icons/cart.png" width={22} height={22} alt="" />
        </button>
        <button>
          <img
            src="/src/assets/icons/account.png"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
