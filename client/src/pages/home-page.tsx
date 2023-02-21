import React from 'react';
import { Container, Box } from '@mui/material';
import { RestaurantsModel } from 'models/restaurant-model';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [restaurants, setRestaurants] = React.useState<RestaurantsModel[]>([]);

React.useEffect(() => {
  (async () => {
    const fetchedRestaurants = await ApiService.fetchRestaurants()
    setRestaurants(fetchedRestaurants)
  })()
}, []);

 return (
    <Container>
      <Box component='pre'>{JSON.stringify(restaurants, null, 4)}</Box>
    </Container>
  );
 }

export default HomePage;