import React from 'react';
import { RestaurantsModel } from 'models/restaurant-model';
import {
  Typography, Link, Box,
} from '@mui/material';
import {
  RestaurantsContainer,
  HeadingAndContactFlexContainer,
  HeadingStyles,
  ContactInfoStyles,
  LinkButtonStyles,
} from './styled';

type RestaurantCardProps = RestaurantsModel;

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  title,
  phone,
  website,
  location,
  images,
}) => (
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
      <LinkButtonStyles direction="row">
        <Link href={website} sx={{ textDecoration: 'none', color: '#FFFFFF' }}>Visit out page!</Link>
      </LinkButtonStyles>
    </Box>

  </RestaurantsContainer>
);

export default RestaurantCard;
