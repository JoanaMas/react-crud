const singleRestaurantPageRoot = '/restaurant/';
const updateRestaurantPageRoot = '/update-restaurant/';

const staticRoutes = {
  HomePage: '/',
  RestaurantFormPage: '/restaurant-create-form',
} as const;

const dynamicRoutes = {
  SingleRestaurantPage: {
    path: `${singleRestaurantPageRoot}:id`,
    createLink: (id: string | undefined) => `${singleRestaurantPageRoot}${id}`,
  },
  UpdateRestaurantPage: {
    path: `${updateRestaurantPageRoot}:id`,
    createLink: (id: string | undefined) => `${updateRestaurantPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
};

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
