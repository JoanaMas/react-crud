import React from 'react';
import {
  Box, TextField, Stack, Typography, InputAdornment, IconButton,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Img from 'components/ui/img';

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
          backgroundColor: '#9689b8', width: { xs: 1, md: '800px' }, height: '600px', mx: { xs: '20px' }, color: '#FFFFFF',
        }}
      >
        <Box sx={{ width: { sm: '40%' }, height: '100%' }}>
          <Img
            src="../src/images/restaurant-1.jpg"
            sx={{
              width: '100%', height: '100%', objectFit: 'clale-down', display: { xs: 'none', sm: 'flex' },
            }}
          />
        </Box>

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

            <Typography variant="h6" sx={{ fontSize: '10pt' }}>Restaurant Name:</Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >

              <TextField id="name" label="Name" variant="outlined" size="small" color="primary" />
              <TextField id="title" label="Title" variant="outlined" size="small" />
            </Stack>

            <Typography variant="h6" sx={{ fontSize: '10pt' }}>Contacts:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField id="phone" label="Phone" variant="outlined" size="small" />
              <TextField id="website" label="Website" variant="outlined" size="small" />
            </Stack>

            <Typography variant="h6" sx={{ fontSize: '10pt' }}>Location:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField id="address" label="Address" variant="outlined" size="small" />
              <TextField id="city" label="City" variant="outlined" size="small" />
            </Stack>

            <Typography variant="h6" sx={{ fontSize: '10pt' }}>Add Images:</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                id="image"
                label="Image"
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <DeleteIcon sx={{ color: '#FFFFFF' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack alignItems="center" pt="1.5rem">
              <IconButton disableRipple sx={{ width: '50px', height: '50px', bgcolor: '#FFFFFF' }}>
                <AddPhotoAlternateIcon sx={{ color: '#9689b8' }} />
              </IconButton>
            </Stack>

          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </ThemeProvider>
);

export default RestaurantFormPage;
