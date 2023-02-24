/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { RestaurantsModel } from 'models/restaurant-model';
import {
  Typography, Link, Box, Button, IconButton, Stack,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
// import ApiService from 'services/api-service';
import {
  RestaurantsContainer,
  HeadingAndContactFlexContainer,
  HeadingStyles,
  ContactInfoStyles,
  ButtonStyles,
} from './styled';

type RestaurantCardProps = RestaurantsModel & {
  onDelete: VoidFunction
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  title,
  phone,
  location,
  images,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <RestaurantsContainer
      position="relative"
      spacing={4}
      sx={{ backgroundImage: `url(${images[0]})` }}
    >
      <Stack direction="row" spacing={1} alignSelf="self-end" sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        {/* Edit Button */}
        <IconButton
          onClick={() => navigate(routes.UpdateRestaurantPage.createLink(id))}
          disableRipple
          sx={{
            bgcolor: '#9689b8', color: '#FFFFFF', width: '40px', height: '40px',
          }}
        >
          <EditIcon />
        </IconButton>

        {/* Delete Button */}
        <IconButton
          onClick={() => onDelete()}
          disableRipple
          sx={{
            bgcolor: '#9689b8', color: '#FFFFFF', width: '40px', height: '40px',
          }}
        >
          <DeleteOutlineIcon />

        </IconButton>
      </Stack>

      <HeadingAndContactFlexContainer direction="row" spacing={4}>

        <HeadingStyles spacing={2}>
          <Typography variant="h1" sx={{ fontSize: '25pt', fontWeight: '600' }}>{name}</Typography>
          <Typography variant="h3" sx={{ fontSize: '14pt', fontWeight: '600' }}>{title}</Typography>
        </HeadingStyles>

        <ContactInfoStyles spacing={2}>
          <Typography variant="body1">{`${location.address}, ${location.city}`}</Typography>
          <Link href={`tel:${phone}`}>{phone}</Link>
        </ContactInfoStyles>

      </HeadingAndContactFlexContainer>

      <Box>
        <ButtonStyles direction="row">
          <Button
            onClick={() => navigate(routes.SingleRestaurantPage.createLink(id))}
            sx={{ textDecoration: 'none', color: '#FFFFFF' }}
          >
            Visit out page!

          </Button>
        </ButtonStyles>
      </Box>

    </RestaurantsContainer>
  );
};

export default RestaurantCard;
