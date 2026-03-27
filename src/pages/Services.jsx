import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
  Grow,
  alpha,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import {
  ExpandMore,
  ArrowForward,
  Label,
  LocalOffer,
  PrecisionManufacturing,
  QrCode2,
  SettingsEthernet,
  Security,
  DesignServices,
  Factory,
  CheckCircle,
  ChevronRight,
  Launch,
  TrendingUp,
  Speed,
  EmojiObjects,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1E90FF 0%, #0b5bb5 100%)',
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  }
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
  border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #1E90FF, #00BFFF)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .card-media': {
      transform: 'scale(1.1)',
    },
    '& .explore-button': {
      transform: 'translateX(5px)',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
}));

const CardMediaContainer = styled(Box)(({ theme }) => ({
  height: 300,
  overflow: 'hidden',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
  },
}));

const ServiceFeature = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    fontSize: '1.2rem',
  },
}));

const ExpandableContent = styled(Box)(({ theme, expanded }) => ({
  maxHeight: expanded ? '500px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.5s ease',
  marginTop: expanded ? theme.spacing(2) : 0,
}));

const servicesData = [
  {
    id: "name-plates",
    title: "Industrial Name Plates",
    subtitle: "Premium Metal & Custom Plates",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "High-quality industrial name plates for machinery, equipment, and facility identification.",
    features: [
      "Aluminium Anodized Plates",
      "SS 304/316 Laser Marking",
      "Brass & Bronze Etched Plates",
      "Electro Motor Name Plates",
      "Steel Barcode Labels",
      "Instruction & Warning Plates"
    ],
    details: "Manufactured using premium materials with precise etching, laser marking, and anodizing technologies. Corrosion-resistant, durable, and designed for industrial environments.",
    link: "/service/name-plates",
    icon: <Label />,
    tags: ["Industrial", "Metal", "Durable"]
  },
  {
    id: "stickers",
    title: "Stickers & Labels",
    subtitle: "Industrial & Commercial Solutions",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Custom stickers and labels for product identification, branding, and information display.",
    features: [
      "Polycarbonate Stickers",
      "Premium Vinyl Labels",
      "Digital Printing Solutions",
      "Weather-resistant Materials",
      "Custom Shapes & Sizes",
      "Barcode & QR Code Labels"
    ],
    details: "UV-resistant, waterproof, and durable stickers suitable for indoor and outdoor applications. Perfect for product labeling, safety signs, and brand promotion.",
    link: "/service/stickers",
    icon: <LocalOffer />,
    tags: ["Custom", "Weatherproof", "Durable"]
  },
  {
    id: "anodized",
    title: "Anodized Printing",
    subtitle: "Advanced Surface Treatment",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Professional anodizing services for aluminum plates with custom printing and etching.",
    features: [
      "Hard Anodized Finishes",
      "Color Anodizing Options",
      "Precision Etching",
      "Corrosion Protection",
      "Wear Resistance",
      "Custom Color Matching"
    ],
    details: "Enhance aluminum surfaces with anodizing for improved durability, corrosion resistance, and aesthetic appeal. Perfect for industrial and decorative applications.",
    link: "/service/anodized",
    icon: <PrecisionManufacturing />,
    tags: ["Premium", "Corrosion Resistant", "Aesthetic"]
  },
  {
    id: "laser",
    title: "Laser Marking",
    subtitle: "Precision Engraving Solutions",
    image: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "High-precision laser marking for permanent identification on various materials.",
    features: [
      "Fiber Laser Marking",
      "CO2 Laser Engraving",
      "Barcode & Serial Numbering",
      "Logo & Text Marking",
      "Deep Engraving",
      "Multiple Material Support"
    ],
    details: "Permanent marking solutions for metals, plastics, and other materials. Ideal for part identification, serial numbers, and branding with superior precision.",
    link: "/service/laser",
    icon: <QrCode2 />,
    tags: ["Precision", "Permanent", "Versatile"]
  }
];

const Services = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedCard, setExpandedCard] = useState(null);

  // Handle hash links on page load and navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1); // Remove the '#'
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }, 500);
        } else {
          // If element not found immediately, try again after a short delay
          setTimeout(() => {
            const retryElement = document.getElementById(elementId);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            }
          }, 1000);
        }
      }
    };

    handleHashNavigation();
  }, [location]);

  const handleCardExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleExploreClick = (link) => {
    navigate(link);
  };

  const scrollToService = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // Update URL without reload
      window.history.pushState({}, '', `/service#${serviceId}`);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center', color: 'white', position: 'relative', zIndex: 1 }}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                fontWeight={900}
                gutterBottom
                sx={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  mb: 2,
                }}
              >
                Our Professional Services
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  maxWidth: 800,
                  margin: '0 auto',
                  opacity: 0.95,
                  fontWeight: 300,
                  mb: 4,
                }}
              >
                Premium industrial printing and manufacturing solutions for businesses across Karnataka
              </Typography>

              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                    color: '#1E90FF',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #f0f0f0, #fff)',
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[6],
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Get Free Consultation
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </HeroSection>

      {/* Quick Navigation Chips */}
      <Box sx={{ py: 4, backgroundColor: 'background.default', borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}` }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            {servicesData.map((service) => (
              <Chip
                key={service.id}
                icon={service.icon}
                label={service.title}
                onClick={() => scrollToService(service.id)}
                sx={{
                  px: 1,
                  py: 2.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease',
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            fontWeight={800}
            gutterBottom
            sx={{
              mb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                background: 'linear-gradient(90deg, #1E90FF, #00BFFF)',
                borderRadius: 2,
              }
            }}
          >
            Comprehensive Solutions
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 8,
              color: 'text.secondary',
              maxWidth: 800,
              margin: '0 auto',
              fontWeight: 300,
            }}
          >
            Tailored printing and manufacturing services to meet diverse industrial requirements
          </Typography>

          <Grid container spacing={6}>
            {servicesData.map((service, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={service.id}
                id={service.id}
                sx={{
                  scrollMarginTop: '100px', // Adds offset for fixed header
                }}
              >
                <Grow in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <ServiceCard elevation={4}>
                    {/* Card Media */}
                    <CardMediaContainer>
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        className="card-media"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: theme.spacing(3),
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                        color: 'white',
                      }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9 }}>
                          {service.subtitle}
                        </Typography>
                      </Box>
                    </CardMediaContainer>

                    {/* Card Content */}
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>

                      {/* Features List */}
                      <Box sx={{ mb: 3 }}>
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <ServiceFeature key={idx}>
                            <CheckCircle />
                            <Typography variant="body2" fontWeight={500}>
                              {feature}
                            </Typography>
                          </ServiceFeature>
                        ))}
                      </Box>

                      {/* Expandable Content */}
                      <ExpandableContent expanded={expandedCard === service.id}>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 3 }}>
                          {service.features.slice(4).map((feature, idx) => (
                            <ServiceFeature key={idx}>
                              <CheckCircle />
                              <Typography variant="body2" fontWeight={500}>
                                {feature}
                              </Typography>
                            </ServiceFeature>
                          ))}
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {service.details}
                        </Typography>
                      </ExpandableContent>

                      {/* Tags */}
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                        {service.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: alpha(theme.palette.primary.main, 0.05),
                              color: theme.palette.primary.main,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>

                      {/* Card Actions */}
                      <CardActions sx={{ justifyContent: 'space-between', px: 0, pt: 3, mt: 2 }}>
                        <Button
                          size="small"
                          onClick={() => handleCardExpand(service.id)}
                          endIcon={expandedCard === service.id ? <ExpandMore sx={{ transform: 'rotate(180deg)' }} /> : <ChevronRight />}
                          sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            }
                          }}
                        >
                          {expandedCard === service.id ? 'Show Less' : 'View Details'}
                        </Button>

                        <Button
                          variant="contained"
                          size="medium"
                          endIcon={<Launch />}
                          className="explore-button"
                          onClick={() => handleExploreClick(service.link)}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                            background: 'linear-gradient(45deg, #1E90FF, #00BFFF)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #00BFFF, #1E90FF)',
                              transform: 'translateX(5px)',
                            }
                          }}
                        >
                          Explore Now
                        </Button>
                      </CardActions>
                    </CardContent>
                  </ServiceCard>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Services Section */}
      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1000}>
                <Box>
                  <Typography
                    variant="h2"
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
                        width: '40%',
                        height: 4,
                        background: 'linear-gradient(90deg, #1E90FF, #00BFFF)',
                        borderRadius: 2,
                      }
                    }}
                  >
                    Custom Solutions
                  </Typography>

                  <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, fontWeight: 300 }}>
                    Tailored to Your Specific Requirements
                  </Typography>

                  <Stack spacing={3} sx={{ mb: 4 }}>
                    <ServiceFeature>
                      <DesignServices />
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          Custom Design Services
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          From concept to production, we help design solutions that perfectly match your brand and functional requirements.
                        </Typography>
                      </Box>
                    </ServiceFeature>

                    <ServiceFeature>
                      <Factory />
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          Bulk Order Manufacturing
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Cost-effective solutions for large-scale production with consistent quality and timely delivery.
                        </Typography>
                      </Box>
                    </ServiceFeature>

                    <ServiceFeature>
                      <Security />
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          Quality Assurance
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rigorous quality checks at every stage to ensure products meet the highest industrial standards.
                        </Typography>
                      </Box>
                    </ServiceFeature>
                  </Stack>
                </Box>
              </Zoom>
            </Grid>

            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1500}>
                <Box
                  sx={{
                    p: 6,
                    borderRadius: theme.spacing(3),
                    background: 'linear-gradient(135deg, #1E90FF 0%, #0b5bb5 100%)',
                    color: 'white',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Typography variant="h3" fontWeight={700} gutterBottom>
                    Why Choose Our Services?
                  </Typography>

                  <Stack spacing={3} sx={{ mt: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                      }}>
                        <Speed />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Fast Turnaround Time
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Efficient production processes ensuring quick delivery without compromising quality.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                      }}>
                        <TrendingUp />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Competitive Pricing
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Best value for money with high-quality materials and superior craftsmanship.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                      }}>
                        <EmojiObjects />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Technical Expertise
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Years of industry experience with skilled professionals and modern technology.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        py: 8,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              fontWeight={900}
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 3,
              }}
            >
              Ready to Discuss Your Project?
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 800,
                margin: '0 auto',
                mb: 6,
                opacity: 0.95,
                fontWeight: 300,
              }}
            >
              Contact us for a free consultation and custom quote tailored to your specific needs
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
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
              onClick={() => navigate("/contact")}
            >
              Get Your Free Quote Now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services;