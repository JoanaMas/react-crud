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
        <Box sx={{
          position: 'relative', width: '100%', height: '100%', padding: '30px',
        }}
        >
          <Img src={restaurant.images[0]} sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Stack
          spacing={2}
          sx={{
            position: 'absolute', top: '10rem', left: '5rem', color: '#FFFFFF', backgroundColor: '#9689b8', height: { xs: '400px', sm: '350px' }, width: { xs: '400px', sm: '500px', md: '700px' }, padding: '2rem',
          }}
        >
          <Rating readOnly value={restaurant.rating} precision={0.5} />
          <Typography variant="h1" sx={{ fontSize: { xs: '25pt', md: '30pt' } }}>{restaurant.name}</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '8pt', sm: '10pt', md: '13pt' } }}>{restaurant.title}</Typography>

          <Stack direction="row" spacing={4} sx={{ paddingTop: '2rem' }}>
            <Button
              href={restaurant.website}
              sx={{
                width: '50px', height: '50px', padding: '1rem', color: '#FFFFFF', border: 3,
              }}
            >
              <OpenInBrowserIcon />
            </Button>

            <Button
              href={`tel:${restaurant.phone}`}
              sx={{
                width: '50px', height: '50px', padding: '1rem', color: '#FFFFFF', border: 3,
              }}
            >
              <RingVolumeIcon />
            </Button>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              <LocationOnIcon />
              <Typography>{restaurant.location.address}</Typography>
              <Typography>{restaurant.location.city}</Typography>

            </Stack>
          </Stack>

        </Stack>
      </Stack>

      <Box sx={{
        width: '100%', height: '400px', pt: '40px',
      }}
      >
        <StyledSwiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {
            restaurant?.images.map((image) => (
              <SwiperSlide>
                <Img
                  src={image}
                  alt=""
                  sx={{
                    width: { xs: '500px', sm: '600px', md: '100%' }, height: 1, border: 1, borderWidth: '40px', borderColor: '#9689b8', boxSizing: 'border-box',
                  }}
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
