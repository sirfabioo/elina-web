import React from 'react';
import { Box, Typography, Paper, Grid, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMe() {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      lines: ['Raimundweg 11', '9400 Wolfsberg', 'Österreich'],
    },
    {
      icon: <PhoneIcon />,
      lines: ['+43 644 123 4567'],
    },
    {
      icon: <EmailIcon />,
      lines: ['elina@unterholzer.at'],
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', flexDirection: 'column' }}>
      <Grid container spacing={2} justifyContent="center">
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
              <Paper sx={{
                p: 2,
                borderRadius: '50%',
                color: 'common.white',
                bgcolor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 80,
                mb: 2,
              }}>
                {info.icon}
              </Paper>
              {info.lines.map((line, lineIndex) => (
                <Typography key={lineIndex} variant="body1" sx={{ color: theme.palette.text.primary, textAlign: 'center', wordWrap: 'break-word' }}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}