import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IoIosBicycle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const theme = useTheme();
  let navigate = useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <IoIosBicycle color={theme.palette.primary.main} size={40} />
            <Typography variant="h6" sx={{ ml: 1, color: 'black', userSelect: 'none' }}>
              Elina Unterholzer
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/contact')}>
            Kontakt
          </Button>   
        </Toolbar>
      </AppBar>
    </Box>
  );
}
