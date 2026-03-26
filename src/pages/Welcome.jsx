import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Paper,
  Divider,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArrowForward,
  Factory,
  WorkspacePremium,
  EmojiObjects,
  LocalShipping,
  VerifiedUser,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  Launch,
  Star,
  CheckCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import AboutUS from "./aboutUS";
import SixthPage from "./landing_page/SixthPage";
import { CustomImageCard } from "@common";
import { WhatsApp as WhatsAppContact, FooterContactus } from "@common";

// Images (keep your existing imports)
import Img69 from "../images/img69.jpg";
import Img3 from "./../images/img11.jpg";
import welocmePageImg from "./../images/bps3.jpg";
import circleDia from "./../images/CircleDia.jpeg";
import productImg from "./../images/product-list.png";

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${welocmePageImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  color: "white",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    minHeight: "100vh",
    padding: theme.spacing(8, 0),
  },
}));

const HeroOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(135deg, rgba(41, 128, 185, 0.8) 0%, rgba(52, 152, 219, 0.6) 100%)",
  zIndex: 1,
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: 1200,
  margin: "0 auto",
  padding: theme.spacing(0, 4),
}));

const FloatingGST = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: theme.spacing(1.5, 3),
  borderRadius: 25,
  boxShadow: theme.shadows[6],
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "auto",
    right: "auto",
    margin: theme.spacing(2, "auto"),
    width: "fit-content",
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[1],
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "translateX(5px)",
    boxShadow: theme.shadows[3],
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: theme.spacing(2),
  background: "linear-gradient(45deg, #FF6B35, #FFA62E)",
  "&:hover": {
    background: "linear-gradient(45deg, #FFA62E, #FF6B35)",
  },
}));

const WelcomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <Factory />,
      title: "State-of-the-Art Infrastructure",
      description: "In-house design to packaging",
    },
    {
      icon: <WorkspacePremium />,
      title: "Premium Quality",
      description: "ISO certified manufacturing",
    },
    {
      icon: <EmojiObjects />,
      title: "Custom Solutions",
      description: "Tailored to your requirements",
    },
    {
      icon: <LocalShipping />,
      title: "Timely Delivery",
      description: "Across Karnataka & India",
    },
    {
      icon: <VerifiedUser />,
      title: "Quality Assurance",
      description: "Rigorous testing processes",
    },
  ];

  const products = [
    { name: "Etched Name Plates", material: "Brass/Bronze/Steel" },
    { name: "Laser Marking Plates", material: "Aluminum/Stainless Steel" },
    { name: "Anodized Printing", material: "Aluminum Alloy" },
    { name: "Vinyl Stickers", material: "Premium Vinyl" },
    { name: "Polycarbonate Labels", material: "Industrial Grade PC" },
    { name: "Electrical Motor Plates", material: "Metal Composites" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />

        <FloatingGST>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            GSTIN: 22AAAAA0000A1Z5
          </Typography>
        </FloatingGST>

        <HeroContent>
          <Container maxWidth="lg">
            <Fade in={true} timeout={1000}>
              <Box>
                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                    lineHeight: 1.2,
                  }}
                >
                  Baironics Printing Solutions
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    opacity: 0.95,
                    mb: 4,
                    maxWidth: "800px",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Registered & Recognized Manufacturer in Karnataka
                </Typography>

                <Stack
                  direction={isMobile ? "column" : "row"}
                  spacing={2}
                  alignItems="center"
                  mb={4}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Email sx={{ fontSize: 20 }} />
                    <Typography variant="body1">
                      info.baironics@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Phone sx={{ fontSize: 20 }} />
                    <Typography variant="body1">+91 12345 67890</Typography>
                  </Box>
                </Stack>

                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    maxWidth: "900px",
                    mb: 6,
                    fontWeight: 500,
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Premier manufacturer of Industrial & Commercial Name Plates,
                  Stickers, Anodized Printing, Etched Plates with Laser Marking
                  Services, and Warning Plates using premium materials.
                </Typography>

                <Stack direction={isMobile ? "column" : "row"} spacing={3}>
                  <ContactButton
                    variant="contained"
                    size="large"
                    endIcon={<Launch />}
                    onClick={() => navigate("/service")}
                  >
                    Explore Our Products
                  </ContactButton>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                    endIcon={<ArrowForward />}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={700}
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose BPS?
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FeatureItem>
                  <Box
                    sx={{
                      mr: 3,
                      color: "primary.main",
                      backgroundColor: "primary.light",
                      borderRadius: "50%",
                      width: 56,
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {React.cloneElement(feature.icon, { fontSize: "large" })}
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </FeatureItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                fontWeight={700}
                gutterBottom
                sx={{ color: "primary.dark" }}
              >
                Leading Name Plate Manufacturer
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", mb: 3 }}
              >
                Established in 2025, Baironics Printing Solutions is a
                distinguished name plate manufacturer offering an enormous
                consignment of high-quality name plates, labels, and stickers in
                Bangalore and across Karnataka.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {[
                  "Etched Name Plates & Aluminium Logo Plates",
                  "Laser Marking & Electrical Motor Name Plates",
                  "Vinyl & Polycarbonate Stickers",
                  "Custom Material Options & Finishes",
                  "Precision Engineering & Quality Assurance",
                ].map((item, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <CheckCircle sx={{ color: "success.main", mr: 2 }} />
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => navigate("/about")}
                sx={{ borderRadius: 2 }}
              >
                Learn More About Us
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={Img69}
                alt="Manufacturing Facility"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: theme.shadows[8],
                  transform: "rotateY(-10deg)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotateY(0deg)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products Section */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight={700}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Our Product Range
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{ mb: 6, opacity: 0.9 }}
          >
            Premium Quality Industrial Name Plates & Stickers
          </Typography>

          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        color: "primary.main",
                      }}
                    >
                      <Star sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        {product.name}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      Material: {product.material}
                    </Typography>
                    <Button
                      size="small"
                      endIcon={<ArrowForward />}
                      onClick={() => navigate("/service")}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={6}>
            <ContactButton
              variant="contained"
              size="large"
              onClick={() => navigate("/service")}
              sx={{
                px: 6,
                background: "linear-gradient(45deg, #FFFFFF, #F0F0F0)",
                color: theme.palette.primary.main,
                "&:hover": {
                  background: "linear-gradient(45deg, #F0F0F0, #FFFFFF)",
                },
              }}
            >
              View All Products
            </ContactButton>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Paper
            elevation={6}
            sx={{
              p: 6,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
              color: "white",
            }}
          >
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  Ready to Elevate Your Brand?
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Get custom name plates and stickers that reflect your brand's
                  quality and professionalism.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate("/contact")}
                    sx={{
                      backgroundColor: "white",
                      color: theme.palette.secondary.main,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                    startIcon={<Phone />}
                  >
                    Call Now
                  </Button>
                  <Box sx={{ textAlign: "center" }}>
                    <WhatsAppContact />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Sixth Page Component */}
      <SixthPage />

      {/* About US Component */}
      <AboutUS />
    </>
  );
};

export default WelcomePage;
