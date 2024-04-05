import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import theme from './theme';
import Welcome from './components/welcome';
import Instagram from './components/instagram';
import Story from './components/story';
import Sponsors from './components/sponsors';
import Results from './components/results';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';
import Footer from './components/footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" flexDirection="column" minHeight="100vh"> {/* Flex container */}
        <Header /> {/* Always displayed */}
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={
            <>
              <Welcome />
              <Story />
              <Results />
              <Sponsors />
              <Instagram />
            </>
          } />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more specific routes as needed */}
        </Routes>
        <Footer /> {/* Footer */}
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
