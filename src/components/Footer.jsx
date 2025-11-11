import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CA Adil Mohammad Silawat</h3>
            <p>Your trusted partner for Tax, Audit & Compliance services.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Tax Planning</li>
              <li>Audit Services</li>
              <li>Compliance</li>
              <li>Financial Advisory</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@caadil.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>ICAI Membership: 123456</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CA Adil Mohammad Silawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;