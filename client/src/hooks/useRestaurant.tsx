import React from 'react';
import ApiService from 'services/api-service';
import { RestaurantsModel } from 'models/restaurant-model';

// Kuriame savo hooks
// Hooks'as yra react komponentas, kuris gražina duomenis.
const useRestaurant = (id: string | undefined) => {
  const [restaurant, setRestaurant] = React.useState<undefined | RestaurantsModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedRestaurant = await ApiService.fetchRestaurant(id);
        setRestaurant(fetchedRestaurant);
        setLoading(false);
      })();
    }
  }, []);
  return [restaurant, loading] as const;
};

export default useRestaurant;
