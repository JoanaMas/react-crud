import React from 'react';
import { Stack, TextField } from '@mui/material';

interface RestaurantAddressFieldComponentProps {
  addressDefaultValue?: string,
  cityDefaultValue?: string,
}

const RestaurantAddressFieldComponent: React.FC<RestaurantAddressFieldComponentProps> = ({
  addressDefaultValue,
  cityDefaultValue,
}) => (
  <Stack direction="row" spacing={2}>
    <TextField id="address" name="address" label="Address" variant="outlined" size="small" defaultValue={addressDefaultValue} />
    <TextField id="city" name="city" label="City" variant="outlined" size="small" defaultValue={cityDefaultValue} />
  </Stack>

);

export default RestaurantAddressFieldComponent;
