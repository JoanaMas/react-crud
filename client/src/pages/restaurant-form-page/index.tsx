import React from 'react';
import {
  Stack, Typography, Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { RestaurantsModel } from 'models/restaurant-model';
// import axios from 'axios';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { useNavigate, useParams } from 'react-router-dom';
import ImageFieldComponent from './image-field-component';
import RestaurantNameFieldComponent from './restaurant-name-field-component';
import RestaurantContactFieldComponent from './restaurant-contact-field-component';
import RestaurantAddressFieldComponent from './restaurant-address-field-component';
import FormImageComponent from './form-image-component';
import RatingComponent from './rating-component';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

const getRestaurantsData = (form: HTMLFormElement | undefined): Omit<RestaurantsModel, 'id'> => {
  const formData = new FormData(form);

  const name = formData.get('name');
  if (typeof name !== 'string' || name === '') throw new Error('Missing restaurant name');

  const title = formData.get('title');
  if (typeof title !== 'string' || title === '') throw new Error('Missing restaurant title');

  const phone = formData.get('phone');
  if (typeof phone !== 'string' || phone === '') throw new Error('Missing restaurant phone');

  const website = formData.get('website');
  if (typeof website !== 'string' || website === '') throw new Error('Missing restaurant website');

  const address = formData.get('address');
  if (typeof address !== 'string' || address === '') throw new Error('Missing restaurant address');

  const city = formData.get('city');
  if (typeof city !== 'string' || city === '') throw new Error('Missing restaurant city');

  const rating = formData.get('rating');
  if (typeof rating !== 'string' || rating === '') throw new Error('Missing restaurant rating');

  const images = formData.getAll('image').filter((img) => img !== '');
  if (!isStringArray(images)) throw new Error('All images must be string');

  const values = {
    name,
    title,
    phone,
    website,
    location: {
      address,
      city,
    },
    rating: Number(rating),
    images,
  };
  return values;
};

// Component

const RestaurantFormPage = () => {
  // Update
  
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

  // Create
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  // Forma
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const values = getRestaurantsData(formRef.current);

    // const response = await axios.post('http://localhost:5024/restaurants', values);
    const response = await ApiService.createRestaurant(values);

    if (response) {
      alert('Data submitted successfully');
      navigate(routes.HomePage);
    } else {
      alert(Error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent="center" direction="row" py={8}>
        <Stack
          direction="row"
          sx={{
            backgroundColor: '#9689b8', width: { xs: 1, md: '800px' }, maxHeight: 'auto', mx: { xs: '20px' }, color: '#FFFFFF',
          }}
        >
          {/* Form Image Component */}
          <FormImageComponent />

          <Stack
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
            spacing={2}
            alignItems="center"
            sx={{
              paddingLeft: '1rem', paddingTop: '2rem', width: { xs: '100%', sm: '60%' },
            }}
          >
            <DinnerDiningIcon sx={{ fontSize: 70 }} />
            <Typography variant="h6" sx={{ fontSize: { xs: '10pt', sm: '16px' } }}>Add New Restaurant</Typography>

            <Stack spacing={1} sx={{ paddingTop: '1rem' }}>

              {/* Name Field */}
              <Typography variant="h6" sx={{ fontSize: '10pt' }}>Restaurant Name:</Typography>
              <RestaurantNameFieldComponent />

              {/* Contact field */}
              <Typography variant="h6" sx={{ fontSize: '10pt' }}>Contacts:</Typography>
              <RestaurantContactFieldComponent />

              {/* Address field */}
              <Typography variant="h6" sx={{ fontSize: '10pt' }}>Location:</Typography>
              <RestaurantAddressFieldComponent />

              {/* Restaurant Image Field */}
              <Typography variant="h6" sx={{ fontSize: '10pt' }}>Add Images:</Typography>
              <ImageFieldComponent />

              {/* Rating */}

              {/* Button */}
              <Stack alignItems="center" pb="2rem">
                <RatingComponent />
                <Button variant="outlined" type="submit" fullWidth sx={{ mt: '20px' }}>
                  Create
                </Button>
              </Stack>

            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default RestaurantFormPage;
