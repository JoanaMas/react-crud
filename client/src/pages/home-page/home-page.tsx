import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RestaurantsModel } from 'models/restaurant-model';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
import { RestaurantsGridStyles } from './styled';
import RestaurantCard from './restaurant-card';

const HomePage = () => {
  const [restaurants, setRestaurants] = React.useState<RestaurantsModel[]>([]);
  const navigate = useNavigate();

  const handleDelete = async (id: string | undefined) => {
    await ApiService.deleteRestaurant(id);
    const fetchedRestaurants = await ApiService.fetchRestaurants();
    setRestaurants(fetchedRestaurants);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedRestaurants = await ApiService.fetchRestaurants();
      setRestaurants(fetchedRestaurants);
    })();
  }, []);

  return (
    <Box sx={{ p: '50px' }}>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate(routes.RestaurantFormPage)}
      >
        Add Restaurant
        <AddIcon />
      </Button>

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
              onDelete={() => handleDelete(restaurant.id)}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default HomePage;
