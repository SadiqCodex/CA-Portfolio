// import { Link } from "react-router-dom";
// import "./Footer.scss";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-grid">
//           <div className="footer-section">
//             <h3 className="footer-logo">
//               <span className="highlight">CA</span> Portfolio
//             </h3>
//             <p>Empowering businesses with precise financial planning, expert audit insights, and trusted compliance support.</p>
//             <div className="footer-socials">
//               <a href="#" className="social-btn">📘</a>
//               <a href="#" className="social-btn">💼</a>
//               <a href="#" className="social-btn">🐦</a>
//               <a href="#" className="social-btn">📷</a>
//             </div>
//           </div>

//           <div className="footer-section">
//             <h4>Services</h4>
//             <ul>
//               <li>Tax Planning & Filing</li>
//               <li>Audit & Assurance</li>
//               <li>Company Incorporation</li>
//               <li>Compliance Management</li>
//               <li>Financial Advisory</li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About Us</Link></li>
//               <li><Link to="/services">Services</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Contact</h4>
//             <div className="contact-item">
//               <span>📧</span> contact@yourcafirm.com
//             </div>
//             <div className="contact-item">
//               <span>📞</span> +91 98765 43210
//             </div>
//             <div className="contact-item">
//               <span>📍</span> Jaipur, Rajasthan
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} CA Portfolio. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./Footer.scss";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-container">
        {/* Top Section */}
        <Grid container spacing={8} className="footer-grid">
          {/* Brand Info */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="footer-section"
            >
              <Typography variant="h6" className="footer-logo">
                <span className="highlight">CA</span> Yusuf Kareem Al-Rasheed
              </Typography>
              <Typography variant="body2" className="footer-text">
                Empowering businesses with precise financial planning, expert audit
                insights, and trusted compliance support. Our mission is to simplify
                complex taxation and deliver results you can rely on.
              </Typography>
              <Box className="footer-socials">
                <IconButton className="social-btn"><FacebookIcon /></IconButton>
                <IconButton className="social-btn"><LinkedInIcon /></IconButton>
                <IconButton className="social-btn"><TwitterIcon /></IconButton>
                <IconButton className="social-btn"><InstagramIcon /></IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2.5}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 250 }} className="footer-section">
              <Typography variant="h6" className="footer-title">Services</Typography>
              <ul>
                <li>Tax Planning & Filing</li>
                <li>Audit & Assurance</li>
                <li>Company Incorporation</li>
                <li>Compliance Management</li>
                <li>Financial Advisory</li>
              </ul>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <motion.div whileHover={{ scale: 1.02 }} className="footer-section">
              <Typography variant="h6" className="footer-title">Quick Links</Typography>
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Resources</li>
                <li>FAQs</li>
                <li>Book Consultation</li>
              </ul>
            </motion.div>
          </Grid>

          {/* Office Hours */}
          <Grid item xs={12} sm={6} md={2.5}>
            <motion.div whileHover={{ scale: 1.02 }} className="footer-section">
              <Typography variant="h6" className="footer-title">Office Hours</Typography>
              <div className="footer-contact">
                <AccessTimeIcon fontSize="small" />{" "}
                <span>Mon – Fri: 10:00 AM – 7:00 PM</span>
              </div>
              <div className="footer-contact">
                <AccessTimeIcon fontSize="small" />{" "}
                <span>Sat: 10:00 AM – 4:00 PM</span>
              </div>
              <div className="footer-contact">
                <AccessTimeIcon fontSize="small" />{" "}
                <span>Sun: Closed</span>
              </div>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2.5}>
            <motion.div whileHover={{ scale: 1.02 }} className="footer-section contact-section">
              <Typography variant="h6" className="footer-title">Contact</Typography>
              <div className="footer-contact">
                <EmailIcon fontSize="small" /> <span>contact@caadil.com</span>
              </div>
              <div className="footer-contact">
                <CallIcon fontSize="small" /> <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact">
                <LocationOnIcon fontSize="small" />{" "}
                <span>Indore, Madhya Pradesh</span>
              </div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider className="footer-divider" />

        {/* Bottom Section */}
        <Box className="footer-bottom">
          <Typography variant="body2">
            © {new Date().getFullYear()} CA Adil Mohammad Silawat. All rights reserved.
          </Typography>
          <Typography variant="body2" className="footer-credit">
            Designed & Developed with ❤️ by <span onClick={() => window.open('https://www.ilmcore.com', '_blank')} style={{ cursor: 'pointer' }}>ILMCORE TECH</span>
          </Typography>
        </Box>
      </div>
    </motion.footer>
  );
};
export default Footer;
