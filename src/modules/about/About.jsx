import './About.scss';

const About = () => {
  return (
    // <div className="about-page">
    //   <section className="about-hero">
    //     <div className="container">
    //       <h1>About Us</h1>
    //       <p>Trusted Chartered Accountant firm with over 10 years of experience providing transparent, reliable, and growth-oriented financial services.</p>
    //     </div>
    //   </section>
     <div className="about-page bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="about-hero py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted Chartered Accountant firm with over 10 years of experience providing
            transparent, reliable, and growth-oriented financial services. Our mission is
            to empower businesses and individuals with expert guidance in taxation, auditing,
            compliance, and financial planning.
          </p>
        </div>
      </section>

      {/* <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>To empower businesses and individuals with expert guidance in taxation, auditing, compliance, and financial planning.</p>
        </div>
      </section> */}

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="photo-placeholder">
                <span>👨‍💼</span>
              </div>
              <h3>CA Rohan Sharma</h3>
              <p className="designation">Senior Chartered Accountant</p>
              <p className="specialization">Corporate Taxation, GST Advisory, Audit & Compliance</p>
              <div className="signature-placeholder">
                <span>✍️ Signature</span>
              </div>
            </div>
            
            <div className="team-card">
              <div className="photo-placeholder">
                <span>👩‍💼</span>
              </div>
              <h3>CA Meera Kapoor</h3>
              <p className="designation">Chartered Accountant</p>
              <p className="specialization">Financial Reporting, Startup Consulting, ITR Filing & Assessments</p>
              <div className="signature-placeholder">
                <span>✍️ Signature</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <p>We believe in integrity, precision, and long-term partnerships with our clients.</p>
        </div>
      </section>

      <section className="awards-section">
        <div className="container">
          <h2>Awards & Certifications</h2>
          <div className="awards-grid">
            <div className="award-item">🏆 ISO Certified Accounting Firm</div>
            <div className="award-item">🥇 Top 10 CA Firms in Rajasthan 2024</div>
            <div className="award-item">📜 Member of ICAI</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;