import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
      title: 'National Championship 2024',
      content: 'Elina achieved a remarkable 2nd place in the National Championship 2024, showcasing her incredible talent and determination in a highly competitive field.'
    },
    {
      title: 'Mountain Bike Challenge 2023',
      content: 'In the grueling Mountain Bike Challenge 2023, Elina secured the 1st place, proving her versatility and strength across different cycling disciplines.'
    },
    {
      title: 'Spring Classic 2023',
      content: 'Elina took home 3rd place in the Spring Classic 2023, a race known for its challenging course and unpredictable weather, highlighting her resilience and strategic racing. Elina took home 3rd place in the Spring Classic 2023, a race known for its challenging course and unpredictable weather, highlighting her resilience and strategic racing.'
    },
    {
      title: 'City Criterium 2022',
      content: 'Dominating the field in the City Criterium 2022, Elina won 1st place with a commanding lead, underscoring her speed and agility in crit racing.'
    },
    {
      title: 'Coastal Road Race 2022',
      content: 'Competing against a backdrop of scenic views in the Coastal Road Race 2022, Elina finished in a strong 2nd position, displaying her endurance and tactical prowess.'
    },
    {
      title: 'Autumn Enduro 2021',
      content: 'Elina faced off against seasoned riders in the Autumn Enduro 2021, earning a respectable 3rd place and marking her ascent in the cycling community.'
    },
  ];
  

  export default function CardCarousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <Box sx={{ padding: '20px', margin: '0 auto', maxWidth: '70%', mb: 4, marginBottom: '10vh' }}> {/* Added bottom margin to the Box */}
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <Card sx={{ 
                backgroundColor: 'primary.main', 
                color: 'white', 
                padding: '20px', 
                minHeight: '300px', // Set the minHeight for the cards
                maxHeight: '300px', // Set the maxHeight for the cards
                overflow: 'auto', // Adds scroll for content that exceeds the card height
               }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1">
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }