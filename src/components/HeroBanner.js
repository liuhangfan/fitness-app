import React from 'react';
import { Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/Fitness.svg';

const HeroBanner = () => (
  <Box id="home" sx={{ ml: { sm: '50px' }  ,flexWrap: 'wrap', display: 'flex', flexGrow:"0"}} position="relative" p="20px">
        <Box sx={{mt: { lg: '180px', xs: '70px' }}}>
        <Typography color="#FF9E9E" fontWeight="900" fontSize="80px">Fitness Club</Typography>
        <Typography fontWeight={700}  sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile And Repeat
        </Typography>
        <Typography fontSize="22px"  fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
        <Button className="search-btn" sx={{ bgcolor: '#7FE9DE',textAlign: 'center', marginTop: '45px', color: '#fff', textTransform: 'none', width: { lg: '250px', xs: '100%' }, height: '56px',fontSize: '22px', position: 'relative',  borderRadius: '10px',right: '0px', fontSize: { lg: '20px', xs: '14px' } }} href="#exercises">
         Explore Exercises
        </Button>
        </Stack>
        </Box>

        <Box component="img"  src={HeroBannerImage} alt="hero-banner" sx={{width:{xs:'100%', md:'50%', sm:"100%"}}}></Box>
        
  </Box>
);

export default HeroBanner;
