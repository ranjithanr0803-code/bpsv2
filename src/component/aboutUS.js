import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Stack,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
  Fade,
  Zoom,
  Slide,
  Grow,
  useScrollTrigger,
  Fab,
  Button,
  alpha,
} from "@mui/material";
import { styled, keyframes } from '@mui/material/styles';
import {
  Factory,
  VerifiedUser,
  LocalShipping,
  Engineering,
  PrecisionManufacturing,
  Speed,
  SupportAgent,
  CheckCircle,
  Star,
  EmojiEvents,
  Groups,
  TrendingUp,
  History,
  ArrowUpward,
} from "@mui/icons-material";
import Logo from "./../images/BPS_Logo-removebg-preview (1).png";

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(52, 152, 219, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(-45deg, #2c3e50, #3498db, #2980b9, #1c2833)',
  backgroundSize: '400% 400%',
  animation: `${gradientShift} 15s ease infinite`,
  padding: theme.spacing(12, 0, 8),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '150px',
    background: 'linear-gradient(to top, #ffffff, transparent)',
    opacity: 0.1,
  }
}));

const FloatingLogo = styled(Box)(({ theme }) => ({
  animation: `${floatAnimation} 6s ease-in-out infinite`,
  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(2.5),
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #3498db, #2ecc71)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: theme.shadows[12],
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .card-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      animation: `${pulseAnimation} 2s infinite`,
    },
  },
  '& .card-icon': {
    transition: 'all 0.4s ease',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 90,
  height: 90,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
  color: 'white',
  fontSize: 42,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-4px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
    opacity: 0.3,
    filter: 'blur(8px)',
  }
}));

const ValueItem = styled(Box)(({ theme, delay }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: alpha(theme.palette.primary.light, 0.05),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderLeft: `5px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease',
  animation: `${delay ? `fadeInRight ${delay}s ease` : 'none'}`,
  '&:hover': {
    transform: 'translateX(8px)',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    boxShadow: theme.shadows[4],
  }
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: 'center',
  borderRadius: theme.spacing(2.5),
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  height: '100%',
  border: `2px solid ${alpha(theme.palette.primary.light, 0.3)}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'scaleY(1)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent, rgba(52, 152, 219, 0.05), transparent)',
    transform: 'scaleY(0)',
    transformOrigin: 'bottom',
    transition: 'transform 0.6s ease',
  }
}));

const ScrollTopFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  opacity: 0,
  transition: 'all 0.3s ease',
  '&.visible': {
    opacity: 1,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  }
}));

const AboutUS = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrollTrigger, setScrollTrigger] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrollTrigger(true);
    } else {
      setScrollTrigger(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: <VerifiedUser />,
      title: "Premium Quality",
      description: "ISO standard manufacturing with rigorous quality checks and corrosion-resistant materials.",
      color: "#3498db"
    },
    {
      icon: <Engineering />,
      title: "Experienced Team",
      description: "Skilled professionals with deep industry expertise and precise understanding of client needs.",
      color: "#2ecc71"
    },
    {
      icon: <PrecisionManufacturing />,
      title: "Material Variety",
      description: "Aluminium, Brass, Stainless Steel, Vinyl, PVC, Polycarbonates, and custom materials.",
      color: "#e74c3c"
    },
    {
      icon: <LocalShipping />,
      title: "Statewide Delivery",
      description: "Partnership with major logistics providers for door-to-door delivery across Karnataka.",
      color: "#f39c12"
    },
    {
      icon: <Speed />,
      title: "In-House Processing",
      description: "Complete in-house manufacturing from design to packaging ensuring tight tolerances.",
      color: "#9b59b6"
    },
    {
      icon: <SupportAgent />,
      title: "360° Customer Care",
      description: "Complete solution provider with double-check quality assurance and custom designs.",
      color: "#1abc9c"
    }
  ];

  const values = [
    { text: "Customer Satisfaction First", icon: <Star /> },
    { text: "Innovation in Manufacturing", icon: <EmojiEvents /> },
    { text: "Timely Delivery Promise", icon: <Speed /> },
    { text: "Competitive Pricing", icon: <TrendingUp /> },
    { text: "Sustainable Practices", icon: <Groups /> },
    { text: "Continuous Improvement", icon: <History /> }
  ];

  const stats = [
    { label: "Years Experience", value: "5+", suffix: "", icon: <History /> },
    { label: "Products Delivered", value: "10K+", suffix: "", icon: <Factory /> },
    { label: "Client Satisfaction", value: "98", suffix: "%", icon: <VerifiedUser /> },
    { label: "Delivery Coverage", value: "Statewide", suffix: "", icon: <LocalShipping /> }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                  <FloatingLogo>
                    <Box
                      component="img"
                      src={Logo}
                      alt="BPS Logo"
                      sx={{
                        height: isMobile ? 150 : 200,
                        width: 'auto',
                      }}
                    />
                  </FloatingLogo>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    fontWeight={900}
                    gutterBottom
                    sx={{
                      background: 'linear-gradient(45deg, #fff 30%, #bdc3c7 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.2,
                    }}
                  >
                    Crafting Excellence Since 2025
                  </Typography>
                  
                  <Typography
                    variant="h4"
                    sx={{
                      opacity: 0.9,
                      mb: 3,
                      fontWeight: 300,
                      fontStyle: 'italic',
                    }}
                  >
                    Baironics Printing Solutions
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: 800,
                      opacity: 0.85,
                      mb: 4,
                      fontWeight: 400,
                    }}
                  >
                    Leading manufacturers of premium industrial name plates, stickers, 
                    and specialized printing solutions across Karnataka
                  </Typography>
                  
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Chip
                      icon={<VerifiedUser />}
                      label="GST Registered"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    <Chip
                      icon={<Star />}
                      label="ISO Standards"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </HeroSection>

      {/* Statistics Section */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Slide direction="up" in={true} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                fontWeight={800}
                gutterBottom
                sx={{ 
                  mb: 6,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 100,
                    height: 4,
                    background: 'linear-gradient(90deg, #3498db, #2ecc71)',
                    borderRadius: 2,
                  }
                }}
              >
                Our Milestones
              </Typography>
              
              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Grow in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                      <StatsCard elevation={4}>
                        <Box sx={{ 
                          color: theme.palette.primary.main,
                          fontSize: 48,
                          mb: 2,
                        }}>
                          {stat.icon}
                        </Box>
                        <Typography variant="h1" fontWeight={900} color="primary" gutterBottom>
                          {stat.value}
                          <Typography component="span" variant="h4" color="primary">
                            {stat.suffix}
                          </Typography>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" fontWeight={500}>
                          {stat.label}
                        </Typography>
                      </StatsCard>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Slide>
        </Container>
      </Box>

      {/* Company Story */}
      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1000}>
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    gutterBottom
                    sx={{ 
                      color: 'primary.dark',
                      position: 'relative',
                      display: 'inline-block',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -5,
                        width: '60%',
                        height: 4,
                        background: 'linear-gradient(90deg, #3498db, #2ecc71)',
                        borderRadius: 2,
                      }
                    }}
                  >
                    Our Vision & Mission
                  </Typography>
                  
                  <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, fontWeight: 300 }}>
                    Pioneering Excellence in Industrial Printing Solutions
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                    Established in 2025, <strong style={{ color: theme.palette.primary.main }}>Baironics Printing Solutions</strong> 
                    has rapidly emerged as a market leader in manufacturing premium name plates, 
                    stickers, and specialized printing materials. Our commitment to quality and 
                    innovation has positioned us as the preferred partner for industries across Karnataka.
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                    Under our flagship brand <strong>"BPS"</strong>, we deliver comprehensive solutions 
                    including aluminium anodized name plates, precision-etched brass and stainless steel plates, 
                    laser marking services, and high-performance vinyl and polycarbonate stickers.
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Slide direction="right" in={true} timeout={1200}>
                <Paper
                  elevation={8}
                  sx={{
                    p: 5,
                    borderRadius: theme.spacing(3),
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      borderRadius: '50%',
                    }
                  }}
                >
                  <Typography variant="h4" fontWeight={700} gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
                    <CheckCircle sx={{ mr: 2, verticalAlign: 'middle' }} />
                    Complete In-House Excellence
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3, position: 'relative', zIndex: 1, opacity: 0.95 }}>
                    From initial design conceptualization to final packaging, every step is meticulously 
                    controlled within our state-of-the-art facility. This vertical integration ensures 
                    uncompromising quality, precise tolerances, and rapid turnaround times.
                  </Typography>
                  
                  <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)', position: 'relative', zIndex: 1 }} />
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Our Quality Promise
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      • Double-check quality assurance system<br />
                      • Premium-grade raw materials only<br />
                      • 360° customer satisfaction guarantee<br />
                      • Industry-leading turnaround times
                    </Typography>
                  </Box>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 10, backgroundColor: alpha(theme.palette.primary.light, 0.05) }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            fontWeight={800}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Our Core Values
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: 800, margin: '0 auto' }}
          >
            The principles that guide our every decision and action
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Grow in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                  <ValueItem delay={0.5 + index * 0.1}>
                    <Box sx={{ 
                      mr: 3, 
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      borderRadius: '50%',
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      {value.text}
                    </Typography>
                  </ValueItem>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 12, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            fontWeight={800}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Why Partner With BPS?
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 10, color: 'text.secondary', maxWidth: 800, margin: '0 auto' }}
          >
            Discover the competitive advantages that set us apart in the industry
          </Typography>
          
          <Grid container spacing={6}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <FeatureCard>
                    <CardContent sx={{ p: 5, textAlign: 'center' }}>
                      <IconWrapper className="card-icon">
                        {feature.icon}
                      </IconWrapper>
                      
                      <Typography variant="h5" fontWeight={700} gutterBottom sx={{ 
                        color: 'primary.dark',
                        mb: 3,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 40,
                          height: 3,
                          backgroundColor: feature.color,
                          borderRadius: 2,
                        }
                      }}>
                        {feature.title}
                      </Typography>
                      
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box sx={{ 
        py: 12, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Zoom in={true} timeout={1200}>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h2"
                fontWeight={900}
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 3,
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}
              >
                Ready to Elevate Your Brand?
              </Typography>
              
              <Typography
                variant="h5"
                sx={{ 
                  maxWidth: 800, 
                  margin: '0 auto', 
                  mb: 6, 
                  opacity: 0.95,
                  fontWeight: 300,
                }}
              >
                Experience the perfect blend of quality, reliability, and innovation with BPS printing solutions
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 6,
                    py: 1.8,
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                    color: '#667eea',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #f0f0f0, #fff)',
                      transform: 'translateY(-3px)',
                      boxShadow: theme.shadows[8],
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => window.location.href = "/contact"}
                >
                  Get Custom Quote
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 6,
                    py: 1.8,
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => window.location.href = "/service"}
                >
                  View Products
                </Button>
              </Stack>
              
              <Box sx={{ mt: 8 }}>
                <Chip
                  icon={<Star sx={{ color: 'gold' }} />}
                  label="Trusted by 500+ Industries Across Karnataka"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: theme.spacing(1.5, 3),
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                />
              </Box>
            </Box>
          </Zoom>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      <ScrollTopFab
        size="medium"
        className={scrollTrigger ? 'visible' : ''}
        onClick={scrollToTop}
        aria-label="scroll back to top"
      >
        <ArrowUpward />
      </ScrollTopFab>
    </>
  );
};

export default AboutUS;