import React from 'react';
import { Stack, TextField } from '@mui/material';

interface RestaurantNameFieldComponentProps {
  nameDefaultValue?: string
  titleDefaultValue?: string
}

const RestaurantNameFieldComponent: React.FC<RestaurantNameFieldComponentProps> = ({
  nameDefaultValue,
  titleDefaultValue,
}) => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
  >

    <TextField id="name" name="name" label="Name" variant="outlined" size="small" color="primary" defaultValue={nameDefaultValue} />
    <TextField id="title" name="title" label="Title" variant="outlined" size="small" defaultValue={titleDefaultValue} />
  </Stack>
);

export default RestaurantNameFieldComponent;
