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
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
  WhatsApp,
  ArrowForward,
  Home,
  Info,
  Store,
  ContactMail,
  Send
} from '@mui/icons-material';
import WhatsAppContact from "./whatsApp";
import { useNavigate } from 'react-router';

// Styled components
const FooterWrapper = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'white',
  marginTop: 'auto',
  borderRadius: 0,
  boxShadow: theme.shadows[8]
}));

const FooterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0)
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[4]
  }
}));

const QuickLinkItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiListItemIcon-root': {
    minWidth: 36,
    color: theme.palette.secondary.light
  },
  '& .MuiTypography-root': {
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.secondary.light,
      transform: 'translateX(5px)'
    }
  }
}));

const NewsletterForm = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  marginTop: theme.spacing(3)
}));

const FooterContactus = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const quickLinks = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About Us', icon: <Info />, path: '/about' },
    { text: 'Products', icon: <Store />, path: '/products' },
    { text: 'Contact Us', icon: <ContactMail />, path: '/contact' },
    { text: 'Services', icon: <ArrowForward />, path: '/services' },
  ];

  const contactInfo = [
    { icon: <Phone />, text: '+1 (555) 123-4567' },
    { icon: <Email />, text: 'info@company.com' },
    { icon: <LocationOn />, text: '123 Business Street, City, Country' },
  ];

  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook', color: '#1877F2' },
    { icon: <Twitter />, label: 'Twitter', color: '#1DA1F2' },
    { icon: <Instagram />, label: 'Instagram', color: '#E4405F' },
    { icon: <LinkedIn />, label: 'LinkedIn', color: '#0A66C2' },
    { icon: <YouTube />, label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <FooterWrapper component="footer" elevation={6}>
      <Container maxWidth="xl">
        <FooterSection>
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #fff, #e0e0e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  BPS Industries
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                  Leading manufacturers and suppliers of high-quality industrial products.
                  We deliver excellence through innovation and customer-focused solutions.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ContactMail />}
                    onClick={() => navigate('/contact')}
                    sx={{ borderRadius: 2 }}
                  >
                    Contact Us
                  </Button>
                  <Box sx={{ ml: 1 }}>
                    <WhatsAppContact />
                  </Box>
                </Stack>
              </Box>

              {/* Contact Information */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Contact Info
                </Typography>
                <List disablePadding>
                  {contactInfo.map((item, index) => (
                    <QuickLinkItem key={index}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </QuickLinkItem>
                  ))}
                </List>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Links
              </Typography>
              <List disablePadding>
                {quickLinks.map((link, index) => (
                  <QuickLinkItem
                    key={index}
                    component={Link}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                    }}
                    sx={{ cursor: 'pointer' }}
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

              {/* Newsletter Subscription */}
              <NewsletterForm>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Stay Updated
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                  Subscribe to our newsletter for latest updates
                </Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    size="small"
                    placeholder="Your email"
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 1,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { border: 'none' }
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<Send />}
                    sx={{ minWidth: 'auto' }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </NewsletterForm>
            </Grid>

            {/* Social Media & Map */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
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

              {/* Business Hours */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Business Hours
                </Typography>
                <Box sx={{ opacity: 0.9 }}>
                  <Typography variant="body2">Monday - Friday: 9:00 AM - 6:00 PM</Typography>
                  <Typography variant="body2">Saturday: 10:00 AM - 4:00 PM</Typography>
                  <Typography variant="body2">Sunday: Closed</Typography>
                </Box>
              </Box>

              {/* Map Placeholder */}
              <Box sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                overflow: 'hidden',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <LocationOn sx={{ fontSize: 48, opacity: 0.3 }} />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Interactive Map
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    color="inherit"
                    sx={{ mt: 2, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                  >
                    View Location
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{
            my: 4,
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }} />

          {/* Bottom Bar */}
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                © {new Date().getFullYear()} BPS Industries. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                mt: { xs: 2, md: 0 },
                flexWrap: 'wrap',
                gap: 2
              }}>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Terms of Service
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Cookie Policy
                </Link>
                <Link href="#" color="inherit" variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
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