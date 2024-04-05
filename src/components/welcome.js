import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Welcome() {
    const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 0,
      padding: 0,
      backgroundColor: '#F49CBB', // Adjust the background color as needed
      boxShadow: '16px 8px 16px 0 rgba(0, 0, 0, 0.2)',
    }}>
        {/* Text section on the left */}
        <Box sx={{ maxWidth: '40%', marginLeft: 7 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Freut mich, dass du hier bist!
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
            Ich bin Elina Unterholzer und fahre im österreichischen Rennrad Nationalteam.
            </Typography>
            <Typography variant="subtitle1" sx={{ my: 2 }}>
            Dolor sit amet, consectetur adipiscing elit. Sed ac felis ut libero ultrices lacinia.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Dolor sit amet, consectetur adipiscing elit.
            </Typography>
            </Box>
        </Box>
        
        <Box sx={{
            maxWidth: '50%',
            textAlign: 'center',
            borderRadius: '10%', // This will make the Box itself rounded, conforming to the image
            overflow: 'hidden', // Ensures no overflow outside the rounded Box
            marginRight: 10,
        }}>
            <img src="elina2.png" alt="Elina, die Radrennfahrerin" style={{ width: '100%', height: 'auto', borderRadius: '10%', display: 'block' }} />
        </Box>
    </Box>
  );
}
