import Index from './pages/Index';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Root';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
