import React from 'react';
import { Box } from '@mui/material';
import { RestaurantsModel } from 'models/restaurant-model';
import ApiService from 'services/api-service';
import { RestaurantsGridStyles } from './styled';
import RestaurantCard from './restaurant-card';

const HomePage = () => {
  const [restaurants, setRestaurants] = React.useState<RestaurantsModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedRestaurants = await ApiService.fetchRestaurants();
      setRestaurants(fetchedRestaurants);
    })();
  }, []);

  return (
    <Box sx={{ p: '50px' }}>
      <Box sx={RestaurantsGridStyles}>
        {
          restaurants.map((restaurant) => (
            <RestaurantCard
              id={restaurant.id}
              name={restaurant.name}
              title={restaurant.title}
              phone={restaurant.phone}
              website={restaurant.website}
              location={restaurant.location}
              images={restaurant.images}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default HomePage;
