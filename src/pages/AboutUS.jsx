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
  Palette,
  Brush,
} from "@mui/icons-material";
import Logo from "./../images/BPS_Logo-removebg-preview (1).png"; // adjust path if needed

// ===== ANIMATIONS =====
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const softPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(193, 123, 76, 0.3); }
  70% { box-shadow: 0 0 0 20px rgba(193, 123, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(193, 123, 76, 0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// ===== STYLED COMPONENTS =====
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(125deg, #3A6B5E 0%, #C17B4C 45%, #E6B17E 100%)',
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 12s ease infinite`,
  padding: theme.spacing(12, 0, 8),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '65vh',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 40%, rgba(255,245,225,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to top, #FCFAF7, transparent)',
    opacity: 0.4,
  }
}));

const FloatingLogo = styled(Box)(({ theme }) => ({
  animation: `${floatAnimation} 5s ease-in-out infinite`,
  filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.25))',
  transition: 'transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
  '&:hover': {
    transform: 'scale(1.05) rotate(1deg)',
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
  position: 'relative',
  background: '#FFFFFF',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: `linear-gradient(90deg, #C17B4C, #E6B17E, #8A9B6E)`,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 25px 40px -12px rgba(58, 107, 94, 0.2)',
    borderColor: alpha('#C17B4C', 0.3),
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .card-icon': {
      transform: 'scale(1.08)',
      background: `linear-gradient(135deg, #C17B4C, #E6B17E)`,
    },
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 85,
  height: 85,
  borderRadius: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  background: `linear-gradient(135deg, #8A9B6E 0%, #C17B4C 100%)`,
  color: 'white',
  fontSize: 40,
  transition: 'all 0.4s ease',
  boxShadow: '0 12px 20px -8px rgba(0,0,0,0.15)',
  '& svg': {
    fontSize: 42,
  }
}));

const ValueItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: alpha('#C17B4C', 0.04),
  borderRadius: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  borderLeft: `4px solid #C17B4C`,
  transition: 'all 0.35s ease',
  backdropFilter: 'blur(2px)',
  '&:hover': {
    transform: 'translateX(10px)',
    backgroundColor: alpha('#C17B4C', 0.08),
    boxShadow: '0 8px 20px -8px rgba(0,0,0,0.1)',
    borderLeftWidth: '8px',
  }
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  textAlign: 'center',
  borderRadius: theme.spacing(3),
  background: '#FFFFFF',
  height: '100%',
  border: `1px solid ${alpha('#C17B4C', 0.2)}`,
  transition: 'all 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: '#C17B4C',
    boxShadow: '0 20px 30px -12px rgba(58, 107, 94, 0.2)',
    '& .stat-icon': {
      transform: 'scale(1.1)',
      color: '#C17B4C',
    },
  },
  '& .stat-icon': {
    transition: 'transform 0.3s ease, color 0.3s ease',
  }
}));

const ScrollTopFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: '#C17B4C',
  color: 'white',
  opacity: 0,
  transition: 'all 0.3s ease',
  '&.visible': {
    opacity: 1,
  },
  '&:hover': {
    backgroundColor: '#3A6B5E',
    transform: 'scale(1.1)',
  }
}));

const GradientDivider = styled(Divider)(({ theme }) => ({
  height: 3,
  width: 80,
  margin: '0 auto',
  background: 'linear-gradient(90deg, #C17B4C, #E6B17E, #8A9B6E)',
  borderRadius: 10,
}));

// ===== MAIN COMPONENT =====
const AboutUS = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrollTrigger, setScrollTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollTrigger(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const features = [
    { icon: <VerifiedUser />, title: "Premium Quality", description: "ISO standard manufacturing with rigorous quality checks and corrosion-resistant materials.", color: "#C17B4C" },
    { icon: <Engineering />, title: "Experienced Team", description: "Skilled professionals with deep industry expertise and precise understanding of client needs.", color: "#8A9B6E" },
    { icon: <PrecisionManufacturing />, title: "Material Variety", description: "Aluminium, Brass, Stainless Steel, Vinyl, PVC, Polycarbonates, and custom materials.", color: "#E6B17E" },
    { icon: <LocalShipping />, title: "Statewide Delivery", description: "Partnership with major logistics providers for door-to-door delivery across Karnataka.", color: "#3A6B5E" },
    { icon: <Speed />, title: "In-House Processing", description: "Complete in-house manufacturing from design to packaging ensuring tight tolerances.", color: "#C17B4C" },
    { icon: <SupportAgent />, title: "360° Customer Care", description: "Complete solution provider with double-check quality assurance and custom designs.", color: "#8A9B6E" }
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
    { label: "Years Experience", value: "5+", icon: <History /> },
    { label: "Products Delivered", value: "10K+", icon: <Factory /> },
    { label: "Client Satisfaction", value: "98%", icon: <VerifiedUser /> },
    { label: "Delivery Coverage", value: "Statewide", icon: <LocalShipping /> }
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
                        filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.2))',
                      }}
                    />
                  </FloatingLogo>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    fontWeight={800}
                    gutterBottom
                    sx={{
                      background: 'linear-gradient(120deg, #FFFFFF 20%, #F9E0C0 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Crafting Excellence Since 2025
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ opacity: 0.95, mb: 2, fontWeight: 500, letterSpacing: '-0.01em' }}
                  >
                    Baironics Printing Solutions
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ maxWidth: 700, opacity: 0.9, mb: 4, fontWeight: 400, lineHeight: 1.5 }}
                  >
                    Leading manufacturers of premium industrial name plates, stickers,
                    and specialized printing solutions across Karnataka
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip
                      icon={<VerifiedUser sx={{ color: '#F9E0C0' }} />}
                      label="GST Registered"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(12px)',
                        borderRadius: '40px',
                        px: 1,
                      }}
                    />
                    <Chip
                      icon={<Star sx={{ color: '#F9E0C0' }} />}
                      label="ISO Standards"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(12px)',
                        borderRadius: '40px',
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
      <Box sx={{ py: 10, backgroundColor: '#FCFAF7' }}>
        <Container maxWidth="lg">
          <Slide direction="up" in={true} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                fontWeight={800}
                gutterBottom
                sx={{ mb: 2, color: '#2C4A3F', letterSpacing: '-0.02em' }}
              >
                Our Milestones
              </Typography>
              <GradientDivider sx={{ mb: 6 }} />
              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Grow in={true} timeout={800} style={{ transitionDelay: `${index * 150}ms` }}>
                      <StatsCard elevation={0}>
                        <Box className="stat-icon" sx={{ fontSize: 48, color: '#C17B4C', mb: 2 }}>
                          {stat.icon}
                        </Box>
                        <Typography variant="h3" fontWeight={800} color="#3A6B5E" gutterBottom>
                          {stat.value}
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

      {/* Company Story - Vision & Mission */}
      <Box sx={{ py: 12, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1000}>
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    gutterBottom
                    sx={{ color: '#3A6B5E', position: 'relative', display: 'inline-block', mb: 2 }}
                  >
                    Our Vision & Mission
                  </Typography>
                  <Box sx={{ width: 80, height: 4, background: 'linear-gradient(90deg, #C17B4C, #E6B17E)', borderRadius: 2, mb: 3 }} />
                  <Typography variant="h6" color="#8A9B6E" paragraph sx={{ mb: 3, fontWeight: 500 }}>
                    Pioneering Excellence in Industrial Printing Solutions
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.7, color: '#2F3E3A' }}>
                    Established in 2025, <strong style={{ color: '#C17B4C' }}>Baironics Printing Solutions</strong>
                    has rapidly emerged as a market leader in manufacturing premium name plates,
                    stickers, and specialized printing materials. Our commitment to quality and
                    innovation has positioned us as the preferred partner for industries across Karnataka.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#2F3E3A' }}>
                    Under our flagship brand <strong style={{ color: '#C17B4C' }}>"BPS"</strong>, we deliver comprehensive solutions
                    including aluminium anodized name plates, precision-etched brass and stainless steel plates,
                    laser marking services, and high-performance vinyl and polycarbonate stickers.
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" in={true} timeout={1200}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: 5,
                    background: 'linear-gradient(145deg, #FEF7EF, #FFF9F0)',
                    border: '1px solid rgba(193, 123, 76, 0.2)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -30,
                      right: -30,
                      width: 180,
                      height: 180,
                      background: 'radial-gradient(circle, rgba(193,123,76,0.08) 0%, transparent 70%)',
                      borderRadius: '50%',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <CheckCircle sx={{ fontSize: 48, color: '#C17B4C', mb: 2 }} />
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: '#3A6B5E' }}>
                      Complete In-House Excellence
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', mb: 3, color: '#4A5B55' }}>
                      From initial design conceptualization to final packaging, every step is meticulously
                      controlled within our state-of-the-art facility. This vertical integration ensures
                      uncompromising quality, precise tolerances, and rapid turnaround times.
                    </Typography>
                    <Divider sx={{ my: 3, borderColor: alpha('#C17B4C', 0.2) }} />
                    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#8A9B6E' }}>
                      Our Quality Promise
                    </Typography>
                    <Stack spacing={1}>
                      <Typography variant="body2">✓ Double-check quality assurance system</Typography>
                      <Typography variant="body2">✓ Premium-grade raw materials only</Typography>
                      <Typography variant="body2">✓ 360° customer satisfaction guarantee</Typography>
                      <Typography variant="body2">✓ Industry-leading turnaround times</Typography>
                    </Stack>
                  </Box>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: 12, backgroundColor: '#FCFAF7' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" fontWeight={800} sx={{ mb: 2, color: '#3A6B5E' }}>
            Our Core Values
          </Typography>
          <GradientDivider sx={{ mb: 4 }} />
          <Typography variant="h6" align="center" sx={{ mb: 8, color: '#6E7D76', maxWidth: 700, mx: 'auto' }}>
            The principles that guide our every decision and action
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Grow in={true} timeout={600} style={{ transitionDelay: `${index * 100}ms` }}>
                  <ValueItem>
                    <Box sx={{
                      mr: 3,
                      color: '#C17B4C',
                      backgroundColor: alpha('#C17B4C', 0.12),
                      borderRadius: '50%',
                      width: 54,
                      height: 54,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ color: '#2C4A3F' }}>
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
      <Box sx={{ py: 12, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" fontWeight={800} sx={{ mb: 2, color: '#3A6B5E' }}>
            Why Partner With BPS?
          </Typography>
          <GradientDivider sx={{ mb: 3 }} />
          <Typography variant="h6" align="center" sx={{ mb: 10, color: '#6E7D76', maxWidth: 700, mx: 'auto' }}>
            Discover the competitive advantages that set us apart
          </Typography>
          <Grid container spacing={5}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow in={true} timeout={800} style={{ transitionDelay: `${index * 120}ms` }}>
                  <FeatureCard>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <IconWrapper className="card-icon">
                        {feature.icon}
                      </IconWrapper>
                      <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#3A6B5E', mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
        background: 'linear-gradient(115deg, #3A6B5E 0%, #C17B4C 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -50,
          right: -50,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255,245,225,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(230,177,126,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }
      }}>
        <Container maxWidth="lg">
          <Zoom in={true} timeout={1200}>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h2"
                fontWeight={800}
                gutterBottom
                sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, mb: 3 }}
              >
                Ready to Elevate Your Brand?
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', mb: 6, opacity: 0.92, fontWeight: 400 }}>
                Experience the perfect blend of quality, reliability, and innovation with BPS printing solutions
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 40,
                    fontSize: '1rem',
                    fontWeight: 700,
                    backgroundColor: '#FFFFFF',
                    color: '#C17B4C',
                    '&:hover': {
                      backgroundColor: '#F9E0C0',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 24px -8px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s',
                  }}
                  onClick={() => window.location.href = "/contact"}
                >
                  Get Custom Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 40,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderColor: '#FFFFFF',
                    color: '#FFFFFF',
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s',
                  }}
                  onClick={() => window.location.href = "/service"}
                >
                  View Products
                </Button>
              </Stack>
              <Box sx={{ mt: 6 }}>
                <Chip
                  icon={<Star sx={{ color: '#FFD966' }} />}
                  label="Trusted by 500+ Industries Across Karnataka"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    backdropFilter: 'blur(8px)',
                    borderRadius: 40,
                    px: 1,
                  }}
                />
              </Box>
            </Box>
          </Zoom>
        </Container>
      </Box>

      {/* Scroll to Top */}
      <ScrollTopFab
        size="medium"
        className={scrollTrigger ? 'visible' : ''}
        onClick={scrollToTop}
        aria-label="scroll to top"
      >
        <ArrowUpward />
      </ScrollTopFab>
    </>
  );
};

export default AboutUS;