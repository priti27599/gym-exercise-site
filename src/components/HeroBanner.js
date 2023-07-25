import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import  BannerImage  from '../assets/g-banner.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{
          mt: { lg: '212px', xs: '70px' },
          ml:{sm:'50px'}
    }} position="relative" p="20px">
          <Typography
              color="#FF2625"
              fontWeight="600"
              fontSize="26px"
          >
              Fitness Club
          </Typography>  
          <Typography fontWeight={700}
           sx={{ fontSize:{lg:'44px', xs:'40px'}}}
          >
              Sweat, Smile <br/> and Repeat
          </Typography>
          <Typography fontSize="22px"
           lineHeight='35px' mb={3}
          >
              Check out the most effective exercises
          </Typography>
          <Button variant='contained' color='error' href="#exercises">Explore Exercises</Button>
          <img src={BannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner