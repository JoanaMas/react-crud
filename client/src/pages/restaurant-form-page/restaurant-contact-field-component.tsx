import React from 'react';
import { Stack, TextField } from '@mui/material';

interface RestaurantContactFieldComponentProps {
  phoneDefaultValue?: string,
  websiteDefaultValue?: string,
}

const RestaurantContactFieldComponent: React.FC<RestaurantContactFieldComponentProps> = ({
  phoneDefaultValue,
  websiteDefaultValue,
}) => (
  <Stack direction="row" spacing={2}>
    <TextField id="phone" name="phone" label="Phone" variant="outlined" size="small" defaultValue={phoneDefaultValue} />
    <TextField id="website" name="website" label="Website" variant="outlined" size="small" defaultValue={websiteDefaultValue} />
  </Stack>
);

export default RestaurantContactFieldComponent;
