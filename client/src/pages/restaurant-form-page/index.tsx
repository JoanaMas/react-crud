import React from 'react';
import {
  Stack, Typography, Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
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

const RestaurantFormPage = () => (
  <ThemeProvider theme={theme}>
    <Stack justifyContent="center" direction="row" py={8}>
      <Stack
        direction="row"
        sx={{
          backgroundColor: '#9689b8', width: { xs: 1, md: '800px' }, height: '650px', mx: { xs: '20px' }, color: '#FFFFFF',
        }}
      >
        {/* Form Image Component */}
        <FormImageComponent />

        <Stack
          component="form"
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
            <RatingComponent />

            {/* Button */}
            <Stack alignItems="center" pt="0.5rem">
              <Button variant="outlined" fullWidth sx={{ mt: '20px' }}>Create</Button>
            </Stack>

          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </ThemeProvider>
);

export default RestaurantFormPage;
