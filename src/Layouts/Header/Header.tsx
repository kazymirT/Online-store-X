import { NavLink } from 'react-router-dom';

import { ROUTE_PATH, pages } from '../../utils/constants';

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <NavLink to={ROUTE_PATH[page]} key={page}>
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
