import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductList from '../pages/products/Product-List';
import HomePage from '../pages/HomePage';
import Product from '../pages/products/Product-Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/products', element: <ProductList /> },
      { path: 'product', element: <Product /> },
    ],
  },
]);
