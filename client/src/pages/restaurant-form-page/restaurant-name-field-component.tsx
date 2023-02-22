import React from 'react';
import { Stack, TextField } from '@mui/material';

const RestaurantNameFieldComponent = () => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
  >

    <TextField id="name" label="Name" variant="outlined" size="small" color="primary" />
    <TextField id="title" label="Title" variant="outlined" size="small" />
  </Stack>
);

export default RestaurantNameFieldComponent;
