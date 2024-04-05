// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#880D1E',
    },
    secondary: {
      main: '#DD2D4A',
    },
    error: {
      main: '#F26A8D',
    },
    warning: {
      main: '#F49CBB',
    },
    info: {
      main: '#CBEEF3',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

export default theme;