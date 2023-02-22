import React from 'react';
import { Box, styled } from '@mui/material';
import { RestaurantsModel } from 'models/restaurant-model';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';
import Img from 'components/ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Swipers styles
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)({
  width: '1000px',
  height: '400px',
});

const SingleRestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = React.useState<undefined | RestaurantsModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedRestaurant = await ApiService.fetchRestaurant(id);
        setRestaurant(fetchedRestaurant);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (restaurant === undefined) return null;

  return (
    <>
      <Box component="pre">{JSON.stringify(restaurant, null, 4)}</Box>
      <Box sx={{
        width: '1000px', height: '400px', mx: 'auto', pt: '40px',
      }}
      >
        <StyledSwiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={2}
        >
          {
            restaurant?.images.map((image) => (
              <SwiperSlide>
                <Img
                  src={image}
                  alt=""
                  sx={{
                    width: 1, height: 1, border: 1, borderWidth: '40px', borderColor: '#9689b8', boxSizing: 'border-box',
                  }}
                />
              </SwiperSlide>
            ))
          }
        </StyledSwiper>
      </Box>
    </>
  );
};

export default SingleRestaurantPage;
