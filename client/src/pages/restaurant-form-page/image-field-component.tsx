import React from 'react';
import {
  Stack, TextField, InputAdornment, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

let imgFieldCount = 0;
const createId = () => {
  imgFieldCount += 1;
  return String(imgFieldCount);
};

const ImageFieldComponent = () => {
  const [imgFields, setImgFields] = React.useState<string[]>([createId()]);
  const addField = () => setImgFields([...imgFields, createId()]);

  const removeField = (imageId: string) => {
    if (imgFields.length >= 1) {
      setImgFields(imgFields.filter((id) => id !== imageId));
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        id="id"
        label="Image"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
        InputProps={imgFields.length >= 1 ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <DeleteIcon sx={{ color: '#FFFFFF' }} />
              </IconButton>
            </InputAdornment>
          ),
        } : undefined}
      />

      {
      imgFields.map((imageId) => (
        <TextField
          id="id"
          key={imageId}
          label="Image"
          variant="outlined"
          size="small"
          sx={{ width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => removeField(imageId)}>
                  <DeleteIcon sx={{ color: '#FFFFFF' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      ))
      }

      <IconButton
        disableRipple
        sx={{ width: '35px', height: '35px', bgcolor: '#FFFFFF' }}
        onClick={addField}
      >
        <AddPhotoAlternateIcon sx={{ color: '#9689b8' }} />
      </IconButton>
    </Stack>
  );
};

export default ImageFieldComponent;
