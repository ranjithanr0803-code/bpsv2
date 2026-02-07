import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Collapse,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  ExpandMore,
  ExpandLess,
  Home,
  Info,
  Store,
  Business,
  ContactMail,
  Label,
  LocalOffer,
  Factory,
  DesignServices,
  ArrowRight,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';

// Styled Components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 320,
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    color: 'white',
    boxShadow: theme.shadows[16],
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  background: alpha('#fff', 0.05),
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  background: 'linear-gradient(45deg, #fff, #bdc3c7)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const NavItem = styled(ListItemButton)(({ theme, active }) => ({
  padding: theme.spacing(1.5, 3),
  margin: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1),
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.2) : 'transparent',
  borderLeft: active ? `4px solid ${theme.palette.primary.light}` : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    transform: 'translateX(5px)',
  },
  '& .MuiListItemIcon-root': {
    color: active ? theme.palette.primary.light : alpha('#fff', 0.8),
    minWidth: 40,
  },
  '& .MuiListItemText-primary': {
    fontWeight: active ? 600 : 500,
    color: active ? theme.palette.primary.light : 'white',
  },
}));

const SubNavItem = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 3, 1, 7),
  margin: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    '& .MuiListItemText-primary': {
      color: theme.palette.primary.light,
    },
  },
  '& .MuiListItemIcon-root': {
    color: alpha('#fff', 0.7),
    minWidth: 36,
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.9rem',
    color: alpha('#fff', 0.9),
  },
}));

const ContactButton = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3, 2, 2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(45deg, #FF6B35, #FFA62E)',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

// Navigation data matching your constants
const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
    items: [],
  },
  {
    title: "About Us",
    path: "/about",
    icon: <Info />,
    items: [],
  },
  {
    title: "Products",
    path: "/service",
    icon: <Store />,
    items: [
      { title: "Name Plates", icon: <Label />, path: "/service#name-plates" },
      { title: "Stickers", icon: <LocalOffer />, path: "/service#stickers" },
      { title: "Anodized Printing", icon: <Factory />, path: "/service#anodized" },
      { title: "Laser Marking", icon: <Business />, path: "/service#laser" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <Business />,
    items: [
      { title: "Custom Design", icon: <DesignServices />, path: "/services#design" },
      { title: "Bulk Orders", icon: <Factory />, path: "/services#bulk" },
      { title: "Consultation", icon: <Business />, path: "/services#consultation" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactMail />,
    items: [],
  },
];

const DrawerCmp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleItemClick = (item) => {
    if (item.items && item.items.length > 0) {
      setExpandedItems(prev => ({
        ...prev,
        [item.title]: !prev[item.title]
      }));
    } else {
      navigate(item.path);
      setOpenDrawer(false);
    }
  };

  const handleSubItemClick = (path) => {
    navigate(path);
    setOpenDrawer(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          color: "white",
          marginLeft: "auto",
          backgroundColor: alpha('#fff', 0.1),
          '&:hover': {
            backgroundColor: alpha('#fff', 0.2),
          },
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <StyledDrawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {/* Drawer Header */}
        <DrawerHeader>
          <Box>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              Baironics Printing
            </Typography>
            <CompanyName variant="h6">
              Solutions
            </CompanyName>
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </DrawerHeader>

        <Divider sx={{ borderColor: alpha('#fff', 0.1), my: 1 }} />

        {/* Navigation Items */}
        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.title}>
              <NavItem
                active={isActive(item.path)}
                onClick={() => handleItemClick(item)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {item.items.length > 0 && (
                  expandedItems[item.title] ? <ExpandLess /> : <ExpandMore />
                )}
              </NavItem>

              {/* Sub-items */}
              {item.items.length > 0 && (
                <Collapse 
                  in={expandedItems[item.title]} 
                  timeout="auto" 
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.items.map((subItem) => (
                      <SubNavItem
                        key={subItem.title}
                        onClick={() => handleSubItemClick(subItem.path)}
                      >
                        <ListItemIcon>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={subItem.title} />
                        <ArrowRight sx={{ fontSize: '1rem', opacity: 0.7 }} />
                      </SubNavItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        {/* Contact CTA */}
        <ContactButton onClick={() => {
          navigate("/contact");
          setOpenDrawer(false);
        }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Get Free Quote
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            Contact us for custom solutions
          </Typography>
        </ContactButton>

        {/* Footer Info */}
        <Box sx={{ p: 3, mt: 'auto', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            GSTIN: 22AAAAA0000A1Z5
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
            info.baironics@gmail.com
          </Typography>
        </Box>
      </StyledDrawer>
    </>
  );
};

export default DrawerCmp;