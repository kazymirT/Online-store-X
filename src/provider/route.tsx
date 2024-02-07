import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from '../Layouts/Main/Layout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Kids from '../Pages/Kids';
import Men from '../Pages/Men';
import Page404 from '../Pages/Page404';
import Sale from '../Pages/Sale';
import Women from '../Pages/Women';
import { ROUTE_PATH } from '../utils/constants';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route path={ROUTE_PATH.SALE} element={<Sale />} />
      <Route path={ROUTE_PATH.MEN} element={<Men />} />
      <Route path={ROUTE_PATH.WOMEN} element={<Women />} />
      <Route path={ROUTE_PATH.KIDS} element={<Kids />} />
      <Route path={ROUTE_PATH.PAGE404} element={<Page404 />} />
    </Route>
  )
);
export default route;
