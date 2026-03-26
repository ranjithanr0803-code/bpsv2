import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Sample images - replace with your actual image URLs
const imageData = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Beautiful mountain scenery with clear blue skies and snow-capped peaks.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Ocean Waves",
    description: "Powerful waves crashing against rocky cliffs at sunset.",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Forest Path",
    description: "Serene forest trail surrounded by tall trees and lush greenery.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "City Skyline",
    description: "Modern cityscape with impressive architecture and evening lights.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Desert Dunes",
    description: "Golden sand dunes stretching to the horizon under a bright sun.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    title: "Northern Lights",
    description: "Aurora borealis illuminating the night sky with vibrant colors.",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

// Main featured image
const featuredImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// Styled components for better appearance
const FeaturedImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
  minHeight: 300,
  boxShadow: theme.shadows[4],
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'scale(1.01)',
    transition: 'all 0.3s ease-in-out',
  }
}));

const FeaturedImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const FeaturedImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
  color: 'white',
  padding: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  }
}));

const StyledCardMedia = styled(CardMedia)({
  height: 160,
});

const GalleryGrid = () => {
  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 },
      maxWidth: 1400,
      margin: '0 auto'
    }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          fontWeight: 700, 
          mb: 4,
          textAlign: { xs: 'center', md: 'left' },
          color: 'primary.main'
        }}
      >
        Nature & Landscape Gallery
      </Typography>
      
      <Grid container spacing={3}>
        {/* Left side - Large Featured Image */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <FeaturedImageContainer>
            <FeaturedImage 
              src={featuredImage} 
              alt="Featured landscape"
            />
            <FeaturedImageOverlay>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Featured Landscape
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                A breathtaking panoramic view of mountains, lakes, and forests 
                captured at golden hour. This stunning image showcases the beauty 
                of nature in its purest form.
              </Typography>
            </FeaturedImageOverlay>
          </FeaturedImageContainer>
        </Grid>
        
        {/* Right side - 6 Cards Grid */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grid container spacing={3}>
            {imageData.map((item) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={item.id}>
                <StyledCard>
                  <StyledCardMedia
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      color="primary" 
                      sx={{ 
                        display: 'block', 
                        mt: 1.5,
                        fontWeight: 500
                      }}
                    >
                      View details →
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
      {/* Footer note */}
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ 
          mt: 4, 
          textAlign: 'center',
          fontStyle: 'italic'
        }}
      >
        Hover over cards to see elevation effects. Fully responsive across all screen sizes.
      </Typography>
    </Box>
  );
};

export default GalleryGrid;