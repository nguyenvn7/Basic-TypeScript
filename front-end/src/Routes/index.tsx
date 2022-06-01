import { useRoutes } from 'react-router-dom';
import { ProtectedRouter } from '../Middlewares/Protected.Router';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import BoxMessages from '../Pages/Messages/Box';

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
      path: '/Messages',
      element: (
        <ProtectedRouter>
          <BoxMessages />
        </ProtectedRouter>
      ),
    },
    {
      path: '*',
      element: <Login />,
    },
  ]);
  return routes;
};
export default Routes;
