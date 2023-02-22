const routes = {
  HomePage: '/',
  RestaurantFormPage: '/restaurant-create-form',
  SingleRestaurantPage: {
    path: '/restaurant/:id',
    createLink: (id: string | number) => `/restaurant/${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
