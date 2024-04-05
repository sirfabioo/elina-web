// FooterNote.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

function FooterNote() {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4, marginBottom: 2 }}>
      <Divider sx={{ marginBottom: 2 }} /> {/* Grey line */}
      <Typography variant="body2">
        Made by Fabio Unterholzer / 
        <Link href="https://github.com/sirfabioo" target="_blank" rel="noopener noreferrer">
           github.com/sirfabioo
        </Link>
      </Typography>
    </Box>
  );
}

export default FooterNote;
