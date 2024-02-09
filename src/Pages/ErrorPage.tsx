import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.log(error);

  return (
    <div id="error-page" className="Main">
      <h1>OOps!</h1>
      <p>Sorry,this page does not exist.</p>
    </div>
  );
};

export default ErrorPage;
