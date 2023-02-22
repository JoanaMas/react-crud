/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { RestaurantsModel } from 'models/restaurant-model';
import {
  Typography, Link, Box, Button,
} from '@mui/material';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
import {
  RestaurantsContainer,
  HeadingAndContactFlexContainer,
  HeadingStyles,
  ContactInfoStyles,
  ButtonStyles,
} from './styled';

type RestaurantCardProps = RestaurantsModel;

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  title,
  phone,
  location,
  images,
}) => {
  const navigate = useNavigate();

  return (
    <RestaurantsContainer
      spacing={4}
      sx={{ backgroundImage: `url(${images[0]})` }}
    >

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
