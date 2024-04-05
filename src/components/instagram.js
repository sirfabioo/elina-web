import React from 'react';
import Box from '@mui/material/Box';
import { InstagramEmbed } from 'react-social-media-embed';
import Typography from '@mui/material/Typography';

export default function InstagramPosts() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: 5 }}>
      {/* First Instagram Post */}
      <Box sx={{ maxWidth: 320, margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'right' }}>
          Besuch mich gerne auf Social Media!
        </Typography>
      </Box>

      {/* Second Instagram Post */}
      <Box sx={{ maxWidth: 330, margin: 'auto', boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.2)' }}>
        <InstagramEmbed
          url='https://www.instagram.com/p/C3cs_let39s/?img_index=1'
          maxWidth={320}
          height={500}
          hideCaption={false}
          containerTagName='box'
          injectScript
        />
      </Box>

      {/* Third Instagram Post */}
      <Box sx={{ maxWidth: 330, margin: 'auto', boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.2)' }}>
        <InstagramEmbed
          url='https://www.instagram.com/p/C5GcJ1Ltr3h/'
          maxWidth={320}
          height={500}
          hideCaption={true}
          containerTagName='box'
          injectScript
        />
      </Box>
    </Box>
  );
}
