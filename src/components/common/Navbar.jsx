import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  MenuItem,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Divider,
  Collapse,
  alpha,
  Grow,
  Paper,
  Popper,
  ClickAwayListener,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  ExpandMore,
  ExpandLess,
  Business,
  Home,
  Info,
  ContactMail,
  Store,
  Factory,
  Label,
  LocalOffer,
  ArrowRight,
  KeyboardArrowDown,
  ChevronRight,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../images/BPS_Logo-removebg-preview (1).png";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  boxShadow: theme.shadows[4],
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
    boxShadow: theme.shadows[8],
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  "&:hover": {
    cursor: "pointer",
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.light : "white",
  fontWeight: active ? 600 : 400,
  fontSize: "1rem",
  textTransform: "none",
  padding: theme.spacing(1, 2),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: active ? "80%" : "0%",
    height: 2,
    backgroundColor: theme.palette.primary.light,
    transform: "translateX(-50%)",
    transition: "width 0.3s ease",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    "&::after": {
      width: "80%",
    },
  },
}));

const StyledPopperPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  minWidth: 260,
  overflow: "hidden",
  boxShadow: theme.shadows[12],
  background: alpha("#fff", 0.98),
  backdropFilter: "blur(8px)",
  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -6,
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
    width: 12,
    height: 12,
    backgroundColor: alpha("#fff", 0.98),
    borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
    borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
    zIndex: 0,
  },
}));

const DropdownMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  margin: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1.5),
  fontSize: "0.95rem",
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: theme.palette.primary.main,
    transform: "scaleY(0)",
    transition: "transform 0.25s ease",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    transform: "translateX(4px)",
    "&::before": {
      transform: "scaleY(1)",
    },
    "& .arrow-icon": {
      transform: "translateX(4px)",
      opacity: 1,
    },
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    transition: "all 0.2s ease",
  },
}));

const ArrowIcon = styled(ChevronRight)(({ theme }) => ({
  fontSize: "1rem",
  opacity: 0,
  transition: "all 0.25s ease",
  color: theme.palette.primary.main,
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    color: "white",
  },
}));

const MobileMenuItem = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

// Navigation Data
const NAV_ITEMS = [
  { title: "Home", path: "/", icon: <Home /> },
  { title: "About Us", path: "/about", icon: <Info /> },
  {
    title: "Products",
    path: "/service",
    icon: <Store />,
    dropdown: [
      { title: "Name Plates", icon: <Label />, path: "/service#name-plates", description: "Custom name plates for all purposes" },
      { title: "Stickers", icon: <LocalOffer />, path: "/service#stickers", description: "High-quality durable stickers" },
      {
        title: "Anodized Printing",
        icon: <Factory />,
        path: "/service#anodized",
        description: "Premium anodized aluminum printing"
      },
      { title: "Laser Marking", icon: <Business />, path: "/service#laser", description: "Precision laser marking solutions" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <Business />,
    dropdown: [
      { title: "Custom Design", icon: <Label />, path: "/services#design", description: "Tailored designs for your needs" },
      { title: "Bulk Orders", icon: <Factory />, path: "/services#bulk", description: "Special pricing for volume orders" },
      {
        title: "Consultation",
        icon: <Business />,
        path: "/services#consultation",
        description: "Expert advice and guidance"
      },
    ],
  },
  { title: "Contact", path: "/contact", icon: <ContactMail /> },
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const anchorRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDropdownOpen = (event, item) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveItem(item);
    setOpenDropdown(true);
    anchorRef.current = event.currentTarget;
  };

  const handleDropdownClose = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
      setActiveItem(null);
      anchorRef.current = null;
    }, 200);
  };

  const handlePopperEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handlePopperLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
      setActiveItem(null);
      anchorRef.current = null;
    }, 200);
  };

  const handleDropdownItemClick = (path) => {
    setOpenDropdown(false);
    setActiveItem(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    navigate(path);
  };

  const handleMobileItemClick = (item) => {
    if (item.dropdown) {
      setExpandedItem(expandedItem === item.title ? null : item.title);
    } else {
      navigate(item.path);
      setMobileOpen(false);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const MobileNav = () => (
    <MobileDrawer
      anchor="right"
      open={mobileOpen}
      onClose={handleMobileDrawerToggle}
    >
      <Box sx={{ p: 2 }}>
        <LogoContainer
          onClick={() => {
            navigate("/");
            setMobileOpen(false);
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="BPS Logo"
            sx={{ height: 50, width: "auto" }}
          />
          <Typography variant="h6" fontWeight={700} sx={{ color: "white" }}>
            BPS Industries
          </Typography>
        </LogoContainer>
      </Box>

      <Divider sx={{ borderColor: alpha("#fff", 0.1) }} />

      <List sx={{ mt: 2 }}>
        {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.title}>
            <MobileMenuItem onClick={() => handleMobileItemClick(item)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {item.icon}
                <ListItemText
                  primary={item.title}
                  sx={{ ml: 2 }}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
                {item.dropdown &&
                  (expandedItem === item.title ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </Box>
            </MobileMenuItem>

            {item.dropdown && (
              <Collapse
                in={expandedItem === item.title}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.dropdown.map((subItem) => (
                    <MobileMenuItem
                      key={subItem.title}
                      sx={{ pl: 7 }}
                      onClick={() => {
                        navigate(subItem.path);
                        setMobileOpen(false);
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        {subItem.icon}
                        <ListItemText
                          primary={subItem.title}
                          secondary={subItem.description}
                          sx={{ ml: 2 }}
                          primaryTypographyProps={{ fontSize: "0.9rem" }}
                          secondaryTypographyProps={{
                            fontSize: "0.75rem",
                            color: alpha("#fff", 0.7)
                          }}
                        />
                      </Box>
                    </MobileMenuItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ p: 3, mt: "auto" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 2,
            fontWeight: 600,
            py: 1.5,
            background: "linear-gradient(45deg, #FF6B35, #FFA62E)",
            "&:hover": {
              background: "linear-gradient(45deg, #FFA62E, #FF6B35)",
            },
          }}
          onClick={() => {
            navigate("/contact");
            setMobileOpen(false);
          }}
          startIcon={<ContactMail />}
        >
          Contact Sales
        </Button>
      </Box>
    </MobileDrawer>
  );

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo Section */}
            <LogoContainer onClick={() => navigate("/")}>
              <Box
                component="img"
                src={Logo}
                alt="BPS Logo"
                sx={{
                  height: 50,
                  width: "auto",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "white", lineHeight: 1 }}
                >
                  Baironics Printing
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: alpha("#fff", 0.8) }}
                >
                  Solutions
                </Typography>
              </Box>
            </LogoContainer>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {NAV_ITEMS.map((item) => {
                  if (item.dropdown) {
                    return (
                      <NavButton
                        key={item.title}
                        active={location.pathname === item.path}
                        endIcon={
                          <KeyboardArrowDown
                            sx={{
                              transition: "transform 0.2s",
                              transform: openDropdown && activeItem === item ? "rotate(180deg)" : "none",
                            }}
                          />
                        }
                        onMouseEnter={(e) => handleDropdownOpen(e, item)}
                        onMouseLeave={handleDropdownClose}
                      >
                        {item.title}
                      </NavButton>
                    );
                  } else {
                    return (
                      <NavButton
                        key={item.title}
                        active={location.pathname === item.path}
                        onClick={() => handleNavigate(item.path)}
                      >
                        {item.title}
                      </NavButton>
                    );
                  }
                })}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    borderRadius: 2,
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #FF6B35, #FFA62E)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #FFA62E, #FF6B35)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Get Quote
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleMobileDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Popper Dropdown Menu */}
      {activeItem && activeItem.dropdown && (
        <Popper
          open={openDropdown}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
                padding: 16,
              },
            },
          ]}
          sx={{ zIndex: 1300 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={200}>
              <StyledPopperPaper
                onMouseEnter={handlePopperEnter}
                onMouseLeave={handlePopperLeave}
              >
                <Box sx={{ py: 1 }}>
                  {activeItem.dropdown.map((subItem, index) => (
                    <DropdownMenuItem
                      key={subItem.title}
                      onClick={() => handleDropdownItemClick(subItem.path)}
                      sx={{
                        animation: `fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                        {subItem.icon}
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            {subItem.title}
                          </Typography>
                          {subItem.description && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                display: "block",
                                mt: 0.5,
                              }}
                            >
                              {subItem.description}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <ArrowIcon className="arrow-icon" />
                    </DropdownMenuItem>
                  ))}
                </Box>
              </StyledPopperPaper>
            </Fade>
          )}
        </Popper>
      )}

      {/* Mobile Navigation Drawer */}
      <MobileNav />

      {/* Spacer for fixed navbar */}
      <Toolbar />

      {/* Add animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;