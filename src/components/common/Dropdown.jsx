import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  alpha,
  Fade,
  Paper,
} from "@mui/material";
import {
  ExpandMore,
  ArrowRight,
  Label,
  LocalOffer,
  Factory,
  Business,
  DesignServices,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';

// Styled Components
const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.light : 'white',
  fontWeight: active ? 600 : 400,
  fontSize: '1rem',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  position: 'relative',
  minWidth: 'auto',
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

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
    minWidth: 220,
    boxShadow: theme.shadows[8],
    background: alpha(theme.palette.background.paper, 0.95),
    backdropFilter: 'blur(10px)',
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1.5, 2),
      gap: theme.spacing(1.5),
      transition: 'all 0.2s ease',
      borderRadius: theme.spacing(0.5),
      margin: theme.spacing(0.5, 1),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        transform: 'translateX(5px)',
        '& .MuiSvgIcon-root': {
          color: theme.palette.primary.main,
        },
      },
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
        fontSize: '1.2rem',
        transition: 'color 0.2s ease',
      },
      '& .menu-item-content': {
        flex: 1,
      },
      '& .arrow-icon': {
        color: theme.palette.text.secondary,
        fontSize: '1rem',
        opacity: 0,
        transition: 'opacity 0.2s ease',
      },
      '&:hover .arrow-icon': {
        opacity: 1,
      },
    },
  },
}));

// Navigation data
const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    items: [],
  },
  {
    title: "About Us",
    path: "/about",
    items: [],
  },
  {
    title: "Products",
    path: "/service",
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
    items: [
      { title: "Custom Design", icon: <DesignServices />, path: "/services#design" },
      { title: "Bulk Orders", icon: <Factory />, path: "/services#bulk" },
      { title: "Consultation", icon: <Business />, path: "/services#consultation" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    items: [],
  },
];

const Dropdown = () => {
  const [anchorElMap, setAnchorElMap] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleMouseEnter = (event, itemTitle) => {
    setAnchorElMap(prev => ({
      ...prev,
      [itemTitle]: event.currentTarget,
    }));
  };

  const handleMouseLeave = (itemTitle) => {
    setTimeout(() => {
      setAnchorElMap(prev => ({
        ...prev,
        [itemTitle]: null,
      }));
    }, 300);
  };

  const handleClick = (path) => {
    navigate(path);
    // Close all menus
    setAnchorElMap({});
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {NAV_ITEMS.map((item) => (
        <Box
          key={item.title}
          onMouseEnter={(e) => handleMouseEnter(e, item.title)}
          onMouseLeave={() => handleMouseLeave(item.title)}
          sx={{ position: 'relative' }}
        >
          <NavButton
            active={isActive(item.path)}
            onClick={() => {
              if (item.items.length === 0) {
                handleClick(item.path);
              }
            }}
            endIcon={item.items.length > 0 ? <ExpandMore /> : null}
          >
            {item.title}
          </NavButton>

          {item.items.length > 0 && (
            <StyledMenu
              anchorEl={anchorElMap[item.title]}
              open={Boolean(anchorElMap[item.title])}
              onClose={() => handleMouseLeave(item.title)}
              TransitionComponent={Fade}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              MenuListProps={{
                onMouseEnter: () => {},
                onMouseLeave: () => handleMouseLeave(item.title),
                sx: { py: 0.5 }
              }}
            >
              {item.items.map((subItem) => (
                <MenuItem
                  key={subItem.title}
                  onClick={() => handleClick(subItem.path)}
                  disableRipple
                >
                  {subItem.icon}
                  <Box className="menu-item-content">
                    <Typography variant="body1" fontWeight={500}>
                      {subItem.title}
                    </Typography>
                  </Box>
                  <ArrowRight className="arrow-icon" />
                </MenuItem>
              ))}
            </StyledMenu>
          )}
        </Box>
      ))}

      {/* Get Quote Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/contact")}
        sx={{
          ml: 2,
          borderRadius: 2,
          fontWeight: 600,
          background: 'linear-gradient(45deg, #FF6B35, #FFA62E)',
          '&:hover': {
            background: 'linear-gradient(45deg, #FFA62E, #FF6B35)',
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[4],
          },
          transition: 'all 0.3s ease',
        }}
      >
        Get Quote
      </Button>
    </Box>
  );
};

export default Dropdown;