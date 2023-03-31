import { createBrowserRouter } from 'react-router-dom';

import Home from './home';
import Login from './login';
import Signup from './signup';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/:listId',
    element: <Home />,
  },
  {
    path: '*',
    element: <Login />,
  },
]);

export default router;
