import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="highlight">CA</span> Portfolio
            </h3>
            <p>Empowering businesses with precise financial planning, expert audit insights, and trusted compliance support.</p>
            <div className="footer-socials">
              <a href="#" className="social-btn">📘</a>
              <a href="#" className="social-btn">💼</a>
              <a href="#" className="social-btn">🐦</a>
              <a href="#" className="social-btn">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Tax Planning & Filing</li>
              <li>Audit & Assurance</li>
              <li>Company Incorporation</li>
              <li>Compliance Management</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-item">
              <span>📧</span> contact@yourcafirm.com
            </div>
            <div className="contact-item">
              <span>📞</span> +91 98765 43210
            </div>
            <div className="contact-item">
              <span>📍</span> Jaipur, Rajasthan
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CA Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;