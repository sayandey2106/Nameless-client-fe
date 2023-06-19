import { Box } from '@mui/material';
import React from 'react'
import FrontSlider from './FrontSlider';
import Navbar from '../../Component/Navbar';

const LandingPage = () => {
  return (
    <>

      <Navbar/>
    <Box sx={{backgroundColor:'primary.main'}}>
      <FrontSlider/>
    </Box>
    </>
  )
};

export default LandingPage

