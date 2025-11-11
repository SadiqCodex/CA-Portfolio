import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted Chartered Accountant for Tax, Audit & Compliance
          </h1>
          <p className="hero-subtitle">
            Helping businesses grow through clear financial guidance.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Consultation</button>
            <button className="btn-outline">View Services</button>
          </div>
          <div className="trust-line">
            ICAI Member • 12+ Years Experience • 500+ Clients Served
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>Professional CA Portrait</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;