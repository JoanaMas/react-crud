import React from 'react';
import { Stack, TextField } from '@mui/material';

const RestaurantContactFieldComponent = () => (
  <Stack direction="row" spacing={2}>
    <TextField id="phone" name="phone" label="Phone" variant="outlined" size="small" />
    <TextField id="website" name="website" label="Website" variant="outlined" size="small" />
  </Stack>
);

export default RestaurantContactFieldComponent;
