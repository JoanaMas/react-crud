import React from 'react';
import { Stack, Rating } from '@mui/material';

interface RatingComponentProps {
  ratingDefaultValue?: number
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  ratingDefaultValue,
}) => (
  <Stack alignSelf="center">
    <Rating name="rating" defaultValue={ratingDefaultValue} />
  </Stack>
);

export default RatingComponent;
