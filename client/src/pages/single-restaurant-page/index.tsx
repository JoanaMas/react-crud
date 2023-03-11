import React from 'react';
import {
  Box, styled, Stack, Typography, Button, Rating,
} from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import Img from 'components/ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import useRestaurant from 'hooks/useRestaurant';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  imageContainerStyle,
  locationContainerStyle,
  phoneButtonStyle,
  restaurantNameStyle,
  restaurantTitleStyle,
  titleContainerStyle,
  visitWebsiteButtonStyle,
  locationResponsiveFontSizeStyle,
  swiperImageStyle,
  swiperContainerStyle,
} from './styled';

// Swipers styles
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)({
  width: '1000px',
  height: '400px',
});

const SingleRestaurantPage = () => {
  // Gaunamas puslapio id, kuris priskirtas prie url
  const { id } = useParams();
  // Panaudojam savo susikurtą hooksą, kuris gražina vieno restorano duomenis
  const [restaurant] = useRestaurant(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (restaurant === undefined) return null;

  return (
    <Box component="pre">
      <Stack sx={{
        width: 1, height: '700px', opacity: '0.9',
      }}
      >
        <Box sx={imageContainerStyle}>
          <Img src={restaurant.images[0]} sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Stack
          spacing={2}
          sx={titleContainerStyle}
        >
          <Rating readOnly value={restaurant.rating} precision={0.5} />

          <Typography variant="h1" sx={restaurantNameStyle}>{restaurant.name}</Typography>

          <Typography noWrap component="div" variant="body1" sx={restaurantTitleStyle}>{restaurant.title}</Typography>

          <Stack direction="row" spacing={4} sx={{ paddingTop: '2rem' }}>
            <Button
              href={restaurant.website}
              sx={visitWebsiteButtonStyle}
            >
              <OpenInBrowserIcon />
            </Button>

            <Button
              href={`tel:${restaurant.phone}`}
              sx={phoneButtonStyle}
            >
              <RingVolumeIcon />
            </Button>

            <Stack direction="row" spacing={1} alignItems="center" sx={locationContainerStyle}>
              <LocationOnIcon />
              <Typography
                sx={locationResponsiveFontSizeStyle}
              >
                {restaurant.location.address}

              </Typography>
              <Typography
                sx={locationResponsiveFontSizeStyle}
              >
                {restaurant.location.city}

              </Typography>
            </Stack>
          </Stack>

        </Stack>
      </Stack>

      <Box sx={swiperContainerStyle}>
        <StyledSwiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          sx={{ width: '100%' }}
        >
          {
            restaurant?.images.map((image) => (
              <SwiperSlide>
                <Img
                  src={image}
                  alt=""
                  sx={swiperImageStyle}
                />
              </SwiperSlide>
            ))
          }
        </StyledSwiper>
      </Box>
    </Box>
  );
};

export default SingleRestaurantPage;
