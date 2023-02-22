import React from 'react';
import { Box } from '@mui/material';
import Img from 'components/ui/img';

const FormImageComponent = () => (
  <Box sx={{ width: { sm: '40%' }, height: '100%' }}>
    <Img
      src="../src/images/restaurant-1.jpg"
      sx={{
        width: '100%', height: '100%', objectFit: 'clale-down', display: { xs: 'none', sm: 'flex' },
      }}
    />
  </Box>
);

export default FormImageComponent;
