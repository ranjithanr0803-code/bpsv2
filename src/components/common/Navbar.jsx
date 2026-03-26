import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
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

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(1.5),
    minWidth: 220,
    overflow: "visible",
    boxShadow: theme.shadows[12],
    backdropFilter: "blur(8px)",
    background: alpha("#fff", 0.98),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    "&::before": {
      content: '""',
      position: "absolute",
      top: -8,
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: `8px solid ${alpha("#fff", 0.98)}`,
    },
    "& .MuiMenuItem-root": {
      padding: theme.spacing(1.2, 2),
      fontSize: "0.95rem",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        transform: "translateX(4px)",
      },
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1.5),
        color: theme.palette.primary.main,
        fontSize: "1.2rem",
      },
    },
  },
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
      { title: "Name Plates", icon: <Label />, path: "/service#name-plates" },
      { title: "Stickers", icon: <LocalOffer />, path: "/service#stickers" },
      {
        title: "Anodized Printing",
        icon: <Factory />,
        path: "/service#anodized",
      },
      { title: "Laser Marking", icon: <Business />, path: "/service#laser" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <Business />,
    dropdown: [
      { title: "Custom Design", icon: <Label />, path: "/services#design" },
      { title: "Bulk Orders", icon: <Factory />, path: "/services#bulk" },
      {
        title: "Consultation",
        icon: <Business />,
        path: "/services#consultation",
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const timeoutRef = useRef(null);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDropdownOpen = (event, item) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Get the actual button element
    const buttonElement = event.currentTarget;
    if (buttonElement) {
      setAnchorEl(buttonElement);
      setActiveMenuItem(item);
    }
  };

  const handleDropdownClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setActiveMenuItem(null);
    }, 150);
  };

  const handleDropdownItemClick = (path) => {
    setAnchorEl(null);
    setActiveMenuItem(null);
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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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
                          sx={{ ml: 2 }}
                          primaryTypographyProps={{ fontSize: "0.9rem" }}
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
                              transform:
                                activeMenuItem === item
                                  ? "rotate(180deg)"
                                  : "none",
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

      {/* Dropdown Menu */}
      {activeMenuItem && activeMenuItem.dropdown && (
        <StyledMenu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setActiveMenuItem(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          TransitionComponent={Grow}
          TransitionProps={{ timeout: 200 }}
          elevation={4}
          keepMounted
          MenuListProps={{
            onMouseEnter: () => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            onMouseLeave: handleDropdownClose,
          }}
        >
          {activeMenuItem.dropdown.map((subItem) => (
            <MenuItem
              key={subItem.title}
              onClick={() => handleDropdownItemClick(subItem.path)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {subItem.icon}
                {subItem.title}
              </Box>
              <ArrowRight sx={{ fontSize: "1rem", opacity: 0.6 }} />
            </MenuItem>
          ))}
        </StyledMenu>
      )}

      {/* Mobile Navigation Drawer */}
      <MobileNav />

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;