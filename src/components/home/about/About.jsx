import './About.scss';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are a professional firm of Chartered Accountants committed to delivering 
            excellence in financial services. With deep expertise in taxation, audit, 
            and business consulting, we help organizations navigate complex financial 
            landscapes with confidence and precision.
          </p>
          <p>
            Our team combines traditional accounting principles with modern technology 
            to provide innovative solutions that drive business growth and ensure 
            regulatory compliance.
          </p>
        </div>
        <div className="about-visual">
          <div className="visual-element">
            <div className="floating-icon">📊</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;