import './Hero.scss';
import CAImage from '../../../assets/images/CA_dp.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Businesses with <br />
            <span>Trust, Transparency & Tax Expertise</span>
          </h1>

          <p className="hero-subtitle">
            We are a professional firm of Chartered Accountants offering tailored solutions 
            in <strong>Taxation, Audit, Compliance, and Financial Consulting</strong>.  
            Our mission is to help clients grow confidently with accuracy, integrity, and foresight.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">📅 Schedule a Consultation</button>
            <button className="btn-outline">💼 Explore Our Services</button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">🧾</span>
              <p>ICAI Certified</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💼</span>
              <p>12+ Years</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🌐</span>
              <p>500+ Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <img src={CAImage} alt="Professional Chartered Accountant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;