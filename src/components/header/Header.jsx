import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const toggleDrawer = (open) => () => {
    setIsMenuOpen(open);
  };

  const menuItems = [
    { label: "Home", link: "/", icon: <HomeIcon /> },
    { label: "About", link: "/about", icon: <InfoIcon /> },
    { label: "Services", link: "/services", icon: <MiscellaneousServicesIcon /> },
    { label: "Resources", link: "#resources", icon: <LibraryBooksIcon /> },
    { label: "Contact", link: "/contact", icon: <ContactMailIcon /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AppBar
        position="sticky"
        color="default"
        className="navbar"
        data-aos="fade-down"
      >
        <Toolbar className="nav-toolbar">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Typography
              variant="h6"
              className="nav-logo"
              component={Link}
              to="/"
              data-aos="fade-right"
            >
              <span className="highlight">CA</span> Adil Mohammad Silawat
            </Typography>
          </motion.div>

          {/* Desktop Links */}
          <Box
            className="nav-links"
            sx={{ display: { xs: "none", md: "flex" } }}
            data-aos="fade-left"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={item.link.startsWith('#') ? 'a' : Link}
                  to={item.link.startsWith('#') ? undefined : item.link}
                  href={item.link.startsWith('#') ? item.link : undefined}
                  startIcon={item.icon}
                  sx={{ color: "#e2e8f0", mx: 1 }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" className="consult-btn">
                Book Consultation
              </Button>
            </motion.div>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#f4c542" }}
            onClick={toggleDrawer(true)}
            data-aos="fade-left"
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: { width: "260px", backgroundColor: "#0f172a" },
                }}
              >
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                    data-aos="fade-left"
                  >
                    <Typography variant="h6" sx={{ color: "#f4c542" }}>
                      CA Adil Mohammad Silawat
                    </Typography>
                    <IconButton
                      onClick={toggleDrawer(false)}
                      sx={{ color: "#f4c542" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <List>
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <ListItem disablePadding>
                          <ListItemButton
                            component={item.link.startsWith('#') ? 'a' : Link}
                            to={item.link.startsWith('#') ? undefined : item.link}
                            href={item.link.startsWith('#') ? item.link : undefined}
                            onClick={toggleDrawer(false)}
                          >
                            <ListItemIcon sx={{ color: "#f4c542" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>

                  <Box sx={{ p: 2 }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button fullWidth variant="contained" className="consult-btn">
                        Book Consultation
                      </Button>
                    </motion.div>
                  </Box>

                  <motion.div
                    className="contact-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div>
                      <CallIcon fontSize="small" /> <span>+91 98765 43210</span>
                    </div>
                    <div>
                      <EmailIcon fontSize="small" />{" "}
                      <span>contact@caadil.com</span>
                    </div>
                  </motion.div>
                </motion.div>
              </Drawer>
            )}
          </AnimatePresence>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;
