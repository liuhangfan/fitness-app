import React from 'react';
import { Box,Tabs, Tab } from '@mui/material';
import Icon from '../assets/icons/dumbbell.png'

const BodyPartScrollbar = ({ data, setBodyPart, bodyPart }) => {
  const handleChange = (event, newValue) => {
    setBodyPart(newValue);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return(
    <Box position="relative" align="center" 
    sx={{width: { lg: '70%', xs: '70%' }}}
    >
      <Tabs
        value={bodyPart}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        textColor="primary"
        indicatorColor="primary"
        aria-label="scrollable tabs"
        >
        {data.map((item) => (
          <Tab
            label={item}
            value={item}
            icon={<img src={Icon} alt="dumbbell" style={{ width: '80px', height: '80px' }} />}
            sx={{fontSize: { lg: '20px', xs: '14px' }, fontWeight: 'medium'}} 
          >
          </Tab>  
        ))}

    
      </Tabs>
    </Box>
  )
}

export default BodyPartScrollbar;
