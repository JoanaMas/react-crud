import React from 'react';
import {
  Stack, TextField, InputAdornment, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImageFieldComponent = () => (
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
    <IconButton disableRipple sx={{ width: '35px', height: '35px', bgcolor: '#FFFFFF' }}>
      <AddPhotoAlternateIcon sx={{ color: '#9689b8' }} />
    </IconButton>
  </Stack>
);

export default ImageFieldComponent;
