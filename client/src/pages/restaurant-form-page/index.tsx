import React from 'react';
import {
  Stack, Typography, Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { RestaurantsModel } from 'models/restaurant-model';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { useNavigate, useParams } from 'react-router-dom';
import useRestaurant from 'hooks/useRestaurant';
import ImageFieldComponent from './image-field-component';
import RestaurantNameFieldComponent from './restaurant-name-field-component';
import RestaurantContactFieldComponent from './restaurant-contact-field-component';
import RestaurantAddressFieldComponent from './restaurant-address-field-component';
import FormImageComponent from './form-image-component';
import RatingComponent from './rating-component';
import { formContentStyle, formStyle, imputFieldFontSize } from './styled';

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

  // Update - step 1 - gaunamas vieno puslapio duomenų objektas, priklausomai nuo ID
  // išsitraukus ID galime daryti pakeitimus formos UI, ---> žiūrėti į gražinamą JSX apačioje.
  const { id } = useParams();

  // ----- Panaudojam savo susikurtą hooksą, kuris gražina vieno restorano duomenis ----
  const [restaurant, loading] = useRestaurant(id);

  // Update - step 2 - pakeičiamas formos tekstas iš create į update:
  const editingForm = id !== undefined;

  // Create & Update
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  // Forma
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const values = getRestaurantsData(formRef.current);
      if (!editingForm) {
        await ApiService.createRestaurant(values);
        navigate(routes.HomePage);
      } else {
        await ApiService.updateRestaurant(id, values);
        navigate(routes.HomePage);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  if (loading) return null;

  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent="center" direction="row" py={8}>
        <Stack
          direction="row"
          sx={formStyle}
        >
          {/* Form Image Component */}
          <FormImageComponent />

          <Stack
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
            spacing={2}
            alignItems="center"
            sx={formContentStyle}
          >
            <DinnerDiningIcon sx={{ fontSize: 70 }} />
            <Typography variant="h6" sx={{ fontSize: { xs: '10pt', sm: '16px' } }}>{editingForm ? 'Update Restaurant' : 'Add New Restaurant'}</Typography>

            <Stack spacing={1} sx={{ paddingTop: '1rem' }}>

              {/* Name Field */}
              <Typography variant="h6" sx={imputFieldFontSize}>Restaurant Name:</Typography>
              <RestaurantNameFieldComponent
                nameDefaultValue={restaurant?.name}
                titleDefaultValue={restaurant?.title}
              />

              {/* Contact field */}
              <Typography variant="h6" sx={imputFieldFontSize}>Contacts:</Typography>
              <RestaurantContactFieldComponent
                phoneDefaultValue={restaurant?.phone}
                websiteDefaultValue={restaurant?.website}
              />

              {/* Address field */}
              <Typography variant="h6" sx={imputFieldFontSize}>Location:</Typography>
              <RestaurantAddressFieldComponent
                addressDefaultValue={restaurant?.location.address}
                cityDefaultValue={restaurant?.location.city}
              />

              {/* Restaurant Image Field */}
              <Typography variant="h6" sx={imputFieldFontSize}>Add Images:</Typography>
              <ImageFieldComponent defaultImages={restaurant?.images} />

              {/* Rating */}

              {/* Button */}
              <Stack alignItems="center" pb="2rem">
                <RatingComponent ratingDefaultValue={restaurant?.rating} />
                <Button variant="outlined" type="submit" fullWidth sx={{ mt: '20px' }}>
                  {editingForm ? 'Update' : 'Create'}
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
