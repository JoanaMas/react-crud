import { Theme, Stack, styled } from '@mui/material';

export const RestaurantsGridStyles = (theme: Theme) => ({
  [theme.breakpoints.up('md')]: {
    m: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignContent: 'space-around',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

export const RestaurantsContainer = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: '300px',
  mx: 'auto',
  marginTop: '50px',
  backgroundSize: 'cover',
}));

export const HeadingAndContactFlexContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  alignItems: 'center',
}));

export const HeadingStyles = styled(Stack)(() => ({
  width: '55%',
  paddingLeft: '20px',
  color: '#FFFFFF',
}));

export const ContactInfoStyles = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '45%',
  height: '80px',
  backgroundColor: '#ffffffa5',
  color: '#474157',
  paddingRight: '10px',
  // borderLeft: '2rem',
  // borderWidth: '20px',
  // borderColor: '#9689b8a5',
}));

export const ButtonStyles = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '140px',
  height: '50px',
  backgroundColor: '#9689b8',
  borderRadius: '30px',
  textDecoration: 'none',
  marginBottom: '30px',
}));
