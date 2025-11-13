import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

// Navigation Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsMenuOpen(open);
  };

  const menuItems = [
    { label: "Home", link: "#home", icon: <HomeIcon /> },
    { label: "About", link: "#about", icon: <InfoIcon /> },
    { label: "Services", link: "#services", icon: <MiscellaneousServicesIcon /> },
    { label: "Resources", link: "#resources", icon: <LibraryBooksIcon /> },
    { label: "Contact", link: "#contact", icon: <ContactMailIcon /> },
  ];

  return (
    <AppBar position="sticky" color="default" className="navbar">
      <Toolbar className="nav-toolbar">
        {/* Logo */}
        <Typography variant="h6" className="nav-logo">
          <span className="highlight">CA</span> Adil Mohammad Silawat
        </Typography>

        {/* Desktop Menu */}
        <Box className="nav-links" sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              href={item.link}
              startIcon={item.icon}
              sx={{
                color: "#e2e8f0",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button variant="contained" className="consult-btn">
            Book Consultation
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#f4c542" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: "240px", backgroundColor: "#0f172a" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: "#f4c542" }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "#f4c542" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon sx={{ color: "#f4c542" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 2 }}>
            <Button fullWidth variant="contained" className="consult-btn">
              Book Consultation
            </Button>
          </Box>

          <Box className="contact-info">
            <div>
              <CallIcon fontSize="small" /> <span>+91 98765 43210</span>
            </div>
            <div>
              <EmailIcon fontSize="small" /> <span>contact@caadil.com</span>
            </div>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
