import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const sponsors = [
    { name: 'Alpina Personalconsulting', logo: 'alpina.png' },
    { name: 'Optik Scharf', logo: 'optikscharf.png' },
    { name: 'La Primafit', logo: 'laprimafit.png' },
    { name: 'Health Gym', logo: 'healthgym.png' },
    { name: 'Das Rad Oberländer', logo: 'dasrad.png' },
    { name: 'Imro', logo: 'imro.png' }
  // Add as many sponsors as needed
];

export default function Sponsors() {
    return (
      <Box sx={{ flexGrow: 1, textAlign: 'center', padding: '20px', marginBottom: '15vh' }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ marginBottom: '30px', color: 'primary.main', fontSize: '2.5rem', fontWeight: 'bold'}}
        >
          Hiermit möchte ich meinen Sponsoren danken!
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems={'center'}>
          {sponsors.map((sponsor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={0} sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={sponsor.logo} alt={sponsor.name} style={{ maxWidth: '50%', height: 'auto', marginBottom: '10px' }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }