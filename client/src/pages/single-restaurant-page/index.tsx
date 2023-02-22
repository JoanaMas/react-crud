import React from 'react';
import { Box } from '@mui/material';
import { RestaurantsModel } from 'models/restaurant-model';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';

const SingleRestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = React.useState<undefined | RestaurantsModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedRestaurant = await ApiService.fetchRestaurant(id);
        setRestaurant(fetchedRestaurant);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">{JSON.stringify(restaurant, null, 4)}</Box>
  );
};

export default SingleRestaurantPage;
