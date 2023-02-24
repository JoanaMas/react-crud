import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page/home-page';
import routes from './routes';
import SingleRestaurantPage from '../pages/single-restaurant-page/index';
import RestaurantFormPage from '../pages/restaurant-form-page/index';

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
      {
        path: routes.RestaurantFormPage,
        element: <RestaurantFormPage />,
      },
      {
        path: routes.UpdateRestaurantPage.path,
        element: <RestaurantFormPage />,
      },
    ],
  },
]);

export default router;
