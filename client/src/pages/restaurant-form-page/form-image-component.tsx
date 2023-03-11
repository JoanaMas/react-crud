import React from 'react';
import { Box } from '@mui/material';
import Img from 'components/ui/img';
import { formImageStyle } from './styled';

const FormImageComponent = () => (
  <Box sx={{ width: { sm: '40%' }, height: '100%' }}>
    <Img
      src="../src/images/restaurant-1.jpg"
      sx={formImageStyle}
    />
  </Box>
);

export default FormImageComponent;
