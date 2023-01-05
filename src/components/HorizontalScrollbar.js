import React from 'react';
import { Box,Tabs } from '@mui/material';

import ExerciseCard from './ExerciseCard';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const handleChange = (event, newValue) => {
    setBodyPart(newValue);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return(
    <Box position="relative" align="center" 
    sx={{width: { lg: '100%', xs: '100%' }}}
    >
      <Tabs
        value={bodyPart}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="scrollable tabs"
        >


      {data.map((item) => (
            
                <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              <ExerciseCard exercise={item} />
            </Box>
            
              ))}
      </Tabs>
    </Box>
  )
}

export default HorizontalScrollbar;

