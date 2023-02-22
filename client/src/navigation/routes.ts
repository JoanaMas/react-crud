const staticRoutes = {
  HomePage: '/',
  RestaurantFormPage: '/restaurant-create-form',
} as const;

const dynamicRoutes = {
  SingleRestaurantPage: {
    path: '/restaurant/:id',
    createLink: (id: string | number) => `/restaurant/${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
};

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
