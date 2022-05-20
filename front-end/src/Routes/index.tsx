import { useRoutes } from 'react-router-dom';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Register',
      element: <Register />,
    },
    {
      path: '*',
      element: <Login />,
    },
  ]);
  return routes;
};
export default Routes;
