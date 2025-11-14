import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Your financial clarity begins with a single message — let's connect.</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@yourcafirm.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Office Address</h4>
                  <p>2nd Floor, Business Tower<br />Jaipur, Rajasthan</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">🕒</span>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday to Saturday<br />10 AM – 7 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-forms">
              <div className="form-container">
                <h3>General Enquiry</h3>
                <form className="contact-form">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" required />
                  <input type="text" placeholder="Subject" required />
                  <textarea placeholder="Message" rows="4" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>

              <div className="form-container">
                <h3>Consultation Request</h3>
                <form className="contact-form">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" required />
                  <input type="datetime-local" placeholder="Preferred Date/Time" required />
                  <textarea placeholder="Message" rows="3" required></textarea>
                  <button type="submit">Request Consultation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span>🗺️</span>
              <p>Google Map Integration</p>
              <small>2nd Floor, Business Tower, Jaipur, Rajasthan</small>
            </div>
          </div>
        </div>
      </section>

      <section className="whatsapp-section">
        <div className="container">
          <div className="whatsapp-card">
            <div className="qr-placeholder">
              <span>📱</span>
              <p>WhatsApp QR Code</p>
            </div>
            <div className="whatsapp-info">
              <h3>Quick Connect</h3>
              <p>Scan the QR code to start a WhatsApp conversation with us instantly.</p>
              <button className="whatsapp-btn">💬 Chat on WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;