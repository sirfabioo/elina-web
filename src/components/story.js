import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HerStory() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh', // Adjust the height as needed
      padding: '0 10px', // Provides padding on the sides
    }}>
      <Typography variant="h5" component="p" sx={{ textAlign: 'center', maxWidth: '150vh' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
      et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Typography>
    </Box>
  );
}
