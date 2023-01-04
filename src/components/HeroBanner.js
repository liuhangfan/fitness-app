import React from 'react';
import { Box, Stack, Typography, Grid} from '@mui/material';

import HeroBannerImage from '../assets/images/Fitness.svg';

const HeroBanner = () => (
  <Box sx={{ ml: { sm: '50px' }  ,flexWrap: 'wrap', display: 'flex', flexGrow:"0"}} position="relative" p="20px">
        <Box sx={{mt: { lg: '180px', xs: '70px' }}}>
        <Typography color="#FF2625" fontWeight="500" fontSize="80px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        </Box>
        {/* <Box alignItems="center" justify="center" ><img src={HeroBannerImage} alt="hero-banner"  position="relative"  width="" /></Box> */}
        <Box component="img"  src={HeroBannerImage} alt="hero-banner" sx={{width:{xs:'100%', md:'55%', sm:"100%"}}}></Box>
        
  </Box>
);

export default HeroBanner;
