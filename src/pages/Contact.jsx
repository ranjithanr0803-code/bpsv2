import React from "react";
import {
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  Stack,
  Divider,
  Button,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
  alpha,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Language,
  AccessTime,
  Send,
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { styled, keyframes } from "@mui/material/styles";
import { CustomImageCard, GoogleMap } from "@common";
import Img3 from "../images/contactImg2.jpeg";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3A6B5E 0%, #C17B4C 100%)',
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 10s ease infinite`,
  padding: theme.spacing(12, 0, 8),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 30%, rgba(255,245,225,0.15) 0%, transparent 70%)`,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '80px',
    background: 'linear-gradient(to top, #FCFAF7, transparent)',
    opacity: 0.4,
  }
}));

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: '#FFFFFF',
  boxShadow: '0 15px 35px -12px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  border: `1px solid ${alpha('#C17B4C', 0.2)}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 25px 40px -12px rgba(58, 107, 94, 0.2)',
    borderColor: alpha('#C17B4C', 0.4),
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: `linear-gradient(135deg, #C17B4C, #E6B17E)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 32,
  }
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: '#FFFFFF',
  boxShadow: '0 15px 35px -12px rgba(0,0,0,0.08)',
  border: `1px solid ${alpha('#C17B4C', 0.2)}`,
}));

const MapWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  boxShadow: '0 15px 35px -12px rgba(0,0,0,0.1)',
  border: `1px solid ${alpha('#C17B4C', 0.2)}`,
  '& > div': {
    width: '100%',
    height: '100%',
    minHeight: 400,
  }
}));

const GradientDivider = styled(Divider)(({ theme }) => ({
  height: 4,
  width: 80,
  margin: '0 auto',
  background: 'linear-gradient(90deg, #C17B4C, #E6B17E, #8A9B6E)',
  borderRadius: 10,
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: "Registered Office",
      details: [
        "Baironics Printing Solutions",
        "Exact Address Line 1",
        "Area, Karnataka - 560001",
        "India"
      ],
      link: "https://maps.app.goo.gl/BLJdVHp4uiGapyMn8",
      linkText: "Get Directions"
    },
    {
      icon: <Phone />,
      title: "Phone",
      details: ["+91-80-41868000", "Support: +91-9876543210"],
      link: "tel:+918041868000",
      linkText: "Call Now"
    },
    {
      icon: <Email />,
      title: "Email",
      details: ["info.baironics@gmail.com", "sales@baironics.com"],
      link: "mailto:info.baironics@gmail.com",
      linkText: "Send Email"
    },
    {
      icon: <AccessTime />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted! (Demo)");
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(120deg, #FFF, #F9E0C0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h5"
              sx={{ opacity: 0.95, fontWeight: 400, lineHeight: 1.5 }}
            >
              Have questions or ready to start your project? We're here to help you bring your ideas to life.
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <InfoCard elevation={0}>
                <IconWrapper>{info.icon}</IconWrapper>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#3A6B5E', mb: 1.5 }}>
                  {info.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {info.details.map((line, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {line}
                    </Typography>
                  ))}
                </Box>
                {info.link && (
                  <Button
                    variant="text"
                    size="small"
                    href={info.link}
                    target="_blank"
                    sx={{
                      color: '#C17B4C',
                      fontWeight: 600,
                      '&:hover': { backgroundColor: alpha('#C17B4C', 0.08) }
                    }}
                  >
                    {info.linkText}
                  </Button>
                )}
              </InfoCard>
            </Grid>
          ))}
        </Grid>

        {/* Two Column: Form + Map */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <ContactForm elevation={0}>
              <Typography variant="h4" fontWeight={700} sx={{ color: '#3A6B5E', mb: 1 }}>
                Send Us a Message
              </Typography>
              <GradientDivider sx={{ mb: 3, mx: 0 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                We'll get back to you within 24 hours.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': { borderColor: '#C17B4C' },
                        '&.Mui-focused fieldset': { borderColor: '#C17B4C' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': { borderColor: '#C17B4C' },
                        '&.Mui-focused fieldset': { borderColor: '#C17B4C' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': { borderColor: '#C17B4C' },
                        '&.Mui-focused fieldset': { borderColor: '#C17B4C' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': { borderColor: '#C17B4C' },
                        '&.Mui-focused fieldset': { borderColor: '#C17B4C' }
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      backgroundColor: '#C17B4C',
                      borderRadius: 40,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#3A6B5E',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </ContactForm>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={700} sx={{ color: '#3A6B5E', mb: 1 }}>
              Find Us Here
            </Typography>
            <GradientDivider sx={{ mb: 3, mx: 0 }} />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Visit our facility or get directions with the map below.
            </Typography>
            <MapWrapper>
              <GoogleMap />
            </MapWrapper>
          </Grid>
        </Grid>

        {/* Additional Contact Info (Vigilance, Social) */}
        <Box sx={{ mb: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              background: alpha('#8A9B6E', 0.05),
              border: `1px solid ${alpha('#8A9B6E', 0.2)}`,
            }}
          >
            <Typography variant="h6" fontWeight={700} sx={{ color: '#3A6B5E', mb: 2 }}>
              For Queries or Complaints
            </Typography>
            <Typography variant="body2" paragraph>
              Write to the Head of Vigilance:
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <Box>
                <Typography variant="body2" fontWeight={600}>Phone:</Typography>
                <Typography variant="body2" color="text.secondary">+91-8041868000</Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={600}>Email:</Typography>
                <Typography variant="body2" color="text.secondary">info.baironics@gmail.com</Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* Social Links */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Connect with us on social media
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: '#C17B4C', '&:hover': { color: '#3A6B5E', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: '#C17B4C', '&:hover': { color: '#3A6B5E', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: '#C17B4C', '&:hover': { color: '#3A6B5E', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://wa.me/918041868000"
              target="_blank"
              sx={{ color: '#C17B4C', '&:hover': { color: '#3A6B5E', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
            >
              <WhatsApp />
            </IconButton>
          </Stack>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          backgroundColor: '#F5F0E8',
          borderTop: `1px solid ${alpha('#C17B4C', 0.2)}`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Baironics Printing Solutions. All Rights Reserved.
            <br />
            Design & Developed by BPS.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Contact;