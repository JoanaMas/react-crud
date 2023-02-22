import React from 'react';
import { Stack, TextField } from '@mui/material';

const RestaurantAddressFieldComponent = () => (
  <Stack direction="row" spacing={2}>
    <TextField id="address" label="Address" variant="outlined" size="small" />
    <TextField id="city" label="City" variant="outlined" size="small" />
  </Stack>

);

export default RestaurantAddressFieldComponent;
