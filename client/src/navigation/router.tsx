import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page/home-page';
import routes from './routes';
import SingleRestaurantPage from '../pages/single-restaurant-page/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SingleRestaurantPage.path,
        element: <SingleRestaurantPage />,
      },
    ],
  },
]);

export default router;
