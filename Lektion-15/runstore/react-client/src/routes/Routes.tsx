import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';

import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import ProductListPage from '../pages/products/ProductListPage';
import ProductDetailsPage from '../pages/products/ProductDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/product/:id', element: <ProductDetailsPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);
