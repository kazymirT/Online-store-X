import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
