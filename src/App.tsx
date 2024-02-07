import { RouterProvider } from 'react-router-dom';

import route from './provider/route';

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
