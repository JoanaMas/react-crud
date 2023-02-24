import React from 'react';
import {
  Stack, TextField, InputAdornment, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface ImageFieldComponentProps {
  defaultImages?: string[],
}

let imgFieldCount = 0;
const createId = () => {
  imgFieldCount += 1;
  return String(imgFieldCount);
};

const ImageFieldComponent: React.FC<ImageFieldComponentProps> = ({
  defaultImages,
}) => {
  // Nuotraukos linkų atvaizdavimas
  const imgMap = React.useMemo(
    () => defaultImages && defaultImages.reduce<{ [key: string]: string }>((prevMap, img) => ({
      ...prevMap,
      [createId()]: img,
    }), {}),
    [],
  );

  const [
    imgFields,
    setImgFields,
  ] = React.useState<string[]>((imgMap && Object.keys(imgMap)) || [createId()]);

  const addField = () => setImgFields([...imgFields, createId()]);

  const removeField = (imageId: string) => {
    if (imgFields.length >= 1) {
      setImgFields(imgFields.filter((id) => id !== imageId));
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      {
        imgFields.map((imageId) => (
          <TextField
            id="id"
            name="image"
            key={imageId}
            label="Image"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
            defaultValue={imgMap && imgMap[imageId]}
            InputProps={imgFields.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeField(imageId)}>
                    <DeleteIcon sx={{ color: '#FFFFFF' }} />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
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
