import React, { useState } from "react";
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
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Collapse,
  Stack,
  alpha,
} from "@mui/material";
import { styled } from '@mui/material/styles';
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
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./../images/BPS_Logo-removebg-preview (1).png";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
    boxShadow: theme.shadows[8],
  }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '&:hover': {
    cursor: 'pointer'
  }
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.light : 'white',
  fontWeight: active ? 600 : 400,
  fontSize: '1rem',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: active ? '80%' : '0%',
    height: 2,
    backgroundColor: theme.palette.primary.light,
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&::after': {
      width: '80%',
    },
  },
}));

const DropdownMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(1),
    minWidth: 200,
    boxShadow: theme.shadows[8],
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1.5, 2),
      '&:hover': {
        backgroundColor: theme.palette.primary.light + '20',
      },
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1.5),
        color: theme.palette.primary.main,
        fontSize: '1.2rem',
      },
    },
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    color: 'white',
  },
}));

const MobileMenuItem = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

// Navigation Data
const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "About Us",
    path: "/about",
    icon: <Info />,
  },
  {
    title: "Products",
    path: "/service",
    icon: <Store />,
    dropdown: [
      { title: "Name Plates", icon: <Label />, path: "/service#name-plates" },
      { title: "Stickers", icon: <LocalOffer />, path: "/service#stickers" },
      { title: "Anodized Printing", icon: <Factory />, path: "/service#anodized" },
      { title: "Laser Marking", icon: <Business />, path: "/service#laser" },
    ]
  },
  {
    title: "Services",
    path: "/services",
    icon: <Business />,
    dropdown: [
      { title: "Custom Design", icon: <Label />, path: "/services#design" },
      { title: "Bulk Orders", icon: <Factory />, path: "/services#bulk" },
      { title: "Consultation", icon: <Business />, path: "/services#consultation" },
    ]
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactMail />,
  },
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDropdownOpen = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentDropdown(item);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setCurrentDropdown(null);
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
    handleDropdownClose();
  };

  const DesktopNav = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {NAV_ITEMS.map((item) => (
        <Box key={item.title} position="relative">
          {item.dropdown ? (
            <>
              <NavButton
                active={location.pathname === item.path}
                onClick={(e) => handleDropdownOpen(e, item)}
                endIcon={<ExpandMore />}
              >
                {item.title}
              </NavButton>
              <DropdownMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && currentDropdown?.title === item.title}
                onClose={handleDropdownClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {item.dropdown.map((subItem) => (
                  <MenuItem key={subItem.title} onClick={() => handleNavigate(subItem.path)}>
                    {subItem.icon}
                    {subItem.title}
                    <ArrowRight sx={{ marginLeft: 'auto', fontSize: '1rem' }} />
                  </MenuItem>
                ))}
              </DropdownMenu>
            </>
          ) : (
            <NavButton
              active={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
            >
              {item.title}
            </NavButton>
          )}
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{
          ml: 2,
          borderRadius: 2,
          fontWeight: 600,
          background: 'linear-gradient(45deg, #FF6B35, #FFA62E)',
          '&:hover': {
            background: 'linear-gradient(45deg, #FFA62E, #FF6B35)',
          }
        }}
        onClick={() => navigate("/contact")}
      >
        Get Quote
      </Button>
    </Box>
  );

  const MobileNav = () => (
    <MobileDrawer
      anchor="right"
      open={mobileOpen}
      onClose={handleMobileDrawerToggle}
    >
      <Box sx={{ p: 2 }}>
        <LogoContainer onClick={() => { navigate("/"); setMobileOpen(false); }}>
          <Box
            component="img"
            src={Logo}
            alt="BPS Logo"
            sx={{ height: 50, width: 'auto' }}
          />
          <Typography variant="h6" fontWeight={700} sx={{ color: 'white' }}>
            BPS Industries
          </Typography>
        </LogoContainer>
      </Box>
      
      <Divider sx={{ borderColor: alpha('#fff', 0.1) }} />
      
      <List sx={{ mt: 2 }}>
        {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.title}>
            <MobileMenuItem onClick={() => handleMobileItemClick(item)}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {item.icon}
                <ListItemText 
                  primary={item.title} 
                  sx={{ ml: 2 }}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
                {item.dropdown && (
                  expandedItem === item.title ? <ExpandLess /> : <ExpandMore />
                )}
              </Box>
            </MobileMenuItem>
            
            {item.dropdown && (
              <Collapse in={expandedItem === item.title} timeout="auto" unmountOnExit>
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
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        {subItem.icon}
                        <ListItemText 
                          primary={subItem.title} 
                          sx={{ ml: 2 }}
                          primaryTypographyProps={{ fontSize: '0.9rem' }}
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
      
      <Box sx={{ p: 3, mt: 'auto' }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 2,
            fontWeight: 600,
            py: 1.5,
            background: 'linear-gradient(45deg, #FF6B35, #FFA62E)',
            '&:hover': {
              background: 'linear-gradient(45deg, #FFA62E, #FF6B35)',
            }
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
                  width: 'auto',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight={700} sx={{ color: 'white', lineHeight: 1 }}>
                  Baironics Printing
                </Typography>
                <Typography variant="caption" sx={{ color: alpha('#fff', 0.8) }}>
                  Solutions
                </Typography>
              </Box>
            </LogoContainer>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && <DesktopNav />}

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

      {/* Mobile Navigation Drawer */}
      <MobileNav />

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;