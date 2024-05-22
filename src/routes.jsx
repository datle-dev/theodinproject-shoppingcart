import Index from './Index';
import Catalog from './Catalog';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Root from './Root';

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
