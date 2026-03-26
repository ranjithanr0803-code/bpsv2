import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Stack,
  Paper,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
  Home,
  Info,
  Store,
  ContactMail,
  Send,
  WhatsApp,
  AccessTime,
  ChevronRight
} from '@mui/icons-material';
import { GoogleMap } from "@common";
import { useNavigate } from 'react-router';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled components
const FooterWrapper = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #1a2a3a 100%)`,
  color: '#f8fafc',
  marginTop: 'auto',
  borderRadius: 0,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D)',
  }
}));

const FooterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0)
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.08),
  color: 'white',
  margin: theme.spacing(0.5),
  transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: theme.shadows[4]
  }
}));

const QuickLinkItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '& .MuiListItemIcon-root': {
    minWidth: 32,
    color: theme.palette.secondary.light,
    transition: 'transform 0.2s ease',
  },
  '& .MuiListItemText-root': {
    transition: 'transform 0.2s ease',
  },
  '&:hover': {
    '& .MuiListItemIcon-root': {
      transform: 'translateX(4px)',
    },
    '& .MuiListItemText-root': {
      transform: 'translateX(8px)',
    },
    '& .MuiTypography-root': {
      color: theme.palette.secondary.light,
    }
  }
}));

const NewsletterForm = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  backdropFilter: 'blur(8px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
}));

const MapWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: 200,
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(0.98)',
    boxShadow: theme.shadows[2],
  }
}));

const FooterContactus = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const quickLinks = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About Us', icon: <Info />, path: '/about' },
    { text: 'Products', icon: <Store />, path: '/products' },
    { text: 'Services', icon: <ArrowForward />, path: '/services' },
    { text: 'Contact Us', icon: <ContactMail />, path: '/contact' },
  ];

  const contactInfo = [
    { icon: <Phone fontSize="small" />, text: '+91 80 4186 8000' },
    { icon: <Email fontSize="small" />, text: 'info@baironics.com' },
    { icon: <LocationOn fontSize="small" />, text: 'Bangalore, Karnataka, India' },
  ];

  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook', color: '#1877F2' },
    { icon: <Twitter />, label: 'Twitter', color: '#1DA1F2' },
    { icon: <Instagram />, label: 'Instagram', color: '#E4405F' },
    { icon: <LinkedIn />, label: 'LinkedIn', color: '#0A66C2' },
    { icon: <YouTube />, label: 'YouTube', color: '#FF0000' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert(`Subscribed with ${email}! (Demo)`);
      e.target.reset();
    }
  };

  return (
    <FooterWrapper component="footer" elevation={0}>
      <Container maxWidth="xl">
        <FooterSection>
          <Grid container spacing={4}>
            {/* Company Info & Contact */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(135deg, #fff, #FFE66D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Baironics Printing Solutions
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mb: 2, lineHeight: 1.6 }}>
                  Leading manufacturers of premium industrial name plates, stickers, and specialized printing solutions.
                  We deliver excellence through innovation and customer-focused solutions.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ContactMail />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      borderRadius: 6,
                      px: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                  <IconButton
                    color="inherit"
                    sx={{
                      backgroundColor: alpha('#25D366', 0.2),
                      '&:hover': { backgroundColor: '#25D366', transform: 'scale(1.05)' },
                    }}
                    href="https://wa.me/918041868000"
                    target="_blank"
                  >
                    <WhatsApp />
                  </IconButton>
                </Stack>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: '-0.3px' }}>
                  Contact Info
                </Typography>
                <List disablePadding>
                  {contactInfo.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36, color: theme.palette.secondary.light }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, letterSpacing: '-0.3px' }}>
                Quick Links
              </Typography>
              <List disablePadding>
                {quickLinks.map((link, index) => (
                  <QuickLinkItem
                    key={index}
                    onClick={() => navigate(link.path)}
                  >
                    <ListItemIcon>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.text}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </QuickLinkItem>
                ))}
              </List>
            </Grid>

            {/* Newsletter & Business Hours */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, letterSpacing: '-0.3px' }}>
                Stay Updated
              </Typography>
              <NewsletterForm>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                  Subscribe to Newsletter
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                  Get latest offers and updates directly in your inbox.
                </Typography>
                <form onSubmit={handleNewsletterSubmit}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      name="email"
                      size="small"
                      placeholder="Your email"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        backgroundColor: alpha('#fff', 0.9),
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { border: 'none' }
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      endIcon={<Send />}
                      sx={{ minWidth: 'auto', px: 2, borderRadius: 2 }}
                    >
                      Subscribe
                    </Button>
                  </Stack>
                </form>
              </NewsletterForm>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: '-0.3px' }}>
                  Business Hours
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                  <AccessTime fontSize="small" sx={{ color: theme.palette.secondary.light }} />
                  <Typography variant="body2">Mon - Fri: 9:00 AM - 6:00 PM</Typography>
                </Stack>
                <Typography variant="body2" sx={{ ml: 4, opacity: 0.8 }}>Saturday: 10:00 AM - 4:00 PM</Typography>
                <Typography variant="body2" sx={{ ml: 4, opacity: 0.8 }}>Sunday: Closed</Typography>
              </Box>
            </Grid>

            {/* Map & Social */}
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: '-0.3px' }}>
                Location
              </Typography>
              <MapWrapper>
                <GoogleMap style={{ width: '100%', height: '100%' }} />
              </MapWrapper>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: '-0.3px' }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {socialLinks.map((social, index) => (
                    <SocialIconButton
                      key={index}
                      aria-label={social.label}
                      sx={{
                        '&:hover': { backgroundColor: social.color }
                      }}
                    >
                      {social.icon}
                    </SocialIconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{
            my: 4,
            borderColor: alpha('#fff', 0.1),
          }} />

          {/* Bottom Bar */}
          <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                © {new Date().getFullYear()} Baironics Printing Solutions. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                flexWrap: 'wrap',
                gap: 2,
              }}>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  Terms of Service
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  Cookie Policy
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  Sitemap
                </Link>
              </Box>
            </Grid>
          </Grid>
        </FooterSection>
      </Container>
    </FooterWrapper>
  );
};

export default FooterContactus;